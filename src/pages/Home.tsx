import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { Arrow, Avatar, Block, Button, InlineFlex, styled } from 'reakit';
import { getRandomJoke } from '../api/random-jokes';
import RenderJoke from '../blocks/RenderJoke';
import HeaderMenu from '../components/HeaderMenu';
import { Title } from '../components/Title';

interface HomeProps {}

//hgh

const ButtonRounded = styled(Button)`
  border-radius: 1.25em;
  padding: 0 1.375em;
  background-color: orangered;
  color: white;
`;

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
        <Button as="a" href="https://github.com/reakit/reakit" target="_blank">
          GitHub
        </Button>
        <ButtonRounded>Rounded</ButtonRounded>
        <h1>Hello</h1>
        <h2>Welcome to my website</h2>
        <InlineFlex justifyContent="space-between" width="100%">
          <Block
            width="33%"
            height="100px"
            backgroundColor="rgb(219, 112, 147)"
          />
          <Block
            width="33%"
            height="100px"
            backgroundColor="rgb(219, 112, 198)"
          />
          <Block
            width="33%"
            height="100px"
            backgroundColor="rgb(205, 112, 219)"
          />
        </InlineFlex>
        <button onClick={this.loadJoke}>Refresh</button>
        <Arrow />

        <Avatar
          src="https://placekitten.com/150/200"
          alt="Kitten"
          fontSize={40}
        />
        <RenderJoke joke={joke} loading={loading} />
      </div>
    );
  }
}

export default Home;
