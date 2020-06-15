import { defineConfig } from 'umi';
import routes from './route.config';
import theme from './theme.config';

const pxtoviewport = require('postcss-px-to-viewport');

export default defineConfig({
  routes,
  theme,
  dva: {
    immer: true,
    hmr: true,
  },
  hash: true,
  define: {
    API_BASE: '',
  },
  title: 'H5项目模版-华西公用前端团队',
  favicon: 'https://cdnhyt.cd120.com/static/images/icon64.png',
  dynamicImport: {
    loading: '@/pages/Loading',
  },
  extraPostCSSPlugins: [
    pxtoviewport({
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 4,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: /node_modules/i,
    }),
  ],
  nodeModulesTransform: {
    type: 'none',
  },
});
