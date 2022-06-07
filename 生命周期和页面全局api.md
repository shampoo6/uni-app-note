# 生命周期和页面全局 api

## 生命周期

[生命周期](https://uniapp.dcloud.io/tutorial/page.html#lifecycle) 大部分和微信小程序一样，但为了兼容更多平台会有更多的生命周期钩子函数

## 组件生命周期

组件沿用的 `vue` 的组件生命周期

## 页面全局 api

页面全局 api 是页面上可以直接访问的接口 [详见](https://uniapp.dcloud.io/tutorial/page.html#%E9%A1%B5%E9%9D%A2%E8%B0%83%E7%94%A8%E6%8E%A5%E5%8F%A3)，如下:

### getApp()

获取应用对象

```js
const app = getApp();
// app.globalData 上存储的是全局数据
app.globalData.a = 1;
```

### getCurrentPages()

获取当前的页面栈，其中第一个成员是首页，最后一个成员是当前页

```js
const pages = getCurrentPages();
const currentPage = pages.pop();
```

### $getAppWebview()

仅在 App 平台上可以使用该函数，用来获取 `webview`
