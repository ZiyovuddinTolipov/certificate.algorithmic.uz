import React from 'react';
import logo14 from '../assets/logo14.png'
import userimg from '../assets/tolipovblack.png'
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';


const settings = ['profile', 'account', 'dashboard', 'logout'];

const Navbar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <nav className='flex justify-between items-center backdrop-blur-md bg-white/10 px-4 py-2 rounded-xl'>
            <Link to='/'><img src={logo14} alt="As logo" className='h-12 mr-2 ' /></Link>
            <div className='text-white flex items-center gap-2'>
                <h3 className='text-xl font-semibold'>
                    Tolipov <br /> Ziyovuddin
                </h3>
                <div className="avatar online">
                    <div className="w-16 mask rounded-full" onClick={handleOpenUserMenu}>
                        <img src={userimg} />
                    </div>
                    <Menu
                        sx={{ mt: '70px', py: 0 }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu} >
                                <Link to={'/' + setting}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>
        </nav>
    )
}

export default Navbar