import * as React from 'react';

interface RenderJokeProps {
  joke: JokeResponse;
  loading?: boolean;
}

class RenderJoke extends React.PureComponent<RenderJokeProps> {
  public render(): JSX.Element {
    const { joke, loading = false } = this.props;
    if (loading) {
      return <p>Loading ...</p>;
    }
    if (joke.value !== '') {
      return (
        <div>
          <p>
            <img src={joke.icon_url} alt={joke.value} />
          </p>
          <blockquote>{joke.value}</blockquote>
          {joke.category && <i>{joke.category}</i>}
          <p>{joke.id}</p>
        </div>
      );
    }
    return <p>No Joke</p>;
  }
}

export default RenderJoke;
