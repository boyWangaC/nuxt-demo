<template>
	<div id="show01">
		   <div class="doutMent">
  	  <div class="show-top">
  	  	<h5>喜多多对实体门体店价值</h5>
  	  	<p>让实体联盟相互协作，共享资源，使老客户回流，新客户引流</p>
  	  	<p>让实体门店形成团结的实体联盟并成为股东，帮助实体门店之间的联动销售，</p>
  	  	<p>引流客户群体，资源共享，达到共赢让消费者回归实体，</p>
  	  	<p>升级智能门店，提升实体门店的综合服务能力，改变消费认知</p>
  	  </div>
  	  <div class="prt-imgs"> 	  	
  	  </div>
  	  <div id="run-divoe1"></div> 	  
  </div> 
	</div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
   name:'product01-show01',
   data(){	
  	return {
  	
  	}
  },
    head () {
	  return {
	      title: '多多达人机器人-喜多多'	,
	      meta: [
		        { hid: 'product01-show01', name: 'product01-show01', content: '多多达人机器人-喜多多' }
		      ]	
	    }
	  },
  computed:{
 
  },
    mounted:function(){

  },
  methods:{ 
  	
  		
  	},
  	handleScroll () {
     var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  
}
}
</script>

<style>
#show01 .doutMent {
	background:white;
	padding-bottom:77px;
}
#run-divoe1 {
	background:url(../../static/products/xi/06-min.png) no-repeat center center;
	width:100%;
	height:580px;
	margin-top:18px;
}
#show01 .prt-imgs {
	background:url(../../static/products/xi/01-min.png) no-repeat center center;
	width:100%;
	height:305px;
	margin-top:101px;
	background-position-x:6px;
}
#show01 .show-top {
	padding-top:25px;
}
#show01 .show-top p {
	font-size:14px;
	height:33px;
	line-height:33px;
}
#show01 .show-top h5 {
	font-size:29px;
	text-align:center;
	margin-bottom:70px;
}
</style>
