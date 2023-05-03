import {FC, ReactNode} from 'react';

export type NavLinkProps = {
  icon: ReactNode;
  alt?: string;
  title: string;
};

const NavLink: FC<NavLinkProps> = ({icon, alt = 'Some Logo', title}) => {
  return (
    <a href="#" className="flex items-center gap-x-3 text-dark hover:text-deactive">
      {icon}

      <span className="font-medium">{title}</span>
    </a>
  );
};

export default NavLink;
