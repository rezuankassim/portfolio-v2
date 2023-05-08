'use client';

import {easeInOut, motion} from 'framer-motion';
import {FC, useRef} from 'react';
import ShowcastList from './ShowcaseList';
import {ShowcaseCardProps} from './ShowcaseCard';
import ShowcaseShapes from './ShowcaseShapes';
import Email from './icons/Email';
import PinMap from './icons/PinMap';
import Phone from './icons/Phone';
import ContactShapes from './ContactShapes';
import {Separator} from './ui/separator';
import {scrollToTop} from '@/lib/utils';

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
    {
      id: 'showcase-equalizer-landing-page',
      title: 'Equalizer Landing Page',
      description: 'Website, Landing Page, Challenges',
      image: '/equalizer-site.png',
      alt: 'Equalizer Landing Page Site Picture',
      link: 'https://equalizer-landing-page-flax.vercel.app/',
    },
  ],
];

const ShowcaseSection: FC = () => {
  const containerRef = useRef(null);
  const contactContainerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="relative z-10 overflow-x-clip overflow-y-visible bg-[radial-gradient(75.22%_75.22%_at_20.49%_12.79%,#FFFFFF_0%,rgba(228,231,233,0.502295)_100%)]"
    >
      <div className="relative z-20 mx-auto max-w-7xl" id="projects">
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
            <p className="text-6xl font-semibold tracking-[-0.03em] text-dark">
              Look at My Projects.
            </p>
          </motion.div>

          <div className="mt-20 flex flex-col gap-y-8">
            {showcases.map((sc, index) => (
              <ShowcastList key={index} showcases={sc} />
            ))}
          </div>
        </section>
      </div>

      <ShowcaseShapes container={containerRef} />

      <div ref={contactContainerRef} className="mx-auto max-w-7xl" id="contact">
        <section className="relative px-32 py-20">
          <div className="relative flex w-full justify-start rounded-3xl bg-white px-24 py-40">
            <div className="flex flex-col gap-y-20">
              <div>
                <div className="flex items-center gap-x-4">
                  <div className="h-0.5 w-12 bg-primary"></div>

                  <h2 className="text-xl font-semibold text-primary">Rezuan Kassim</h2>
                </div>

                <div className="mt-6 max-w-xs">
                  <p className="text-6xl font-semibold tracking-[-0.03em] text-dark">
                    Let&apos;s Work Together.
                  </p>
                </div>

                <div className="mt-10 max-w-xs text-lg text-gray">
                  I&apos;d love to meet up with you to discuss your venture, and potential
                  collaborations.
                </div>
              </div>

              <div className="flex flex-col gap-y-10">
                <div className="flex items-center gap-x-10">
                  <span className="text-primary">
                    <Email />
                  </span>

                  <span className="text-lg text-dark">rezuankassim@hotmail.com</span>
                </div>

                <div className="flex items-center gap-x-10">
                  <span className="text-primary">
                    <PinMap />
                  </span>

                  <span className="text-lg text-dark">Tawau, Sabah</span>
                </div>

                <div className="flex items-center gap-x-10">
                  <span className="text-primary">
                    <Phone />
                  </span>

                  <span className="text-lg text-dark">+60 18-266 4733</span>
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 top-[580px] -z-10 h-[300px] w-[950px] -translate-x-1/2 rounded-3xl bg-primary-blue-2"></div>
            <div className="absolute left-1/2 top-[598px] -z-20 h-[300px] w-[890px] -translate-x-1/2 rounded-3xl bg-primary-blue-3"></div>
          </div>

          <ContactShapes container={contactContainerRef} />
        </section>
      </div>

      <div className="mx-auto mt-6 max-w-7xl">
        <div className="px-32">
          <div className="flex justify-between">
            <div className="flex max-w-xl flex-col gap-y-12">
              <p className="text-5xl font-semibold tracking-[-0.03125em] text-white">
                You only have one chance to make a first impression.
              </p>

              <p className="text-3xl font-semibold tracking-[-0.009375em] text-accent-3">
                Let’s make it an amazing one.
              </p>
            </div>

            <nav className="flex list-none flex-col gap-y-5 text-lg font-medium text-white">
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </nav>
          </div>

          <Separator className="my-11 bg-line-footer" />

          <div className="flex items-center justify-between font-medium text-white">
            <span>Made By Rezuan Kassim.</span>

            <button type="button" onClick={() => scrollToTop()}>
              Back to top
            </button>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-12 right-0 -z-30 h-1/4 w-full bg-dark [clip-path:polygon(0_340px,100%_0,100%_100%,0_100%)]"></div>
    </div>
  );
};

export default ShowcaseSection;
