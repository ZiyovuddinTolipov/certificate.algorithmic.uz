import logo14 from '../assets/logo14.png'
import userimg from '../assets/tolipovblack.png'

const Dialog = () => {
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click on ✕ button to close</p>
            </div>
        </dialog>
    )
}
const Home = () => {
    const sty = {
        select: "bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    }
    const addBlock = (id) => {
        document.getElementById(id).showModal()
    }
    return (
        <main className='bg-gray-50 dark:bg-gray-900'>
            <div className="flex h-screen flex-col px-6 py-8 mx-auto md:h-screen p-4 max-w-[1400px] w-full">
                <nav className='flex justify-between items-center backdrop-blur-md bg-white/10 px-4 py-2 rounded-xl'>
                    <img src={logo14} alt="As logo" className='h-12 mr-2 ' />
                    <div className='text-white flex items-center gap-2'>
                        <h3 className='text-xl font-semibold'>
                            Tolipov <br /> Ziyovuddin
                        </h3>
                        <div className="avatar online">
                            <div className="w-16 mask rounded-full">
                                <img src={userimg} />
                            </div>
                        </div>

                    </div>
                </nav>
                <div className='backdrop-blur-md bg-white/10 my-2 rounded-xl min-h-[400px] px-4 py-2'>
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
                            <select id="default" className={sty.select}>
                                <option selected={true} aria-selected hidden>Sinf</option>
                                <option value="1A_CB">1A IT</option>
                                <option value="1B_CB">1B IT</option>
                                <option value="2A_CB">2A IT</option>
                                <option value="2B_CB">2B IT</option>
                            </select>
                        </div>
                    </form>
                    <div className='flex py-2'>
                        <h1 className='text-white text-4xl font-semibold hidden'>Hozircha hech narsa!</h1>
                        <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 min-w-[100%]">
                            <caption className="py-5 px-0 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-transparent">
                                <h2><span className='text-primary-500'>CAMBRIDGE </span>|<span className='text-yellow-500'> 1A </span>|<span className='text-red-500'> IT </span></h2>
                                <p className='bg-gray-700 p-1 rounded-md'><span className='text-red-600 font-semibold'>! Eslatma </span>|<span className='bg-green-600'> alo </span>|<span className='text-black'> Kelmagan </span></p>
                            </caption>
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        ISM Familiya
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <button onClick={() => addBlock('my_modal_3')}>
                                            <i className="fa-solid fa-plus text-xl" />
                                        </button>
                                        <Dialog />
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
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17
                                    </th>
                                    <td className="px-6 py-4">
                                        <button>
                                            <i className="fa-solid fa-plus text-xl" />
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">
                                        <button>
                                            <i className="fa-solid fa-plus text-xl" />
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        <button>
                                            <i className="fa-solid fa-plus text-xl" />
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home