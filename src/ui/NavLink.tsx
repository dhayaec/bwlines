import * as React from 'react';
import { Link } from '@reach/router';

class NavLink extends React.PureComponent<any> {
  public render(): JSX.Element {
    return (
      <Link
        {...this.props}
        getProps={({ isPartiallyCurrent, isCurrent, href }) => {
          const current = href === '/' ? isCurrent : isPartiallyCurrent;
          return {
            style: {
              color: current ? 'red' : 'blue',
            },
          };
        }}
      />
    );
  }
}

export default NavLink;
