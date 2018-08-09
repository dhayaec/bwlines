import * as React from 'react';

interface RenderJokeProps {
  joke: JokeResponse;
  loading: boolean;
}

class RenderJoke extends React.PureComponent<RenderJokeProps> {
  public render(): JSX.Element {
    const { joke, loading } = this.props;
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
        </div>
      );
    }
    return <p>No Joke</p>;
  }
}

export default RenderJoke;
