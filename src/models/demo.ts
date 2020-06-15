import { Reducer } from 'redux';
import { Effect } from 'umi';
import { queryList } from '@/services/demo';

export interface DemoModelState {
  list: [];
}

export interface IDemoModel {
  namespace: 'demo';
  state: DemoModelState;
  effects: {
    queryList: Effect;
  };
  reducers: {
    save: Reducer<DemoModelState>;
  };
}

const DemoModel: IDemoModel = {
  namespace: 'demo',

  state: {
    list: [],
  },

  effects: {
    *queryList({ payload }, { put }) {
      const list = yield queryList({ ...payload }) || [];
      yield put({
        type: 'save',
        payload: { list },
      });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default DemoModel;
