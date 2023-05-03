'use client';

import {easeInOut, motion, stagger, useAnimate, useInView} from 'framer-motion';
import {FC, useEffect, useRef} from 'react';

const ShowcaseSection: FC = () => {
  return (
    <div className="relative overflow-clip">
      <div className="mx-auto max-w-7xl">
        <section className="px-32 py-28">
          <motion.div
            initial={{opacity: 0, translateY: '30px'}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 0.4, ease: easeInOut}}
            viewport={{once: true}}
            className="tagline flex items-center gap-x-4"
          >
            <div className="h-0.5 w-12 bg-primary"></div>

            <h2 className="text-xl font-semibold text-primary">Rezuan Kassim</h2>
          </motion.div>

          <motion.div
            initial={{opacity: 0, translateY: '30px'}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{duration: 0.4, ease: easeInOut, delay: 0.2}}
            viewport={{once: true}}
            className="heading mt-6 max-w-md"
          >
            <p className="text-6xl font-semibold tracking-[-0.03em]">Look at My Projects.</p>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ShowcaseSection;
