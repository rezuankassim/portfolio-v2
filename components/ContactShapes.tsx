import {FC, MutableRefObject} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import Image from 'next/image';

export type ContactShapesProps = {
  container: MutableRefObject<null>;
};

const ContactShapes: FC<ContactShapesProps> = ({container}) => {
  const {scrollYProgress} = useScroll({target: container, offset: ['start end', 'end center']});
  const yFigures2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yFigures3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yFigures5 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yFigures6 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <>
      <div className="absolute right-[135px] top-[170px] z-10">
        <Image src="/figures-1.png" alt="Shape" width={800} height={800} />
      </div>

      <div className="absolute right-[235px] top-[220px] z-20">
        <Image src="/figures-4.png" alt="Shape" width={200} height={200} />
      </div>

      <motion.div
        style={{y: yFigures2}}
        className="absolute right-[285px] top-[200px] z-10"
        transition={{duration: 0.3, ease: 'easeInOut'}}
      >
        <Image src="/figures-2.png" alt="Shape" width={600} height={600} />
      </motion.div>

      <motion.div
        style={{y: yFigures3}}
        className="absolute right-[280px] top-[145px] z-10"
        transition={{duration: 0.3, ease: 'easeInOut'}}
      >
        <Image src="/figures-3.png" alt="Shape" width={160} height={160} />
      </motion.div>

      <motion.div
        style={{y: yFigures5}}
        className="absolute right-[420px] top-[350px] z-10"
        transition={{duration: 0.3, ease: 'easeInOut'}}
      >
        <Image src="/figures-5.png" alt="Shape" width={250} height={250} />
      </motion.div>

      <motion.div style={{y: yFigures6}} className="absolute right-[130px] top-[430px] z-10">
        <Image src="/figures-6.png" alt="Shape" width={260} height={260} />
      </motion.div>
    </>
  );
};

export default ContactShapes;
