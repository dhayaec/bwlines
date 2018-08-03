import * as React from 'react';
import { Link } from '@reach/router';

interface HeaderMenuProps {}

interface HeaderMenuState {}

class HeaderMenu extends React.PureComponent<HeaderMenuProps, HeaderMenuState> {
  public render(): JSX.Element {
    return (
      <ul style={{ listStyle: 'inline' }}>
        <li>
          <Link to="/" children="Home" />
        </li>
        <li>
          <Link to="/about" children="About" />
        </li>
        <li>
          <Link to="/contact" children="Contact" />
        </li>
        <li>
          <Link to="/products" children="Products" />
        </li>
        <li>
          <Link to="/cart" children="Cart" />
        </li>
      </ul>
    );
  }
}

export default HeaderMenu;
