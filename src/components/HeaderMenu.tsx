import * as React from 'react';
import NavLink from '../ui/NavLink';

interface HeaderMenuProps {}

interface HeaderMenuState {}

const links: LinkOptions[] = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'About',
    link: '/about',
  },
  {
    id: 3,
    name: 'Contact',
    link: '/contact',
  },
  {
    id: 4,
    name: 'Products',
    link: '/products',
  },
  {
    id: 5,
    name: 'Cart',
    link: '/cart',
  },
];

class HeaderMenu extends React.PureComponent<HeaderMenuProps, HeaderMenuState> {
  public render(): JSX.Element {
    return (
      <ul style={{ listStyle: 'inline' }}>
        {links.map(item => (
          <li key={item.id}>
            <NavLink to={item.link} children={item.name} />
          </li>
        ))}
      </ul>
    );
  }
}

export default HeaderMenu;
