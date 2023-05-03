import Image from 'next/image';
import {FC} from 'react';
import NavLink from './NavLink';
import MenuButton from './MenuButton';
import Dribbble from './icons/Dribbble';
import Instagram from './icons/Instagram';

const Navigation: FC = () => {
  return (
    <nav className="flex items-center justify-between px-16 pt-16">
      <div className="flex items-center gap-x-20">
        <Image src="/Light-Mode.svg" alt="Logo" width={174} height={32} />

        <div className="flex items-center gap-x-16">
          <NavLink icon={<Dribbble />} alt="Dribbble Logo" title="Dribbble" />

          <NavLink icon={<Instagram />} alt="Instagram Logo" title="Instagram" />
        </div>
      </div>

      <MenuButton />
    </nav>
  );
};

export default Navigation;
