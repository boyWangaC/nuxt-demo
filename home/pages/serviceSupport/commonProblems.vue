<template>
	<div class="pay-calk" id="commonProblems">
		<div class="pay-top">
			<div class="pay-left">
				<nuxt-link to="/serviceSupport/purchaseNotes">
					<p>购买须知</p>
				</nuxt-link>
				<nuxt-link to="/serviceSupport/warranty">
					<p>保修承诺</p>
				</nuxt-link>
				<p class="text-pay">常见问题与解决方案</p>
			</div>
			<div class="precept">
				<h5>常见问题与解决方案</h5>
				<div class="box"></div>
				<ul>
					<li>机器人面部点阵不显示</li>
					<li>闪光灯不亮</li>
					<li>摄像头无法打开</li>
					<li>头部无法转动</li>
					<li>按键无作用</li>
					<li>机器人开机慢</li>
					<li>机器人屏幕无法操作/死机</li>
					<li>Wifi无法打开/无法连接</li>
					<li>无法连接到机器人进行控制</li>
					<li>无法快捷登录</li>
					<li>无法链接监控</li>
					<li>机器人无法避障</li>
					<li>温湿度不显示</li>
					<li>无法显示充电</li>
					<li>机器人运动功能异常</li>
					<p>出现以上问题，请通过机器人底部电源开关断掉电源，重新上电启动机器人验证是否还有问题，如果不能解决，请联系客服。</p>
					<li>喇叭没声音</li>
					<li>触摸身体指定部位无语音播报</li>
					<p>以上两个问题请首先排除将音量调低的情况，其次通过机器人底部电源开关断掉电源，重新上电启动机器人验证是否还有问题，如果不能解决，请联系客服。机器人没有连接网络和网络超时也会导致触摸无语音。</p>
					<li>语音对话机器人不回答</li>
					<p>机器人没有连接网络和网络超时都会导致机器人不回答，请确保网络通畅。在网络通畅的前提下机器人还是不回答，请断电重启后测试，如果不能解决，请联系客服。</p>
					<li>心率心电测试异常</li>
				</ul>
				<div class="ul-mid">测试心率心电首先保持三个触点洁净，测试人手指湿润，轻轻接触触点，不要说话，直立测试。测试时请不要给机器人充电，会影响测试。如果波形一直为直线试用以下方法：</div>
				<ul>
					<p>方法1：先把手指拿开在重新轻轻接触触点。</p>
					<p>方法2：再退到主界面重新测试。</p>
					<p> 如果不能解决，请联系客服。</p>
					<li> 系统运行卡顿</li>
					<p>请选择以下任意一种方式进行测试：1、在设置中清除缓存。2、在设置中进入系统设置，进行恢复出厂设置操作。如果不能解决，请联系客服。</p>
					<li> 图片加载慢</li>
					<p>请优先排除网络慢导致加载图片异常问题。</p>
					<li>打开电源开关机器人不启动</li>
					<p>请连接适配器，为机器人进行充电，充电五分钟，打开电源开关，如果机器人正常开机即可正常使用，如果还是不能开机，请联系客服。用于在中华人民共和国境内（港、澳、台地区除外）销售和购买的哎哟不错机器人产品。</p>
					<li>与哎哟不错机器人产品一起捆绑销 售的其他产品或促销品，如属于符合《哎哟不错机器人保修说明》所列性能故障范围的则按《哎哟不错机器人保修说明》执行，如不属于《哎哟不错机器人保修说明》范围，则按照该商品各自的标准保修服务承诺执行。</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	export default {
		name:'serviceSupport-commonProblems',
		data() {
			return {

			}
		},
		 head () {
		  return {
		      title: '多多达人机器人-常见问题与解决方案'	,
		      meta: [
			        { hid: 'serviceSupport-commonProblems', name: 'serviceSupport-commonProblems', content: '多多达人机器人-常见问题与解决方案' }
			      ]	
		    }
		  },
		scrollToTop: true,
		computed: {
			
		}
	}
</script>

<style>
	.precept ul li {
		margin: 6px 0;
	}
	
	.ul-mid {
		display: inline-block;
		width: 712px;
		font-size: 14px;
		text-align: left;
	}
	
	a {
		text-decoration: none;
		color: black;
	}
	
	.pay-top .precept ul {
		display: inline-block;
		width: 710px;
		font-size: 14px;
		text-align: left;
		padding-left: 19px;
	}
	
	.text-pay {
		background: #0793FF;
		color: white;
	}
	
	.precept p {
		font-size: 14px;
		text-align: left;
		margin-bottom: 6px;
		margin-top: 6px;
	}
	
	.box {
		display: inline-block;
		width: 593px;
		border-bottom: 1px solid #CCCCCC;
		margin-bottom: 48px;
		margin-top: 25px;
	}
	
	.precept h5 {
		font-size: 22px;
	}
	
	.pay-left p {
		height: 60px;
		font-size: 20px;
		line-height: 60px;
		text-align: left;
		padding-left: 86px;
	}
	
	.precept {
		padding-top: 30px;
		float: left;
		padding-bottom: 107px;
		width: 712px;
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