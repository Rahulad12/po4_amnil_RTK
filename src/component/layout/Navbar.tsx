import { House, Key, LogOut, UserRoundPlus, User, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/hook';
import { logout } from '../../slices/authSlices';
const Navbar = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isAuth = useAppSelector(state => state?.auth?.user?.isAuthenticated ?? null)

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/login');
    }

    const NavLinks = [
        {
            path: '/home',
            label: 'Home',
            icon: House
        },
        {
            path: "/home/profile",
            label: "Profile",
            icon: User
        },
        {
            path: "/home/Todo",
            label: "Todo",
            icon: Plus
        }
    ]

    const publicLinks = [
        {
            path: '/login',
            label: 'Login',
            icon: Key
        },
        {
            path: '/register',
            label: 'Register',
            icon: UserRoundPlus
        }
    ]

    const navToShow = isAuth ? NavLinks : publicLinks
    return (
        <nav className='flex min-w-full justify-end  p-2 bg-gray-800 text-white'>
            <div className='flex'>
                {navToShow.map(({ path, icon: Icon, label }) => (
                    <Link
                        key={path}
                        to={path}
                        className='flex items-center space-x-2 p-2 hover:bg-gray-700'
                    >
                        <Icon size={20} />
                        <span>{label}</span>
                    </Link>
                ))}
            </div>

            {
                isAuth && (
                    <button className='flex items-center space-x-2 p-2 hover:bg-gray-700 cursor-pointer' onClick={logoutHandler}>
                        <span className='mr-2'><LogOut size={20} /></span> Logout
                    </button>
                )
            }
        </nav>
    )

}

export default Navbar;