import { TVList } from './TVList';

export class TVListResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: TVList;
}
