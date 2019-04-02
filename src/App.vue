<template>
  <div id="main">
    <div id="leftSide">
      <pieChart :data="chartData.source" title="交易来源占比"></pieChart>
      <topList :data="chartData.topShop" title="成交额top店铺"></topList>
      <lineChart :data="chartData.source" title="渠道销售排行"></lineChart>
    </div>

    <div id="middle">
      <div id="header">
        <h1 id="pageTitle">某某某品牌 电商实时状况</h1>
        <p id="time">
          <i class="icon iconfont icon-shizhong"></i>
          {{currentTime}}
        </p>
        <h2>
          <div id="title">今日交易额</div>
          <numberLoop :data="chartData.tradeMount" title="今日交易额" id="sum"></numberLoop>
        </h2>
      </div>
      <router-view />
      <router-link to='/'><div class="mapControl">2D</div></router-link>
      <router-link to='/3dmap'><div class="mapControl">3D</div></router-link>
    </div>

    <div id="rightSide">
      <pieChart :data="chartData.target" title="销售目标达成率"></pieChart>
      <topList :data="chartData.topItem" title="成交额top商品"></topList>
      <pieChart :data="chartData.member" title="会员等级占比"></pieChart>
    </div>
  </div>
</template>

<script>
import pieChart from './components/PieChart'
import topList from './components/TopList'
import lineChart from './components/lineChart'
import numberLoop from './components/NumberLoop'
export default {
  name: 'App',
  data() {
    return {
      currentTime: '',
      chartData: {
        source: [
          {value: 335, name: '直接访问'},
          {value: 310, name: '邮件营销'},
          {value: 234, name: '联盟广告'},
          {value: 135, name: '视频广告'},
          {value: 1548, name: '搜索引擎'}
        ],
        topShop: [
          {name: '凑味咖啡鼓浪屿纯手工人气'},
          {name: '农味美食店'},
          {name: '爱生气起泡米酒'},
          {name: '黎平县原生态官方企业'}
        ],
        topItem: [
          {name: '起泡酒大礼包 爱格尼蓝海之鲸天使之手气泡酒'},
          {name: '一杯 精选气泡酒 Italy原瓶进口天使之手Moscato甜白葡萄微起泡酒'},
          {name: '精选红酒 超级好喝的德国巧克力红酒250ml浓香丝滑爽爆'},
          {name: '【爱上红枣】爱生气红枣米酒冬酿鲜米酒低度女士甜酒果酒稠酒6瓶'}
        ],
        target: [
          {value: 67, name: '完成'},
          {value: 23, name: '未完成'}
        ],
        member: [
          {value: 335, name: 'v1'},
          {value: 310, name: 'v2'},
          {value: 234, name: 'v3'}
        ],
        tradeMount: [16821242.12, 16825356.32, 16826518.28, 16828739.69]
      }
    }
  },
  mounted() {
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();
      if (month < 9) {month = "0" + month};
      if (day < 10) {day = "0" + day};
      if (hour < 10) {hour = "0" + hour};
      if (minute < 10) {minute = "0" + minute};
      if (second < 10) {second = "0" + second};
      this.currentTime = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    }
  },
  components: { pieChart, topList, lineChart, numberLoop }
}
</script>

<style>
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: -10px;
  padding: -10px;
}
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #000;
  color: #fff;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: row;
}
#leftSide,
#rightSide {
  z-index: 1;
  width: 20%;
  padding: 10px;
}
#title {
  max-width: 340px;
  margin: 0 auto;
  padding: 4px 2px;
  border-radius: 2px;
  background-color: rgba(26, 72, 78, 0.6);
  color: #f7d947;
}
#sum {
  font-size: 55px;
  margin-top: 5px;
  color: #f7d947;
}
#bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
#middle {
  flex: 1;
}
#header {
  position: relative;;
  z-index: 9;
}
#pageTitle {
  font-size: 36px;
  margin: 0;
  font-weight: normal;
}
#time {
  margin-bottom: 20px;
  color: white;
}
.mapControl {
  color: #f7d947;
  display: inline-block;
  font-size: 1.5em;
  font-weight: bold;
  width: 10%;
  border-radius: 5px;
  padding: 4px 2px;
  margin: 0 3%;
  background-color: rgba(26, 72, 78, 0.2);
}
</style>
