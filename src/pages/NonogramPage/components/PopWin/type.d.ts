import { NonogramData } from "type";

interface OwnProp {
  onNext: () => void;
  onRestart: () => void;
  onBackMenu: () => void;
  matrixData: NonogramData;
}

export type Props = OwnProp;
