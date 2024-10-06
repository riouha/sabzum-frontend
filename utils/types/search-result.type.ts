type Base<T> = {
  [K in keyof T]: T[K];
};

export type SearchResult<T> = Base<T> & { count: number };
