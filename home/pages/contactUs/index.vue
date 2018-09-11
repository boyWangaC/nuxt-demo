<template>
	<div id="contactUs">
		<logo/>
		<div class="case">
			<img src="../../static/new/contact do do robot-min.png">
		</div>
		<div class="contant-mid">
			<h5>联系我们</h5>
			<div class="contant-a">CONTANT US</div>
		</div>
		<div class="contant-border"></div>
		<div class="cont">
			<div class=" tacstUs">
				<p class="cont-p">深圳市哎哟不错机器人科研有限公司</p>
				<p>公司地址：深圳市南山区科技一路桑达科技大厦 F1301</p>
				<p>邮编:518000</p>
				<p>联系电话: 0755-83667791</p>
				<p>QQ: 2042234080</p>
				<br />
				<br />
			</div>
			<div class="cont-mid">
				<img src="../../static/new/map-min.png">
			</div>
			<div class="cont-bnt">
				<img src="http://aaa001.images.aybc.so/weChat-min.jpg">
				<p>微信公众号</p>
				<img src="http://aaa001.images.aybc.so/customer-min.jpg">
				<p>微信客服</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	export default {
		name:'contactUs',
		components: {
			Logo
		},
		data() {
			return {
               title:'多多达人机器人-联系我们'    
			}
		},
		head () {
          return {
		      title: this.title,
		      meta: [
		        { hid: 'contactUs', name: 'contactUs', content: '多多达人机器人-联系我们' }
		      ]
		    }
		  },
		computed: {

		},
		mounted: function() {
			window.addEventListener('scroll', this.contactScroll)

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
			contactScroll() {
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
	#contactUs .cont-bnt p {
		font-size: 14px;
		text-align: center;
	}
	
	#contactUs .cont-bnt img {
		width: 100px;
		height: 100px;
	}
	
	#contactUs .cont-mid {
		margin-left: 34px;
		margin-right: 85px;
	}
	
	#contactUs .cont-mid img {
		width: 500px;
		height: 256px;
	}
	
	#contactUs .tacstUs .cont-p {
		font-size: 18px;
		margin-bottom: 21px;
		color: #333333;
	}
	
	#contactUs .tacstUs p {
		font-size: 14px;
		margin-bottom: 20px;
		color: #666666;
	}
	
	#contactUs .cont-bnt {
		display: inline-block;
	}
	
	#contactUs .cont-mid {
		display: inline-block;
	}
	
	#contactUs .tacstUs {
		display: inline-block;
		padding-top: 17px;
		padding-left: 10px;
	}
	
	#contactUs .cont {
		margin-bottom: 190px;
		width: 1170px;
		margin-left: auto;
		margin-right: auto;
	}
	
	#contactUs .contant-border {
		width: 1170px;
		border-bottom: 1px solid #EEEEEE;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100px;
		margin-bottom: 23px;
	}
	
	#contactUs .case-calk {
		background: #F1F4FB;
	}
	
	#contactUs .case img {
		width: 100%;
		min-width: 1170px;
	}
	
	#contactUs .contant-a {
		font-size: 18px;
		color: #858383;
	}
	
	#contactUs .contant-mid {
		padding-top: 99px;
		text-align: center;
		min-width: 1170px;
	}
	
	#contactUs .contant-mid h5 {
		font-size: 30px;
	}
	
	a {
		text-decoration: none;
	}
	
	* {
		margin: 0;
		padding: 0;
	}
		
	#contactUs .clearfix:after {
		content: '';
		display: block;
		clear: both;
	}
</style>