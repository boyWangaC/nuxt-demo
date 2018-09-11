<template>
	<div>
		<header id="header">
			<nav class="headerContent">
				<div class="gubTop">
					<nav id="nav">
						<nuxt-link to="/">
							<nav class="logo"></nav>
						</nuxt-link>
						<ul>
							<li class="productOne li" @mouseenter="noteOver" @mouseleave="noteOut">
								多多达人
								<div id="bots"></div>
								<transition name="fade">
									<ul v-if="show" class="nuxt-bnt">
										<nuxt-link to="/product02/show02">
											<li :class="{'opactiy':li1}" @mouseenter="opactOver1" @mouseleave="opactOut1"><img src="../static/img/duoduo01-min.png">
												<nav>客多多</nav>
											</li>
										</nuxt-link>
										<nuxt-link to="/product01/show01">
											<li :class="{'opactiy':li2}" @mouseenter="opactOver2" @mouseleave="opactOut2"><img src="../static/img/duoduo02-min.png">
												<nav>喜多多</nav>
											</li>
										</nuxt-link>
										<nuxt-link to="/product03/show03">
											<li :class="{'opactiy':li3}" @mouseenter="opactOver3" @mouseleave="opactOut3"><img src="../static/img/duoduo03-min.png">
												<nav>财多多</nav>
											</li>
										</nuxt-link>
										<nuxt-link to="/product04/show04">
											<li :class="{'opactiy':li4}" @mouseenter="opactOver4" @mouseleave="opactOut4"><img src="../static/img/duoduo04-min.png">
												<nav>康多多</nav>
											</li>
										</nuxt-link>
									</ul>
								</transition>
							</li>
							<li class="li  productTwo" @mouseenter="zuDing" @mouseleave="zudingOut">
								租赁定制
								<div id="botsT" @mouseenter="tranOver"></div>
								<transition name="fade">
									<ul v-if="showTat" class="foat" @mouseenter="tranOver">
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
												<nav>门店</nav>
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
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false,														
				nav: false,		
				li1: false,
				li2: false,
				li3: false,
				li4: false,							
				showTat: false
			}
		},
		methods: {
			tranOver() {
				this.showTat = true
				const scenes = 'scenes'
				if(this.$route.name == scenes) {
					this.showTat = 'true'
					document.querySelector(".headerContent").style.height = '136px';
				}
			},
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
			}			
		}
	}
</script>
<style>
	#header a {
		text-decoration: none;
	}
	
	#header .foat li {
		float: left;
		height: 60px;
		line-height: 60px;
		color: white;
		font-size: 14px;
		margin: 0 auto;
		padding: 0 10px;
	}
	
	#header .foat {
		display: inline-block;
		width: 560px !important;
	}
	
	#header .foat a {
		text-decoration: none !important;
	}
	
	#header .details-enter-active {
		transition: all 2s ease;
	}
	
	#header .details-leave-active {
		transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#header .details-enter,
	.details-leave-to {
		transform: translateX(350px);
		opacity: 0;
	}
	
	#header .met-enter-active {
		transition: all 4s ease-out;
	}
	
	#header .met-leave-active {
		transition: all 4s ease-out;
	}
	
	#header .met-enter,
	.met-leave-to {
		opacity: 0;
	}
	
	#header .gubTop {
		width: 100%;
		text-align: center;
		position: fixed;
		top: 0px;
		z-index: 666;
	}
	
	#banderWarp #ban .banthr {
		width: 100%;
		height: 100%;
	}
	
	#banderWarp #ban {
		width: 1170px;
		margin: 0 auto;
		position: relative;
	}
	
	#banderWarp {
		width: 100%;
		height: 960px;
		background: black;
	}
	
	#header .fade-enter-active {
		transition: all 0.2s ease;
	}
	
	#header .fade-leave-active {
		transition: all 0.2s ease;
	}
	
	#header .fade-enter,
	.fade-leave-to {
		opacity: 0;
		transform: translateX(60px);
	}
	
	#header #nav .nuxt-bnt li nav {
		position: absolute;
		top: 60px;
		left: 15px;
		font-size: 14px;
		color: white;
	}
	
	#header .opactiy {
		opacity: 1 !important;
	}
	
	#header #nav .nuxt-bnt a nav {
		position: absolute;
		top: 60px;
		left: 15px;
		font-size: 14px;
		color: white;
		height: 76px;
		line-height: 76px;
	}
	
	#header #nav .nuxt-bnt a {
		height: 130px;
		float: left;
		position: relative;
		width: 70px;
		border: 0;
	}
	
	#header #nav .nuxt-bnt li {
		height: 130px;
		float: left;
		position: relative;
		width: 70px;
		opacity: 0.7;
	}
	
	#header .headerContent {
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
	
	#header #nav .li {
		float: left;
		font-size: 15px;
		height: 76px;
		width: 105px;
		line-height: 76px;
		text-align: center;
		color: #FFFFFF;
	}
	
	#header #nav ul {
		display: inline-block;
		width: 480px;
		list-style: none;
		float: right;
		margin: 0;
		padding: 0;
	}
	
	#header .logo {
		width: 183px;
		height: 49px;
		background: url(../static/nav/LOGO-NEW.png) no-repeat center center;
		background-size: 100% 100%;
		float: left;
		margin-top: 13px;
	}
	
	#header {
		width: 100%;
		position: relative;
		top: 0;
		min-width: 1170px;
		z-index: 101;
	}
	
	#nav {
		width: 1170px;
		margin: 0 auto;
		position: relative;
	}
	
	#header .clearfix:after {
		display: block;
		content: '';
		clear: both;
	}
	
	* {
		box-sizing: border-box;
		margin: 0px;
		padding: 0px;
	}	
</style>