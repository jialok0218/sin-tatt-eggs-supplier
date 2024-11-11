import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';
import SinTattLogo from '@/assets/sin-tatt-logo.png';

const NavBar = () => {
    return (
        <div className="py-5 bg-transparent">
            <div className="container">
                <div className="flex items-center justify-between">
                    <Image src={SinTattLogo} alt="SinTatt Logo" width={100} height={40}/>
                    <Image src={MenuIcon} alt="Menu" width={20} height={20} className="md:hidden"/>
                    <nav className="hidden md:flex gap-6 text-white text-2xl font-bold items-center space-x-4">
                        <a href="#" className="hover-effect">Home</a>
                        <a href="#" className="hover-effect">About Us</a>
                        <a href="#" className="hover-effect">Products</a>
                        <a href="#" className="hover-effect">Gallery</a>
                        <a href="#" className="hover-effect">Contact Us</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
