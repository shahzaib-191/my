import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import { motion } from "framer-motion"

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
      <div className='w-full flex flex-col items-center'>
      <h2 className='text-3xl font-titleFont font-semibold'>
        Other Noteworthy Projects
        </h2> 
      <p className='text-sm font-titleFont text-textGreen'>
        view the Archive
        </p>   
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
          <ArchiveCard 
           title="Educare English Learning Academy"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
           laudantium velit qui sint non, volupatates qou a veritatis"
           listItem={["Next.js", "CSS", "HTML"]}
           link="https://www.educareenglishlearningacademy.com/"
          />
          <ArchiveCard 
           title="Cyber Security Blog with live comments"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
           laudantium velit qui sint non, volupatates qou a veritatis"
           listItem={["Next.js", "CSS", "HTML"]}
           link="https://www.educareenglishlearningacademy.com/"
          />
          <ArchiveCard 
           title="Next.js Typescript company"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
           laudantium velit qui sint non, volupatates qou a veritatis"
           listItem={["Next.js", "CSS", "HTML"]}
           link="https://www.educareenglishlearningacademy.com/"
          />
          <ArchiveCard 
           title="Amazon Clone with login & cart-option"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
           laudantium velit qui sint non, volupatates qou a veritatis"
           listItem={["Next.js", "CSS", "HTML"]}
           link="https://www.educareenglishlearningacademy.com/"
          />
          <ArchiveCard 
           title="JSON data (example data api)"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
           laudantium velit qui sint non, volupatates qou a veritatis"
           listItem={["Next.js", "CSS", "HTML"]}
           link="https://jsondata.reactbd.com/"
          />
          <ArchiveCard 
           title="Dynamic Personal Portfolio"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
           laudantium velit qui sint non, volupatates qou a veritatis"
           listItem={["Next.js", "CSS", "HTML"]}
           link="https://www.educareenglishlearningacademy.com/"
          />
          {
            showMore && (
              <>
            <motion.div 
               initial={{ opacity:0 }}
               whileInView={{ opacity:1 }}
               transition={{ delay:0.1 }}
              >
              <ArchiveCard 
           title="OREBI e-commerce Shopping store"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
           laudantium velit qui sint non, volupatates qou a veritatis"
           listItem={["Next.js", "CSS", "HTML"]}
           link="https://www.gripsports.gripsin.com/"
          />
          </motion.div>
            <motion.div 
               initial={{ opacity:0 }}
               whileInView={{ opacity:1 }}
               transition={{ delay:0.2 }}
              >
          <ArchiveCard 
           title="Online Sports Center"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
           laudantium velit qui sint non, volupatates qou a veritatis"
           listItem={["Next.js", "CSS", "HTML"]}
           link="https://www.gripsports.gripsin.com/"
          />
          </motion.div>
            <motion.div 
               initial={{ opacity:0 }}
               whileInView={{ opacity:1 }}
               transition={{ delay:0.3 }}
              >
          <ArchiveCard 
           title="Personalized Blog with Typescript"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
           laudantium velit qui sint non, volupatates qou a veritatis"
           listItem={["Next.js", "CSS", "HTML"]}
           link="https://www.educareenglishlearningacademy.com/"
          />
          </motion.div>
            <motion.div 
               initial={{ opacity:0 }}
               whileInView={{ opacity:1 }}
               transition={{ delay:0.4 }}
              >
              <ArchiveCard 
           title="Shoppers Online Shopping Market"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
           laudantium velit qui sint non, volupatates qou a veritatis"
           listItem={["Next.js", "CSS", "HTML"]}
           link="https://shoppersyt.vercel.app/"
          />
          </motion.div>
            <motion.div 
               initial={{ opacity:0 }}
               whileInView={{ opacity:1 }}
               transition={{ delay:0.5 }}
              >
          <ArchiveCard 
           title="Single Page Response Portfolio"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
           laudantium velit qui sint non, volupatates qou a veritatis"
           listItem={["Next.js", "CSS", "HTML"]}
           link="https://www.educareenglishlearningacademy.com/"
          />
          </motion.div>
            <motion.div 
               initial={{ opacity:0 }}
               whileInView={{ opacity:1 }}
               transition={{ delay:0.6 }}
              >
          <ArchiveCard 
           title="Nextjs Dynamic Portfolio"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
           laudantium velit qui sint non, volupatates qou a veritatis"
           listItem={["Next.js", "CSS", "HTML"]}
           link="https://www.educareenglishlearningacademy.com/"
          />
          </motion.div>
            <motion.div 
               initial={{ opacity:0 }}
               whileInView={{ opacity:1 }}
               transition={{ delay:0.7 }}
              >
              <ArchiveCard 
           title="Bazaar - A Modern Shopping app"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
           laudantium velit qui sint non, volupatates qou a veritatis"
           listItem={["Next.js", "CSS", "HTML"]}
           link="https://bazar.reactbd.com/"
          />
          </motion.div>
              <motion.div 
               initial={{ opacity:0 }}
               whileInView={{ opacity:1 }}
               transition={{ delay:0.9 }}
              >
              <ArchiveCard 
           title="Blog 101 Application & Store"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
           laudantium velit qui sint non, volupatates qou a veritatis"
           listItem={["Next.js", "CSS", "HTML"]}
           link="https://blog101.reactbd.com/"
          />
          </motion.div>
              <motion.div 
               initial={{ opacity:0 }}
               whileInView={{ opacity:1 }}
               transition={{ delay:0.8 }}
              >
              <ArchiveCard 
           title="Todo application With Next.js"
           des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa 
           laudantium velit qui sint non, volupatates qou a veritatis"
           listItem={["Next.js", "CSS", "HTML"]}
           link="https://youtubetodo.vercel.app/"
          />
          </motion.div>
              </>
            )}
        </div>
        <div className='mt-12 flex items-center justify-center'>
           {
            showMore ? <button 
            onClick={() => setShowMore(false)}
            className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
            >
              Show Less
            </button> : <button 
            onClick={() => setShowMore(true)}
            className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
            >
              Show More
            </button>
           }
        </div>
      </div>

  )
}

export default Archive