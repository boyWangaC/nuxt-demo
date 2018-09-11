<template>
	<div class="case-calk" id="companyProfile">
		<logo/>
		<div class="case">
			<img src="../../static/pc-tu/aboutdodorobot2-min.png">
		</div>
		<div class="case-mid">
			<h5>关于我们</h5>
			<div class="case-a">ABOUT US</div>
		</div>
		<div class="company-mid">
			<div class="clearfix comNuxttom">
				<div class="company-left"><img src='../../static/pc-tu/company-min.png'></div>
				<div class="company-right">
					<div>深圳市哎哟不错机器人科研有限公司</div>
					<p>秉承着国家国务院印发《中国制造2025》，实现制造强国的战略目标，统筹布局和推动智能机器人、服务机器人等产品研发和产业化的“智能制造”主攻方向，以技术为入口，搭建平台，整合资源，以一流的设计和完善的服务体系，为企业提供软件、硬件技术支持、打通线上线下，为消费者创造良好的体验，为异业提供全方位解决方案，为人工智能机器人各行业、企业及消费者提供落地服务。
						<br />
					</p>
				</div>
			</div>
			<h5 class="comp">公司愿景</h5>
			<div class="case-b">THE COMPANY VISION</div>
			<div class="comp-foot">
				服务机器人如我们用手机一般普及，无人驾驶、深度学习、人工意识等<br/> 如今人工智能不仅应用于各个领域，而且进步的速度也绝对不容小视。
				<br/> 未来人工智能对于世界的改变，诚如200多年前，第一次工业革命对于世界的改变，它必将掀起一场新的产业革命，而服务机器人会是其中举足轻重的存在！未来服务机器人会是人们不可或缺的存在，正如今天你我手中的手机一样，融入我们的生活！
				<br/> 每个有手机的人，都会拥有服务机器人
			</div>
		</div>
	</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	export default {
		name:'companyProfile',
		components: {
			Logo
		},
		data() {
			return {
               title:'多多达人机器人-公司介绍'
			}
		},
		 head () {
          return {
		      title: this.title,
		      meta: [
		        { hid: 'companyProfile', name: 'companyProfile', content: '多多达人机器人-公司介绍' }
		      ]
		    }
		  },
		computed: {

		},
		mounted: function() {
			window.addEventListener('scroll', this.companyScroll)
			var akey = window.pageYOffset;
			if(akey >= 100) {
				document.querySelector(".gubTop").style.background = "black"
			}
		},
		methods: {
			companyScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				if(scrollTop > 100) {
					document.querySelector(".gubTop").style.background = "black"
				} else {
					document.querySelector(".gubTop").style.background = ""
				}
			}
		}
	}
</script>

<style>	
	body {
		margin: 0;
		padding: 0;
	}
	
	html {
		padding: 0;
		margin: 0;
	}
	
	#companyProfile .comp-foot {
		padding-bottom: 42px;
		width: 1170px;
		font-size: 14px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 61px;
		padding-left:15px;
		padding-right: 15px;
	}
	
	#companyProfile .case-b {
		text-align: center;
		font-size: 14px;
	}
	
	#companyProfile .comp {
		text-align: center;
		font-size: 24px;
		margin-top: 60px;
	}
	
	#companyProfile .company-border {
		width: 1170px;
		border-bottom: 1px solid #CCCCCC;
		margin: 0 auto;
	}
	
	#companyProfile .company-text {
		width: 1170px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 28px;
		margin-bottom: 59px;
	}
	
	#companyProfile .company-mid {
		margin-top: 61px;
		width: 100%;
	}
	
	#companyProfile .company-right p {
		display: inline-block;
		font-size: 14px;
	}
	
	#companyProfile .company-right div {
		display: inline-block;
		font-size: 18px;
		margin-bottom: 67px;
		margin-top: 5px;
	}
	
	#companyProfile .company-right {
		float: left;
		width: 430px;
		margin-left: 100px;
	}
	
	#companyProfile .company-left {
		float: left;
	}
	
	#companyProfile .comNuxttom {
		width: 1170px;
		padding: 0 15px;
		margin: 0 auto;
	}
	
	#companyProfile .case-calk {
		background: #F1F4FB;
	}
	
	#companyProfile .case-a {
		font-size: 18px;
	}
	
	#companyProfile .case-mid {
		width: 100%;
		min-width: 1170px;
		padding-top: 60px;
		text-align: center;
	}
	
	#companyProfile .case-mid h5 {
		font-size: 30px;
	}
	
	#companyProfile .case img {
		width: 100%;
		min-width: 1170px;
	}
	
	a {
		text-decoration: none;
	}
	
	* {
		margin: 0;
		padding: 0;
	}
	

	#companyProfile .clearfix:after {
		content: '';
		display: block;
		clear: both;
	}
	
</style>