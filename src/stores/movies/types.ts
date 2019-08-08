export interface MoviesState {
  loading: boolean,
  error: string | null,
  moviesList: object[],
}

export interface ErrorPayload {
  payload: string | null
}

export interface MoviesPayload {
  payload: object[]
}