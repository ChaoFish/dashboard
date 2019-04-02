<template>
	<div id="topList">
		<div id="title">{{title}}</div>
		<transition-group enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutUp" tag="ul" class="slide">
			<li v-show="show" v-for="(item, index) in data" :key="item.name">
				<span>No.{{index + 1}}</span>
				<span id="name">{{item.name}}</span>
			</li>
		</transition-group>
		<transition-group enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutUp" tag="ul" class="slide">
			<li v-show="!show" v-for="(item, index) in data" :key="item.name">
				<span>No.{{index + 1}}</span>
				<span id="name">{{item.name}}</span>
			</li>
		</transition-group>
	</div>
</template>

<script>
import animate from 'animate.css'
export default {
	name: 'TopList',
	props: ['data', 'title'],
	data() {
		return {
			show: true
		}
	},
	mounted() {
		this.textLoop();
	},
	methods: {
		textLoop() {
			setTimeout(() => {
				this.show = !this.show;
				this.textLoop();
			}, 3000);
		}
	}
}
</script>

<style scoped>
#topList {
	width: 100%;
	height: 33%;
	position: relative;
}
#title {
  max-width: 340px;
  padding: 4px 2px;
  border-radius: 2px;
  background-color: rgba(26, 72, 78, 0.6);
  color: #f7d947;
}
ul {
	color: #fff;
	line-height: 36px;
	padding: 0;
	text-align: left;
	font-size: 0.75em;
	position: absolute;
	top: 40px;
	width: 100%;
}
li {
	border-bottom: 1px solid #00f0ff;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
#name {
	margin-left: 10px;
}
</style>