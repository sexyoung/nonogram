import { useEffect, useState } from 'react';
import * as d from './useSize.d';

const get2Size: d.Get2SizeFunc = params => {
  return {
    wBaseSize: {
      width: params.borderW,
      height: params.borderW / params.widthLen * params.heightLen,
    },
    hBaseSize: {
      width: params.borderH / params.heightLen * params.widthLen,
      height: params.borderH,
    },
  }
}

export const useResize: d.UseResizeFunc = (
  { widthLen ,heightLen }: d.UseResizeProps
): number[] => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    let curWidth = 0;
    let curHeight = 0;
    /** 直向大小 */
    function resize() {
      let width = 0;
      let height = 0;
      const {
        innerWidth: borderW,
        innerHeight: borderH,
      } = window;
      
      // 取得以寬、以高為基礎的寬高
      // 取寬高都小於視窗的size
      const { wBaseSize, hBaseSize } = get2Size({
        borderW,
        borderH,
        widthLen,
        heightLen,
      });

      if(wBaseSize.width <= borderW && wBaseSize.height <= borderH) {
        width = wBaseSize.width;
        height = wBaseSize.height;
      } else {
        width = hBaseSize.width;
        height = hBaseSize.height;
      }

      if(curWidth !== width || curHeight !== height) {
        setSize([ width, height ]);
        curWidth = width;
        curHeight = height;
      }
    }
    window.addEventListener('resize', resize);
    resize();
    return () => window.removeEventListener('resize', resize);
  }, []);
  return size;
}
