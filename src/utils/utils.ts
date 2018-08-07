export const add = (...args: number[]) => args.reduce((p, c) => p + c, 0);

export const getType = (v: any): string => {
  if (v === undefined) {
    return 'undefined';
  }
  if (v === null) {
    return 'null';
  }
  return v.constructor.name.toLowerCase();
};
