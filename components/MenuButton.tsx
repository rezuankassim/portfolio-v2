'use client';

import {FC} from 'react';
import {motion} from 'framer-motion';
import {useMenuStore} from '@/store';

const MenuButton: FC = () => {
  const isOpened = useMenuStore(state => state.isOpened);
  const toggleOpen = useMenuStore(state => state.toggleOpen);

  return (
    <button
      type="button"
      className="relative flex h-6 w-8 flex-col gap-y-2"
      onClick={() => {
        toggleOpen();
      }}
    >
      <motion.div
        animate={{
          rotate: isOpened ? 45 : 0,
          translateY: isOpened ? 5 : 0,
          width: isOpened ? 20 : '100%',
        }}
        transition={{ease: 'easeInOut'}}
        className="h-0.5 w-full bg-white"
      ></motion.div>
      <motion.div
        animate={{
          rotate: isOpened ? -45 : 0,
          translateY: isOpened ? -5 : 0,
          width: isOpened ? 20 : '100%',
        }}
        transition={{ease: 'easeInOut'}}
        className="h-0.5 w-full bg-white"
      ></motion.div>

      {isOpened && (
        <div className="absolute left-0 top-0 -z-10 -ml-[18px] -mt-[21px] h-14 w-14 rounded-full bg-primary"></div>
      )}
    </button>
  );
};

export default MenuButton;
