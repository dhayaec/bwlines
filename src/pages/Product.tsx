import { RouteComponentProps } from '@reach/router';
import { normalize, schema } from 'normalizr';
import * as React from 'react';
import HeaderMenu from '../components/HeaderMenu';
import productsList from '../data/productsList';

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

class Product extends React.Component<ProductProps & RouteComponentProps> {
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
