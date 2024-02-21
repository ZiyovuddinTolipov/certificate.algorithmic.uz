import logo14 from "../assets/logo14.png"

const Login = () => {
   
    return (
        <section className="bg-gray-50 dark:bg-gray-900 ">
            <div className="flex h-screen flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <a href="#" className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white w-[100%]">
                            <img className="h-12  mr-2" src={logo14} alt="logo" />
                        </a>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <label className="input input-bordered flex items-center gap-2  input-primary w-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow bg-transparent" placeholder="ID raqam" />
                            </label>
                            <button type="submit" className="btn btn-active btn-primary w-full">Yuborish</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;