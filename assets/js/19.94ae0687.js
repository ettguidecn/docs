(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{349:function(t,a,e){"use strict";e.r(a);var r=e(2),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"倍速相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#倍速相关"}},[t._v("#")]),t._v(" 倍速相关")]),t._v(" "),e("p",[t._v("在主界面调整倍速是etterna的一个特性，它的调整范围在0.7-3.0之间，可以按+-0.05或者+-0.1调整，这个数字其实可以修改，后面会说。调速主要有三个关键按键: 效果上(默认是=)、效果下(默认是-)、选择键(默认是/)")]),t._v(" "),e("h2",{attrs:{id:"_0-05倍速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-05倍速"}},[t._v("#")]),t._v(" +-0.05倍速")]),t._v(" "),e("p",[t._v("选择键+效果上/效果下(默认/= 或者 /-)")]),t._v(" "),e("h2",{attrs:{id:"_0-1倍速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-1倍速"}},[t._v("#")]),t._v(" +-0.1倍速")]),t._v(" "),e("p",[t._v("直接按效果上/效果下(默认= 或者 -)")]),t._v(" "),e("h2",{attrs:{id:"如何关掉烦人-个人观点-的调速变声"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何关掉烦人-个人观点-的调速变声"}},[t._v("#")]),t._v(" 如何关掉烦人(个人观点)的调速变声")]),t._v(" "),e("p",[t._v("找到 游戏目录/save/Preferences.ini，打开后，找到 EnablePitchRates=1，把1改成0即可，1是变声，0是不变。")]),t._v(" "),e("h2",{attrs:{id:"如何修改0-05或者0-1变化的数字-不推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何修改0-05或者0-1变化的数字-不推荐"}},[t._v("#")]),t._v(" 如何修改0.05或者0.1变化的数字(不推荐)")]),t._v(" "),e("p",[t._v("由于etterna的算分是按照常规的0.7-3.0倍速，区间内按0.05跟0.1递增减的，遇到不匹配的，成绩不会上传到EO服务器，但本地会保留。速度超过3.0可能会有问题。")]),t._v(" "),e("p",[t._v("具体步骤:\n打开 游戏目录/Themes/_fallback/Scripts/10 WifeSundries.lua\n直接滚动条拖到最后，找到最后一个函数:\n"),e("img",{attrs:{src:t.$withBase("/zhs/changerate.png"),alt:"changerate"}})]),t._v(" "),e("p",[t._v("其中，标注着rate + 0.1/0.05的为递增，rate - 0.1/0.05的为递减。举个例子，不过你想把递减0.05改成0.01，找到所有rate - 0.05的，把所有的0.05改成0.1即可。")]),t._v(" "),e("p",[t._v("如果你想调到小于0.7比如0.5速为下限，则把0.7改成0.5即可，与此同时，你要想调低于0.7只能通过对应的选择键+效果下来调整，不能使用直接的效果下，其他的同理。")])])}),[],!1,null,null,null);a.default=s.exports}}]);