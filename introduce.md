> 一个仓库 记录自己曾经做的拿得出手的项目   
>
> [线上预览地址](https://jctsy.github.io/Project/)

备注：图片来自网络，仅供学习交流

---

`HTML` 目录放的就是曾经做过的一些纯 `html` 和 `css` 做的项目

[**兔小白个人博客RabbitSmallWhite**](./HTML/RabbitSmallWhite/index.html)

咱做的第一个完整的单页面开发的项目，主要用的就是经典的浮动布局加约束一个居中的版心，可能写的不是很美观 在某些细节的地方，不过对于当时的自己来说这已经是最好的项目了，记得当时用了2天才写出来吧

[**博雅互动Boya**](./HTML/Boya/index.html)

参照线上的 [博雅官网](https://www.boyaa.com/) 做的，俩页面吧 首页和博雅游戏页面，也是浮动写的，记得当时做那个首页的 `博雅新闻` 和 `社会招聘` 两个部分拼一块的时候也是废了很大的劲，好像是一个 `float: left`  一个 `float right` 做的，记不太清了，大概是吧，然后两个页面的跳转就是用 `a` 标签实现的，话说这种一个网页就是一个 `html` 文件的开发，在我学了 `vue` 后发现还是太占资源了一个页面几十kb 多了真的需要什么性能优化之类的

[**云道商城YouDaoCloud**](./HTML/YouDaoCloud/index.html)

第三个项目，这个项目看起来没啥很简单，就是参照 `设计稿` 做的一个项目，因此也是有很大意义的，然后经典案例那里用了 `mask遮罩` 也是之前网页开发很喜欢的一种方式

[**支付宝Alipay**](./HTML/Alipay/index.html)

这个项目是仿照着 [支付宝官网](https://www.alipay.com/) 首页做的，页面很简单，用的就是定位相关的内容，学到了一个新东西，就是背景图 `position: absolute` 然后 `top left right` 设置0 `bottom` 设置个边距，支付宝官网首页的效果就实现了

[**小米商城XiaomiShop**](./HTML/XiaomiShop/index.html)

这个项目是仿照着 [小米商城页](https://mi.com/shop) 做的，用到的知识很多 很杂，听说早几年的时候，小米商城的设计是独一份，很多公司的商城网站就是仿照着小米商城做的，轮播图用动画实现的，其实正常来说应该是用js来做的，然后后面就是用的一个 `div>ul>li` 的模板，然后复制粘贴商品详情，复用的 `css` 样式，记得当时干了好几千行 `html` 我勒个豆... 主要是大部分都是无用的代码，现在学了 `vue` 后发现一个 `v-for` 直接就解决了，小米商城的购物车 显示隐藏挺好的做的，也是可以复用的一个小功能

[**小兔鲜FreshRabbit**](./HTML/FreshRabbit/index.html)

黑马的一个项目吧，从零自己手敲 没有借助外界帮助的一个完整项目，也是自我感觉最好的一个项目，融合了前面的所有项目所用到的技术了吧

---

**`CSS3`实例**

里面放的就是一些比较炫酷 或者自己感觉不错的 `css` 的小案例吧，个人最喜欢的就是 [双开门](./css3Example/DoubleOpenDoor.html) 和 [照片墙](./css3Example/PhotoWall.html) 了，[双开门](./css3Example/DoubleOpenDoor.html)是我自己找图，自己敲出来的，个人感觉很不错挺好玩的，照片墙的话，对于有对象的人来说很不错的项目，可惜我还没有 -_-，再有就是 [旋转魔方](./css3Example/RotatingBlock.html) 了，也挺炫酷的

其他的话，又加入了几个实用的小功能: 

[背景固定](./css3Example/backgroundFixed.html)：国外网站常用这个效果，主体在背景图前面，页面滚动到一定位置显示出来背景图，很有感觉

商品展示： [1. 商品展示(定位布局)](./css3Example/ShopDetail.html) [2. 小米商城商品展示](./css3Example/XiaomiShopShow.html) [3. 闪烁的文本](./css3Example/FlashText.html) 这三个本质上都是商品详情页的展示，但是第一个用了很多种定位效果实现商品详情页展示；第二个是小米商城的商品详情页展示，加上了动画和阴影 看起来更丝滑；第三个是商品有促销的时候喜欢整个闪动的文本，吸引用户的关注

[flex布局-抖音解决方案](./css3Example/flex_douyin.html)：顾名思义，练习了flex布局

[点击变长输入框](./css3Example/FocusSearch.html)：这是一个简单的展示，后面多对 `UI` 优化一下也是一个不错的很有趣的交互输入框

[视频mask遮罩](./css3Example/mask.html)：在很多网站展示视频的时候，默认就是这个效果，鼠标悬停的时候阴影遮罩消失，很实用的功能

[精灵图](./css3Example/SpriteImg.html)：早些年为了优化页面加载速度和提升用户的体验，通常会把一个页面可能会用到的图标融合到一张图里面，通过 `bakgroundPosition` 属性去通过调整背景图的不同位置展示图标，随着技术的不断迭代进步和网络带宽的发展，这种精灵图做的网站已经很少了

文本的省略：[单行文本省略](./css3Example/OnelineHideText.html) 和 [多行文本省略](./css3Example/ManylinesHideText.html) 顾名思义，很实用的功能，在需要隐藏大段文本的地方

还有几个个性化小功能，在自己的网站上喜欢的话，可以加上 [图片跟随鼠标移动](./css3Example/ImgFollowMouse.html) 、[双开门](./css3Example/DoubleOpenDoor.html) 、[旋转魔方](./css3Example/RotatingBlock.html) 、[照片墙](./css3Example/PhotoWall.html) 、[背景闪烁](./css3Example/BackgroundFlash.html)(这个最好不要在晚上没开灯的时候用哈) 、[爱心](./css3Example/heart.html) 、[跳动的心](./css3Example/Heartbeat.html)

至于

---

`vue` 目录，记录自己做过的 vue 项目

**`hm-shopping`项目**

黑马商城项目， 第一个`vue2` 项目，用的 [Vant2组件库](https://vant-ui.github.io/vant/v2/#/zh-CN/home) 因为是 `Vue2` 项目嘛，用的比较老的`UI库`，然后用[Vuex3](https://v3.vuex.vuejs.org/zh/)  做的持久化，路由就是中规中矩的 `hash` 模式，为啥用这个呢，因为是 `Vue2` 项目，说实话这个`hash`模式搁网页地址上那个#看着真的很别扭(尤其是我这个强迫症!)，项目就是跟着 [黑马的视频](https://www.bilibili.com/video/BV1HV4y1a7n4/?spm_id_from=333.788.videopod.episodes&vd_source=96a19505f550686f1fd8723cfc0f8b59&p=100) 一点点敲出来的，就是购物车那块有点小问题--接口方面的，后面有实力了学点后端后自己写接口修改下，除此之外也是有点缺点的咱，就是单纯的敲，并没有自己思考

**`Vue3-big-event-admin`项目**

```tips
账号：adminPro01
密码：654123
```

大事件管理，第一个`Vue3` 项目，用的是[Vite](https://cn.vitejs.dev/) 构建项目 + [Element组件库](https://element-plus.org/zh-CN/#/zh-CN) + [Pinia](https://pinia.vuejs.org/zh/) 持久化 这些技术栈，然后是比较简单的，文档的增删改查，然后用 `element`组件库快速实现页面的搭建，还算可以吧，也有登录功能的，用户登录信息 `token` 就是放在了浏览器本地存储里，那些数据就是通过[axios](https://axios-http.com/zh/) 调用后端接口放后端了，后面也待自己捣鼓捣鼓，黑马这接口也不知道能存在多长时间呢

---

除此之外的话，咱还是需要多找几个 `vue` 项目练练手的，唉，`html` 基本上是没啥问题了，就是框架还是要多学学，积累积累经验