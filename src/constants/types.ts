export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
};

export type GenreType = {
  id: number;
  name: string;
};

export type PageInfo = {
  currentPage: number;
  totalPages: number;
};
