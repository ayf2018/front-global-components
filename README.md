# front-global-compoments

这里存放的是前端公共组件, 目的是实现前端组件的npm化。

#### 组件列表

- frame
- inputSearch
- lampNav
- log
- myModal
- rightNav
- scaling
- summaryList
- table

#### 安装

    npm install front-gloabl-components
    
#### 使用

在入口文件如main.js中按需引入和使用

    import { frame, inputSearch} from 'front-gloabl-components'

    Vue.use(frame)
    Vue.use(inputSearch)

## frame

划分区块的框，用于存放内容

#### 基本用法

    <my-frame
    :modal="frameModal"
    :title="selectedItem.name">
        <template>
          <div class="detail">
            内容
          </div>
        </template>
    </my-frame>

#### API

参数 | 说明 | 类型 | 默认值
---  | --- | --- | ---
modal | 控制使用显示 | Boolean | false
title | 区块的名称 | String | -

## inputSearch

各模块左上角的全局搜索框

#### 基本用法

    <input-search
        @on-search="searchLampPole"
        @drawerShow="drawerShow"></input-search>
        
#### Event

事件名 | 说明 | 参数
--- | ---| ---
on-search | 用于搜索名称 | 返回的是输入的值
drawerShow | 控制抽屉组件的显示 | 返回的是布尔值

## lampNav
灯杆模块专用左侧列表组件

#### 基本用法

    <lamp-nav
      :headerData="headerData"
      :eventTypes="eventTypes"
      @on-search="searchLampPole"
      :currentTypeCode='currentTypeCode'
      :list="groupList"
      @setIndex="selectGroup"
      :initIndex="currentIndex"
      class="lampPole"
      :bottomHeight="bottomHeight"
    >
    </lamp-nav>

#### API

参数 | 说明 | 类型 | 默认值
---| ---| ---| ---
bottomHeight | 距离底部的距离 | Boolean | 0
list | 数据列表 | Array | []
initIndex | 选中的项的下标 | Number | -2
currentType | 当前的类型 | String | 'style1'
eventTypes | 事件类型列表 | Array | []
shipData | 车船调度里面的船只数据 | Object | {repair: '0',work: '0',free: '0'}
headerData | 相关的头部数据，用于切换 | Object | {renderTitleList: [], renderTitle: ''}
currentTypeCode | 当前类型的code值 | String | 'light_pole_lamp_holder'

#### Event

事件名 | 说明 | 参数
--- | --- | ---
setIndex | 点击列表某一项时的回调 | 参数是当前项和下标
return-current-item | 返回当前项 | 当前项
on-search | 用于搜索灯杆 | 参数为搜索值

## logo

右下角的公司LOGO, 图片来自后台设置。

#### 基本用法

    <Logo></Logo>
    
## rightNav
通用左侧列表

#### 基本用法

    <right-nav
    :list="groupList"
    @setIndex="onChildClick" :initIndex="currentIndex"></right-nav>

    <right-nav
    :list="noRepairList"
    :shipData="shipData"
    :currentType="currentType"
    :headerData="headerData"
    :initIndex="currentIndex"
    @setIndex="changeState" ></right-nav>

#### API

参数 | 说明 | 类型 | 默认值
---| ---| ---| ---
bottomHeight | 距离底部的距离 | Boolean | 0
list | 数据列表 | Array | []
initIndex | 选中的项的下标 | Number | -2
currentType | 当前的类型 | String | 'style1'
shipData | 车船调度里面的船只数据 | Object | {repair: '0',work: '0',free: '0'}
headerData | 相关的头部数据，用于切换 | Object | {renderTitleList: [], renderTitle: ''}

#### Event

事件名 | 说明 | 参数
--- | --- | ---
setIndex | 点击列表某一项时的回调 | 参数是当前项和下标
return-current-item | 返回当前项 | 当前项

    
## scaling

左下角的伸缩框

#### 基本用法

    <scaling :height="300" :width="272">
        <template>
          <div class="msg">
            内容
          </div>
        </template>
    </scaling>

#### API

参数 | 说明 | 类型 | 默认值
--- | --- | --- | ---
width | 定义宽度 | Number | 272
height | 定义高度 | Number | 300

## summaryList

左下角数据一览， 如设备各状态及对应数值

#### 基本用法

    <summary-list :summaryList="summaryList">
        <div slot="header">
          <div class="title sum-title">
            总灯杆数：
            <b class="num">{{total}}</b>
          </div>
        </div>
        <div slot="footer" class="mybtn">
          <Button type="success" long @click="statusTemp='gatewayControl';hideHandle()" >网关控制</Button>
          <Button type="success" long @click="showLoop" >照明回路</Button>
        </div>
    </summary-list>

#### API
参数 | 说明 | 类型 | 默认值
--- | --- | --- | ---
summaryList | 数据一览 | Array | []

## table
基于 Vue 和 iView 的表格与分页组合

#### 插件安装

    npm i ls-common-table

#### 插件引用

    import Vue from 'vue'
    import lsCommonTable from 'ls-common-table'
    
    Vue.use(lsCommonTable)

#### 基本用法

    <ls-common-table
      :columns="columns"
      :data="list"
      :loading="loading"
      :page="page"
      :queryData="queryData"></ls-common-table>

#### API

[查看 iView table](https://www.iviewui.com/components/table) / [查看 iView page](https://www.iviewui.com/components/table)

参数 | 说明 | 类型 | 默认值
---  |---   | ---  | ---
columns | 表格列的配置描述 | Array | []
data | 显示的结构化数据 | Array | []
loading | 表格是否加载中 | Boolean | false
page | 分页对象,包含当前页码、数据总数、每页条数 | Object | {pageSize: 10,total: 0,current: 1}

#### Event

事件名 | 说明 | 参数
---    | ---  | ---
queryData | 页码改变和切换每页条数时的回调 | --