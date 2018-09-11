<template>
	<div style="background: #F1F4FC;min-width: 1170px;" id="product01">
		<logo/>
		<header id="bannerBgs">
		</header>
		<nav id="nuxt-bert">
			<nav id="rentMent">
				<span id="comeT" class="met-show-products">
          <nuxt-link to="/">
            <img id="productsImg" src="../static/iconS-min.png">
            首页
          </nuxt-link>
        </span> /
				<span id="comeT" class="rightMargins met-show-products" @click="comets = !comets">
          <nuxt-link to="">
            多多达人
            <img id="xiaTents" src="../static/iconBnt-min.png">
          </nuxt-link>
          <span id="navbert" v-show="comets">
            <transition name="texts">
              <span v-if="comets" id="stedYear">
                <nuxt-link to="/product02/show02">
                  <span>
                    客多多
                  </span>
				</nuxt-link>
				<nuxt-link to="/product03/show03">
					<span>
                    财多多
                  </span>
				</nuxt-link>
				<nuxt-link to="/product04/show04">
					<span>
                    康多多
                  </span>
				</nuxt-link>
				</span>
				</transition>
				</span>
				</span>
				/
				<span class="rightMargins met-show-products">
          喜多多
        </span>
			</nav>
		</nav>
		<nav id="productMain">
			<nav id="rom " class="clearfix num-xtext">
				<nav id="romLeft">
					<nav id="textBg">
						<template>
							<el-carousel ref="car" :interval="5000" arrow="always" indicator-position="none" height="400px" @change="elem" :initial-index="0">
								<el-carousel-item>
									<nav>
										<img class="numNuxt" src="../static/nav/swiper1-min.png" />
									</nav>
								</el-carousel-item>
								<el-carousel-item>
									<nav>
										<img class="numNuxt" src="../static/nav/swiper2-min.png" />
									</nav>
								</el-carousel-item>
								<el-carousel-item>
									<nav>
										<img class="numNuxt" src="../static/nav/swiper3-min.png" />
									</nav>
								</el-carousel-item>
								<el-carousel-item>
									<nav>
										<img class="numNuxt" src="../static/nav/swiper4-min.png" />
									</nav>
								</el-carousel-item>
							</el-carousel>
						</template>
					</nav>
					<nav class="swiperScroll">
						<ul class="clearfix texter">
							<li @click="numtProp1">
								<img :class="{'numt':neat1}" src="../static/nav/swiper1-min.png" />
							</li>
							<li @click="numtProp2">
								<img :class="{'numt':neat2}" src="../static/nav/swiper2-min.png" />
							</li>
							<li @click="numtProp3">
								<img :class="{'numt':neat3}" src="../static/nav/swiper3-min.png" />
							</li>
							<li @click="numtProp4">
								<img :class="{'numt':neat4}" src="../static/nav/swiper4-min.png" />
							</li>
						</ul>
					</nav>
				</nav>
				<nav id="romRight">
					<nav>
						<h5>
              喜多多
            </h5>
						<nav id="keys">
							让实体联盟相互协作，共享资源，使老客户回流，新客户引流 让实体门店形成团结的实体联盟并成为股东，帮助实体 门店之间的联动销售，引流客户群体，资源共享，达到共赢 让消费者回归实体，升级智能门店，提升实体门店的综合服务能力，改变消费认知
						</nav>
					</nav>
					<nav class="productNav">
						<nav>
							<nav id="come">
								输入电压 : 12V DV
							</nav>
							<nav id="come">
								输入电流：2 A
							</nav>
						</nav>
						<nav>
							<nav id="come">
								胸前屏幕：7.0寸高清IPS触摸屏
							</nav>
							<nav id="come">
								分辨率 : 1024 * 600
							</nav>
						</nav>
						<nav>
							<nav id="come">
								机器人尺寸：50 X 50 X 155/CM
							</nav>
							<nav id="come">
								机器人系统 : Android 5.1
							</nav>
						</nav>
						<nav>
							<nav id="come">
								机器人系统 : Android 5.1
							</nav>
							<nav id="come">
								RAM：1G
							</nav>
						</nav>
						<nav>
							<nav id="come">
								喇叭：三英寸立体声独立音腔喇叭
							</nav>
							<nav id="come">
								FLASH：8G
							</nav>
						</nav>
					</nav>
				</nav>
				<nav class=" clearfix" id="lookOrder">
					<nav class="lookBot">
						<a href="https://item.taobao.com/item.htm?spm=a230r.1.14.16.3d08e5fcMbtjSc&id=562488117326&ns=1&abbucket=9#detail" target="_Blank">
							租赁下单
						</a>
					</nav>
					<nav class="lookPay">
						<a href="https://item.taobao.com/item.htm?spm=2013.1.w4023-17654909315.19.5954cff7ETTukq&id=562487185253" target="_Blank">
							购买
						</a>
					</nav>
				</nav>
			</nav>
		</nav>
		<nav class="solid">
			<nav class="galle clearfix">
				<nav class="gallLeft">
					<nav class="tools">
						<nuxt-link to="/product01/show01">
							<nav>
								应用场景
							</nav>
						</nuxt-link>
						<nuxt-link to="/product01/details01">
							<nav>
								详细介绍
							</nav>
						</nuxt-link>
					</nav>
					<nav>
						<nuxt-child/>
					</nav>
				</nav>
				<nav class="gallRight">
					<nav class="hot">
						其他热门
					</nav>
					<nuxt-link to="/product01/show01">
						<nav style="text-align: center;">
							<nav id="hotImage1">
							</nav>
							<p>
								喜多多
							</p>
						</nav>
					</nuxt-link>
					<nuxt-link to="/product04/show04">
						<nav style="text-align: center;">
							<nav id="hotImage2">
							</nav>
							<p>
								康多多
							</p>
						</nav>
					</nuxt-link>
					<nuxt-link to="/product03/show03">
						<nav style="text-align: center;">
							<nav id="hotImage3">
							</nav>
							<p>
								财多多
							</p>
						</nav>
					</nuxt-link>
					<nuxt-link to="/product02/show02">
						<nav style="text-align: center;">
							<nav id="hotImage4">
							</nav>
							<p>
								客多多
							</p>
						</nav>
					</nuxt-link>
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
				comets: false,
				neat1: true,
				neat2: false,
				neat3: false,
				neat4: false,
				call: {
					pid: ''
				}
			}
		},
		computed: {
			pidS() {
				return this.$route.params.id
			}
		},
		created() {},
		mounted: function() {
			window.addEventListener('scroll', this.productScroll)
			this.neat1 = true
			var akey = window.pageYOffset;
			if(akey >= 100) {
				document.querySelector(".gubTop").style.background = "black"
			}
		},
		methods: {
			elem(callback) {
				if(callback == 0) {
					this.neat1 = true;
					this.neat4 = false;
					this.neat2 = false;
				}
				if(callback == 1) {
					this.neat2 = true;
					this.neat1 = false;
					this.neat3 = false;
				}
				if(callback == 2) {
					this.neat3 = true;
					this.neat2 = false;
					this.neat4 = false;
				}
				if(callback == 3) {
					this.neat4 = true;
					this.neat3 = false;
					this.neat1 = false;
				}
			},
			numtProp1() {
				this.$refs['car'].setActiveItem(0)
				this.neat1 = true
				this.neat2 = false
				this.neat3 = false
				this.neat4 = false
				this.call == 0
			},
			numtProp2() {
				this.$refs['car'].setActiveItem(1)
				this.neat1 = false
				this.neat2 = true
				this.neat3 = false
				this.neat4 = false
			},
			numtProp3() {
				this.$refs['car'].setActiveItem(2)
				this.neat1 = false
				this.neat2 = false
				this.neat3 = true
				this.neat4 = false
			},
			numtProp4() {
				this.$refs['car'].setActiveItem(3)
				this.neat1 = false
				this.neat2 = false
				this.neat3 = false
				this.neat4 = true
			},
			productScroll() {
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
	#product01 #stedYear {
		display: inline-block;
	}
	
	#product01 .texts-enter-active {
		transition: all 0.5s ease;
	}
	
	#product01 .texts-leave-active {
		transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#product01 .texts-enter,
	.texts-leave-to {
		transform: translateX(-20px);
		opacity: 0;
	}
	
	#navbert span {
		display: inline-block;
		width: 100%;
		padding: 0px 15px;
		font-size: 14px;
		color: #2a333c !important;
		font-weight: normal;
	}
	
	#navbert {
		position: absolute;
		left: -15px;
		top: 90%;
		display: inline-block;
		width: 160px;
		background: white;
		border: 1px solid #e4eaec;
		z-index: 666;
	}
	
	#xiaTents {
		width: 8px;
		height: 4px;
		margin-bottom: 2px;
	}
	
	#product01 .rightMargins {
		margin-left: 5px;
	}
	
	#comeT {
		position: relative;
		margin-right: 5px;
	}
	
	#productsImg {
		width: 14px;
		height: 14px;
		margin-right: 10px;
	}
	
	#product01 .foat a {
		text-decoration: none !important;
	}
	
	#hotImage4 {
		background: url(../static/robot/ke02-min.png) no-repeat center center;
		width: 216px;
		height: 216px;
		background-size: 100% 100%;
		margin: 0 auto;
		background-position-x: 20px;
	}
	
	#hotImage3 {
		background: url(../static/robot/showCai.png) no-repeat center center;
		width: 216px;
		height: 216px;
		background-size: 100% 100%;
		margin: 0 auto;
	}
	
	#hotImage2 {
		background: url(../static/robot/kang02-min.png) no-repeat center center;
		width: 216px;
		height: 216px;
		background-size: 100% 100%;
		margin: 0 auto;
		background-position-x: 20px;
	}
	
	#hotImage1 {
		background: url(../static/nav/swiper1-min.png) no-repeat center center;
		width: 216px;
		height: 216px;
		background-size: 100% 100%;
		margin: 0 auto;
	}
	
	a {
		text-decoration: none;
	}
	
	#product01 .numt {
		border: 2px solid #00B4FF;
	}
	
	#product01 .texter {
		display: inline-block;
	}
	
	#product01 .tools .nuxt-link-active {
		color: #54B5FF;
		border-bottom: 2px solid #54B5FF;
		display: inline-block;
		height: 54px;
		line-height: 54px;
	}
	
	#product01 .tools a {
		text-decoration: none;
		color: black;
	}
	
	#product01 .tools nav {
		display: inline-block;
		width: 93px;
		font-size: 16px;
		text-align: center;
		height: 54px;
		line-height: 54px;
	}
	
	#product01 .tools {
		padding: 0 8px;
		border-bottom: 1px solid #EEEEEE;
	}
	
	#product01 .gallRight p {
		font-size: 14px;
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
	
	#product01 .gallRight img {
		height: 216px;
	}
	
	#product01 .hot {
		font-size: 18px;
		text-align: left;
		margin-left: 38px;
		margin-bottom: 48px;
	}
	
	#product01 .gallRight a {
		color: black;
		border: 0;
		width: 100%;
		height: auto;
	}
	
	#product01 .gallRight a p {
		font-size: 14px;
		text-align: center;
		height: 30px;
		line-height: 30px;
	}
	
	#product01 .gallRight {
		float: right;
		background: white;
		width: 250px;
		padding-top: 30px;
	}
	
	#product01 .gallLeft {
		padding: 0 16px 0 25px;
		float: left;
		background: white;
		width: 890px;
	}
	
	#product01 .galle {
		width: 1170px;
		margin: 0 auto;
		padding-bottom: 70px;
		box-sizing: border-box;
	}
	
	#product01 .solid {
		width: 100%;
		margin-top: 30px;
	}
	
	#lookOrder {
		padding-top: 28px;
	}
	
	#product01 .lookPay a {
		display: inline-block;
		width: 100%;
		height: 100%;
		color: white !important;
	}
	
	#product01 .lookPay {
		float: left;
		width: 130px;
		height: 42px;
		font-size: 18px;
		line-height: 42px;
		background: #47AFFF;
		margin-left: 56px;
		border-radius: 4px;
	}
	
	#product01 .lookBot a {
		display: inline-block;
		width: 100%;
		height: 100%;
		color: #5E7387 !important;
	}
	
	#product01 .lookBot {
		float: left;
		width: 130px;
		height: 42px;
		font-size: 18px;
		line-height: 42px;
		background: #F0F2F5;
		border-radius: 4px;
	}
	
	#product01 .productNav #come {
		display: inline-block;
		width: 50%;
		margin-bottom: 25px;
	}
	
	#product01 .productNav {
		font-size: 14px;
		color: #5E7387;
		border-bottom: 1px solid #F0F2F5;
		padding-bottom: 48px;
		margin-top: 23px;
	}
	
	#romRight #keys {
		font-size: 14px;
		color: #5E7387;
		border-bottom: 1px solid #F0F2F5;
		padding-bottom: 30px;
	}
	
	#romRight h5 {
		font-size: 28px;
		margin-bottom: 11px;
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	#product01 .swiperScroll {
		text-align: center;
	}
	
	#product01 .swiperScroll ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	
	#product01 .swiperScroll {
		margin-top: 12px;
		width: 545px;
	}
	
	#product01 .numNuxt {
		width: 400px;
		height: 400px;
	}
	
	#product01 .swiperScroll ul li {
		float: left;
		list-style: none;
		width: 68px;
		height: 68px;
		margin: 0;
		padding: 0;
		margin: 0 5px;
	}
	
	#product01 .swiperScroll ul li img {
		width: 68px;
		height: 68px;
	}
	
	#textBg {
		width: 545px;
	}
	
	#romRight {
		float: left;
		width: 41.66666667%;
		text-align: left;
		margin-bottom: 28px;
	}
	
	#romLeft {
		float: left;
		width: 58.33333333%;
	}
	
	#product01 .num-xtext {
		display: inline-block;
		width: 1170px;
		margin: 0 auto;
		height: 100%;
		padding: 30px 0;
	}
	
	#productMain {
		width: 100%;
		background: white;
		text-align: center;
	}
	
	#rentMent a {
		color: black;
		border: 0;
	}
	
	#rentMent .met-show-products {
		display: inline-block;
		height: 100%;
		line-height: 44px;
	}
	
	#rentMent {
		font-size: 14px;
		display: block;
		width: 1170px;
		margin: 0 auto;
		padding-left: 8px;
		height: 100%;
	}
	
	#nuxt-bert {
		width: 100%;
		min-width: 1170px;
		height: 44px;
	}
	
	#bannerBgs {
		background: url(../static/nav/01-min.png) no-repeat center;
		width: 100%;
		min-width: 1170px;
		height: 300px;
	}
	
	#product01 .clearfix:after {
		display: block;
		content: '';
		clear: both;
	}
</style>