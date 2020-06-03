import React, {useState} from 'react';
import style from './card.module.scss';
import palette from './card.palette.module.scss';
import {motion} from 'framer-motion';
import {generateKey} from '../../functions/common';

export const Card = (props) => {
  const [isFlipped, setFlipped] = useState(false);
  return <div 
      className={`${style.deck} ${palette.deck} ${props.className ? props.className : ''}`}
      style={props.style ? props.style : {}}
    >
      <motion.div className={`${style.IDCard} ${palette.IDCard}`} 
        animate={{rotateY: isFlipped ? 180 : 0}} 
        onClick={() => setFlipped(!isFlipped)} 
      >
        <div className={`${style.cardFront} ${palette.cardFront}`}>
          <h2>Quick info ID Card</h2>
          <div className={`${style.IDCardcontent} ${palette.IDCardcontent}`}>
            <img src={props.src}/>
            <div className={style.info}>
              {
                  props.data.map(elem => {
                      return <div key={generateKey()}>
                          <div>{elem.display}</div>
                          <span>{elem.value}</span>
                      </div>;
                  })
              }
            </div>
          </div>
          <p>Click on the card to flip it.</p>
        </div>
        <div className={`${style.cardBack} ${palette.cardBack}`}>
            <article>
              {
                props.back.map(elem => {
                  return <p key={generateKey()}>
                    {elem}
                  </p>;
                })
              }
            </article>
        </div>
    </motion.div>
  </div>;
};

export default Card;