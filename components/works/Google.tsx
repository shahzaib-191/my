import { motion } from 'framer-motion'
import { TiArrowForward } from "react-icons/ti";

const Google = () => {
  return (
    <motion.div
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    transition={{ delay:0.1 }}
    className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
            Web Developer <span className='text-textGreen tracking-wide'>@Google</span>
            </h3>
        <p className='text-sm mt-1 font-medium text-textDark'>
          Jan-2021 - 2023
          </p>
          <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
              <span className='text-textGreen mt-1'>
                <TiArrowForward />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque vel, exercitationem 
                incidunt quam reiciendis numquam accusantium harum dolor dolorum 
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                  <span className='text-textGreen mt-1'>
                    <TiArrowForward />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque vel, exercitationem 
                  incidunt quam reiciendis numquam accusantium harum dolor dolorum 
                </li>
                <li className='text-base flex gap-2 text-textDark'>
                  <span className='text-textGreen mt-1'>
                    <TiArrowForward />
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque vel, exercitationem 
                  incidunt quam reiciendis numquam accusantium harum dolor dolorum 
                </li>
          </ul>
    </motion.div>
  )
}

export default Google