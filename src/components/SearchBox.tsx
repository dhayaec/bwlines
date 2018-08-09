import { debounce } from 'lodash';
import * as React from 'react';
interface SearchBoxProps {}

interface SearchBoxState {}

class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
  state = {
    q: '',
  };

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { currentTarget } = e;
    const { name, value } = currentTarget;
    this.setState({ [name]: value });
    this.callSearch(value || '');
  }

  componentDidMount() {
    this.callSearch = debounce(this.callSearch, 500);
  }

  callSearch = (value: string) => {
    if (value.length) {
      // tslint:disable-next-line:no-console
      console.log(value);
    }

    // tslint:disable-next-line:no-console
    console.log('called');
  }

  public render(): JSX.Element {
    const { q } = this.state;
    return (
      <div>
        <input type="text" name="q" onChange={this.onChange} value={q} />
      </div>
    );
  }
}

export default SearchBox;
