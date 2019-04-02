<template>
  <div class="lineChart">
    <div id="title">{{ title }}</div>
    <div id="lineChart"></div>
  </div>
</template>

<script>
export default {
  name: 'LineChart',
  props: ['data', 'title'],
  data() {
    return {
      option: {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top: '40',
          left: '0',
          right: '0',
          bottom: '20',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: '#90979c'
              }
            },
            axisLabel: {
              interval: 0
            },
            data: []
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#90979c'
              }
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'bar',
            barWidth: '40%',
            itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'top'
                  },
                  color: ['#00f0ee']
                },
                emphasis: {
                  color: ['#c0c0c0']
                }
            },
            data: []
          }
        ]
      }
    }
  },
  mounted() {
    this.drawBar();
  },
  methods: {
    drawBar() {
      let lineChart = this.$echarts.init(document.getElementById('lineChart'));
      this.option.series[0].data = this.data.map((d) => {return d.value});
      this.option.xAxis[0].data = this.data.map((d) => {return d.name});
      this.option.series[0].name = this.title;
      lineChart.setOption(this.option);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lineChart {
  height: 33%;
}
#title {
  max-width: 340px;
  padding: 4px 2px;
  border-radius: 2px;
  background-color: rgba(26, 72, 78, 0.6);
  color: #f7d947;
}
#lineChart {
  height: 100%;
  margin-top: -3%;
}
</style>
