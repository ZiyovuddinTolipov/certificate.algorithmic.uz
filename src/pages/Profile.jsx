/* eslint-disable react/prop-types */
import DialogNewDate from './dashboard/DialogNewDate'
import { MdOutlineSchool } from "react-icons/md";
import { IoIosDoneAll } from "react-icons/io";
import DialogMark from './dashboard/DialogMark';
// import TabeleMark from './dashboard/TableMark';
import Navbar from '../components/Navbar'
const Profile = () => {
    const sty = {
        select: "bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    }
    const addBlock = (id) => {
        document.getElementById(id).showModal()
    }
    const addMark = (id) => {
        document.getElementById(id).showModal()
    }
    return (
        <main className='bg-gray-50 dark:bg-gray-900'>
            <div className="flex flex-col px-6 py-8 mx-auto  p-4 max-w-[1400px] w-full">
                <Navbar />
                <div className='backdrop-blur-md bg-white/10 my-2 rounded-xl min-h-[400px] h-auto px-4 py-2'>
                </div>
            </div>
        </main>
    )
}

export default Profile