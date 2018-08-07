import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import HeaderMenu from '../components/HeaderMenu';
import productsList from '../data/products';
import { normalize, schema } from 'normalizr';

const productEntity = new schema.Entity('products');

const productsStore = normalize(
  { products: productsList },
  {
    products: [productEntity],
  }
);

interface ProductProps {
  productId?: string;
}

interface ProductState {}

class Product extends React.Component<
  ProductProps & RouteComponentProps,
  ProductState
> {
  public render(): JSX.Element {
    const { productId = 0 } = this.props;
    const {
      entities: { products },
    } = productsStore;

    return (
      <div>
        <HeaderMenu />
        <h1>product {productId}</h1>
        {products[productId] && <p>{products[productId].name}</p>}
      </div>
    );
  }
}

export default Product;
