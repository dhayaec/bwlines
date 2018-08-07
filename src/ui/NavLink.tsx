import { Link, LinkGetProps } from '@reach/router';
import * as React from 'react';

class NavLink extends React.PureComponent<any> {
  getProps = ({ isPartiallyCurrent, isCurrent, href }: LinkGetProps) => {
    const current = href === '/' ? isCurrent : isPartiallyCurrent;
    return {
      style: {
        color: current ? 'red' : 'blue',
      },
    };
  }

  public render(): JSX.Element {
    return <Link {...this.props} getProps={this.getProps} />;
  }
}

export default NavLink;
