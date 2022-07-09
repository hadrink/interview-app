import React, { useState, useEffect } from 'react';

import styles from './BeerItem.module.scss';
import { Rate } from './Rate/Rate';
import { RenderCounter } from './RenderCounter/RenderCounter';

export const BeerItem = (props) => {
  const {
    beer: { name, ibu, score, uuid },
    rateBeer,
  } = props;
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount(renderCount + 1);
  }, [props]);

  return (
    <div className={styles.beerItem}>
      <div className={styles.name}>{name}</div>
      <div className={styles.ibu}>IBU: {ibu}</div>
      <div className={styles.score}>Score: {score.toPrecision(1)}</div>
      <div className={styles.rate}>
        <Rate onRate={(score) => rateBeer(uuid, score)} />
      </div>
      <div className={styles.renderCounter}>
        <RenderCounter counter={renderCount} />
      </div>
    </div>
  );
};
