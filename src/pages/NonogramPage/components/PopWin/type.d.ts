interface OwnProp {
  onNext: () => void;
  onRestart: () => void;
  onBackMenu: () => void;
}

export type Props = OwnProp;
