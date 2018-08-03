import * as React from 'react';
import SignUpForm from '../forms/SignUpForm';
import { RouteComponentProps } from '@reach/router';

interface ContactProps {}

interface ContactState {}

class Contact extends React.Component<
  ContactProps & RouteComponentProps,
  ContactState
> {
  public render(): JSX.Element {
    return (
      <div>
        <SignUpForm title="Sign up" />
      </div>
    );
  }
}

export default Contact;
