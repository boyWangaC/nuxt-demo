<template>
	<div id="show02">
		<div class="doutMent">
			<div class="show-top">
				<h5>客多多对实体门体店价值</h5>
				<p>让实体联盟相互协作，共享资源，使老客户回流，新客户引流</p>
				<p>让实体门店形成团结的实体联盟并成为股东，帮助实体门店之间的联动销售，</p>
				<p>引流客户群体，资源共享，达到共赢让消费者回归实体，</p>
				<p>升级智能门店，提升实体门店的综合服务能力，改变消费认知</p>
			</div>
			<div class="prt-imgs">
			</div>
			<div id="run-divoe2"></div>
		</div>
	</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	export default {
		name:'product02-show02',
		data() {
			return {

			}
		},
		head () {
		  return {
		      title: '多多达人机器人-客多多'	,
		      meta: [
			        { hid: 'product02-show02', name: 'product02-show02', content: '多多达人机器人-客多多' }
			      ]	
		    }
		  },
		computed: {

		},
		mounted: function() {

		},
		methods: {

		}
		
	}
</script>

<style>
	#show02 .doutMent {
		background: white;
		padding-bottom: 77px;
	}
	
	#run-divoe2 {
		background: url(../../static/products/ke/02-min.png) no-repeat center center;
		width: 100%;
		height: 580px;
		margin-top: 18px;
	}
	
	#show02 .prt-imgs {
		background: url(../../static/products/ke/01-min.png) no-repeat center center;
		width: 100%;
		height: 305px;
		margin-top: 101px;
		background-position-x: 6px;
	}
	
	#show02 .show-top {
		padding-top: 25px;
	}
	
	#show02 .foat a {
		text-decoration: none !important;
	}
	
	#show02 .show-top p {
		font-size: 14px;
		height: 33px;
		line-height: 33px;
	}
	
	#show02 .show-top h5 {
		font-size: 29px;
		text-align: center;
		margin-bottom: 70px;
	}
</style>