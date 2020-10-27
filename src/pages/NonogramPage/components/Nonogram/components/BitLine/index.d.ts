export type Direction = 'horizontal' | 'vertical';

export interface BitLinePropsType<T> {
  data: T[];
  direction: Direction;
}
