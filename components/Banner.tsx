import { motion } from "framer-motion";

const Banner = () => {
  return (
  <section 
  id='home' 
  className='max-w-contentContainer mx-auto py-40 mdl:py-20 flex flex-col gap-5 lgl:gap-8 mdl:px-10 xl:px-4'
  >
    
    <motion.h3 
    initial={{ y:10, opacity:0 }}
    animate={{ y:0, opacity:1 }}
    transition={{ duration: 0.5, delay:0.6 }}
    className='text-lg font-titleFont tracking-wide text-textGreen'>
        Hi, my name is 
    </motion.h3>
    <motion.h1 
    initial={{ y:10, opacity:0 }}
    animate={{ y:0, opacity:1 }}
    transition={{ duration: 0.5, delay:0.7 }}
    className="text-4xl lgl:tex-6xl font-titleFont font-semibold flex flex-col "
    >
        Muhammad Shahzaib Shahid. 
        <span className="text-textDark mt-4 lgl:mt-4">
            I build things for web. 
        </span>
    </motion.h1>
    <motion.p 
      initial={{ y:10, opacity:0 }}
      animate={{ y:0, opacity:1 }}
      transition={{ duration: 0.5, delay:0.8 }}
      className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I am a web developer  with 4+ year experience in Next.js. I have a 
        strong foundation in front-end & back-end development and am skilled in 
        creating user-friendly and responsive web applications using Next.js 
        and its ecosystem.{" "} 
        <a href="https://www.linkedin.com/in/shahzaib-rajpoot-78a042252/" target="_blank">
         <span 
         className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group"
         >
            Learn More
            <span className="absolute w-full bg-textGreen left-0 bottom-1-translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500">
            </span>
         </span>
        </a>
     </motion.p>
     <motion.button 
     initial={{ y:10, opacity:0 }}
     animate={{ y:0, opacity:1 }}
     transition={{ duration: 0.5, delay:0.9 }}
     className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">
        Check out my Project!
     </motion.button>
    </section>
  );
};

export default Banner;