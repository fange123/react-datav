import React from 'react';
import styles from './index.less';

interface IProps {}

const FullScreenContainer: React.FC<IProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default FullScreenContainer;
