import React, { FC, useEffect } from 'react';
import { Result, Badge, ListView } from 'antd-mobile';
import { connect, Dispatch, DemoModelState, ConnectProps, Loading } from 'umi';
import { HxIndicator } from '@/components';
import styles from './demo.less';

const defaultAvatar = require('@/assets/default_avatar.png');

interface IProps extends ConnectProps {
  demo: DemoModelState;
  dispatch: Dispatch;
  loading?: boolean;
}

const customLogo = (src: string) => <img src={src} className={styles.img} alt="" />;

const customTitle = (val: string) => (
  <div className={styles.title}>
    <p>{val}</p>
    <Badge className={styles.badge} text={process.env.UMI_ENV} />
  </div>
);

const renderRow = (item: any): React.ReactElement => (
  <div className={styles.item} key={item.id}>
    <img
      alt=""
      src={item.avatar || defaultAvatar}
      onError={(e: any) => {
        e.target.src = defaultAvatar;
      }}
    />
    <div className={styles.content}>
      <div className={styles.name}>
        {item.username}
        {item.jobNumber && <Badge text={item.jobNumber} />}
      </div>
      <div className={styles.mobile}>{item.mobile}</div>
    </div>
  </div>
);

const DemoPage: FC<IProps> = ({ demo, loading, dispatch }) => {
  useEffect(() => {
    dispatch({
      type: 'demo/queryList',
    });
    return () => {
      // 这里写一些需要消除副作用的代码
    };
  }, []);

  const dataSource = new ListView.DataSource({
    rowHasChanged: (row1: any, row2: any) => row1 !== row2,
  });

  return (
    <div className={styles.container}>
      <Result
        className={styles.info}
        img={customLogo('https://cdnhyt.cd120.com/static/images/logo.png')}
        title={customTitle('H5项目模板')}
        message={<div>华西公用前端团队</div>}
      />
      <div className={styles.content}>
        {loading ? (
          <HxIndicator />
        ) : (
          <ListView
            className={styles.listView}
            dataSource={dataSource.cloneWithRows(demo.list || [])}
            renderRow={renderRow}
            initialListSize={10}
            pageSize={10}
            onEndReachedThreshold={10}
          />
        )}
      </div>
    </div>
  );
};

export default connect(({ demo, loading }: { demo: DemoModelState; loading: Loading }) => ({
  demo,
  loading: loading.effects['demo/queryList'],
}))(DemoPage);
