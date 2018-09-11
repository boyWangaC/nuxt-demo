<template>
	<div id="default">
		<logo/>		

		<nav>
			<nuxt/>
		</nav>

		<nav class="clearfix footer-top calkNumxt">   
			<nav class="footMids">
				<div class="fter1">
					<p class="fter-p">关于我们</p>
					<nuxt-link to="/companyProfile">
						<p class="fter-p1">公司简介</p>
					</nuxt-link>
					<nuxt-link to="/new/newsTrends">
						<p class="fter-p2">新闻动态</p>
					</nuxt-link>
					<nuxt-link to="/joinUs">
						<p class="fter-p3">加入我们</p>
					</nuxt-link>
					<nuxt-link to="/patentCertificate">
						<p class="fter-p4">荣誉资质</p>
					</nuxt-link>
					<nuxt-link to="/contactUs">
						<p class="fter-p5">联系我们</p>
					</nuxt-link>
				</div>
				<div class="fter2">
					<p class="fter-p">服务与支持</p>
					<nuxt-link to="/serviceSupport/purchaseNotes">
						<p class="fter-p6">购买须知</p>
					</nuxt-link>
					<nuxt-link to="/serviceSupport/warranty">
						<p class="fter-p7">保修承诺</p>
					</nuxt-link>
					<nuxt-link to="/serviceSupport/commonProblems">
						<p class="fter-p8">常见问题与解决方案</p>
					</nuxt-link>					
				</div>
				<div class="fter3">
					<P class="fter-p">商务合作</P>
					<nuxt-link to="/cooperation">
						<p class="calk">我要代理</p>
					</nuxt-link>
					<nuxt-link to="/akeyRental">
						<p class="number">我要租赁</p>
					</nuxt-link>
					<a href="https://item.taobao.com/item.htm?spm=2013.1.w4023-17654909315.19.5954cff7ETTukq&id=562487185253" target="_Blank">
						<p>我要购买</p>
					</a>
					<nuxt-link to="/cooperation">
						<p>其他商务</p>
					</nuxt-link>
				</div>
				<div class="fter4">
					<p class="fter-p">关于我们</p>
					<div class="clearfix">
						<div class="end-img">
							<img src="http://aaa001.images.aybc.so/weChat-min.jpg">
							<p>关注公众号</p>
						</div>
						<div class="end-img ma-left">
							<img src="http://aaa001.images.aybc.so/customer-min.jpg">
							<p>关注微信客服</p>
						</div>
					</div>
					<p class="calk">服务热线</p>
					<div class="number">
						<div id="botnLeft"></div>
						<div id="botnRight"></div>
						<p>0755-8366-7791</p>
					</div>

				</div>
			</nav>
		</nav>				
		<div class="end">Copyright©2017深圳市.....科研有限公司All rights reserved <a href="http://www.miitbeian.gov.cn">粤ICP备16038767号</a></div>
	</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	export default {
		components: {
			Logo
		},
		data() {
			return {			
				nav: false,							
				showTat: false
			}
		},
		computed: {

		},
		mounted: function() {
			const scenes = 'scenes'
			if(this.$route.name == scenes) {
				this.showTat = true
				document.querySelector(".headerContent").style.height = '136px';
				document.querySelector(".productTwo").style.color = "#3480B5";
				document.querySelector("#botsT").style.borderBottom = "1px solid #3480B5"
			} else {
				this.showTat = false
			}
		},
		methods: {
		
		}
	}
</script>

<style>
	a {
		text-decoration: none;
	}
	
	*{
		box-sizing: border-box;
	}
	
	#default .headerContent {
		width: 100%;
		height: 0px;
		background: black;
		position: fixed;
		z-index: 66;
		top: 0;
		transition-duration: 0.1s;
		-moz-transition-duration: 0.1s;
		-webkit-transition-duration: 0.1s;
		-o-transition-duration: 0.1s;
	}	
	#default #nav {
		width: 1170px;
		margin: 0 auto;
		position: relative;
	}
	
	#default .clearfix:after {
		display: block;
		content: '';
		clear: both;
	}
	
	* {
		box-sizing: border-box;
		margin: 0px;
		padding: 0px;
	}
	
	#default .footer-top {
		display: inline-block;	
		width: 100%;
		min-width: 1170px;	
		padding-top: 37px;
		background: #2D3445;
		padding-bottom: 71px;
	}
	
	#default .fter4 .fter-p {
		padding-left: 16px;
		font-size: 16px;
		color: #CCCCCC;
	}
	
	#default .fter3 .fter-p {
		font-size: 16px;
		color: #CCCCCC;
		margin-top: 0;
	}
	
	#default .fter2 p {
		font-size: 14px;
		color: #ABABAB;
		margin-top: 21px;
	}
	
	#default .fter2 .fter-p {
		margin-top: 0;
		font-size: 16px;
		color: #CCCCCC;
	}
	
	#default .fter4 {
		float: left;
		width: 270px;
		padding-left: 36px;
		margin-left: 20px;
		margin-right: 10px;
	}
	
	#default .fter3 p {
		font-size: 14px;
		color: #ABABAB;
		margin-top: 21px;
	}
	
	#default .fter3 {
		float: left;
		width: 270px;
		text-align: center;
		margin-left: 30px;
	}
	
	#default .fter2 {
		float: left;
		width: 270px;
		text-align: center;
		margin-left: 30px;
	}
	
	#default .fter1 p {
		font-size: 14px !important;
		color: #ABABAB !important;
		margin-top: 21px;
	}
	
	#default .fter1 .fter-p {
		margin-top: 0;
		font-size: 16px !important;
		color: #CCCCCC !important;
	}
	
	#default .footMids {
		width: 1170px;
		margin: 0 auto;
		background: #2D3445;
	}
	
	#default .fter1 {
		float: left;
		width: 270px;
		text-align: center;
	}
	
	#default .fter4 .end-img p {
		font-size: 12px;
		color: #CCCCCC;
		margin-top: 11px;
		text-align: center;
	}
	
	#default .end-img img {
		width: 84px;
		height: 84px;
		margin-top: 25px;
		
	}
	
	#default .end-img {
		float: left;
		margin: 0 16px;
	}
	
	#default .end{
		display: inline-block;
		width: 100%;
		min-width: 1170px;
		font-size: 14px;
		color: #999999;
		text-align: center;
		height: 60px;
		line-height: 60px;
		background: black;
		margin-top: -5px;
	}
	#default .end a{
		color: #999999;
	}
	#default #botnRight {
		display: inline-block;
		width: 40px;
		border-top: 1px solid #697182;
		position: absolute;
		top: 0px;
		right: 0;
		height: 1px;
	}
	
	#default #botnLeft {
		height: 1px;
		display: inline-block;
		width: 40px;
		border-top: 1px solid #697182;
		position: absolute;
		top: 0px;
		left: 0;
	}
	
	#default .fter4 .number {
		position: relative;
		font-size: 18px;
		color: #697182;
		text-align: center;
		font-weight: bold;
		border-bottom: 1px solid #697182;
		padding-bottom: 15px;
		padding-top: 11px;
		border-left: 1px solid #697182;
		border-right: 1px solid #697182;
	}
	
	#default .calk {
		font-size: 14px;
		color: #697182;
		margin-top: 20px;
		text-align: center;
	}
	#default{
		width: 100%;
	}
</style>