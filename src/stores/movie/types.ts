export interface MovieState {
  loading: boolean,
  error: string | null,
  movie: object,
}

export interface ErrorPayload {
  payload: string | null
}

export interface MoviePayload {
  payload: object
}

