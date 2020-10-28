import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import stages, { StageType } from 'stages';
import { set } from 'actions';

import {
  SignTool,
  Nonogram,
} from './components';

import { Props } from './type';

import style from './style.module.scss';

const _NonogramPage = (props: Props) => {

  const { lv }: { lv: StageType } = useParams();

  const matrixData = stages[lv];

  useEffect(() => {
    props.set(matrixData.map(row => Array(row.length).fill(0)));
  }, [props, matrixData]);

  return (
    <div className={style.NonogramPage}>
      <Nonogram
        {...{
          matrixData,
        }}
      />
      <SignTool />
    </div>
  );
};


const mapDispatch2Props = {
  set,
};

export const NonogramPage = connect(null, mapDispatch2Props)(_NonogramPage);
