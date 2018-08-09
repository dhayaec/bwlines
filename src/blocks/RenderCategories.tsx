import { Link } from '@reach/router';
import * as React from 'react';

interface RenderCategoriesProps {
  categories: string[];
  loading: boolean;
}

class RenderCategories extends React.PureComponent<RenderCategoriesProps> {
  public render(): JSX.Element {
    const { categories, loading } = this.props;
    if (loading) {
      return <p>Loading...</p>;
    }
    if (categories.length) {
      return (
        <div>
          <ul>
            {categories.map(
              x =>
                x && (
                  <li key={x}>
                    <Link to={`/jokes/${x}`}>{x}</Link>
                  </li>
                )
            )}
          </ul>
        </div>
      );
    }
    return <span />;
  }
}

export default RenderCategories;
