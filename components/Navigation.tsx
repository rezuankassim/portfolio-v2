'use client';

import Image from 'next/image';
import {FC} from 'react';
import NavLink from './NavLink';
import MenuButton from './MenuButton';
import Github from './icons/Github';
import LinkedIn from './icons/LinkedIn';

const Navigation: FC = () => {
  return (
    <nav className="flex items-center justify-between px-32 pt-16">
      <div className="flex items-center gap-x-20">
        <a href="/">
          <span className="text-2xl font-bold text-dark">
            Rez <span className="text-accent-3">.</span>
          </span>
        </a>

        <div className="flex items-center gap-x-16">
          <NavLink
            icon={<Github />}
            alt="Github Logo"
            title="Github"
            link="https://github.com/rezuankassim"
          />

          <NavLink
            icon={<LinkedIn />}
            alt="Linked Logo"
            title="LinkedIn"
            link="https://www.linkedin.com/in/rezuan-kassim/"
          />
        </div>
      </div>

      <MenuButton />
    </nav>
  );
};

export default Navigation;
