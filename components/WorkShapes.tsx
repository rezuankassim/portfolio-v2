import {FC, MutableRefObject} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import Image from 'next/image';

export type WorkShapesProps = {
  target: MutableRefObject<null>;
};

const WorkShapes: FC<WorkShapesProps> = ({target}) => {
  const {scrollYProgress} = useScroll({target: target, offset: ['start end', 'end start']});
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const workCube1Y = useTransform(scrollYProgress, [0, 1], [-950, -1050]);
  const workCube2X = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const workCube2Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const workCube3X = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const workCube3Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const workCube5X = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const workCube6X = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const workCube7Y = useTransform(scrollYProgress, [0, 1], [-780, -680]);
  const circleScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <>
      <motion.div style={{y}} className="absolute left-[100px] top-[100px] z-10">
        <Image src="/work-cube.png" alt="Shape" width={200} height={200} />
      </motion.div>

      <motion.div
        style={{scale: circleScale}}
        className="absolute right-[-200px] top-0 z-0 h-[1024px] w-[1024px] rounded-full border border-white opacity-[0.15]"
      ></motion.div>

      <motion.div
        style={{scale: circleScale}}
        className="absolute right-[-400px] top-[-200px] z-0 h-[1400px] w-[1400px] rounded-full border border-white opacity-[0.15]"
      ></motion.div>

      <Image
        className="absolute right-[312px] top-[512px]"
        src="/main-pic-5.png"
        alt="Shape"
        width={50}
        height={50}
      />

      <motion.div style={{y: workCube1Y}} className="absolute right-[185px] z-10">
        <Image src="/work-cube-1.png" alt="Shape" width={300} height={300} />
      </motion.div>

      <motion.div style={{y: workCube7Y}} className="absolute right-[117px] z-10">
        <Image src="/work-cube-7.png" alt="Shape" width={550} height={550} />
      </motion.div>

      <motion.div style={{x: workCube5X}} className="absolute right-[220px] top-[300px] z-10">
        <Image src="/work-cube-5.png" alt="Shape" width={720} height={720} />
      </motion.div>

      <motion.div style={{x: workCube6X}} className="absolute right-[50px] top-[280px] z-10">
        <Image src="/work-cube-6.png" alt="Shape" width={560} height={560} />
      </motion.div>

      <motion.div
        style={{x: workCube2X, y: workCube2Y}}
        className="absolute right-[350px] top-[380px] z-10"
      >
        <Image src="/work-cube-2.png" alt="Shape" width={210} height={210} />
      </motion.div>

      <motion.div
        style={{x: workCube3X, y: workCube3Y}}
        className="absolute right-[100px] top-[450px] z-10"
      >
        <Image src="/work-cube-3.png" alt="Shape" width={205} height={205} />
      </motion.div>
    </>
  );
};

export default WorkShapes;
