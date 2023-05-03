'use client';

import {FC, useRef} from 'react';
import SlideTop from './SlideTop';
import WorkShapes from './WorkShapes';
import {easeInOut, motion} from 'framer-motion';

const WorkSection: FC = () => {
  const sectionRef = useRef(null);

  return (
    <div className="relative overflow-clip bg-primary-blue-3">
      <div className="mx-auto max-w-7xl">
        <section ref={sectionRef} className="relative mt-20 px-32 py-56">
          <div className="relative z-30">
            <div className="max-w-3xl">
              <SlideTop>
                <div className="flex items-center gap-x-4">
                  <div className="h-0.5 w-12 bg-accent-3"></div>

                  <h2 className="text-xl font-semibold text-accent-3">Who I Work With</h2>
                </div>
              </SlideTop>

              <div className="mt-6 flex flex-col gap-y-12">
                <motion.div
                  initial={{translateY: '30px', opacity: 0}}
                  whileInView={{translateY: 0, opacity: 1}}
                  transition={{duration: 0.4, delay: 0.4, ease: easeInOut}}
                  viewport={{once: true}}
                  className="flex gap-x-8"
                >
                  <div className="flex w-40 flex-col">
                    <span className="text-2xl font-semibold tracking-[-0.009em] text-white">
                      Sans Paper
                    </span>
                    <div className="mt-1">
                      <span className="block text-xs text-white/50">Full Stack Developer</span>
                      <span className="block text-xs text-white/50">Nov 2022 — Feb 2023</span>
                    </div>
                  </div>

                  <ul className="flex flex-1 list-disc flex-col gap-y-2 text-lg text-white">
                    <li>
                      Maintained existing system and enhanced the system with new features and new
                      requirements.
                    </li>
                    <li>
                      Revamped existing system to using other technology, to better align with the
                      company&apos;s visions on technology stacks.
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{translateY: '30px', opacity: 0}}
                  whileInView={{translateY: 0, opacity: 1}}
                  transition={{duration: 0.4, delay: 0.4 * 2, ease: easeInOut}}
                  viewport={{once: true}}
                  className="flex gap-x-8"
                >
                  <div className="flex w-40 flex-col">
                    <span className="text-2xl font-semibold tracking-[-0.009em] text-white">
                      EasyParcel
                    </span>
                    <div className="mt-1">
                      <span className="block text-xs text-white/50">Frontend Developer</span>
                      <span className="block text-xs text-white/50">Oct 2021 — Sep 2022</span>
                    </div>
                  </div>

                  <ul className="flex flex-1 list-disc flex-col gap-y-2 text-lg text-white">
                    <li>
                      Led a small front-end developer team, helped them to clear their doubts in
                      their heads when doing their tasks, and brainstormed about the new features to
                      be implemented.
                    </li>
                    <li>
                      Revamped the current website using frameworks such as Vue.js and Node.js to
                      let the developer not need to learn the legacy framework the company built
                      years ago.
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{translateY: '30px', opacity: 0}}
                  whileInView={{translateY: 0, opacity: 1}}
                  transition={{duration: 0.4, delay: 0.4 * 3, ease: easeInOut}}
                  viewport={{once: true}}
                  className="flex gap-x-8"
                >
                  <div className="flex w-40 flex-col">
                    <span className="text-2xl font-semibold tracking-[-0.009em] text-white">
                      Convep Mobilogy
                    </span>
                    <div className="mt-1">
                      <span className="block text-xs text-white/50">Laravel (PHP) Developer</span>
                      <span className="block text-xs text-white/50">Oct 2019 — Oct 2021</span>
                    </div>
                  </div>

                  <ul className="flex flex-1 list-disc flex-col gap-y-2 text-lg text-white">
                    <li>
                      Maintained the existing system and enhanced the system to be able to process
                      more than 1,000 requests in a matter of minutes.
                    </li>
                    <li>
                      Developed an in-house analytic system to enable higher-ups to view analytics
                      from multiple applications from a centralized system.
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{translateY: '30px', opacity: 0}}
                  whileInView={{translateY: 0, opacity: 1}}
                  transition={{duration: 0.4, delay: 0.4 * 4, ease: easeInOut}}
                  viewport={{once: true}}
                  className="flex gap-x-8"
                >
                  <div className="flex w-40 flex-col">
                    <span className="text-2xl font-semibold tracking-[-0.009em] text-white">
                      Convep Mobilogy
                    </span>
                    <div className="mt-1">
                      <span className="block text-xs text-white/50">Programmer Internship</span>
                      <span className="block text-xs text-white/50">Jun 2019 — Sep 2021</span>
                    </div>
                  </div>

                  <ul className="flex flex-1 list-disc flex-col gap-y-2 text-lg text-white">
                    <li>
                      Developed a system to grow my knowledge in Laravel framework and the whole
                      workflow of the development cycle in the company.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="absolute left-0 top-0 z-20 h-full w-full bg-dark/50"></div>

      <WorkShapes target={sectionRef} />
    </div>
  );
};

export default WorkSection;
