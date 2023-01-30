# nvue页面

## 什么是nvue页面

## 如何使用

和普通的vue页面的使用相同，但有些区别

## nvue页面和vue页面的区别

nvue页面和vue页面的具体区别，可以参考官方[详情](https://uniapp.dcloud.net.cn/tutorial/nvue-outline.html#nvue%E5%BC%80%E5%8F%91%E4%B8%8Evue%E5%BC%80%E5%8F%91%E7%9A%84%E5%B8%B8%E8%A7%81%E5%8C%BA%E5%88%AB)

由于内容太多，这里罗列重点的部分:

- nvue 页面控制显隐只可以使用 `v-if` 不可以使用 `v-show`
- nvue 页面只能使用 `flex` 布局，不支持其他布局方式
- nvue 页面的布局排列方向默认为竖排（ `column` ）
- 文字内容，必须、只能在 `<text>` 组件下。不能在 `<div>` 、`<view>` 的text区域里直接写文字。否则即使渲染了，也无法绑定js里的变量。
- 只有text标签可以设置字体大小，字体颜色
- **布局**不能使用百分比、没有媒体查询。
- 不支持背景图
- `class` 进行绑定时只支持数组语法
- nvue 页面不会自动滚动，需要使用能够产生滚动的组件 如: `list`、`waterfall`、`scroll-view/scroller`
- 在 App.vue 中定义的全局js变量不会在 nvue 页面生效。`globalData` 和 `vuex` 是生效的。
- 不能在 `style` 中引入字体文件，nvue 中字体图标的使用参考：[加载自定义字体](https://uniapp.dcloud.net.cn/tutorial/nvue-api.html#addrule)。