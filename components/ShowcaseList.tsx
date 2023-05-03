'use client';

import {FC} from 'react';
import ShowcaseCard, {ShowcaseCardProps} from './ShowcaseCard';
import {motion} from 'framer-motion';

export type ShowcaseListProps = {
  showcases: ShowcaseCardProps[];
};

const ShowcastList: FC<ShowcaseListProps> = ({showcases}) => {
  return (
    <div className="grid grid-cols-2 gap-x-8">
      {showcases.map((showcase, index) => (
        <motion.div
          key={showcase.id}
          initial={{opacity: 0, translateY: '30px'}}
          whileInView={{opacity: 1, translateY: 0}}
          transition={{duration: 0.3, ease: 'easeInOut', delay: index === 0 ? 0 : 0.3}}
          viewport={{once: true}}
        >
          <ShowcaseCard
            title={showcase.title}
            description={showcase.description}
            image={showcase.image}
            alt={showcase.alt}
            link={showcase.link}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ShowcastList;
