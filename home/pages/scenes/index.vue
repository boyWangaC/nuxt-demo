<template>
	<div id="scenes">
		<logo/>
		<header id="header">
			<nav class="headerContent">
				<div class="gubTop">
					<nav id="nav">
						<nuxt-link to="/">
							<nav class="logo"> </nav>
						</nuxt-link>
						<ul>
							<li class="productOne li" @mouseenter="noteOver" @mouseleave="noteOut">
								多多达人
								<div id="bots"></div>
								<transition name="fade">
									<ul v-if="show" class="nuxt-bnt">
										<nuxt-link to="/product02/show02">
											<li :class="{'opactiy':li1}" @mouseenter="opactOver1" @mouseleave="opactOut1"><img src="../../static/img/duoduo01-min.png">
												<nav>客多多</nav>
											</li>
										</nuxt-link>
										<nuxt-link to="/product01/show01">
											<li :class="{'opactiy':li2}" @mouseenter="opactOver2" @mouseleave="opactOut2"><img src="../../static/img/duoduo02-min.png">
												<nav>喜多多</nav>
											</li>
										</nuxt-link>
										<nuxt-link to="/product03/show03">
											<li :class="{'opactiy':li3}" @mouseenter="opactOver3" @mouseleave="opactOut3"><img src="../../static/img/duoduo03-min.png">
												<nav>财多多</nav>
											</li>
										</nuxt-link>
										<nuxt-link to="/product04/show04">
											<li :class="{'opactiy':li4}" @mouseenter="opactOver4" @mouseleave="opactOut4"><img src="../../static/img/duoduo04-min.png">
												<nav>康多多</nav>
											</li>
										</nuxt-link>
									</ul>
								</transition>
							</li>
							<li class="li  productTwo" @mouseenter="zuDing" @mouseleave="zudingOut">
								租赁定制
								<div id="botsT"></div>
								<transition name="fade">
									<ul v-if="showTat" class="foat">
										<a href="/scenes#scenesBg1">
											<li :class="{'opactiy':li1}">
												<nav>医院</nav>
											</li>
										</a>
										<a href="/scenes#scenesBg2">
											<li :class="{'opactiy':li2}">
												<nav>婚庆</nav>
											</li>
										</a>
										<a href="/scenes#scenesBg3">
											<li :class="{'opactiy':li3}">
												<nav>会展</nav>
											</li>
										</a>
										<a href="/scenes#scenesBg4">
											<li :class="{'opactiy':li4}">
												<nav>教育</nav>
											</li>
										</a>
										<a href="/scenes#scenesBg5">
											<li :class="{'opactiy':li4}">
												<nav>美容院</nav>
											</li>
										</a>
										<a href="/scenes#scenesBg6">
											<li :class="{'opactiy':li4}">
												<nav>药店</nav>
											</li>
										</a>
										<a href="/scenes#scenesBg7">
											<li :class="{'opactiy':li4}">
												<nav>商场</nav>
											</li>
										</a>
										<a href="/scenes#scenesBg8">
											<li :class="{'opactiy':li4}">
												<nav>地产</nav>
											</li>
										</a>
										<a href="/scenes#scenesBg9">
											<li :class="{'opactiy':li4}">
												<nav>定制咨询</nav>
											</li>
										</a>
										<a href="/scenes#scenesBg9">
											<li :class="{'opactiy':li4}">
												<nav>租赁下单</nav>
											</li>
										</a>
									</ul>
								</transition>
							</li>
							<nuxt-link to="/cooperation">
								<li class="li">商务合作</li>
							</nuxt-link>
							<a href="https://shop394993838.taobao.com/index.htm?spm=2013.1.w5002-17654909297.2.740cdebaz7pV0y" target="_Blank">
								<li class="li ">官方商城</li>
							</a>
						</ul>
					</nav>
				</div>
			</nav>
		</header>

		<nav>
			<nav class="scenesBg1" id="scenesBg1">
				<transition name="rootDate">
					<nav class="rootDate" v-if="bort1"></nav>
				</transition>
				<transition name="scenes">
					<nav class="product-sent" v-if="top1">
						<nav id="nav-mister1">
							<p></p>
						</nav>
						<nav id="nav-mister2">
							<p></p>
						</nav>
						<nav id="nav-mister3">
							<p></p>
						</nav>
						<nav id="nav-mister4">
							<p></p>
						</nav>
						<h2>医院</h2>
						<p id="p">多多达人康多多，一款加强医患互信、便捷就医、科室导航、帮助医院升级成为全新智能医院的导医机器人</p>
					</nav>
				</transition>
			</nav>
			<nav class="scenesBg2" id="scenesBg2">
				<transition name="rootDate2">
					<nav class="rootDate" v-if="bort2"></nav>
				</transition>
				<transition name="scenes2">
					<nav class="product-sent" v-if="top2">
						<nav id="nav-mister1">
							<p></p>
						</nav>
						<nav id="nav-mister2">
							<p></p>
						</nav>
						<nav id="nav-mister3">
							<p></p>
						</nav>
						<nav id="nav-mister4">
							<p></p>
						</nav>
						<h2>婚庆</h2>
						<p id="p">多多达人喜多多，一场智慧婚礼时代的发起者，智能伴娘团的首选机器人，您一生一次的重要选择！</p>
					</nav>
				</transition>
			</nav>
			<nav class="scenesBg3" id="scenesBg3">
				<transition name="rootDate3">
					<nav class="rootDate" v-if="bort3"></nav>
				</transition>
				<transition name="scenes3">
					<nav class="product-sent" v-if="top3">
						<nav id="nav-mister1">
							<p></p>
						</nav>
						<nav id="nav-mister2">
							<p></p>
						</nav>
						<nav id="nav-mister3">
							<p></p>
						</nav>
						<nav id="nav-mister4">
							<p></p>
						</nav>
						<h2>会展</h2>
						<p id="p">搜集潜在客户资源？愁！产品展示空间不够？忧！What can I do？多多达人财多多，帮您解忧去愁！</p>
					</nav>
				</transition>
			</nav>
			<nav class="scenesBg4" id="scenesBg4">
				<transition name="rootDate4">
					<nav class="rootDate" v-if="bort4"></nav>
				</transition>
				<transition name="scenes4">
					<nav class="product-sent" v-if="top4">
						<nav id="nav-mister1">
							<p></p>
						</nav>
						<nav id="nav-mister2">
							<p></p>
						</nav>
						<nav id="nav-mister3">
							<p></p>
						</nav>
						<nav id="nav-mister4">
							<p></p>
						</nav>
						<h2>教育</h2>
						<p id="p">一款引起智能培训教育风潮的推动者，一款带动教育行业重拾信心的领航者！没错，我就是多多达人！</p>
					</nav>
				</transition>
			</nav>
			<nav class="scenesBg5" id="scenesBg5">
				<transition name="rootDate5">
					<nav class="rootDate" v-if="bort5"></nav>
				</transition>
				<transition name="scenes5">
					<nav class="product-sent" v-if="top5">
						<nav id="nav-mister1">
							<p></p>
						</nav>
						<nav id="nav-mister2">
							<p></p>
						</nav>
						<nav id="nav-mister3">
							<p></p>
						</nav>
						<nav id="nav-mister4">
							<p></p>
						</nav>
						<h2>美容院</h2>
						<p id="p">一个看脸的时代，有多少美丽能为你所用？多多达人，用心服务，用不朽的容颜为您一生的美丽代言！</p>
					</nav>
				</transition>
			</nav>
			<nav class="scenesBg6" id="scenesBg6">
				<transition name="rootDate6">
					<nav class="rootDate" v-if="bort6"></nav>
				</transition>
				<transition name="scenes6">
					<nav class="product-sent" v-if="top6">
						<nav id="nav-mister1">
							<p></p>
						</nav>
						<nav id="nav-mister2">
							<p></p>
						</nav>
						<nav id="nav-mister3">
							<p></p>
						</nav>
						<nav id="nav-mister4">
							<p></p>
						</nav>
						<h2>药店</h2>
						<p id="p">为了患者的健康，我们必须更加专业！为了患者的便利，我们必须更加智能！多多达人康多多，智能药房，购药直通车！</p>
					</nav>
				</transition>
			</nav>
			<nav class="scenesBg7" id="scenesBg7">
				<transition name="rootDate7">
					<nav class="rootDate" v-if="bort7"></nav>
				</transition>
				<transition name="scenes7">
					<nav class="product-sent" v-if="top7">
						<nav id="nav-mister1">
							<p></p>
						</nav>
						<nav id="nav-mister2">
							<p></p>
						</nav>
						<nav id="nav-mister3">
							<p></p>
						</nav>
						<nav id="nav-mister4">
							<p></p>
						</nav>
						<h2>商场</h2>
						<p id="p">多多达人客多多，挑战线上价格战，瓦解断货困扰，复兴实体门店，携手连锁门店，共赢天作之合！</p>
					</nav>
				</transition>
			</nav>
			<nav class="scenesBg8" id="scenesBg8">
				<transition name="rootDate8">
					<nav class="rootDate" v-if="bort8"></nav>
				</transition>
				<transition name="scenes8">
					<nav class="product-sent" v-if="top8">
						<nav id="nav-mister1">
							<p></p>
						</nav>
						<nav id="nav-mister2">
							<p></p>
						</nav>
						<nav id="nav-mister3">
							<p></p>
						</nav>
						<nav id="nav-mister4">
							<p></p>
						</nav>
						<h2>地产</h2>
						<p id="p">多多达人的目标是，每一个优秀的房产经纪人，都应该配备一个智能助理！专业的你，值得拥有专业的我！</p>
					</nav>
				</transition>
			</nav>
		</nav>

		<nav class="full" id="scenesBg9">
			<h5>还等什么？马上预约！</h5>
			<nav class="mrt-proe clearfix">
				<nav class="ssrt-nuxt">
					<h1>定制咨询</h1>
					<nav id="router-mato">
						<p id="botNums">全球统一服务热线</p>
						<p id="botNubet">0755-8366-7791</p>
					</nav>
				</nav>
				<nav class="ssrt-nuxt sildet">
					<h1>租赁下单</h1>
					<nav id="tamt">
						<img src="../../static/mpqrcode-min.jpg">
						<p>扫描二维码，开启小程序租赁下单</p>
					</nav>
				</nav>
			</nav>
		</nav>
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
				show: false,
				hid1: false,
				hid2: false,
				hid3: false,
				hid4: false,
				max: false,
				max2: false,
				max3: false,
				max4: false,
				nav: false,
				nav1: false,
				slide: false,
				bans: false,
				cont: false,
				nam: false,
				li1: false,
				li2: false,
				li3: false,
				li4: false,
				rants: false,
				mets: false,
				showTat: true,
				top1: false,
				top2: false,
				top3: false,
				top4: false,
				top5: false,
				top6: false,
				top7: false,
				top8: false,
				bort1: false,
				bort2: false,
				bort3: false,
				bort4: false,
				bort5: false,
				bort6: false,
				bort7: false,
				bort8: false
			}
		},
		 head () {
		  return {
		      title: '多多达人机器人-场景应用'	,
		      meta: [
			        { hid: 'scenes', name: 'scenes', content: '多多达人机器人-场景应用' }
			      ]	
		    }
		  },
		mounted: function() {
			window.addEventListener('scroll', this.scenesScroll)
			var yjs = window.pageYOffset;
			var marpOffset = document.querySelector('.scenesBg1').offsetHeight
			if(yjs >= 0 || yjs < marpOffset) {
				this.top1 = true
				this.bort1 = true
			}
			document.querySelector(".gubTop").style.background = "black"
			document.querySelector('.headerContent').style.height = "136px"
			document.querySelector(".productTwo").style.color = '#3480B5'
			document.querySelector('#botsT').style.borderBottom = "1px solid #3480B5"
		},
		computed: {

		},
		methods: {
			showOver() {
				this.show = true
				document.querySelector(".headerContent").style.height = '220px';
				document.querySelector(".productOne").style.color = "#3480B5";
				document.querySelector("#bots").style.borderBottom = "1px solid #3480B5"
			},
			noteOver() {
				this.show = true
				this.showTat = false
				document.querySelector(".productOne").style.color = '#3480B5'
				document.querySelector('#bots').style.borderBottom = "1px solid #3480B5"
				document.querySelector(".headerContent").style.height = '220px';
				document.querySelector("#botsT").style.borderBottom = "0px solid #3480B5";
				document.querySelector(".productTwo").style.color = "white";
			},
			noteOut() {
				const scenes = 'scenes'
				if(this.$route.name == scenes) {
					document.querySelector(".headerContent").style.height = '136px';
					document.querySelector(".productTwo").style.color = "#3480B5";
					document.querySelector("#botsT").style.borderBottom = "1px solid #3480B5"
					this.showTat = true
				} else {
					document.querySelector(".headerContent").style.height = '0px';
					this.showTat = false
				}

				this.show = false
				document.querySelector(".productOne").style.color = 'white'
				document.querySelector('#bots').style.borderBottom = "0px solid #3480B5"

			},
			zudingOut() {
				const scenes = 'scenes'
				if(this.$route.name == scenes) {
					document.querySelector(".productTwo").style.color = "#3480B5";
					document.querySelector("#botsT").style.borderBottom = "1px solid #3480B5"
					document.querySelector("#bots").style.borderBottom = "0px solid #3480B5";
					document.querySelector(".headerContent").style.height = '136px';
					this.showTat = true
				} else {
					this.showTat = false
					document.querySelector("#botsT").style.borderBottom = "0px solid #3480B5";
					document.querySelector(".productTwo").style.color = "white";
					document.querySelector(".headerContent").style.height = '0px';
				}

			},
			zuDing() {
				document.querySelector(".productTwo").style.color = "#3480B5";
				document.querySelector("#botsT").style.borderBottom = "1px solid #3480B5"
				document.querySelector("#bots").style.borderBottom = "0px solid #3480B5";
				document.querySelector(".headerContent").style.height = '136px';
				this.showTat = true
			},
			opactOver1() {
				this.li1 = true
			},
			opactOut1() {
				this.li1 = false
			},
			opactOver2() {
				this.li2 = true
			},
			opactOut2() {
				this.li2 = false
			},
			opactOver3() {
				this.li3 = true
			},
			opactOut3() {
				this.li3 = false
			},
			opactOver4() {
				this.li4 = true
			},
			opactOut4() {
				this.li4 = false
			},							
			scenesScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				var marpOffset2 = document.querySelector('.scenesBg2').offsetTop / 2
				if(scrollTop >= marpOffset2) {
					this.top2 = true
					this.bort2 = true
				}

				var marpOffset3 = document.querySelector('.scenesBg3').offsetTop - marpOffset2
				if(scrollTop >= marpOffset3) {
					this.top3 = true
					this.bort3 = true
				}

				var marpOffset4 = document.querySelector('.scenesBg4').offsetTop - marpOffset2
				if(scrollTop >= marpOffset4) {
					this.top4 = true
					this.bort4 = true
				}

				var marpOffset5 = document.querySelector('.scenesBg5').offsetTop - marpOffset2
				if(scrollTop >= marpOffset5) {
					this.top5 = true
					this.bort5 = true
				}

				var marpOffset6 = document.querySelector('.scenesBg6').offsetTop - marpOffset2
				if(scrollTop >= marpOffset6) {
					this.top6 = true
					this.bort6 = true
				}

				var marpOffset7 = document.querySelector('.scenesBg7').offsetTop - marpOffset2
				if(scrollTop >= marpOffset7) {
					this.top7 = true
					this.bort7 = true
				}

				var marpOffset8 = document.querySelector('.scenesBg8').offsetTop - marpOffset2
				if(scrollTop >= marpOffset8) {
					this.top8 = true
					this.bort8 = true
				}
			}
		}
	}
