<template>
	<div class="pay-calk" id="serviceSupport">
		<logo/>
		<nav class="pay">
			<img src="../static/pc-tu/fuwu-min.png">
		</nav>
		<nav class="pay-mid">
		</nav>
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
			
		},
		mounted: function() {
			window.addEventListener('scroll', this.serviceScroll)
			var akey = window.pageYOffset;
			if(akey >= 100) {
				document.querySelector(".gubTop").style.background = "black"
			}
		},
		methods: {
			serviceScroll() {
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
	#serviceSupport .text-main {
		padding: 0px;
	}
	
	#serviceSupport .pay-mid h5 {}
	
	#serviceSupport .pay-calk {
		background: #F1F4FB;
	}
	
	#serviceSupport .pay img {
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
		
	#serviceSupport .clearfix:after {
		content: '';
		display: block;
		clear: both;
	}
</style>