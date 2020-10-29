import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";

import { set, tickTime, setStatus, setTime, STATUS } from 'actions';
import { RootState } from 'reducers';
import * as d from "type";
import stages, { StageType } from 'stages';

import {
  PopWin,
  PopMenu,
  SignTool,
  Nonogram,
} from './components';

import { Props } from './type';

import style from './style.module.scss';

const emptyMatrix = (matrixData: d.NonogramData) =>
  matrixData.map(row => Array(row.length).fill(0));

const timeFormatter = (t: number): string => {
  let s: string = `00${t % 60}`.slice(-2);
  if(~~(t / 60)) {
    s = `${~~(t / 60)}:${s}`;
  }
  return s;
};

let interval: NodeJS.Timer;

const _NonogramPage = ({
  set,
  time,
  status,
  setTime,
  tickTime,
  setStatus,
}: Props) => {
  const history = useHistory();
  const { lv }: { lv: StageType } = useParams();
  // const [ time, setTime ] = useState(0);
  const isWin = STATUS.WIN === status;
  const isPause = STATUS.PAUSE === status;
  const isPlaying = STATUS.PLAYING === status;

  useEffect(() => {
    set(emptyMatrix(stages[lv]));
  }, [lv]);

  useEffect(() => {
    if(isPlaying) interval = setInterval(() => {
      tickTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    isWin && clearInterval(interval);
  }, [isWin]);

  const handleRestart = () => {
    setTime(0);
    setStatus(STATUS.PLAYING);
    set(emptyMatrix(stages[lv]));
  };

  const handleBackMenu = () => {
    handleRestart();
    history.push('/');
  };

  const handleNext = () => {
    const stageList = Object.keys(stages);
    const nextIndex = (stageList.indexOf(lv) + 1) % stageList.length;
    setTime(0);
    set(emptyMatrix(stages[(stageList[nextIndex]) as StageType]));
    history.push(`/game/${stageList[nextIndex]}`);
    setStatus(STATUS.PLAYING);
  };

  return (
    <div className={style.NonogramPage}>
      <Nonogram {...{ matrixData: stages[lv] }} />
      <SignTool />
      <div className={style.header}>
        <div className={style.lv}>
          Stage {lv.slice(5)}
        </div>
        <div className={style.time}>
          {timeFormatter(time)}
        </div>
        <div
          className={style.pause}
          onClick={setStatus.bind(this, STATUS.PAUSE)}
        />
      </div>
      {isPause &&
        <PopMenu
          onRestart={handleRestart}
          onBackMenu={handleBackMenu}
          onClose={setStatus.bind(this, STATUS.PLAYING)}
        />
      }
      {isWin &&
        <PopWin
          onNext={handleNext}
          matrixData={stages[lv]}
          onRestart={handleRestart}
          onBackMenu={handleBackMenu}
        />
      }
    </div>
  );
};

const mapState2Props = (state: RootState) => ({
  ...state.game,
});

const mapDispatch2Props = {
  set,
  setTime,
  tickTime,
  setStatus,
};

export const NonogramPage = connect(mapState2Props, mapDispatch2Props)(_NonogramPage);
