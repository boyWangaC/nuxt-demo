<template>
	<div class="pay-calk" id="new">
		<logo/>
		<div class="pay">
			<img src="../static/new/ma-min.png">
		</div>
		<div class="new-mid">
			<div class="company-new">
				<h5>新闻动态</h5>
				<div>NEWS</div>
			</div>
			<div class="news-top">
				<nuxt-link to="/new/newsTrends">
					<div>公司新闻</div>
				</nuxt-link>
				<nuxt-link to="/new/newsIndustry">
					<div>行业新闻</div>
				</nuxt-link>
			</div>
		</div>
		<main class="text-main">
			<nuxt-child/>
		</main>
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

			}
		},
		computed: {
			list() {
				return this.$store.state.list
			}
		},
		mounted: function() {
			window.addEventListener('scroll', this.newScroll)
			const headst = document.querySelector('.headerContent').style.height
			const ab = headst.substr(0, 1)
			if(ab > 0) {
				document.querySelector("#botsT").style.borderBottom = "0px solid #3480B5";
				document.querySelector(".productTwo").style.color = "white";
				const foat = document.querySelector('.foat')
				foat.style.display = "none"
				document.querySelector('.headerContent').style.height = '0px'
			}
			var sent = window.pageYOffset;
			if(sent >= 50) {
				document.querySelector(".gubTop").style.background = "black"
			}
		},
		methods: {
			newScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				if(scrollTop > 50) {
					document.querySelector(".gubTop").style.background = "black"
				} else {
					document.querySelector(".gubTop").style.background = ""
				}
			}				
		}
	}
</script>

<style>
	#new .nuxt-link-active {
		color: white;
		background: #3AA9FF !important;
	}
	
	#new .new-mid {
		padding-top: 100px;
	}
	
	#new .news-top a {
		display: inline-block;
		width: 111px;
		height: 35px;
		line-height: 35px;
		font-size: 16px;
		margin-top: 50px;
		background: #fff;
	}
	
	#new .company-new div {
		font-size: 18px;
		color: #3E396B;
		text-align: center;
	}
	
	#new .company-new h5 {
		font-size: 30px;
		color: #3E396B;
		text-align: center;
	}
	
	#new .text-main {
		padding: 0px;
	}
	
	#new .pay-calk {
		background: #F1F4FB;
	}
	
	#new .pay img {
		width: 100%;
		min-width: 1170px;
	}
	
	a {
		text-decoration: none;
		color: #000000;
	}

	* {
		margin: 0;
		padding: 0;
	}

	#new .clearfix:after {
		content: '';
		display: block;
		clear: both;
	}
</style>