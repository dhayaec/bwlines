import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import HeaderMenu from '../components/HeaderMenu';
import { getRandomJoke } from '../api/random-jokes';
import DumbComponent from '../components/DumbComponent';

interface HomeProps {}

interface HomeState {
  joke: JokeResponse;
  loading: boolean;
}

class Home extends React.Component<HomeProps & RouteComponentProps, HomeState> {
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

  renderJoke(): JSX.Element {
    const { joke, loading } = this.state;
    if (loading) {
      return <p>Loading ...</p>;
    }
    if (joke.value !== '') {
      return (
        <div>
          <p>{joke.value}</p>
          <p>
            <img src={joke.icon_url} alt={joke.value} />
          </p>
          <p>{joke.value}</p>
          <p>{joke.id}</p>
          <DumbComponent name="Some" />
        </div>
      );
    }
    return <p>No Joke</p>;
  }

  componentWillUnmount() {
    this.isCancelled = true;
  }

  public render(): JSX.Element {
    return (
      <div>
        <HeaderMenu />
        <h1>Hello</h1>
        <h2>Welcome to my website</h2>
        <button onClick={this.loadJoke}>Load more</button>
        {this.renderJoke()}
      </div>
    );
  }
}

export default Home;
