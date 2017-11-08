# ion-filter-select
一个可筛选的下拉选择ionic2组件

# Preview
![](http://7q59gj.com1.z0.glb.clouddn.com/zhaoxi.gif?imageView2/2/w/200)  

# Demo
[DEMO](http://116.62.187.80:8101)  
# Installation
+ npm install  
```
npm install ion-filter-select --save
```
+ Add IonFilterSelect import to your @NgModule like example below  
在你的@NgModule中添加IonFilterSelect模块
```javascript
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { IonFilterSelect } from 'ion-filter-select';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    IonFilterSelect,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
   ...
  ],
  providers: [
    ...
  ]
})
export class AppModule {}
```
# Usage
Add the directive in the html page  
在html中添加组件标签
```html
<ion-filter-select 
  [setData]="innerData" 
  [labelItem]="'学校'" 
  (dispatchId)="getDispatchId($event)">
 </ion-filter-select>
```
# Options
+ setData(@Input)

|option         | Type           | Description  |
| ------------- |:--------------:| ------------:|
| text      | Array | 下拉框选项文本 |
| value     | Number      |  被选中后返回的value |
| active | Boolean     |   是否被选中 |

```json
[
  {
    'text':'上海大学',
    'value':1,
    'active':false
  },{
    'text':'复旦大学',
    'value':2,
    'active':false
  }
  ...
]
```
+ labelItem(@Input)
label文本 接收String
+ dispatchId(@Output)
选择一个选项后的回调函数，返回当前选中选项的value值

# Attention
筛选机制理论上是根据setData的所有字段来筛选的，即如果想根据拼音来做筛选，则直接向setData中添加一个字段即可。
