/* eslint-disable react/prop-types */
import TabeleMark from './dashboard/TableMark';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const sty = {
        select: "bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    }
    const [schoolsList, setSchoolsList] = useState({});
    const fetchData = async () => {
        try {
            const response = await axios.get('https://bkscoring.algorithmic.uz/api/Schools', {
                headers: {},
            });
            setSchoolsList(response.data)
            // console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    console.log(schoolsList);

    const SchoolList = [
        {
            "id": "bc387244-4a2c-416e-939c-be9b96b50884",
            "name": "Algorithmic School"
        },
        {
            "id": "bc387244-4a2c-416e-939c-be9b96b50823",
            "name": "Vector School"
        },
        {
            "id": "bc387244-4a2c-416e-939c-be9b96b50823",
            "name": "Cambridge School"
        }
    ];
    return (
        <main className='bg-gray-900 '>
            <div className="flex flex-col px-6 py-8 mx-auto  p-4 max-w-[1400px] w-full h-100">
                <Navbar />
                <div className='backdrop-blur-md bg-white/10 my-2 rounded-xl min-h-[400px] h-auto px-4 py-2'>
                    <form className='flex gap-3 border-b-[1px] border-b-gray-900'>
                        <div>
                            <label htmlFor="default" className={sty.label}>Maktabni tanlash</label>
                            <select id="default" className={sty.select}>
                                <option selected={true} aria-selected hidden>Maktab</option>
                                {SchoolList.map(school => (
                                    <option key={school.id} value={school.id}>
                                        {school.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sinfni tanlash</label>
                            <select id="default" className={sty.select} >
                                <option selected={true} aria-selected hidden>Sinf</option>
                                <option value="1A_CB">1A IT</option>
                                <option value="1B_CB">1B IT</option>
                                <option value="2A_CB">2A IT</option>
                                <option value="2B_CB">2B IT</option>
                            </select>
                        </div>
                    </form>
                    <div className='flex py-2 table-scroll'>
                        <h1 className='hidden text-white text-4xl font-semibold text-center w-full mt-5'>Hozircha hech narsa!</h1>
                        <TabeleMark />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home