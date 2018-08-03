import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import HeaderMenu from '../components/HeaderMenu';

interface AboutProps {}

interface AboutState {}

class About extends React.Component<
  AboutProps & RouteComponentProps,
  AboutState
> {
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
