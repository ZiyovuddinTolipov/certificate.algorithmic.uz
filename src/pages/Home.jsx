/* eslint-disable react/prop-types */
import TabeleMark from './dashboard/TableMark';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { fetchSchools, fetchClassesBySchoolId } from '../apis/apiService'
import { useNavigate, useSearchParams  } from "react-router-dom";

const Home = () => {
    const [schoolId, setSchoolId] = useState('')
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    const sty = {
        select: "bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    }
    const [schools, setSchools] = useState([]);
    const [selectedSchoolId, setSelectedSchoolId] = useState('');
    const [classes, setClasses] = useState([]);
    const [selectedClassId, setSelectedClassId] = useState('');
    const [isSchoolSelected, setIsSchoolSelected] = useState(false);
    const [isClassSelected, setIsClassSelected] = useState(false);

    const userIsInactive = () => {
        return localStorage.getItem("user_jwt") ? true : false;
    }
    // console.log(localStorage.getItem("user_jwt").length);
    useEffect(() => {
        if (localStorage.getItem("user_jwt")) {
            navigate("/");
        } else {
            navigate("/login");
        }
        fetchSchools().then((data) => setSchools(data));
    }, []);
    
    const handleSchoolChange = (event) => {
        setSelectedSchoolId(event.target.value);
        setSchoolId(event.target.value);
        navigate(`?school_id=&${event.target.value}`);
        localStorage.setItem('last_school_id', event.target.value);
        setIsSchoolSelected(true);
        fetchClassesBySchoolId(event.target.value).then((data) => setClasses(data));
    };

    const handleClassChange = (event) => {
        setSelectedClassId(event.target.value);
        // searchParams.get('school_id')
        navigate(`?school_id=${schoolId}&grade_id=${event.target.value}`);
        localStorage.setItem('last_grade_id', event.target.value);
        setIsClassSelected(true);
    };
    
    // console.log(schoolsList);
    return (
        <main className='min-h-[100vh]'>
            <div className="flex flex-col px-6 py-8 mx-auto  p-4 max-w-[1400px] w-full h-auto">
                <Navbar />
                <div className='backdrop-blur-xl bg-black/10 my-2 rounded-xl min-h-[400px] h-auto px-4 py-2'>
                    <form className='flex gap-3 border-b-[1px] border-b-gray-900' >
                        <div>
                            <label htmlFor="school" className={sty.label}>Maktabni tanlash</label>
                            <select id="school" value={selectedSchoolId} onChange={handleSchoolChange} className={sty.select} >
                                {/* {searchParams("school_id")?console.log("hello")} */}
                                <option selected aria-selected hidden>Maktab</option>
                                {schools.map((school) => (
                                    <option key={school.id} value={school.id} >
                                            {school.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {isSchoolSelected && (
                            <div>
                                <label htmlFor="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sinfni tanlash</label>
                                <select value={selectedClassId} onChange={handleClassChange} className={sty.select}>
                                    <option selected={true} aria-selected hidden>Sinfni tanlang</option>
                                    {classes.map((grade) => (
                                        <option key={grade.id} value={grade.id}>
                                                {grade.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </form>
                    <div className={`flex py-2 ${isClassSelected ? "table-scroll" : ""}`}>
                        {
                            isClassSelected ?
                                <TabeleMark schoolId={selectedSchoolId} gradeId={selectedClassId} /> :
                                <h1 className='text-white text-4xl font-semibold text-center w-full mt-5'>Hozircha hech narsa!</h1>
                        }
                    </div>
                </div>
            </div >
        </main >
    )
}

export default Home;