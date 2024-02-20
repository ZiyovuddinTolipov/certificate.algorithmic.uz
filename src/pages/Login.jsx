import logo14 from "../assets/logo14.png"
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(`https://bkscoring.algorithmic.uz/api/Auth?userName=${username}&password=${password}`)
        try {
            const response = await axios.post(`https://bkscoring.algorithmic.uz/api/Auth?userName=${username}&password=${password}`, {
                headers: {},
                body: JSON.stringify({}),
            });
            localStorage.setItem("user_jwt",response.data)
            // console.log(response.data);
            // console.log(response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 ">
            <div className="flex h-screen flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <a href="#" className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white w-[100%]">
                            <img className="h-12  mr-2" src={logo14} alt="logo" />
                        </a>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <label className="input input-bordered flex items-center gap-2  input-primary w-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow bg-transparent" placeholder="ID raqam" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </label>
                            <label className="input input-bordered flex items-center gap-2  input-primary w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="text" className="grow bg-transparent" minLength={5} placeholder="parol" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </label>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Tasdiqlash</label>
                                    </div>
                                </div>
                                <a href="/reset" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Parolni unutdim?</a>
                            </div>
                            <button type="submit" className="btn btn-active btn-primary w-full">Yuborish</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
