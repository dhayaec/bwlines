import { JOKES_API_HOST } from './../config';

export function getRandomJoke(): Promise<JokeResponse> {
  return fetch(JOKES_API_HOST + '/jokes/random')
    .then(res => res.json())
    .catch(err => console.log(err));
}
