import React from 'react';
import {
  Link,
} from "react-router-dom";
import stages from 'stages';

interface Props {

}

export const HomePage = (props: Props) => {
  return (
    <div>
      {Object.keys(stages).map(stage =>
        <Link
          to={`/game/${stage}`}
          key={stage}
          className="stage"
        >{stage}&nbsp;</Link>
      )}
    </div>
  );
};
