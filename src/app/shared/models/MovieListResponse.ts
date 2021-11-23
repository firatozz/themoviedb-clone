import { MovieList } from './MovieList';

export interface MovieListResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results?: MovieList[];
}
