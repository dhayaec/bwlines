import debounce from 'lodash-es/debounce';
import * as React from 'react';
import { searchJokes } from '../api/random-jokes';
import RenderJoke from '../blocks/RenderJoke';
interface SearchBoxProps {}

class SearchBox extends React.Component<SearchBoxProps> {
  state = {
    q: '',
    loading: false,
    results: {} as JokesList,
  };

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { currentTarget } = e;
    const { name, value } = currentTarget;
    this.setState({ [name]: value });
    this.callSearch(value);
  }

  componentDidMount() {
    this.callSearch = debounce(this.callSearch, 500);
  }

  callSearch = async (value: string) => {
    if (value.length > 2) {
      this.setState({ loading: true });
      const results = await searchJokes({ q: value });
      this.setState({ results, loading: false });
    }
  }

  public render(): JSX.Element {
    const {
      q,
      loading,
      results: { total = 0, result = [] },
    } = this.state;
    return (
      <div>
        <input type="text" name="q" onChange={this.onChange} value={q} />
        {loading && <span> Loading...</span>}
        {result.length > 0 && ` Total ${total}`}
        {result.map(x => {
          return <RenderJoke key={x.id} joke={x} />;
        })}
      </div>
    );
  }
}

export default SearchBox;
