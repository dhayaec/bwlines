import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import HeaderMenu from '../components/HeaderMenu';

interface NotFoundProps {}

interface NotFoundState {}

class NotFound extends React.Component<
  NotFoundProps & RouteComponentProps,
  NotFoundState
> {
  public render(): JSX.Element {
    return (
      <div>
        <HeaderMenu />
        <h1>Page Not Found</h1>
      </div>
    );
  }
}

export default NotFound;
