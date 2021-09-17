import React from 'react';
import FullScreenContainer from './components/FullScreenContainer';
import {
  BorderBox1,
  Decoration11,
  CapsuleChart,
  ScrollRankingBoard,
} from '@jiaminghi/data-view-react';
import styles from './index.less';

interface IProps {}
const config = {
  data: [
    {
      name: '南阳',
      value: 167,
    },
    {
      name: '周口',
      value: 67,
    },
    {
      name: '漯河',
      value: 123,
    },
    {
      name: '郑州',
      value: 55,
    },
    {
      name: '西峡',
      value: 98,
    },
    {
      name: '周口',
      value: 55,
    },
    {
      name: '南阳',
      value: 120,
    },
    {
      name: '西峡',
      value: 78,
    },
    {
      name: '驻马店',
      value: 66,
    },
    {
      name: '新乡',
      value: 80,
    },
    {
      name: '信阳',
      value: 45,
    },
    {
      name: '漯河',
      value: 29,
    },
  ],
};

const Home: React.FC<IProps> = () => {
  return (
    <FullScreenContainer>
      <BorderBox1>
        <div className={styles.header}>
          <Decoration11 style={{ width: '600px', height: '80px' }}>张大宝的大屏</Decoration11>
        </div>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <CapsuleChart config={config} />
          </div>
          <div className={styles.right}>
            <ScrollRankingBoard config={config} />
          </div>
        </div>
      </BorderBox1>
    </FullScreenContainer>
  );
};

export default Home;
