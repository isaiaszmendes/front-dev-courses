/*
 * Actions Types
 */
export enum CoursesTypes {
  LOAD_REQUEST = '@courses/LOAD_REQUEST',
  LOAD_SUCCESS = '@courses/LOAD_SUCCESS',
  LOAD_FAILURE = '@courses/LOAD_FAILURE',
}

/**
 * Data Types
 */

export interface Course {
  id: number
  name: string
  description: string
  teacher: string
  price: number
}

/**
 * State Types
 */
export interface CoursesState {
  readonly data: Course[]
  readonly loading: boolean
  readonly error: object | null
}
