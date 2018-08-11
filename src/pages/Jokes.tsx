import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { getRandomJoke } from '../api/random-jokes';
import RenderJoke from '../blocks/RenderJoke';
import HeaderMenu from '../components/HeaderMenu';

interface JokesProps {
  categoryName?: string;
}

class Jokes extends React.Component<JokesProps & RouteComponentProps> {
  state = {
    joke: {} as JokeResponse,
    loading: false,
  };

  isCancelled = false;

  loadJoke = async () => {
    const { categoryName } = this.props;
    this.setState({ loading: true });
    const joke = await getRandomJoke({ category: categoryName });
    if (!this.isCancelled) {
      this.setState({ joke, loading: false });
    }
  }

  async componentDidMount() {
    await this.loadJoke();
    this.setState({ loading: false });
  }

  componentWillUnmount() {
    this.isCancelled = true;
  }

  public render(): JSX.Element {
    const { categoryName = '' } = this.props;
    const { joke, loading } = this.state;
    return (
      <div>
        <HeaderMenu />
        <h1>Jokes</h1>
        <button onClick={this.loadJoke}>Refresh</button>
        <p>{categoryName}</p>
        <RenderJoke joke={joke} loading={loading} />
      </div>
    );
  }
}

export default Jokes;
