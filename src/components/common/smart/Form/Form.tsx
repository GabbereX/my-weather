import React, { FC } from 'react';
import styles from './Form.module.scss';

const Form: FC = () => {
  return (
    <form className={styles.form}>
      <label>
        <input
          type='text'
          placeholder='Search City...'
          className={styles.input}
        />
      </label>
      <button type='button' className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default Form;
