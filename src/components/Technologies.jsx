import { RiReactjsLine } from "react-icons/ri"
import { FaLeaf, FaJava, FaDatabase } from "react-icons/fa"
import { SiSpring } from "react-icons/si"
import{animate, motion} from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss,SiMicrosoftazure } from "react-icons/si";

const iconVariants=(duration)=>({
  initial:{y :-10},
  animate:{
    y:[10,-10],
    transition:{
      duration : duration,
      ease: "linear",
      repeat: Infinity,
      repeatType:"reverse",
    }
  }

})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration : 1.5}}
        className="my-20 text-center text-4xl">Technologies
        </motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration : 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
  
  <motion.div
  variants={iconVariants(2.5)}
  initial="initial"
  animate='animate'
  className="rounded-2xl border-4 border-neutral-800 p-4">
    <RiReactjsLine className="text-7xl text-[#61DBFB]" />
  </motion.div>
  <motion.div
  variants={iconVariants(3)}
  initial="initial"
  animate='animate'
  className="rounded-2xl border-4 border-neutral-800 p-4">
    <FaLeaf className="text-7xl text-[#47A248]" />
  </motion.div>
  <motion.div
  variants={iconVariants(5)}
  initial="initial"
  animate='animate'
  className="rounded-2xl border-4 border-neutral-800 p-4">
    <FaJava className="text-7xl text-[#007396]" />
  </motion.div>
  <motion.div 
  variants={iconVariants(6)}
  initial="initial"
  animate='animate'
  className="rounded-2xl border-4 border-neutral-800 p-4">
    <FaDatabase className="text-7xl text-[#00618A]" />
  </motion.div>
  <motion.div
  variants={iconVariants(4)}
  initial="initial"
  animate='animate'
  className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiSpring className="text-7xl text-[#6DB33F]" />
  </motion.div>
      <motion.div
      variants={iconVariants(2)}
      initial="initial"
      animate='animate'
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiMicrosoftazure className="text-7xl text-[#0089D6]" /> {/* Azure Icon */}
      </motion.div>
</motion.div>

        </div>
  )
}

export default Technologies