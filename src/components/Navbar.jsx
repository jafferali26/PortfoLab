import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className='mx-2 w-10' src={logo} alt="Company Logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/jaffer-ali-2605-ten" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="hover:text-blue-600 transition duration-200" />
        </a>
        <a href="https://github.com/jafferali26" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="hover:text-gray-800 transition duration-200" />
        </a>
        <a href="https://www.instagram.com/.jaffi._?igsh=MjM2M2h4MmY5OW9i" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="hover:text-pink-600 transition duration-200" />
        </a>
        <a href="https://wa.me/916381730775" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp className="hover:text-green-600 transition duration-200" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
