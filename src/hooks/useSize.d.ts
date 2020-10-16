export interface UseResizeProps {
  widthLen: number;
  heightLen: number;
}

export interface UseResizeFunc {
  (props: UseResizeProps): number[];
}

export interface Rectangle {
  width: number;
  height: number;
}

export interface Get2SizeFunc {
  (
    params: {
      borderW: number;
      borderH: number;
      widthLen: number;
      heightLen: number;
    }
  ): {
    hBaseSize: Rectangle;
    wBaseSize: Rectangle;
  };
}
