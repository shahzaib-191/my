import React from 'react';
import SectionTitle from './SectionTitle';
import { amazonImg, cyberImg, noorShop } from '@/public/assets';
import { AiOutlineYoutube } from 'react-icons/ai';
import { TbBrandGithub } from 'react-icons/tb';
import Image from 'next/image';
import { RxOpenInNewWindow } from "react-icons/rx";

const Project = () => {
  return (
    <section id='project' className='max-w-container mx-0 lgl:px- py-20'>
    <SectionTitle title='Some Things I have Built' titleNo='03' />
    <div className='w-full flex flex-col items-center justify-center gap-6 mt-10'>
      {/* Project one */}
    <div className='w-full flex flex-col items-center justify-between gap-28 mt-20'>
        <div className='flex flex-col xl:flex-row gap-10'>
            <a 
             className='w-full xl:w-1/2 h-auto relative-group' 
             href='https://nextamazon.reactbd.com/'
             target='_blank'>
            <div>
                <Image className="w-full h-full"
                src={amazonImg}
                alt="amazonImg"
                />
            </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-7 lgl:justify-between items-end text-right xl:-ml-7 z-10'>
            <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
                </p>
                <h3 className='text-2xl font-bold'>Amazon Clone 2.0</h3>
                <p className='bg-[#112240] text-sm md:text-center p-4 md:p-2 rounded-md'>
                  An Amazon clone Website for visualizing personalized Amazon Website.
                  View your products, Add your acoount with
                  <span className='text-textGreen'> 0-auth </span> and then make the
                  purchase using<span className='text-textGreen'> stripe </span>. 
                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-1 md:gap-5 justify-between text-textDark'>
                    <li>Next.js</li>
                    <li>Typescript</li>
                    <li>Next-auth</li>
                    <li>Tailwind CSS</li>
                    <li>Stripe</li>
                </ul>
                <div className='text-2xl flex gap-4'>
                  <a 
                  className='hover:text-textGreen duration-300' 
                  href='https://github.com/shahzaib-191'
                  target='_blank'
                  >
                    <TbBrandGithub />
                  </a>
                  <a 
                  className='hover:text-textGreen duration-300' 
                  href='https://www.youtube.com/@illmorg/featured'
                  target='_blank'
                  >
                    <AiOutlineYoutube />
                  </a>
                  <a 
                  className='hover:text-textGreen duration-300' 
                  href='https://nextamazon.reactbd.com/'
                  target='_blank'
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
        </div>
        </div>
    </div>
    {/* Projeecy two */}
    <div className='w-full flex flex-col items-center justify-between gap-28 mt-20'>
        <div className='flex flex-col xl:flex-row-reverse gap-10'>
            <a 
             className='w-full xl:w-1/2 h-auto relative-group' 
             href='https://nextamazon.reactbd.com/'
             target='_blank'>
            <div>
                <Image className="w-full h-full"
                src={cyberImg}
                alt="cyberImg"
                />
            </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10'>
            <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
                </p>
                <h3 className='text-2xl font-bold'>Cyber Security Blog</h3>
                <p className='bg-[#112240] text-sm md:text-center p-2 md:p-2 rounded-md'>
                A full functional Cyber Security Blog where you can view the latest post and
                  <span className='text-textGreen'> Comments </span> on it 
                by passing your ideas besides you can try to add your own
                <span className='text-textGreen'> post </span> on it by logging on the portal. 
                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-1 md:gap-3 justify-between text-textDark'>
                    <li>Next.js</li>
                    <li>Typescript</li>
                    <li>Next-auth</li>
                    <li>Tailwind CSS</li>
                    <li>Stripe</li>
                </ul>
                <div className='text-2xl flex gap-4'>
                  <a 
                  className='hover:text-textGreen duration-300' 
                  href='https://github.com/shahzaib-191'
                  target='_blank'
                  >
                    <TbBrandGithub />
                  </a>
                  <a 
                  className='hover:text-textGreen duration-300' 
                  href='https://www.youtube.com/@illmorg/featured'
                  target='_blank'
                  >
                    <AiOutlineYoutube />
                  </a>
                  <a 
                  className='hover:text-textGreen duration-300' 
                  href='https://nextamazon.reactbd.com/'
                  target='_blank'
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
        </div>
        </div>
    </div>
    {/* Project three */}
    <div className='w-full flex flex-col items-center justify-between gap-28 mt-20'>
        <div className='flex flex-col xl:flex-row gap-10'>
            <a 
             className='w-full xl:w-1/2 h-auto relative-group' 
             href='https://www.gripsports.gripsin.com/'
             target='_blank'>
            <div>
                <Image className="w-full h-full"
                src={noorShop}
                alt="noorShop"
                />
            </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-7 lgl:justify-between items-end text-right xl:-ml-7 z-10'>
            <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                Featured Project
                </p>
                <h3 className='text-2xl font-bold'>Amazon Clone 2.0</h3>
                <p className='bg-[#112240] text-sm md:text-center p-4 md:p-2 rounded-md'>
                  An Amazon clone Website for visualizing personalized Amazon Website.
                  View your products, Add your acoount with
                  <span className='text-textGreen'> 0-auth </span> and then make the
                  purchase using<span className='text-textGreen'> stripe </span>. 
                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-1 md:gap-5 justify-between text-textDark'>
                    <li>Next.js</li>
                    <li>Typescript</li>
                    <li>Next-auth</li>
                    <li>Tailwind CSS</li>
                    <li>Stripe</li>
                </ul>
                <div className='text-2xl flex gap-4'>
                  <a 
                  className='hover:text-textGreen duration-300' 
                  href='https://github.com/shahzaib-191'
                  target='_blank'
                  >
                    <TbBrandGithub />
                  </a>
                  <a 
                  className='hover:text-textGreen duration-300' 
                  href='https://www.youtube.com/@illmorg/featured'
                  target='_blank'
                  >
                    <AiOutlineYoutube />
                  </a>
                  <a 
                  className='hover:text-textGreen duration-300' 
                  href='https://nextamazon.reactbd.com/'
                  target='_blank'
                  >
                    <RxOpenInNewWindow />
                  </a>
                </div>
        </div>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Project