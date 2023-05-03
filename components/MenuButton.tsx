'use client';

import {FC, useState} from 'react';
import {motion} from 'framer-motion';

const MenuButton: FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <button
      type="button"
      className="flex h-6 w-8 flex-col gap-y-2"
      onClick={() => setActive(val => !val)}
    >
      <motion.div
        animate={{rotate: active ? 45 : 0, translateY: active ? 5 : 0, width: active ? 20 : '100%'}}
        transition={{ease: 'easeInOut'}}
        className="h-0.5 w-full bg-white"
      ></motion.div>
      <motion.div
        animate={{
          rotate: active ? -45 : 0,
          translateY: active ? -5 : 0,
          width: active ? 20 : '100%',
        }}
        transition={{ease: 'easeInOut'}}
        className="h-0.5 w-full bg-white"
      ></motion.div>
    </button>
  );
};

export default MenuButton;
