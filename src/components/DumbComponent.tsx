import * as React from 'react';

interface DumbComponentProps {
  name: string;
}

interface DumbComponentState {}

class DumbComponent extends React.Component<
  DumbComponentProps,
  DumbComponentState
> {
  public render(): JSX.Element {
    return <span>{this.props.name}</span>;
  }
}

export default DumbComponent;
