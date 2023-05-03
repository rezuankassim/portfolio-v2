'use client';

import {easeInOut, motion, stagger, useAnimate, useInView} from 'framer-motion';
import {FC, useEffect, useRef} from 'react';
import ShowcastList from './ShowcaseList';
import {ShowcaseCardProps} from './ShowcaseCard';

const showcases: ShowcaseCardProps[][] = [
  [
    {
      id: 'showcase-multi-form',
      title: 'Multi-Step Form',
      description: 'Website, Challenges',
      image: '/multi-form-site.png',
      alt: 'Multi-Step Form Site Picture',
      link: 'https://multi-step-form-five-rho.vercel.app/',
    },
    {
      id: 'showcase-calculator-app',
      title: 'Calculator App',
      description: 'Website, Challenges',
      image: '/calculator-site.png',
      alt: 'Calculator App Site Picture',
      link: 'https://calculator-app-hub.vercel.app/',
    },
  ],
  [
    {
      id: 'showcase-meet-landing-page',
      title: 'Meet Landing Page',
      description: 'Website, Landing Page, Challenges',
      image: '/meet-site.png',
      alt: 'Meet Landing Page Site Picture',
      link: 'https://meet-landing-page.vercel.app/',
    },
  ],
];

const ShowcaseSection: FC = () => {
  return (
    <div className="relative overflow-clip bg-[radial-gradient(75.22%_75.22%_at_20.49%_12.79%,#FFFFFF_0%,rgba(228,231,233,0.502295)_100%)]">
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

          <div className="mt-20 flex flex-col gap-y-8">
            {showcases.map((sc, index) => (
              <ShowcastList key={index} showcases={sc} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShowcaseSection;
