export interface UseResizeProps {
  hLen: number;
  vLen: number;
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
      hLen: number;
      vLen: number;
    }
  ): {
    hBaseSize: Rectangle;
    wBaseSize: Rectangle;
  };
}
