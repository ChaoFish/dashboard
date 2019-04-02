<template>
	<div id="mapArea"></div>
</template>
<script>
	import echarts from 'echarts/lib/echarts';
	import 'echarts/map/js/world.js';
	import 'echarts-gl'

	export default {
		name: 'WorldMap3D',
		data() {
			return {
				geoCoordMap: {
					'中国·浙江兰溪': [119.133, 29.12],
					尼日利亚仓: [-4.388361, 11.186148],
					美国洛杉矶仓: [-118.24311, 34.052713],
					香港邦泰仓: [114.195466, 22.282751],
					美国芝加哥仓: [-87.801833, 41.870975],
					加纳库马西仓: [-4.62829, 7.72415],
					英国曼彻斯特仓: [-1.657222, 51.886863],
					德国汉堡仓: [10.01959, 54.38474],
					哈萨克斯坦阿拉木图仓: [45.326912, 41.101891],
					俄罗斯伊尔库茨克仓: [89.116876, 67.757906],
					巴西仓: [-48.678945, -10.493623],
					埃及达米埃塔仓: [31.815593, 31.418032],
					西班牙巴塞罗纳仓: [2.175129, 41.385064],
					柬埔寨金边仓: [104.88659, 11.545469],
					意大利米兰仓: [9.189948, 45.46623],
					乌拉圭蒙得维的亚仓: [-56.162231, -34.901113],
					莫桑比克马普托仓: [32.608571, -25.893473],
					阿尔及利亚阿尔及尔仓: [3.054275, 36.753027],
					阿联酋迪拜仓: [55.269441, 25.204514],
					匈牙利布达佩斯仓: [17.108519, 48.179162],
					澳大利亚悉尼仓: [150.993137, -33.675509],
					美国加州仓: [-121.910642, 41.38028],
					澳大利亚墨尔本仓: [144.999416, -37.781726],
					墨西哥仓: [-99.094092, 19.365711],
					加拿大温哥华仓: [-123.023921, 49.311753],
				},
				dataList: [
					{
    				name: '中国·浙江兰溪',
    				value: 10
  				},
  				{
   				  name: '尼日利亚仓',
    				value: 10
  				},
  				{
    				name: '美国洛杉矶仓',
    				value: 20
  				},
  				{
    				name: '香港邦泰仓',
    				value: 20
  				},
  				{
    				name: '美国芝加哥仓',
    				value: 50
  				},
  				{
    				name: '加纳库马西仓',
    				value: 64
  				},
  				{
    				name: '英国曼彻斯特仓',
    				value: 68
  				},
  				{
    				name: '德国汉堡仓',
    				value: 45
  				},
  				{
    				name: '哈萨克斯坦阿拉木图仓',
    				value: 10
  				},
  				{
    				name: '俄罗斯伊尔库茨克仓',
    				value: 10
  				},
  				{
    				name: '巴西仓',
    				value: 20
  				},
  				{
    				name: '埃及达米埃塔仓',
    				value: 50
  				},
  				{
    				name: '西班牙巴塞罗纳仓',
    				value: 58
  				},
  				{
    				name: '柬埔寨金边仓',
    				value: 64
  				},
  				{
    				name: '意大利米兰仓',
    				value: 68
  				},
  				{
    				name: '乌拉圭蒙得维的亚仓',
    				value: 45
  				},
  				{
    				name: '莫桑比克马普托仓',
    				value: 50
  				},
  				{
    				name: '阿尔及利亚阿尔及尔仓',
    				value: 58
  				},
  				{
    				name: '阿联酋迪拜仓',
    				value: 64
  				},
  				{
    				name: '匈牙利布达佩斯仓',
    				value: 68
  				},
  				{
   	  			name: '澳大利亚悉尼仓',
    				value: 45
  				},
  				{
    				name: '美国加州仓',
    				value: 68
  				},
  				{
    				name: '澳大利亚墨尔本仓',
    				value: 45
  				},
  				{
    				name: '墨西哥仓',
    				value: 45
  				},
  				{
    				name: '加拿大温哥华仓',
    				value: 45
  				}
				],
				option: {
					tooltip: {
						trigger: 'item',
						formatter: (params) => {
							return params.name + ": " + params.value[2];
						}
					},
					geo: {
						name: 'Enroll Distribution',
						type: 'map',
						map: 'world',
						zlevel: 1,
						itemStyle: {
							normal: {
								areaColor: '#022548',
								borderColor: '#0dabea'
							},
							emphasis: {
								areaColor: '#58ca9a'
							}
						},
						left: '4%',
						right: '4%',
						bottom: '4%',
						top: '4%'
					},
					series: [
						{
							type: 'effectScatter',
							coordinateSystem: 'geo',
							symbleSize: 5,
							zlevel: 2,
							rippleEffect: {
								period: 4,
								scale: 4,
								brushType: 'stroke'
							},
							label: {
								normal: {
									show: true,
									position: 'right',
									formatter: '{b}'
								}
							},
							itemStyle: {
								normal: {
									color: '#4dffff',
									borderColor: '#fff'
								}
							},
							data: [{name: '中国·浙江兰溪', value: [119.133, 29.12, 10]}]
						},
						{
							type: 'effectScatter',
							coordinateSystem: 'geo',
							symbleSize: 5,
							zlevel: 2,
							rippleEffect: {
								period: 4,
								scale: 2,
								brushType: 'stroke'
							},
							label: {
								normal: {
									show: false,
									position: 'right',
									formatter: '{b}'
								}
							},
							itemStyle: {
								normal: {
									color: '#ff6666',
									borderColor: 'gold'
								}
							},
							data: []
						},
						{
							type: 'lines',
							coordinateSystem: 'geo',
							zlevel: 3,
							effect: {
								show: true,
								period: 6,
								trailLength: 0.1,
								color: '#ffb973',
								symbol: 'arrow',
								symbleSize: 5
							},
							lineStyle: {
								width: 0,
								curveness: 0
							},
							data: []
						},
						{
							type: 'lines',
							coordinateSystem: 'geo',
							zlevel: 4,
							effect: {
								show: true,
								period: 6,
								trailLength: 0.1,
								color: '#9ce6fe',
								symbol: 'arrow',
								symbleSize: 5
							},
							lineStyle: {
								width: 0,
								curveness: 0
							},
							data: []
						}
					]
				}
			}
		},
		mounted() {
			this.drawMap();
		},
		methods: {
			getEnterLineData() {
				let enterLineData = [];
				this.dataList.map((item) => {
					if (item.name != '中国·浙江兰溪') {
						enterLineData.push({
							coords: [this.geoCoordMap['中国·浙江兰溪'], this.geoCoordMap[item.name]]
						});
					}
				});
				return enterLineData;
			},
			getLeaveLineData() {
				let leaveLineData = [];
				this.dataList.map((item) => {
					if (item.name != '中国·浙江兰溪') {
						leaveLineData.push({
							coords: [this.geoCoordMap[item.name], this.geoCoordMap['中国·浙江兰溪']]
						});
					}
				});
				return leaveLineData;
			},
			getScatterData() {
				let scatterData = [];
				let data = this.dataList;
				let len = data.length;
				data.map((item) => {
					if (item.name != '中国·浙江兰溪') {
						this.geoCoordMap[item.name].push(item.value);
						scatterData.push({
							name: item.name,
							value: this.geoCoordMap[item.name]
						});
					}
				});
				return scatterData;
			},
			drawMap() {
				let mapChart = this.$echarts.init(document.getElementById('mapArea'));
				let series = this.option.series;
				series[1].data = this.getScatterData();
				series[2].data = this.getEnterLineData();
				series[3].data = this.getLeaveLineData();
      	mapChart.setOption(this.option);
			}
		}
	}
</script>

<style scoped>
#mapArea {
	height: 60%;
	margin-top: 10%;
}
</style>