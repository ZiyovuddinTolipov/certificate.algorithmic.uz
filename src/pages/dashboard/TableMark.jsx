/* eslint-disable react/prop-types */
import students from '../../data/students.json';
import DialogNewDate from './DialogNewDate'
import DialogMark from './DialogMark'
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast'
import { getStudentsByClass } from '../../apis/apiService';
import { useSearchParams } from 'react-router-dom'
/* eslint-disable react/prop-types */

function Mark(props) {
    // console.log(typeof props.score)
    const style = {
        buttons: 'btn btn-sm w-full h-[100%] rounded-none'
    }
    // let props = props;
    const returnColor = (props) => {
        if (props.score == 0) {
            return ' '
        } else if (props.score == 1) {
            return 'btn-warning'
        } else if (props.score == 2) {
            return 'btn-primary'
        } else if (props.score == 3) {
            return 'btn-secondary'
        } else {
            return 'btn-accent'
        }
    }
    return <button className={`${style.buttons} ${returnColor(props)}`} >{props.comment}</button>
}

function StudentList(props) {
    const [searchParams] = useSearchParams();
    const [studentsList, setStudentList] = useState([]);
    const addMark = (id) => {
        document.getElementById(id).showModal()
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getStudentsByClass(props.gradeId);
                // res.data? toast.success('Login successful!'):toast.error("Xatolik");
                console.log(res.data)
                setStudentList(res.data)
            } catch (error) {
                toast.error("Failed to " + error);
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, []);
    // const addMark = (id) => {
    //     document.getElementById(id).showModal()
    const sty = {
        th1: "px-6 py-1 font-medium  whitespace-nowrap text-white bg-black max-w-[70px]"
    }
    return (
        <table className='table-students-mark  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 min-w-[100%] h-auto'>
            <thead>
                <tr>
                    <th className={sty.th1} >NO</th>
                    <th className={sty.th1} style={{ position: 'sticky', left: 0, zIndex: 1 }}>Ism Familiya</th>
                    <th
                        className='px-6 py-1 font-medium  whitespace-nowrap text-white bg-blue-800 cursor-pointer '
                        style={{ position: 'sticky', left: 120, zIndex: 1 }}
                        onClick={() => addMark('addColumn')}>
                        <span>+</span>
                        <DialogNewDate />
                    </th>
                    {Object.keys(students.oquvchilar[0].baholar).map((sana, index) => (
                        <th className='text-center px-6 py-3 text-white' key={index} >{sana}
                            <DialogNewDate />
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {studentsList.map((student, index) => (
                    <tr className='border-b bg-gray-800 border-gray-700' key={index}>
                        <td className='px-6 py-1 bg-black text-white'>{index + 1}</td>
                        <td className='px-6 py-1 bg-black text-white'>{student.fullName}</td>
                        <td
                            className='px-6 py-1 bg-blue-800 cursor-pointer font-bold text-xl text-white'
                            style={{ position: 'sticky', left: 120, zIndex: 1 }}
                            onClick={() => addMark('addAttendance')}
                        >
                            <span>+</span>
                            <DialogMark school={props.school} class={props.class} />
                        </td>
                        
                    </tr>
                ))}
            </tbody>
        </table >
    );
}

export default StudentList;

