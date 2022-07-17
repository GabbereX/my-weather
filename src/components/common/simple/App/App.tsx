import React, { FC } from 'react';
import styles from './App.module.scss';
import useGeoLocation from '../../../../hooks/useGeoLocation';
import Form from "../../smart/Form/Form";

const App: FC = () => {
  const [geoLocation] = useGeoLocation();

  return (
    <div className={styles.container}>
      <Form />
    </div>
  );
};

export default App;
