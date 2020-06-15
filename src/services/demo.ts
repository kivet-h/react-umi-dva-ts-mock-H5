import request from '@/utils/request';

export const queryList = async (data: any): Promise<any> =>
  request('/api/list', {
    method: 'POST',
    data,
  });
