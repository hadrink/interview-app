import React from 'react';
import styles from './RenderCounter.module.scss';

/**
 * Display a counter value
 * @param {Object} counterProps 
 * @param {Number} counterProps.counter 
 */
export const RenderCounter = ({ counter }) => {
  return (
    <div className={styles.renderCounter}>
      <span>{counter}</span>
    </div>
  );
};
