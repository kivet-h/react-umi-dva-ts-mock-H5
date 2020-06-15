import mockjs from 'mockjs';

import { commonSuccessResponse } from './util';

/**
 * 生成列表
 * @param req
 * @param res
 */
const fakeDemoList = (req: any, res: any) => {
  const responseSuccess = mockjs.mock({
    ...commonSuccessResponse,
    'data|8': [
      {
        'id|+1': 1,
        avatar: '',
        'username|+1': ['周建辉', '王辉祥', '卓延顺', '周宇', '陶莉', '王豪', '蔡紫玉', '胡小雯'],
        'mobile|+1': [
          '15908199450',
          '15008190634',
          '15881089108',
          '18408242978',
          '18728490360',
          '13890733206',
          '17760487760',
          '13696215250',
        ],
        'jobNumber|+1': ['gy507', 'gy511', 'gy537', 'gy538', 'gy551', 'gy552', '', 'gy596'],
        position: '软件开发工程师（web）',
        address: '中国(四川)自由贸易试验区成都高新区天府大道北段966号4号楼8层',
      },
    ],
  });
  // const responseFail = mockjs.mock({
  //   ...commonFailResponse,
  // });
  // 模拟请求延迟
  setTimeout(() => {
    return res.status(200).send(responseSuccess);
  }, 500);
};

export default {
  'POST /api/list': fakeDemoList,
};
