import { CATEGORIES_CACHE_KEY, JOKES_API_HOST } from './../config';

export function getRandomJoke({ category = '' }: JokeGetArgs = {}): Promise<
  JokeResponse
> {
  const filter = category ? '?category=' + category : '';
  return (
    fetch(`${JOKES_API_HOST}/jokes/random${filter}`)
      .then(res => res.json())
      // tslint:disable-next-line:no-console
      .catch(e => console.log(e))
  );
}

export function getJokeCategories(): Promise<string[]> {
  let cached: any;
  try {
    cached = localStorage.getItem(CATEGORIES_CACHE_KEY);
    if (cached && cached.length) {
      const categoriesList = JSON.parse(cached);
      return new Promise(resolve => resolve(categoriesList));
    }
    return (
      fetch(`${JOKES_API_HOST}/jokes/categories`)
        .then(res => res.json())
        .then(data => {
          try {
            localStorage.setItem(CATEGORIES_CACHE_KEY, JSON.stringify(data));
          } catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
            return data;
          }
          return data;
        })
        // tslint:disable-next-line:no-console
        .catch(e => console.log(e))
    );
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
  return new Promise(resolve => resolve([]));
}

export function searchJokes({ q }: JokeSearchArgs): Promise<JokesList> {
  return (
    fetch(`${JOKES_API_HOST}/jokes/search?query=${q}`)
      .then(res => res.json())
      // tslint:disable-next-line:no-console
      .catch(e => console.log(e))
  );
}
