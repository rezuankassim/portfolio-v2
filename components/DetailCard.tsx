'use client';

import {FC, useEffect, useRef, useState} from 'react';
import {Card, CardContent} from './ui/card';
import {easeInOut, motion, useAnimate, useScroll, useTransform} from 'framer-motion';
import Image from 'next/image';

export type DetailCardProp = {
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageMargin: string;
  backgroundColor: string;
  title: string;
  description: string;
  delay?: number;
};

const DetailCard: FC<DetailCardProp> = ({
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  imageMargin,
  backgroundColor,
  title,
  description,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group px-8 pb-11 pt-14"
    >
      <CardContent className="flex flex-col items-center justify-center">
        <motion.div
          initial={{scale: 0.5, translateY: '30px', opacity: 0}}
          whileInView={{scale: isHovered ? 1.15 : 1, translateY: 0, opacity: 1}}
          transition={{duration: 0.4, ease: easeInOut, delay: isHovered ? 0 : delay}}
          viewport={{once: true}}
          className={`relative h-48 w-48 rounded-full bg-accent-2 ${backgroundColor}`}
        >
          <Image
            className={`absolute ${imageMargin}`}
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
          />
        </motion.div>

        <div className="mt-12 flex flex-col items-center">
          <motion.span
            initial={{opacity: 0, y: 60}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.4, ease: easeInOut, delay: delay}}
            viewport={{once: true}}
            className="text-center text-xl font-semibold text-dark"
          >
            {title}
          </motion.span>

          <motion.p
            initial={{opacity: 0, y: 60}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.4, ease: easeInOut, delay: delay}}
            viewport={{once: true}}
            className="mt-3 text-center text-gray"
          >
            {description}
          </motion.p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailCard;
