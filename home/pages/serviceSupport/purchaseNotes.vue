<template>
	<div class="pay-calk" id="purchaseNotes">
		<div class="pay-top">
			<div class="pay-left">
				<p class="text-pay">
					购买须知</p>
				<nuxt-link to="/serviceSupport/warranty">
					<p>
						保修承诺</p>
				</nuxt-link>
				<nuxt-link to="/serviceSupport/commonProblems">
					<p>
						常见问题与解决方案</p>
				</nuxt-link>
			</div>
			<div class="pay-right">
				<h5>购买须知</h5>
				<div class="box"></div>
				<p>日常保养:</p>
				<p>基本保养:</p>
				<p>日常维护只需要使用棉质湿毛巾进行擦拭，就可以保证清洁。</p>
				<p>特殊护理：</p>
				<p>一些顽固污渍请使用浓度小于75%的酒精进行擦拭，请勿使用漂白剂等具有腐蚀性清洁剂护理机器人。</p>
				<p>注意事项：</p>
				<p>1.避免靠近热源，水源，避免阳光直晒；</p>
				<p>2.不要接触油、苯等有机溶剂，以棉质毛巾清洁；</p>
				<p>3.请勿使用非机器人配套充电器对机器人进行充电；</p>
				<p>4.请勿使用硬物划伤机器人表面；</p>
				<p>5.请勿使用硬物塞入机器人的任何孔位中；</p>
				<p>6.请勿使用蛮力扭动或挤压机器人表面；</p>
				<p>7.请勿让机器人从高处跌落或摔倒；</p>
				<p>8.禁止自行拆卸机器人；</p>
				<p>9.当机器人出现异常，请及时关闭机器人底部的电源；</p>
				<p style="margin-top: 35px;">机器人软件升级方法：</p>
				<p>将机器人连接至WIFI网络，每次开机会自动联网检查软件版本，并自动下载，下载完成后提示用户系统将进行自动更新。</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	export default {
		name:'serviceSupport-purchaseNotes',
		data() {
			return {

			}
		},
		 head () {
		  return {
		      title: '多多达人机器人-购买须知'	,
		      meta: [
			        { hid: 'serviceSupport-purchaseNotes', name: 'serviceSupport-purchaseNotes', content: '多多达人机器人-购买须知' }
			      ]	
		    }
		  },
		scrollToTop: true,
		computed: {
			
		}
	}
</script>

<style>
	#purchaseNotes a{
		color: #000000;
	}
	 .text-pay {
		background: #0793FF;
		color: white;
	}
	
	 .pay-right p {
		font-size: 14px;
		text-align: left;
		margin-bottom: 6px;
	}
	
	 .box {
		display: inline-block;
		width: 593px;
		border-bottom: 1px solid #CCCCCC;
		margin-bottom: 48px;
		margin-top: 25px;
	}
	
	 .pay-right h5 {
		font-size: 22px;		
	}
	
	 .pay-left p {
		height: 60px;
		font-size: 20px;
		line-height: 60px;
		text-align: left;
		padding-left: 86px;
	}
	
	 .pay-right {
		padding-top: 30px;
		float: left;
		padding-bottom: 107px;
	}
	
	 .pay-left {
		float: left;
		width: 315px;
		margin-right: 64px;
	}
	
	 .pay-top {
		display: inline-block;
		width: 1170px;
		background: white;
	}
	
	 .pay-calk {
		background: #F1F4FB;
		text-align: center;
		margin: -4px 0;
	}
	
	 .clearfix:after {
		content: '';
		display: block;
		clear: both;
	}
</style>