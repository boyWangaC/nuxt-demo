<template>
	<div class="zhuan-mid" id="patentCertificate">
		<logo/>
		<div class="zhuan"></div>
		<div class="zhuan-tt">
			<div class="zhu-one">
				<img src="../../static/mn/zlrz_icon_patent@2x-min.png">
				<p class="zhu-top">专利</p>
				<p>拥有国家专利产品，在机器人行业领先帅跑 <br/> <br/></p>
			</div>
			<div class="zhu-two">
				<img src="../../static/mn/zlrz_icon_authority@2x-min.png">
				<p class="zhu-top">权威</p>
				<p>哎哟不错机机器人在技术与产品上得到国家权威认证</p>
			</div>
			<div class="zhu-thr">
				<img src="../../static/mn/zlrz_icon_Authentication@2x-min.png">
				<p class="zhu-top">认证</p>
				<p>有自己的专利有自己的专利有自己的专利有自己的专利有自己</p>
			</div>
			<div class="zhu-si">
				<img src="../../static/mn/zlrz_icon_security@2x-min.png">
				<p class="zhu-top">安全</p>
				<p>有自己的专利有自己的专利有自己的专利有 <br/> <br/></p>
			</div>
		</div>
		<div class="zhuan-mids">
			<div class="zhu-img">
				<div class="zhu-imgone">
					<img src="../../static/zhuan/1-min.jpg">
					<p>奥V智能(iOS)</p>
				</div>
				<div class="zhu-imgtwo">
					<img src="../../static/zhuan/2-min.jpg">
					<p>奥V智能(安卓)</p>
				</div>
			</div>
			<div class="nentMun">
				<div class="zhu-imgthr">
					<img src="../../static/zhuan/3-min.jpg">
					<p>智能室内导航机器人</p>
				</div>
				<div class="zhu-imgfor">
					<img src="../../static/zhuan/9-min.jpg">
					<p>防摔倒机器人</p>
				</div>
				<div class="zhu-imgfive">
					<img src="../../static/zhuan/4-min.jpg">
					<p>客户信息管理机器人</p>
				</div>
			</div>
			<div id="fenritName">
				<div class="zhu-imgsix">
					<img src="../../static/zhuan/5-min.jpg">
					<p>检测心率心电机器人(安卓)</p>
				</div>
				<div class="zhu-imgsev">
					<img src="../../static/zhuan/6-min.jpg">
					<p>货物管理机器人</p>
				</div>
				<div class="zhu-imgeig">
					<img src="../../static/zhuan/7-min.jpg">
					<p>广告宣传机器人</p>
				</div>
				<div class="zhu-imgni">
					<img src="../../static/zhuan/8-min.jpg">
					<p>避障机器人</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	export default {
		name:'patentCertificate',
		components: {
			Logo
		},
		data() {
			return {

			}
		},
		head () {
          return {
		      title: '多多达人机器人-荣誉资质',
		      meta: [
		        { hid: 'patentCertificate', name: 'patentCertificate', content: '多多达人机器人-荣誉资质' }
		      ]	
		    }
		  },
		computed: {

		},
		mounted: function() {
			window.addEventListener('scroll', this.patentScroll)
			const headst = document.querySelector('.headerContent').style.height
			const ab = headst.substr(0, 1)
			if(ab > 0) {
				document.querySelector("#botsT").style.borderBottom = "0px solid #3480B5";
				document.querySelector(".productTwo").style.color = "white";
				const foat = document.querySelector('.foat')
				foat.style.display = "none"
				document.querySelector('.headerContent').style.height = '0px'
			}
			var akey = window.pageYOffset;
			if(akey >= 100) {
				document.querySelector(".gubTop").style.background = "black"
			}
		},
		methods: {
			patentScroll() {
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
		padding: 0;
		margin: 0;
	}
	
	#fenritName {
		width: 1170px;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		padding-bottom: 49px;
	}
	
	#patentCertificate .zhuan-mids p {
		text-align: center;
		margin-top: 28px;
	}
	
	#patentCertificate .zhuan-mid {
		background: #F1F4FB;
		width: 100%;
		min-width: 1170px;
		text-align: center;
	}
	
	#patentCertificate .zhuan-tt {
		padding-top: 28px;
		width: 1170px;
		text-align: center;
		margin: 0 auto;
	}
	
	#patentCertificate .nentMun {
		width: 1170px;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
	}
	
	#patentCertificate .zhu-imgni {
		display: inline-block;
		margin-left: 66px;
		font-size: 20px;
		margin-top: 52px;
	}
	
	#patentCertificate .zhu-imgeig {
		display: inline-block;
		margin-left: 66px;
		font-size: 20px;
		margin-top: 52px;
	}
	
	#patentCertificate .zhu-imgsev {
		display: inline-block;
		margin-left: 66px;
		font-size: 20px;
		margin-top: 52px;
	}
	
	#patentCertificate .zhu-imgsix {
		display: inline-block;
		font-size: 20px;
		margin-top: 52px;
		text-align: center;
	}
	
	#patentCertificate .zhu-imgfive {
		display: inline-block;
		margin-left: 108px;
		font-size: 20px;
		margin-top: 52px;
	}
	
	#patentCertificate .zhu-imgfor {
		display: inline-block;
		margin-left: 109px;
		font-size: 20px;
		margin-top: 52px;
	}
	
	#patentCertificate .zhu-imgthr {
		display: inline-block;
		font-size: 20px;
		margin-top: 52px;
	}
	
	#patentCertificate .zhu-imgtwo {
		display: inline-block;
		margin-left: 106px;
	}
	
	#patentCertificate .zhu-imgone {
		display: inline-block;
	}
	
	#patentCertificate .zhu-img p {
		font-size: 20px;
		text-align: center;
	}
	
	#patentCertificate .zhu-img {
		width: 1170px;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 17px;
	}
	
	* {
		box-sizing: border-box;
	}
	
	#patentCertificate .zhu-born {
		background: #DAECF9;
		display: inline-block;
		width: 110px;
		height: 110px;
		border-radius: 50%;
	}
	
	#patentCertificate .zhu-borw {
		display: inline-block;
		width: 128px;
		height: 128px;
		border: 2px solid #0793FF;
		border-radius: 50%;
		padding: 7px;
	}
	
	#patentCertificate .zhu-si p {
		font-size: 12px;
	}
	
	#patentCertificate .zhu-thr p {
		font-size: 12px;
	}
	
	#patentCertificate .zhu-two p {
		font-size: 12px;
	}
	
	#patentCertificate .zhu-one p {
		font-size: 12px;
	}
	
	#patentCertificate .zhu-si .zhu-top {
		font-size: 22px;
		margin-top: 19px;
		margin-bottom: 16px;
		text-align: center;
	}
	
	#patentCertificate .zhu-thr .zhu-top {
		font-size: 22px;
		margin-top: 19px;
		margin-bottom: 16px;
		text-align: center;
	}
	
	#patentCertificate .zhu-two .zhu-top {
		font-size: 22px;
		margin-top: 19px;
		margin-bottom: 16px;
		text-align: center;
	}
	
	#patentCertificate .zhu-one .zhu-top {
		font-size: 22px;
		margin-top: 19px;
		margin-bottom: 16px;
		text-align: center;
	}
	
	#patentCertificate .zhu-si {
		display: inline-block;
		width: 143px;
		margin-left: 109px;
	}
	
	#patentCertificate .zhu-thr {
		display: inline-block;
		width: 143px;
		margin-left: 100px;
	}
	
	#patentCertificate .zhu-two {
		display: inline-block;
		width: 143px;
		margin-left: 97px;
	}
	
	#patentCertificate .zhu-one {
		display: inline-block;
		width: 143px;
	}
	
	#patentCertificate .zhuan {
		background: url(../../static/pc-tu/bannertwo-min.png) no-repeat center center;
		width: 100%;
		min-width: 1170px;
		height: 530px;
	}
	
	a {
		text-decoration: none;
	}
	
	* {
		margin: 0;
		padding: 0;
	}
	
	#patentCertificate .clearfix:after {
		content: '';
		display: block;
		clear: both;
	}
</style>