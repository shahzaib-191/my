import { logo } from '@/public/assets';
import Image from "next/image";
import Link from 'next/link';
import { motion } from"framer-motion";
const Navbar = () => {
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodycolor px-4'>
        <div className='max-w-container h-full max-auto py-1 font-titleFont flex items-center justify-between'>
            <motion.div 
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:0.5 }}
            >
              <Image className='w-20' src={logo} alt="logo"/>
            </motion.div>
            <div className='mdl:inline-flex items-center gap-7'>
              <ul className='flex text-[13px] gap-7'>
                <Link 
                  href="#home"
                  className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                >
                  <motion.li 
                  initial={{ y: -10, opacity:0 }}
                  animate={{ y: 0, opacity:1 }}
                  transition={{ duration:0.1 }}
                  >
                    Home
                  </motion.li>
                </Link>
                <Link 
                  className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                  href="#about"
                  >
                    <motion.li 
                    initial={{ y: -10, opacity:0 }}
                    animate={{ y: 0, opacity:1 }}
                    transition={{ duration:0.1, delay:0.1 }}
                    >
                  About
                  </motion.li>
                </Link>
                <Link 
                  className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                  href="#experience"
                  >
                    <motion.li 
                    initial={{ y: -10, opacity:0 }}
                    animate={{ y: 0, opacity:1 }}
                    transition={{ duration:0.1, delay:0.2 }}
                    >
                  Experience
                  </motion.li>
                </Link>
                <Link 
                  className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                  href="#project"
                  >
                    <motion.li 
                    initial={{ y: -10, opacity:0 }}
                    animate={{ y: 0, opacity:1 }}
                    transition={{ duration:0.1, delay:0.3 }}
                    >
                  Project
                  </motion.li>
                </Link>
                <Link 
                  className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'
                  href="#contact"
                  >
                    <motion.li 
                    initial={{ y: -10, opacity:0 }}
                    animate={{ y: 0, opacity:1 }}
                    transition={{ duration:0.1, delay:0.4 }}
                    >
                  Contact
                  </motion.li>
                </Link>
              <a href='/assets/my_CV.pdf' target='_blank'>
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay:0.5 }}
                className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
                >
                Resume
                </motion.button>
              </a>
              </ul>
            </div>
        </div>
    </div>
  );
};

export default Navbar