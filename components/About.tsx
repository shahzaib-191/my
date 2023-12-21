import { AiFillThunderbolt } from "react-icons/ai";
import SectionTitle from './SectionTitle';
import { profileImg } from "@/public/assets";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className='max-w-containerSmall max-auto py-20 lgl:py-32 flex flex-col gap-4'
    >
        <SectionTitle title="About Me" titleNo="01" />
        <div className='flex flex-col lgl:flex-row gap-40'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
             <p>
               Hello! My name is Shahzaib Shahid and I enjoyed creating things that
               live on the internet. My interest in web development started back in 
               2022  when I decided  to Try editing custom Tumblr themes - turns out 
               hacking together a custom reblog button taught me a lot about HTML &
               CSS!
             </p>
             <p>
                Fast Forward to today, and I had the privilege of working at an 
                advertising agency, a start-up,{""}
                <span className='text-textGreen'>
                    a huge coorporation, and a student-led design studio.
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, 
                voluptates maxime quaerat rerum in quas odio neque.
             <span className='text-textGreen'>
                ab natus possimus? Sint, accusamus!
             </span>
             </p>
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ducimus quas ex quaerat quod iure delectus culpa libero esse, est odit.
             </p>
             <p>Here are a few technologies I have been workingwith recently:</p>
             <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                        </span>
                        JavaScript (ES6+)
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                        </span>
                        Next.js
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                        </span>
                        Typescript
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                        </span>
                        HTML
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                        </span>
                        CSS
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                        </span>
                        Framer-motion
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                        </span>
                        Oop
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-textGreen">
                        <AiFillThunderbolt />
                        </span>
                        Tailwindcss
                </li>
             </ul>
            </div>
        </div>
    </section>
  );
};

export default About;