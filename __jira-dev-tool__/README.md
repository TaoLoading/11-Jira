# jira-dev-tool

该开发者工具用 [MSW](https://github.com/mswjs/msw) 以 [Service Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API) 为原理实现了"分布式后端"，即相当于为浏览器安装了一个独立的后端服务和数据库。主要具备一下两项功能：

1. 所有请求被Service Worker代理
[![rU5enx.png](https://s3.ax1x.com/2020/12/20/rU5enx.png)](https://imgchr.com/i/rU5enx)
2. 后端逻辑处理后，以localStorage为数据库进行增删改查操作
[![rU558J.png](https://s3.ax1x.com/2020/12/20/rU558J.png)](https://imgchr.com/i/rU558J)
