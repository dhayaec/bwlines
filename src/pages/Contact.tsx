import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import HeaderMenu from '../components/HeaderMenu';
import SignUpForm from '../forms/SignUpForm';

interface ContactProps {}

interface ContactState {}

class Contact extends React.Component<
  ContactProps & RouteComponentProps,
  ContactState
> {
  public render(): JSX.Element {
    return (
      <div>
        <HeaderMenu />
        <SignUpForm title="Sign up" />
      </div>
    );
  }
}

export default Contact;
