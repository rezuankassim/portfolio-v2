import {FC, ReactNode} from 'react';

export type NavLinkProps = {
  icon: ReactNode;
  alt?: string;
  title: string;
  link?: string;
};

const NavLink: FC<NavLinkProps> = ({icon, alt = 'Some Logo', title, link = '#'}) => {
  return (
    <a
      href={link}
      className="flex items-center gap-x-3 text-dark hover:text-deactive"
      target="_blank"
    >
      {icon}

      <span className="font-medium">{title}</span>
    </a>
  );
};

export default NavLink;
