'use client';

import {cubicBezier, useScroll, useSpring, useTransform, motion} from 'framer-motion';
import Image from 'next/image';
import {FC, useEffect, useRef} from 'react';

const DetailShapes: FC = () => {
  const containerRef = useRef(null);
  const {scrollY} = useScroll({target: containerRef});
  const yRangeFigure1 = useTransform(
    scrollY,
    [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
    [-400, -399, -398, -397, -396, -395, -394, -393, -392],
    {
      ease: cubicBezier(0, 0, 0, 1),
    }
  );
  const yRangeFigure2 = useTransform(
    scrollY,
    [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
    [-200, -210, -220, -230, -240, -250, -260, -270, -280],
    {
      ease: cubicBezier(0, 0, 0, 1),
    }
  );
  const yRangeFigure3 = useTransform(
    scrollY,
    [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
    [-600, -610, -620, -630, -640, -650, -660, -670, -680],
    {
      ease: cubicBezier(0, 0, 0, 1),
    }
  );
  const yFigure1 = useSpring(yRangeFigure1, {stiffness: 400, damping: 90});
  const yFigure2 = useSpring(yRangeFigure2, {stiffness: 400, damping: 90});
  const yFigure3 = useSpring(yRangeFigure3, {stiffness: 400, damping: 90});

  return (
    <div ref={containerRef}>
      <motion.div style={{y: yFigure3}}>
        <Image
          className="absolute right-[-490px]"
          src="/figure-3.png"
          alt="Shape"
          width={900}
          height={900}
        />
      </motion.div>

      <motion.div style={{y: yFigure2}}>
        <Image
          className="absolute right-[100px]"
          src="/figure-2.png"
          alt="Shape"
          width={250}
          height={250}
        />
      </motion.div>

      <motion.div style={{y: yFigure1}}>
        <Image
          className="absolute right-[130px]"
          src="/figure-1.png"
          alt="Shape"
          width={170}
          height={170}
        />
      </motion.div>
    </div>
  );
};

export default DetailShapes;
