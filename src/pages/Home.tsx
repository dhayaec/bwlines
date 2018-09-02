import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { Avatar, Button, NavItem } from 'rebass';
import { getRandomJoke } from '../api/random-jokes';
import RenderJoke from '../blocks/RenderJoke';
import HeaderMenu from '../components/HeaderMenu';
import { Title } from '../components/Title';

interface HomeProps {}

class Home extends React.Component<HomeProps & RouteComponentProps> {
  state = {
    joke: {} as JokeResponse,
    loading: false,
  };

  isCancelled = false;

  loadJoke = async () => {
    this.setState({ loading: true });
    const joke = await getRandomJoke();
    if (!this.isCancelled) {
      this.setState({ joke, loading: false });
    }
  }

  async componentDidMount() {
    await this.loadJoke();
  }

  componentWillUnmount() {
    this.isCancelled = true;
  }

  public render(): JSX.Element {
    const { joke, loading } = this.state;
    return (
      <div>
        <HeaderMenu />
        <Title>Hello World!</Title>
        <Button>Test Button</Button>
        <Avatar
          size={32}
          src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
        />
        <NavItem children="Hello" />
        <h1>Hello</h1>
        <h2>Welcome to my website</h2>
        <button onClick={this.loadJoke}>Refresh</button>
        <RenderJoke joke={joke} loading={loading} />
      </div>
    );
  }
}

export default Home;
