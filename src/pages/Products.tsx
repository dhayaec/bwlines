import { Link, RouteComponentProps } from '@reach/router';
import * as React from 'react';
import { getJokeCategories } from '../api/random-jokes';
import RenderCategories from '../blocks/RenderCategories';
import HeaderMenu from '../components/HeaderMenu';
import productsList from '../data/productsList';

interface ProductsProps {}

interface ProductsState {}

class Products extends React.Component<
  ProductsProps & RouteComponentProps,
  ProductsState
> {
  state = {
    loading: false,
    categories: [],
  };

  isCancelled = false;

  loadCategories = async () => {
    this.setState({ loading: true });
    const categories = await getJokeCategories();
    if (categories && !this.isCancelled) {
      this.setState({ categories, loading: false });
    }
  }

  async componentDidMount() {
    await this.loadCategories();
  }

  componentWillUnmount() {
    this.isCancelled = true;
  }

  public render(): JSX.Element {
    const { categories, loading } = this.state;
    return (
      <div>
        <HeaderMenu />
        <h1>Hello Products</h1>
        <h2>Welcome to my website</h2>
        <ul>
          {productsList.length > 0 &&
            productsList.map(item => (
              <li key={item.id}>
                <Link to={`/products/${item.id}`} children={item.name} />
              </li>
            ))}
        </ul>

        <div>
          <p>Joke Categories</p>
          <RenderCategories categories={categories} loading={loading} />
        </div>
      </div>
    );
  }
}

export default Products;
