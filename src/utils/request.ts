import { extend } from 'umi-request';
import { Toast, Modal } from 'antd-mobile';

// 显示响应原始数据
let isShowOriginData = false;
// 弹窗形式显示错误提示
let isShowErrorModal = false;

/**
 * 默认请求参数，适用于通用的请求参数
 */
const defaultParams = {};

/**
 * 处理请求参数，移除值为空、null, undefined的参数
 * @param data
 */
const handleRequestData = (data: object) =>
  JSON.parse(
    JSON.stringify(data, (k, v) => {
      if (v !== '' && v !== null && v !== undefined) {
        return v;
      }
    }),
  );

/**
 * 网络异常处理
 * @param error
 */
const errorHandler = (error: { response: Response; message: string }): Response => {
  const { response, message } = error;
  if (!response) {
    if (isShowErrorModal) {
      Modal.alert('', message, [{ text: '确定', onPress: () => {} }]);
    } else {
      Toast.fail(message, 1);
    }
    return response;
  }
  response.status !== 200 && Toast.fail('网络请求异常', 1);
  return response;
};

const request = extend({
  timeout: 10000,
  errorHandler,
});

// 全局请求拦截器
request.interceptors.request.use((tempUrl, tempOptions) => {
  // 处理请求地址
  let url = `${API_BASE}${tempUrl}`;
  if (tempUrl.includes('http')) {
    url = tempUrl;
  }
  // 处理请求数据
  const {
    data: tempData = {},
    data: { showOriginData = false, showErrorModal = false },
  } = tempOptions;

  isShowOriginData = showOriginData;
  isShowErrorModal = showErrorModal;

  const data = {
    ...handleRequestData(defaultParams),
    ...handleRequestData(tempData),
  };

  const options = {
    ...tempOptions,
    data,
    headers: {
      token: '',
      accessToken: '',
    },
  };

  console.log(url, options);

  return { url, options };
});

// 全局响应拦截器，克隆响应对象做解析处理
request.interceptors.response.use(async (originResponse) => {
  const response = await originResponse.clone().json();
  console.log('response', response);
  const { data, code, msg } = response;
  if (code === '0') {
    // 请求返回数据有误
    if (isShowErrorModal) {
      Modal.alert('', msg, [{ text: '确定', onPress: () => {} }]);
    } else {
      Toast.fail(msg, 1, () => {
        // 关闭所有loading弹窗
        Toast.hide();
      });
    }
    return isShowOriginData ? response : undefined;
  }
  return isShowOriginData ? response : data;
});

export default request;
