import * as React from 'react';

interface UserProps {
  user: UserObject;
  onClick: (id: number) => any;
}

interface UserState {}

class User extends React.PureComponent<UserProps, UserState> {
  onDeleteClick = () => {
    this.props.onClick(this.props.user.id);
  }

  public render(): JSX.Element {
    const { name } = this.props.user;
    return (
      <li>
        <input type="button" value="Delete" onClick={this.onDeleteClick} />
        {name}
      </li>
    );
  }
}

export default User;
