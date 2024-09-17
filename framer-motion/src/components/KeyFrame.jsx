import {motion} from 'framer-motion'

function KeyFrame() {
  return (
    <motion.div className='bg-blue-500 border size-32 m-4'
    animate={{borderRadius: ['10%', '20%', '40%', '50%', '0%'],
    
}}
    transition={{duration: 1}}
    >

    </motion.div>
  )
}

export default KeyFrame