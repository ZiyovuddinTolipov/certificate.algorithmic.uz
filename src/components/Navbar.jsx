
import logo14 from '../assets/logo14.png'
import userimg from '../assets/tolipovblack.png'
const Navbar = () => {
    return (
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
    )
}

export default Navbar