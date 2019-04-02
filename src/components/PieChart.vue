<template>
  <div class="pieChart">
    <div id="title">{{ title }}</div>
    <div id="pieChart" ref="bar_dv"></div>
  </div>
</template>

<script>
export default {
  name: 'PieChart',
  props: ['data', 'title'],
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        grid: {
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          containLabel: true
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['40%', '50%'],
            avoidLabelOverlap: false,
            selectedMode: 'single',
            label: {
              normal: {
                show: true,
                formatter: '{b}\n{d}%'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontWeight: 'bold'
                },
                formatter: '{b}\n{d}%'
              }
            },
            color: ['#5e83fb', '#f7da47', '#58ca9a', '#ee706d', '#666', '#999'],
            data: []
          }
        ]
      }
    }
  },
  mounted() {
    this.drawPie();
  },
  methods: {
    drawPie() {
      let pieChart = this.$echarts.init(this.$refs.bar_dv);
      this.option.series[0].data = this.data;
      this.option.series[0].name = this.title;
      pieChart.setOption(this.option);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pieChart {
  height: 32%;
}
#title {
  max-width: 340px;
  padding: 4px 2px;
  border-radius: 2px;
  background-color: rgba(26, 72, 78, 0.6);
  color: #f7d947;
}
#pieChart {
  height: 100%;
  margin-top: -3%;
}
</style>
