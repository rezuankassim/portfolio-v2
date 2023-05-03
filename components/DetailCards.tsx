'use client';

import {FC} from 'react';
import {Card, CardContent} from './ui/card';
import Image from 'next/image';
import {easeInOut, motion} from 'framer-motion';
import DetailCard from './DetailCard';

const DetailCards: FC = () => {
  return (
    <div className="mx-auto mt-32 grid max-w-7xl grid-cols-3 overflow-visible px-32 pb-24">
      <DetailCard
        image="/cursor.png"
        imageAlt="User interface image"
        imageWidth={165}
        imageHeight={165}
        imageMargin="ml-12 mt-4"
        backgroundColor="bg-accent-2"
        title="Frontend Developer"
        description="Specializing in Vue.js, React.js, and Next.js, I craft engaging, user-friendly digital experiences with seamless, responsive design."
      />

      <DetailCard
        image="/hand.png"
        imageAlt="User experience image"
        imageWidth={100}
        imageHeight={100}
        imageMargin="ml-12 mt-7"
        backgroundColor="bg-primary"
        title="Backend Developer"
        description="With 2 years' experience in backend development, I excel in creating robust solutions using Laravel PHP frameworks."
        delay={0.2}
      />

      <DetailCard
        image="/color-picker.png"
        imageAlt="UI design kit image"
        imageWidth={150}
        imageHeight={150}
        imageMargin="ml-7 mt-7"
        backgroundColor="bg-accent-3"
        title="Full Stack Developer"
        description="Full-stack developer adept at creating end-to-end solutions with frontend and backend expertise for seamless web experiences."
        delay={0.3}
      />

      {/* <Card className="px-8 pb-11 pt-14">
        <CardContent className="flex flex-col items-center justify-center">
          <motion.div
            initial={{scale: 0.5, translateY: '30px', opacity: 0}}
            whileInView={{scale: isHovered ? 1.15 : 1, translateY: 0, opacity: 1}}
            transition={{duration: 0.4, ease: easeInOut, delay: 0.2}}
            className="relative h-48 w-48 rounded-full bg-primary"
          >
            <Image
              className="absolute ml-12 mt-7"
              src="/hand.png"
              alt="User experience image"
              width={100}
              height={100}
            />
          </motion.div>

          <div className="mt-12 flex flex-col items-center">
            <motion.span
              initial={{opacity: 0, y: 60}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.4, ease: easeInOut, delay: 0.2}}
              className="text-2xl font-semibold text-dark"
            >
              User Experience
            </motion.span>

            <motion.p
              initial={{opacity: 0, y: 60}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.4, ease: easeInOut, delay: 0.2}}
              className="mt-3 text-center text-lg text-gray"
            >
              We have got quite a few already made templates for better project management that you
              can use now.
            </motion.p>
          </div>
        </CardContent>
      </Card>

      <Card className="px-8 pb-11 pt-14">
        <CardContent className="flex flex-col items-center justify-center">
          <motion.div
            initial={{scale: 0.5, translateY: '30px', opacity: 0}}
            whileInView={{scale: isHovered ? 1.15 : 1, translateY: 0, opacity: 1}}
            transition={{duration: 0.4, ease: easeInOut, delay: 0.3}}
            className="relative h-48 w-48 rounded-full bg-accent-3"
          >
            <Image
              className="absolute ml-7 mt-7"
              src="/color-picker.png"
              alt="UI design kit image"
              width={150}
              height={150}
            />
          </motion.div>

          <div className="mt-12 flex flex-col items-center">
            <motion.span
              initial={{opacity: 0, y: 60}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.4, ease: easeInOut, delay: 0.2}}
              className="text-2xl font-semibold text-dark"
            >
              UI Design Kit
            </motion.span>

            <motion.p
              initial={{opacity: 0, y: 60}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.4, ease: easeInOut, delay: 0.3}}
              className="mt-3 text-center text-lg text-gray"
            >
              We have got quite a few already made templates for better project management that you
              can use now.
            </motion.p>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default DetailCards;
