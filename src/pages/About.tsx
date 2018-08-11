import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import HeaderMenu from '../components/HeaderMenu';

interface AboutProps {}

class About extends React.Component<AboutProps & RouteComponentProps> {
  public render(): JSX.Element {
    return (
      <div>
        <HeaderMenu />
        <h1>About</h1>
        <h2>Welcome to my About</h2>
      </div>
    );
  }
}

export default About;
