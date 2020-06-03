import React, {useContext} from 'react';

import style from './timeline.module.scss';
import dark from './timeline.dark.palette.module.scss';
import light from './timeline.light.palette.module.scss';
import { ColorScheme } from '../../theme';
import {generateKey} from '../../functions/common';

export const Timeline = (props) => {
  const theme = useContext(ColorScheme).theme;
  const palette = theme == 'dark' ? dark : light;
  return <ul className={style.timeline + ' ' + palette.timeline + ' ' + (props.className ? props.className : '')}>
  {
    props.data.map(elem => {
      return <li key={generateKey()}>
        <h1>{elem.title}</h1>
        <p>{elem.description}</p>
      </li>;
    })
  }
  </ul>;
};

export default Timeline;