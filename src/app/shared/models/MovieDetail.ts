export interface MovieDetail {
  adult: boolean;
  backdrop_path?: string;
  belongs_to_collection?: {};
  budget: number;
  genres: Genres[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path?: string;
  production_companies: ProductionCompanies;
  production_countries: ProductionCountries;
  release_date: string;
  format: Date;
  revenue: number;
  runtime?: number;
  spoken_languages: SpokenLanguage;
  status: string; // Allowed Values: Rumored, Planned, In Production, Post Production, Released, Canceled
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genres {
  id: number;
  name: string;
}

export interface ProductionCompanies {
  name: string;
  id: number;
  logo_path?: string;
  origin_country: string;
}

export interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}
