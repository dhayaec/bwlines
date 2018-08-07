export const add = (...args: number[]) => args.reduce((p, c) => p + c, 0);

export const getType = (v: any): string =>
  v === undefined
    ? 'undefined'
    : v === null
      ? 'null'
      : v.constructor.name.toLowerCase();
