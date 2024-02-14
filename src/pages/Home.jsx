/* eslint-disable react/prop-types */
import DialogNewDate from './dashboard/DialogNewDate'
import { MdOutlineSchool } from "react-icons/md";
import { IoIosDoneAll } from "react-icons/io";
import DialogMark from './dashboard/DialogMark';
import TabeleMark from './dashboard/TableMark';
import Navbar from '../components/Navbar'
const Home = () => {
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
                    <form className='flex gap-3 border-b-[1px] border-b-gray-900'>
                        <div>
                            <label htmlFor="default" className={sty.label}>Maktabni tanlash</label>
                            <select id="default" className={sty.select}>
                                <option selected={true} aria-selected hidden>Maktab</option>
                                <option value="Ve">Vector</option>
                                <option value="AS">Algorithmic Solution</option>
                                <option value="CB">Cambridge</option>
                                <option value="DE">Germany</option>
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
                    <div className='flex py-2'>
                        <h1 className='hidden text-white text-4xl font-semibold text-center w-full mt-5'>Hozircha hech narsa!</h1>
                        <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 min-w-[100%] h-auto">
                            <caption className="py-5 px-0 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-transparent">
                                <div className='flex justify-between items-center my-2'>
                                    <h2 className='flex items-center gap-2'><span className='text-primary-500 flex items-center'>
                                        CAMBRIDGE
                                        <MdOutlineSchool size={24} />
                                    </span>|
                                        <span className='text-yellow-500'>
                                            1A
                                        </span>|
                                        <span className='text-red-500'>
                                            IT
                                        </span></h2>
                                    <button className=' btn btn-sm btn-info flex items-center text-white'>Tasdiqlash <IoIosDoneAll size={24} /></button>
                                </div>
                                <p className='bg-gray-700 p-1 rounded-md'><span className='text-red-600 font-semibold'>! Eslatma </span>|<span className='bg-green-600'> alo </span>|<span className='text-black'> Kelmagan </span></p>
                            </caption>
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        ISM Familiya
                                    </th>
                                    <th scope="col" className="px-6 py-3 cursor-pointer">
                                        <span onClick={() => addBlock('my_modal_3')}>
                                            <i className="fa-solid fa-plus text-xl" />
                                        </span>
                                        <DialogNewDate data={{ data: 1, fullName: "Abdullajon Oripov" }} name="hello" />
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-1 font-medium  whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17
                                    </th>
                                    <td className="px-6 py-1">
                                        <button onClick={() => addMark('addMark')}>
                                            <i className="fa-solid fa-plus text-xl" />
                                            <DialogMark />
                                        </button>
                                    </td>
                                    <td className="px-6 py-1">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-1">
                                        $2999
                                    </td>
                                    <td className="px-6 py-1 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-1">
                                        <button>
                                            <i className="fa-solid fa-plus text-xl" />
                                        </button>
                                    </td>
                                    <td className="px-6 py-1">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-1">
                                        $1999
                                    </td>
                                    <td className="px-6 py-1 text-right">

                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-1">
                                        <button>
                                            <i className="fa-solid fa-plus text-xl" />
                                        </button>
                                    </td>
                                    <td className="px-6 py-1">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-1">
                                        $99
                                    </td>
                                    <td className="px-6 py-1 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <TabeleMark  /> */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home