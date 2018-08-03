import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import HeaderMenu from '../components/HeaderMenu';

interface HomeProps {}

interface HomeState {}

class Home extends React.Component<HomeProps & RouteComponentProps, HomeState> {
  public render(): JSX.Element {
    return (
      <div>
        <HeaderMenu />
        <h1>Hello</h1>
        <h2>Welcome to my website</h2>
      </div>
    );
  }
}

export default Home;
