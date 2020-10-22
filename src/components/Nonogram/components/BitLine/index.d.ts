export type BitData = number[];

export type Direction = 'horizontal' | 'vertical';

export interface BitLinePropsType {
  data: BitData[];
  direction: Direction;
}
