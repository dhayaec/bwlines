import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { getRandomJoke } from '../api/random-jokes';
import RenderJoke from '../blocks/RenderJoke';
import HeaderMenu from '../components/HeaderMenu';

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
        <h1>Hello</h1>
        <h2>Welcome to my website</h2>
        <button onClick={this.loadJoke}>Refresh</button>
        <RenderJoke joke={joke} loading={loading} />
      </div>
    );
  }
}

export default Home;
