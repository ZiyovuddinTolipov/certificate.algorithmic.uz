import avatar from '../assets/tolipovblack.png'
import Navbar from '../components/Navbar'
const Profile = () => {
    return (
        <main className='bg-gray-50 dark:bg-gray-900'>
            <div className="flex flex-col px-6 py-8 mx-auto  p-4 max-w-[1400px] w-full">
                <Navbar />
                <div className='backdrop-blur-md bg-white/10 my-2 rounded-xl min-h-[400px] h-auto px-4 py-2 flex'>
                    <div className='w-1/3 flex justify-center items-center h-100'>
                        <img src={avatar} alt="user img" height='300px' className='h-60 w-auto' />
                    </div>
                    <div className='w-1/3 flex gap-2 flex-col justify-center items-start h-100'>
                        <div className='flex flex-col gap-2'>
                            <span className="label-text text-base font-semibold">Ismi</span>
                            <label className="input input-bordered flex items-center gap-2  input-primary w-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow bg-transparent" value="Ziyovuddin" disabled />
                            </label>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className="label-text text-base font-semibold">Familiya</span>
                            <label className="input input-bordered flex items-center gap-2  input-primary w-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow bg-transparent" value="Tolipov" disabled/>
                            </label>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className="label-text text-base font-semibold">Foydalanuvchi ID</span>
                            <label className="input input-bordered flex items-center gap-2  input-primary w-full ">
                                <kbd className="kbd kbd-sm">ID</kbd>
                                <input type="text" className="grow bg-transparent" value="123456789" disabled/>
                            </label>
                        </div>
                    </div>
                    <div className='w-1/3 flex gap-2 flex-col justify-center items-stretch h-100 max-w-[300px]'>
                        <div className='flex flex-col gap-2 '>
                            <span className="label-text text-base font-semibold">Parol</span>
                            <label className="input input-bordered flex items-center gap-2  input-primary w-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="text" className="grow bg-transparent" />
                            </label>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className="label-text text-base font-semibold">Parol qaytdan</span>
                            <label className="input input-bordered flex items-center gap-2  input-primary w-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow bg-transparent" />
                            </label>
                        </div>
                        <button type="submit" className="btn btn-active btn-success  mt-6">Yuborish</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Profile