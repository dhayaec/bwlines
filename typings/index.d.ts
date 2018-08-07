declare module '*.svg';
declare module '*.png';
declare module '*.jpg';

interface LinkOptions {
  id: number;
  name: string;
  link: string;
}

interface JokeResponse {
  category?: null;
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

interface UserObject {
  id: number;
  name: string;
}
