'use client';

import {FC, ReactNode} from 'react';
import {easeInOut, motion} from 'framer-motion';

export type SlideTopProps = {
  children?: ReactNode;
};

const SlideTop: FC<SlideTopProps> = ({children}) => {
  return (
    <motion.div
      initial={{opacity: 0, translateY: '30px'}}
      whileInView={{opacity: 1, translateY: 0}}
      transition={{duration: 0.4, ease: easeInOut}}
      viewport={{once: true}}
    >
      {children}
    </motion.div>
  );
};

export default SlideTop;
