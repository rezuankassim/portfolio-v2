import {useScroll, useTransform, motion} from 'framer-motion';
import Image from 'next/image';
import {FC, MutableRefObject} from 'react';

export type ShowcaseShapesProps = {
  container: MutableRefObject<null>;
};

const ShowcaseShapes: FC<ShowcaseShapesProps> = ({container}) => {
  const {scrollYProgress} = useScroll({target: container});
  const yFigure2 = useTransform(scrollYProgress, [0, 0.2], [100, 125]);
  const yFigure3 = useTransform(scrollYProgress, [0, 0.8], [200, 300]);

  return (
    <>
      <motion.div
        style={{y: yFigure2}}
        className="absolute right-[500px] top-0"
        transition={{duration: 0.3, ease: 'easeInOut'}}
      >
        <Image src="/figure-2.png" alt="Shapes" width={300} height={300} />
      </motion.div>

      <motion.div
        style={{y: yFigure3}}
        className="absolute left-[-550px] top-[200px] z-10"
        transition={{duration: 0.3, ease: 'easeInOut'}}
      >
        <Image src="/figure-3.png" alt="Shapes" width={1000} height={1000} />
      </motion.div>
    </>
  );
};

export default ShowcaseShapes;
