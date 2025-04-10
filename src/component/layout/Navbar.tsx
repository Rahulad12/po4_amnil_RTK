import { House, Key } from 'lucide-react';
const Navbar = () => {
    const NavLinks = [
        {
            Path: '/home',
            Name: 'Home',
            icon: House
        },
        {
            Path: '/login',
            Name: 'Login',
            icon: Key
        }
    ]

    return (
        <nav>
            <ul>
                {NavLinks.map((link) => (
                    <li key={link.Name}>
                        <a href={link.Path}>
                            {link.icon && <link.icon />}
                            {link.Name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

export default Navbar;