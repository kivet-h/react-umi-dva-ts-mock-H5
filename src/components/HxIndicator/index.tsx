import React, { memo } from 'react';
import { ActivityIndicator } from 'antd-mobile';
import styles from './index.less';

interface IProps {
  /**
   * 文案
   */
  loadingMsg?: string;
}

const HxException = memo((props: IProps) => {
  const { loadingMsg = '加载中...' } = props;

  const renderContent = (
    <div className={styles.loadingContainer}>
      <div className={styles.content}>
        <ActivityIndicator animating size="large" />
        <span>{loadingMsg}</span>
      </div>
    </div>
  );

  return renderContent;
});

export default HxException;
