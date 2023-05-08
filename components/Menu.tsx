'use client';

import {FC} from 'react';
import {RemoveScroll} from 'react-remove-scroll';
import Email from './icons/Email';
import PinMap from './icons/PinMap';
import {Phone} from 'lucide-react';
import {useMenuStore} from '@/store';
import {AnimatePresence, motion} from 'framer-motion';
import MenuButton from './MenuButton';
import Image from 'next/image';

const Menu: FC = () => {
  const opened = useMenuStore(state => state.isOpened);
  const toggleOpen = useMenuStore(state => state.toggleOpen);

  return (
    <AnimatePresence>
      {opened && (
        <RemoveScroll>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 flex h-screen w-screen bg-white"
          >
            <div className="h-full w-1/4 bg-dark">
              <Image src="/bg-header.png" alt="Shape" width={500} height={500} />
            </div>

            <div className="flex flex-1 items-center justify-center">
              <div className="flex gap-x-28">
                <div className="flex flex-col gap-y-8">
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

                <div className="flex flex-col gap-y-4">
                  <a
                    href="#projects"
                    className="block text-5xl font-semibold tracking-[-0.03125em] text-dark duration-300 hover:text-primary"
                    onClick={() => toggleOpen()}
                  >
                    Projects
                  </a>

                  <a
                    href="#contact"
                    className="block text-5xl font-semibold tracking-[-0.03125em] text-dark duration-300 hover:text-primary"
                    onClick={() => toggleOpen()}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute top-0 w-screen">
              <div className="mx-auto flex w-screen items-center justify-between px-32 pt-16">
                <a href="/">
                  <span className="text-2xl font-bold text-white">
                    Rez <span className="text-accent-3">.</span>
                  </span>
                </a>

                <MenuButton />
              </div>
            </div>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
};

export default Menu;
