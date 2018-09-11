<template>
	<div id="akeyRental">
		<logo/>
		<header class="he-header">
			<div class="hezuo-tp clearfix">
				<div class="hezuo-nav7">
					<p class="hezuo-nav">精诚合作 融合共享</p>
					<p class="hezuo-nav">公共服务移动智能传媒</p>
					<p class="hezuo-nav2 ma-nav2">迎宾接待、查询浏览、展示采集、广告传媒、精准投放、</p>
					<p class="hezuo-nav2">定向派发、个性匹配、场景服务、方案定制、互动营销</p>
					<div class="hezuo-nav3">
						<nuxt-link to="/cooperation">
							<p class="hezuo-nav4">招商合作</p>
						</nuxt-link>
						<a href="#lease">
							<p class="hezuo-nav5">租赁/销售</p>
						</a>
					</div>
				</div>
				<div class="hezuo-nav6">
					<img src="../../static/img/mpDqrcode-min.jpg">
					<p>“扫一扫”深度合作</p>
				</div>
			</div>
		</header>
		<main id="cooperation">
			<div class="hezuo-mtop">
				<h5>合作方式</h5>
				<div>MODE OF COOPERATION</div>
				<p class="hezuo-p1">商业合作模式</p>
				<P class="hezuo-p2">建立与品牌与品牌之间携手合作，相互提供核心权益，加速品牌间的推广与宣传，达到品牌互助共赢</P>
				<img src="../../static/pc-tu/002-min.png">
				<div id="lease"></div>
			</div>
			<div class="hezuo-mmid">
				<h5>租赁流程</h5>
				<img src="../../static/pc-tu/0121-min.png">
			</div>
			<div class="hezuo-mfoot">
				<h5>营收保障</h5>
				<p>多多达人机器人制定科学、有效的市场政策，是迅速占领市场，保障合作共赢的基础。因此，多多达人制定出严谨的、 切实可行的加盟政策，为合作伙伴提供一个持续盈利的重要保障！</p>
			</div>
		</main>
	</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	export default {
		name:'akeyRental',
		components: {
			Logo
		},
		data() {
			return {
               title:'多多达人机器人-合作方式'
			}
		},
		 head () {
          return {
		      title: this.title,
		      meta: [
		        { hid: 'akeyRental', name: 'akeyRental', content: '多多达人机器人-合作方式' }
		      ]
		    }
		  },
		computed: {

		},
		mounted: function() {
			window.addEventListener('scroll', this.akeyScroll)
			this.neat1 = true
			var akey = window.pageYOffset;
			if(akey >= 100) {
				document.querySelector(".gubTop").style.background = "black"
			}
		},
		methods: {
			akeyScroll() {
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
	#akeyRental #cooperation{
		width: 100%;
		min-width: 1170px;
	}
	#akeyRental .hezuo-mfoot p {
		font-size: 14px;
		color: #666666;
		display: inline-block;
		width: 616px;
		margin-top: 65px;
	}
	
	#akeyRental .hezuo-mfoot h5 {
		font-size: 30px;
	}
	
	#akeyRental .hezuo-mfoot {
		text-align: center;
		padding-top: 76px;
		padding-bottom: 217px;
	}
	
	#akeyRental .hezuo-mmid h5 {
		font-size: 30px;
		color: white;
	}
	
	#akeyRental .hezuo-mmid {
		width: 100%;
		min-width: 1170px;
		background: black;
		padding-top: 37px;
		text-align: center;
	}
	
	#akeyRental .hezuo-mtop .hezuo-p2 {
		margin-top: 22px;
		font-size: 14px;
	}
	
	#akeyRental .hezuo-mtop .hezuo-p1 {
		margin-top: 30px;
		font-size: 14px;
	}
	
	#akeyRental .hezuo-mtop div {
		font-size: 14px;
		color: #999999;
	}
	
	#akeyRental .hezuo-mtop {
		text-align: center;
		padding-top: 154px;
	}
	
	#akeyRental .hezuo-mtop h5 {
		font-size: 30px;
	}
	
	#akeyRental .hezuo-nav6 img {
		width: 280px;
		height: 280px;
		margin: 32px 23px 25px 27px;
	}
	
	#akeyRental .hezuo-nav6 {
		background-color: #658DCB;
		font-size: 18px;
		padding-bottom: 46px;
		text-align: center;
		margin-left: 203px;
		color: white;
	}
	
	#akeyRental .hezuo-nav6 {
		display: inline-block;
	}
	
	#akeyRental .hezuo-nav7 {
		display: inline-block;
	}
	
	#akeyRental .hezuo-nav3 {
		margin-top: 88px;
	}
	
	#akeyRental .hezuo-nav5 {
		display: inline-block;
		width: 160px;
		height: 60px;
		background: #008ED6;
		color: white;
		line-height: 60px;
		text-align: center;
		margin-left: 72px;
	}
	
	#akeyRental .hezuo-nav4 {
		display: inline-block;
		width: 160px;
		height: 60px;
		background: #83D4FD;
		color: white;
		line-height: 60px;
		text-align: center;
	}
	
	#akeyRental .ma-nav2 {
		margin-top: 51px;
	}
	
	#akeyRental .hezuo-nav2 {
		font-size: 16px;
		color: #FFFFFF;
	}
	
	#akeyRental .hezuo-tp {
		width: 1170px;
		margin: 0 auto;
		padding-left: 15px;
		font-family: microsoft yahei;
	}
	
	#akeyRental .hezuo-nav {
		font-size: 60px;
		color: #FFFFFF;
	}
	
	#akeyRental .he-header {
		background: url(../../static/pc-tu/zu-min.png) no-repeat center center;
		background-size: 100% 100%;
		width: 100%;
		min-width: 1170px;
		height: 860px;
		padding-top: 243px;
	}
	
	#akeyRental .clearfix:after {
		content: '';
		display: block;
		clear: both;
	}
	
	#akeyRental .hezuo-mmid img {
		margin-top: 40px;
		margin-bottom: 35px;
	}
	
	#akeyRental a {
		text-decoration: none;
	}
		
	* {
		margin: 0;
		padding: 0;
	}
		
</style>