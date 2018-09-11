<template>
	<div id="plase">
		<logo/>
		<main id="plase-buid">
			<div class="details-main">
				<template>
					<button @click="$store.commit('increment', '点击了')">{{ $store.state.counter }}</button>
				</template>
				<div class="news-detailsw">
					<h1>{{details.info.title}}</h1>
					<p class="activeText">{{details.info.date}}</p>
					<div class="pays-img" v-html="details.info.content"></div>
				</div>
				<div class="xiaNuxt clearfix">
					<div v-if="details.last" style="text-align: left;float: left;">
						<nuxt-link :to="'/plase/'+details.last.id + '?type=' + $route.query.type">上一篇: {{details.last.title}}</nuxt-link>
					</div>
					<div v-else style="text-align: left;float: left;">
						<nuxt-link to="/new/newsTrends">没有了!去新闻页看看吧!</nuxt-link>
					</div>
					<div v-if="details.next" style="text-align: right;float: right;">
						<nuxt-link :to="'/plase/' + details.next.id + '?type=' + $route.query.type">下一篇: {{details.next.title}}</nuxt-link>
					</div>
					<div v-else style="text-align: right;float: right;">
						<nuxt-link to="/new/newsTrends">没有了!去新闻页看看吧!</nuxt-link>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	import axios from 'axios'
	export default {
		name:'plase-id',
		components: {
			Logo
		},
		fetch({
			store,
			query,
			params
		}) {
			return axios.get('https://mp.aybc.so/app/news/' + params.id + '?type=' + query.type)
				.then((res) => {
					store.commit('increment', res.data.data)
				})
				.catch((e) => {
					console.log(e)
				})
		},
		data() {
			return {
				id: this.$route.params.id
			}
		},
		head() {
			return {
				title: '多多达人机器人-新闻详情',
				meta: [{
					hid: 'plase-id',
					name: 'plase-id',
					content: '多多达人机器人-新闻详情'
				},{
					hid: 'plase-id',
					name: 'plase-id',
					content: '多多达人机器人-新闻详情'
				}]
			}
		},
		computed: {
			details() {
				return this.$store.state.list
			}
		},
		methods: {
			plase() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				if(scrollTop >= 0) {
					document.querySelector('.gubTop').style.background = 'black'
				}
			}
		},
		mounted: function() {
			setTimeout(() => {
				window.addEventListener('scroll', this.plase)
				var newHeight = window.pageYOffset
				if(newHeight >= 0) {
					document.querySelector('.gubTop').style.background = 'black'
				}
				const headst = document.querySelector('.headerContent').style.height
				const ab = headst.substr(0, 1)
				if(ab > 0) {
					document.querySelector('#botsT').style.borderBottom = '0px solid #3480B5'
					document.querySelector('.productTwo').style.color = 'white'
					const foat = document.querySelector('.foat')
					foat.style.display = 'none'
					document.querySelector('.headerContent').style.height = '0px'
				}
				var akey = window.pageYOffset
				if(akey >= 100) {
					document.querySelector('.gubTop').style.background = 'black'
				}
			}, 800)
		}
	}
</script>

<style>
	#plase a {
		color: black;
	}
	
	#plase .xiaNuxt div a {
		display: inline-block;
		color: #76838F;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	
	#plase .xiaNuxt div {
		max-width: 45%;
		border: 1px solid #e4eaec;
		padding: 6px;
		box-sizing: border-box;
	}
	
	#plase .xiaNuxt {
		margin-top: 20px;
	}
	
	#plase-buid {
		width: 100%;
		min-width: 1170px;
		background: #F0F0F0;
		padding-bottom: 30px;
		margin-top: 76px;
		padding-top: 30px;
		text-align: center;
	}
	
	#plase .details-main {
		width: 1170px;
		margin: 0 auto;
		background: white;
		box-sizing: border-box;
		padding: 30px;
		min-height: 500px;
	}
	
	#plase .pays-img img {
		max-width: 100%;
	}
	
	#plase .pays-img {
		word-break: break-all;
		text-align: left;
	}
	
	#plase .news-detailsw {
		margin-bottom: 46px;
	}
	
	#plase .news-detailsw h1 {
		text-align: left;
		margin-bottom: 15px;
		font-size: 32px;
		word-break:break-all;
	}
	
	#plase .activeText {
		font-size: 18px;
		color: #7d7d7d;
		text-align: left;
		border-bottom: 1px solid #dddddd;
		padding-bottom: 20px;
		margin-bottom: 20px;
	}
						
	#plase .clearfix:after {
		content: '';
		display: block;
		clear: both;
	}
	
	a {
		text-decoration: none;
	}
		
	* {
		margin: 0;
		padding: 0;
	}
</style>