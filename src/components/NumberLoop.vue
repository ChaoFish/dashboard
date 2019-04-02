<template>
	<div id="numberLoop">
		<transition-group enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutUp" tag="ul">
			<li v-if="index==currentNumber" v-for="(item, index) in data" :key="item">
				<span style="vertical-align: middle;">{{item}}</span> <span style="font-size: 46px; vertical-align: middle;">元</span>
			</li>
		</transition-group>
	</div>
</template>

<script>
import animate from 'animate.css'
export default {
	name: 'numberLoop',
	props: ['data', 'title'],
	data() {
		return {
			currentNumber: 1,
		}
	},
	mounted() {
		this.numberLoop();
	},
	methods: {
		numberLoop() {
			setTimeout(() => {
				if (this.currentNumber == 3) {
					this.currentNumber = 0;
				}
				else {
					this.currentNumber++;
				}
				this.numberLoop();
			}, 2000);
		}
	}
}
</script>

<style scoped>
ul {
	padding: 0;
	margin: 0;
}
li {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	position: absolute;
	width: 100%;
}
</style>