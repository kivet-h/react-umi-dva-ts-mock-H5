# physical-exam-h5

体检中心H5项目

## 项目结构

```bash
.
├── README.md                  # 说明文档
├── config
│   ├── config.dev.ts          # 测试环境配置
│   ├── config.local.ts        # 本地配置（不会加入git版本库，仅用于本地联调使用）
│   ├── config.prod.ts         # 生产环境配置
│   ├── config.staging.ts      # 预发布环境配置
│   ├── config.ts              # 默认配置
│   ├── route.config.ts        # 路由配置
│   └── theme.config.ts        # 主题配置
├── mock                       # 接口数据mock目录
├── package.json
├── src
│   ├── app.tsx                # 运行时配置文件
│   ├── components             # 全局组件（加载器、空状态、错误页等）
│   │   ├── HxIndicator
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   └── index.ts
│   ├── global.less            # 全局样式文件
│   ├── models                 # 数据层
│   ├── pages
│   │   ├── Loading.tsx        # 按需加载视图
│   │   ├── document.ejs       # html模版文件
│   │   ├── index.less
│   │   └── index.tsx
│   ├── services               # 接口层
│   └── utils                  # 全局工具类目录
├── .editorconfig              # 编辑器配置文件
├── .eslintrc.js               # eslint配置文件
├── .prettierrc.js             # prettier配置文件
├── .stylelintrc.js            # stylelint配置文件
├── tsconfig.json              # ts配置文件
├── typings.d.ts               # ts全局声明文件
```

## 安装依赖

```bash
# 安装依赖
$ yarn
```

## 本地运行项目

```bash
$ yarn start

# 测试环境运行
$ yarn start:dev
# 预发布环境运行
$ yarn start:staging
# 生产环境运行
$ yarn start:prod
```

## 提交代码

```bash
# 代码lint校验
$ yarn lint
# 代码格式化处理
$ yarn prettier
# 提交代码，使用 yarn commit 代替 git commit
$ yarn commit
```