</script>

<style>
	#scenes .rootDate-enter-active {
		transition: all 1s ease;
	}
	
	#scenes .rootDate-leave-active {
		transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .rootDate-enter,
	.rootDate-leave-to {
		opacity: 0;
		transform: scale(0);
	}
	
	#scenes .rootDate2-enter-active {
		transition: all 1s ease;
	}
	
	#scenes .rootDate2-leave-active {
		transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .rootDate2-enter,
	.rootDate2-leave-to {
		opacity: 0;
		transform: scale(0);
	}
	
	#scenes .rootDate3-enter-active {
		transition: all 1s ease;
	}
	
	#scenes .rootDate3-leave-active {
		transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .rootDate3-enter,
	.rootDate3-leave-to {
		opacity: 0;
		transform: scale(0);
	}
	
	#scenes .rootDate4-enter-active {
		transition: all 1s ease;
	}
	
	#scenes .rootDate4-leave-active {
		transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .rootDate4-enter,
	.rootDate4-leave-to {
		opacity: 0;
		transform: scale(0);
	}
	
	#scenes .rootDate5-enter-active {
		transition: all 1s ease;
	}
	
	#scenes .rootDate5-leave-active {
		transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .rootDate5-enter,
	.rootDate5-leave-to {
		opacity: 0;
		transform: scale(0);
	}
	
	#scenes .rootDate6-enter-active {
		transition: all 1s ease;
	}
	
	#scenes .rootDate6-leave-active {
		transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .rootDate6-enter,
	.rootDate6-leave-to {
		opacity: 0;
		transform: scale(0);
	}
	
	#scenes .rootDate7-enter-active {
		transition: all 1s ease;
	}
	
	#scenes .rootDate7-leave-active {
		transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .rootDate7-enter,
	.rootDate7-leave-to {
		opacity: 0;
		transform: scale(0);
	}
	
	#scenes .rootDate8-enter-active {
		transition: all 1s ease;
	}
	
	#scenes .rootDate8-leave-active {
		transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .rootDate8-enter,
	.rootDate8-leave-to {
		opacity: 0;
		transform: scale(0);
	}
	
	#scenes .scenes-enter-active {
		transition: all 0.4s ease;
	}
	
	#scenes .scenes-leave-active {
		transition: all 0.4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .scenes-enter,
	.scenes-leave-to {
		transform: translate(100%, 100%);
	}
	
	#scenes .scenes2-enter-active {
		transition: all 0.4s ease;
	}
	
	#scenes .scenes2-leave-active {
		transition: all 0.4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .scenes2-enter,
	.scenes2-leave-to {
		transform: translate(100%, 100%);
	}
	
	#scenes .scenes3-enter-active {
		transition: all 0.4s ease;
	}
	
	#scenes .scenes3-leave-active {
		transition: all 0.4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .scenes3-enter,
	.scenes3-leave-to {
		transform: translate(100%, 100%);
	}
	
	#scenes .scenes4-enter-active {
		transition: all 0.4s ease;
	}
	
	#scenes .scenes4-leave-active {
		transition: all 0.4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .scenes4-enter,
	.scenes-leave-to {
		transform: translate(100%, 100%);
	}
	
	#scenes .scenes5-enter-active {
		transition: all 0.4s ease;
	}
	
	#scenes .scenes5-leave-active {
		transition: all 0.4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .scenes5-enter,
	.scenes-leave-to {
		transform: translate(100%, 100%);
	}
	
	#scenes .scenes6-enter-active {
		transition: all 0.4s ease;
	}
	
	#scenes .scenes6-leave-active {
		transition: all 0.4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .scenes6-enter,
	.scenes6-leave-to {
		transform: translate(100%, 100%);
	}
	
	#scenes .scenes7-enter-active {
		transition: all 0.4s ease;
	}
	
	#scenes .scenes7-leave-active {
		transition: all 0.4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .scenes7-enter,
	.scenes7-leave-to {
		transform: translate(100%, 100%);
	}
	
	#scenes .scenes8-enter-active {
		transition: all 0.4s ease;
	}
	
	#scenes .scenes8-leave-active {
		transition: all 0.4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#scenes .scenes8-enter,
	.scenes8-leave-to {
		transform: translate(100%, 100%);
	}
	
	#scenes .rootDate {
		width: 600px;
		height: 460px;
		border: 1px dashed #FFFFFF;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -300px;
		margin-top: -230px;
		z-index: 6;
	}
	
	#scenes .product-sent #p {
		text-align: center;
		margin-top: 34px;
		color: white;
		width: 528px;
		line-height: 1.8;
		margin-left: auto;
		margin-right: auto;
	}
	
	#scenes .product-sent h2 {
		font-size: 30px;
		color: white;
		margin-top: 150px;
		text-align: center;
	}
	
	#nav-mister1 p {
		position: absolute;
		display: inline-block;
		width: 24px;
		height: 4px;
		top: 0px;
		left: 0px;
		background: white;
	}
	
	#nav-mister1 {
		position: absolute;
		top: 0;
		left: 0;
	}
	
	#nav-mister2 p {
		position: absolute;
		display: inline-block;
		width: 24px;
		height: 4px;
		top: 0px;
		right: 0px;
		background: white;
	}
	
	#nav-mister2 {
		position: absolute;
		top: 0;
		right: 0;
	}
	
	#nav-mister3 p {
		position: absolute;
		display: inline-block;
		width: 24px;
		height: 4px;
		bottom: 0px;
		left: 0px;
		background: white;
	}
	
	#nav-mister3 {
		position: absolute;
		bottom: 0;
		left: 0;
	}
	
	#nav-mister4 p {
		position: absolute;
		display: inline-block;
		width: 24px;
		height: 4px;
		bottom: 0px;
		right: 0px;
		background: white;
	}
	
	#nav-mister4 {
		position: absolute;
		bottom: 0;
		right: 0;
	}
	
	#scenes .product-sent nav {
		display: inline-block;
		width: 4px;
		height: 24px;
		background: white;
	}
	
	#scenes .product-sent {
		width: 800px;
		height: 400px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -400px;
		margin-top: -200px;
		background: rgba(0, 0, 0, 0.4);
		width: 801px;
	}
	
	#scenes .sildet {
		margin-left: 52px;
	}
	
	#tamt p {
		font-size: 20px;
		color: #000000;
	}
	
	#tamt {
		height: 372px;
		padding-top: 19px;
	}
	
	#botNubet {
		font-size: 48px;
		color: #258CFF;
		font-weight: bold;
		margin-top: 45px;
	}
	
	#router-mato {
		padding-top: 141px;
		height: 372px;
	}
	
	#botNums {
		font-size: 30px;
		font-weight: bold;
		text-align: center;
		color: #000000;
	}
	
	#scenes .ssrt-nuxt nav {
		background: white;
		text-align: center;
	}
	
	#scenes .ssrt-nuxt h1 {
		font-size: 30px;
		color: #000000;
		height: 96px;
		line-height: 96px;
		text-align: center;
	}
	
	#scenes .ssrt-nuxt {
		float: left;
		width: 524px;
		height: 473px;
		background: #F4F4F4;
		border-radius: 3px;
		padding: 0 5px 5px 5px;
	}
	
	#scenes .mrt-proe {
		width: 1100px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 58px;
		margin-bottom: 157px;
	}
	
	#scenes .full h5 {
		font-size: 36px;
		color: #000000;
		text-align: center;
	}
	
	#scenes .full {
		width: 100%;
		background: white;
		padding-top: 92px;
	}
	
	#scenes .scenesBg1 {
		position: relative;
		background: url(../../static/imgIndex/04-min.png) no-repeat center center;
		background-size: 100% 100%;
		width: 100%;
		height: 100vh;
	}
	
	#scenes .scenesBg2 {
		position: relative;
		background: url(../../static/imgIndex/02-min.png) no-repeat center center;
		background-size: 100% 100%;
		width: 100%;
		height: 100vh;
	}
	
	#scenes .scenesBg3 {
		position: relative;
		background: url(../../static/imgIndex/22-min.png) no-repeat center center;
		background-size: 100% 100%;
		width: 100%;
		height: 100vh;
	}
	
	#scenes .scenesBg4 {
		position: relative;
		background: url(../../static/imgIndex/14-min.png) no-repeat center center;
		background-size: 100% 100%;
		width: 100%;
		height: 100vh;
	}
	
	#scenes .scenesBg5 {
		position: relative;
		background: url(../../static/imgIndex/08-min.png) no-repeat center center;
		background-size: 100% 100%;
		width: 100%;
		height: 100vh;
	}
	
	#scenes .scenesBg6 {
		position: relative;
		background: url(../../static/imgIndex/11-min.png) no-repeat center center;
		background-size: 100% 100%;
		width: 100%;
		height: 100vh;
	}
	
	#scenes .scenesBg7 {
		position: relative;
		background: url(../../static/imgIndex/13-min.png) no-repeat center center;
		background-size: 100% 100%;
		width: 100%;
		height: 100vh;
	}
	
	#scenes .scenesBg8 {
		position: relative;
		background: url(../../static/imgIndex/15-min.png) no-repeat center center;
		background-size: 100% 100%;
		width: 100%;
		height: 100vh;
	}
</style>