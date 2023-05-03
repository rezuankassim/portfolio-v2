'use client';

import {useScroll, motion, useTransform, cubicBezier, useSpring} from 'framer-motion';
import Image from 'next/image';
import {FC} from 'react';

const HeroShapes: FC = () => {
  const {scrollY} = useScroll();
  const yRangeMainPic1 = useTransform(scrollY, [0, 2500], [-400, -505], {
    ease: cubicBezier(0, 0, 0, 1),
  });
  const yRangeMainPic5 = useTransform(scrollY, [0, 2500], [-60, -175], {
    ease: cubicBezier(0, 0, 0, 1),
  });
  const yRangeMainPic7 = useTransform(scrollY, [0, 2500], [70, 180], {
    ease: cubicBezier(0, 0, 0, 1),
  });
  const yRangeFigure1 = useTransform(scrollY, [0, 2500], [-290, -119], {
    ease: cubicBezier(0, 0, 0, 1),
  });
  const yRangeFigure2 = useTransform(scrollY, [0, 2500], [0, -119], {
    ease: cubicBezier(0, 0, 0, 1),
  });
  const yMainPic1 = useSpring(yRangeMainPic1, {stiffness: 400, damping: 90});
  const yMainPic5 = useSpring(yRangeMainPic5, {stiffness: 400, damping: 90});
  const yMainPic7 = useSpring(yRangeMainPic7, {stiffness: 400, damping: 90});
  const yFigure1 = useSpring(yRangeFigure1, {stiffness: 400, damping: 90});
  const yFigure2 = useSpring(yRangeFigure2, {stiffness: 400, damping: 90});

  return (
    <div>
      <Image
        className="absolute right-[250px] top-[120px]"
        src="/main-pic-2.png"
        alt="Shape"
        width={240}
        height={240}
      />

      <motion.div style={{y: yMainPic1}}>
        <Image
          className="absolute right-[309.5px]"
          src="/main-pic-1.png"
          alt="Shape"
          width={121}
          height={121}
        />
      </motion.div>

      <Image
        className="absolute right-[-10px] top-[195px]"
        src="/main-pic-6.png"
        alt="Shape"
        width={790}
        height={790}
      />

      <motion.div style={{y: yFigure1}}>
        <Image
          className="absolute right-[520px]"
          src="/figure-1.png"
          alt="Shape"
          width={170}
          height={170}
        />
      </motion.div>

      <Image
        className="absolute right-[398px] top-[336px]"
        src="/main-pic-3.png"
        alt="Shape"
        width={230}
        height={230}
      />

      <Image
        className="absolute right-[102px] top-[334px]"
        src="/main-pic-4.png"
        alt="Shape"
        width={175}
        height={175}
      />

      <motion.div style={{y: yMainPic5}}>
        <Image
          className="absolute right-[340px]"
          src="/main-pic-5.png"
          alt="Shape"
          width={50}
          height={50}
        />
      </motion.div>

      <motion.div style={{y: yFigure2}}>
        <Image
          className="absolute right-[650px]"
          src="/figure-2.png"
          alt="Shape"
          width={170}
          height={170}
        />
      </motion.div>

      <Image
        className="absolute right-[550px] top-[602px]"
        src="/figure-3.png"
        alt="Shape"
        width={180}
        height={180}
      />

      <motion.div style={{y: yMainPic7}}>
        <Image
          className="absolute right-[50px]"
          src="/main-pic-7.png"
          alt="Shape"
          width={200}
          height={200}
        />
      </motion.div>
    </div>
  );
};

export default HeroShapes;
