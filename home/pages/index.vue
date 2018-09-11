<template>
	<div id="index">
		<logo/>
		<div class="banHead jump">
			<div>
				<template>
					<el-carousel :interval="6000" @change='elem' :initial-index="0" >
						<el-carousel-item>
							<nuxt-link to="/product02/show02">
								<div id="banderWarp">
									<div id="ban">
										<img src="../static/img/tucun02-min.png" id="ban-tuone">
										<img src="../static/img/tucun01-min.png" id="ban-tuteo">
										<transition name="texts">
											<div class="banImg" v-if="bans">
												<img src="../static/img/yung-min.png">
												<img src="../static/img/wenzi-min.png" id="ban-nert">
												<img src="../static/img/zhiBanner-min.png"> <br />
												<img src="../static/img/Liveforyourbusiness-min.png" id="ban-nsi">
											</div>
										</transition>
										<transition name="robotImg">
											<img src="../static/img/ner-min.png" id="banAmage" v-if="bans">
										</transition>
									</div>
								</div>
							</nuxt-link>
						</el-carousel-item>
						<el-carousel-item>
							<nuxt-link to="/cooperation">
								<div id="banderWarp">
									<div id="bg2">
										<div id="ban">
											<img src="../static/img/light02-min.png" class="after-ban" v-if="teo" />
											<transition name="texts">
												<div class="banImg" v-if="teo">
													<img src="../static/img/lightRot-min.png">
													<img src="../static/img/light04-min.png">
												</div>
											</transition>
											<transition name="robotImg">
												<img src="../static/img/ner-min.png" id="banAmage" v-if="teo">
											</transition>
										</div>
									</div>
								</div>
							</nuxt-link>
						</el-carousel-item>
						<el-carousel-item>
							<nuxt-link to="/akeyRental">
								<div id="banderWarp">
									<div id="bg4">
										<div id="bgtheer">
											<transition name="met">
												<div id="met" v-if="mets">
													<img id="bgFore" src="../static/img/mpDqrcode-min.jpg" />
													<p>一键租机</p>
												</div>
											</transition>
										</div>
									</div>
								</div>
							</nuxt-link>
						</el-carousel-item>
						<el-carousel-item>
							<div id="banderWarp">
								<div id="bg3">
									<transition name="rant">
										<img src="../static/img/diao-min.png" v-if="rants" />
									</transition>
								</div>
							</div>
						</el-carousel-item>
					</el-carousel>
				</template>
			</div>
		</div>

		<main id="product">
			<div class="main-top jump">
				<div class="productContent">
					<div class="productTitle">
						<p class="titleP1">热门产品</p>
						<p class="titleP2">HEODEBKLSDA</p>
						<p class="titleP3"></p>
					</div>
					<ul class="clearfix">
						<transition name="slide1">
							<li class="hot1 " @mouseenter="hotOver1" @mouseleave="hotOut1" :class="{'soli':slide}">
								<nuxt-link to="/product01/show01">
									<div class="over"><img src="../static/nav/swiper1-min.png" :class="{'hover':hid1}"></div>
									<div>
										<p class="hotP1">多多达人-喜多多</p>
									</div>
								</nuxt-link>
							</li>
						</transition>
						<li class="mar hot2" @mouseenter="hotOver2" @mouseleave="hotOut2" :class="{'soli':slide}">
							<nuxt-link to="/product02/show02">
								<div class="over" style="padding-left: 15px;"><img style="width: 110%;" src="../static/robot/ke02-min.png" :class="{'hover':hid2}"></div>
								<div>
									<p class="hotP2">多多达人-客多多</p>
								</div>
							</nuxt-link>
						</li>
						<li class="mar hot3" @mouseenter="hotOver3" @mouseleave="hotOut3" :class="{'soli':slide}">
							<nuxt-link to="/product03/show03">
								<div class="over" style="padding-left: 15px;"><img style="width: 108%;margin-left:-25px;" src="../static/robot/showCai.png" :class="{'hover':hid3}"></div>
								<div>
									<p class="hotP3">多多达人-财多多</p>
								</div>
							</nuxt-link>
						</li>
						<li class="mar hot4" @mouseenter="hotOver4" @mouseleave="hotOut4" :class="{'soli':slide}">
							<nuxt-link to="/product04/show04">
								<div class="over" ><img style="margin-left:10px;width:106%;" src="../static/robot/kang02-min.png" :class="{'hover':hid4}"></div>
								<div>
									<p class="hotP4">多多达人-康多多</p>
								</div>
							</nuxt-link>
						</li>
					</ul>
					<div class="mores">
						<nuxt-link to="/product01/show01">
							<p class="uptBnt" @mouseenter="upOver" @mouseleave="upOut">产品介绍</p>
						</nuxt-link>
					</div>
				</div>
			</div>

			<div class="news jump">
				<div class="introduce">
					<div class="ziXun">
						<div class="newsTitle">
							<p class="store">最新资讯</p>
							<div class="line">
								<p class="newsbor1"></p>
								<p>NEWS INTRODUCE</p>
								<p class="newsbor2"></p>
							</div>
						</div>
						<div class="news-content">
							<div class="news-flex">
								<template>
									<el-carousel ref="mest" :interval="5000" height="510px" indicator-position="none" arrow="never">
										<el-carousel-item>
											<div id="engst">
												<nuxt-link :to="'/plase/' + details1.id + '?type=1'">
													<div class="news-msg " @mouseenter="nuxtOver1" @mouseleave="nuxtOut1">
														<div id="nuxt">
															<p class="news-time timeP1">{{details1.date}}</p>
															<p class="newText newText1">{{details1.title}}</p>
															<p class="description description1">{{details1.describe}}</p>
														</div>
														<div style="width: 100%;height:50%;">
															<div class="newsBg">
																<img :src="details1.image"/>
															</div>
														</div>
													</div>
												</nuxt-link>
												<nuxt-link :to="'/plase/' + details2.id + '?type=1'">
													<div class="news-msg" @mouseenter="nuxtOver2" @mouseleave="nuxtOut2">
														<div style="width:100%;height:50%;">
															<div class="newsBg">
																<img :src="details2.image"/>
															</div>
														</div>
														<div id="nuxt">
															<p class="news-time timeP2">{{details2.date}}</p>
															<p class="newText newText2">{{details2.title}}</p>
															<p class="description description2">{{details2.describe}}</p>
														</div>
													</div>
												</nuxt-link>
												<nuxt-link :to="'/plase/'+ details3.id + '?type=1'">
													<div class="news-msg" @mouseenter="nuxtOver3" @mouseleave="nuxtOut3">
														<div id="nuxt">
															<p class="news-time timeP3">{{details3.date}}</p>
															<p class="newText newText3">{{details3.title}}</p>
															<p class="description description3">{{details3.describe}}</p>
														</div>
														<div style="width: 100%;height:50%;">
															<div class="newsBg">
																<img :src="details3.image"/>
															</div>
														</div>
													</div>
												</nuxt-link>
												<nuxt-link :to="'/plase/'+ details4.id + '?type=1'">
													<div class="news-msg" @mouseenter="nuxtOver4" @mouseleave="nuxtOut4">
														<div style="width: 100%;height:50%;">
															<div class="newsBg">
																<img :src="details4.image"/>
															</div>
														</div>
														<div id="nuxt">
															<p class="news-time timeP4">{{details4.date}}</p>
															<p class="newText newText4">{{details4.title}}</p>
															<p class="description description4">{{details4.describe}}</p>
														</div>
													</div>
												</nuxt-link>
											</div>
										</el-carousel-item>
										<el-carousel-item>
											<div id="engst">
												<nuxt-link :to="'/plase/'+ detnew1.id + '?type=2'">
													<div class="news-msg " @mouseenter="nuxtOverOne1" @mouseleave="nuxtOutOne1">
														<div id="nuxt">
															<p class="news-time timePone1">{{detnew1.date}}</p>
															<p class="newText newTextone1">{{detnew1.title}}</p>
															<p class="description descriptionone1">{{detnew1.describe}}</p>
														</div>
														<div style="width: 100%;height:50%;">
															<div class="newsBg">
																<img :src="detnew1.image"/>
															</div>
														</div>
													</div>
												</nuxt-link>
												<nuxt-link :to="'/plase/'+ detnew2.id + '?type=2'">
													<div class="news-msg" @mouseenter="nuxtOvertwo1" @mouseleave="nuxtOutOnetwo1">
														<div style="width:100%;height:50%;">
															<div class="newsBg">
																<img :src="detnew2.image"/>
															</div>
														</div>
														<div id="nuxt">
															<p class="news-time timePtwo1">{{detnew2.date}}</p>
															<p class="newText newTexttwo1">{{detnew2.title}}</p>
															<p class="description descriptiontwo1">{{detnew3.describe}}</p>
														</div>
													</div>
												</nuxt-link>
												<nuxt-link :to="'/plase/'+ detnew3.id + '?type=2'">
													<div class="news-msg" @mouseenter="nuxtOvertheer1" @mouseleave="nuxtOutOnetheer1">
														<div id="nuxt">
															<p class="news-time timePtheer1">{{detnew3.date}}</p>
															<p class="newText newTexttheer1">{{detnew3.title}}</p>
															<p class="description descriptiontheer1">{{detnew3.describe}}</p>
														</div>
														<div style="width: 100%;height:50%;">
															<div class="newsBg">
																<img :src="detnew3.image"/>
															</div>
														</div>
													</div>
												</nuxt-link>
												<nuxt-link :to="'/plase/'+ detnew4.id + '?type=2'">
													<div class="news-msg" @mouseenter="nuxtOverfor1" @mouseleave="nuxtOutOnefor1">
														<div style="width: 100%;height:50%;">
															<div class="newsBg">
																<img :src="detnew4.image"/>
															</div>
														</div>
														<div id="nuxt">
															<p class="news-time timePfor1">{{detnew4.date}}</p>
															<p class="newText newTextfor1">{{detnew4.title}}</p>
															<p class="description descriptionfor1">{{detnew4.describe}}</p>
														</div>
													</div>
												</nuxt-link>
											</div>
										</el-carousel-item>
									</el-carousel>
								</template>
							</div>
						</div>

						<div class="news-ctrl">
							<div class="left" @click="clickLefts" :class="{'lefBg':nav}" @mouseenter="navTer" @mouseleave="navLeave"><i class="el-icon-arrow-left"></i></div>
							<div class="right" @click="clickRights" :class="{'lefBg':nav1}" @mouseenter="navTer1" @mouseleave="navLeave1"><i class="el-icon-arrow-right"></i></div>
						</div>
					</div>

				</div>
			</div>

			<div id="map">
				<transition name="mapTop">
					<div class="mapTop" v-if="cont">
						<!--<div class="cont-text">
							<div>
								<h4 class="contMe">联系我们</h4>
								<p class="contBor"></p>
								<p class="contP1">CONTACT US</p>
								<p class="contP2">深圳市南山区科技路1号桑达科技大厦 F1301</p>
								<p class="contBor2"></p>
								<p class="contP2">官方热线：0755-8366-7791</p>
								<p class="contP3">szaybc@126.com</p>
							</div>
						</div>-->
					</div>
				</transition>
			</div>
		</main>

		<footer class="footer jump">
			<div id="num">
				<div id="leng">
					<transition name="name-id"><input v-model="username" name="username" type="text" class="nameCont" placeholder="姓名：" v-if="nam" /></transition>
					<transition name="num-nuxt"><input v-model="phone_number" name="phone_number" v-if="nam" type="text" class="numberConts" placeholder="联系方式：" /> </transition><br />
					<transition name="text-id"><textarea v-model="comment" name="comment" v-if="nam" type="text" class="textArea" placeholder="备注留言:" autocomplete="off"></textarea></transition>
					<transition name="submit-nuxt"><button @click="collaborates" v-if="nam" class="sub">提交信息</button></transition>
				</div>
			</div>
		</footer>

		<div class="fixt-right" @click="weText" @mouseenter="fitOver" @mouseleave="fitOut">
			<img v-if="fit" src="../static/wechat01-min.jpg">
			<img v-if="fittwo" src="../static/wechat02-min.jpg">
		</div>
		<transition name="weChing">
			<div class="weChatbg" v-if="weCht" @click="hidwe">
				<img src="http://aaa001.images.aybc.so/customer-min.jpg">
			</div>
		</transition>
	</div>
</template>

<!--<script>
	import Logo from '~/components/Logo.vue'
	import axios from 'axios'
	export default {
    name: 'index',
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
				robot: true,
				max: false,
				max2: false,
				max3: false,
				max4: false,
				nav: false,
				nav1: false,
				slide: false,
				teo: false,
				bans: false,
				cont: false,
				nam: false,
				li1: false,
				li2: false,
				li3: false,
				li4: false,
				rants: false,
				mets: false,
				fit: true,
				fittwo: false,
				weCht: false,
				product: '',
				details1: '',
				details2: '',
				details3: '',
				details4: '',
				detnew1: '',
				detnew2: '',
				detnew3: '',
				detnew4: '',
				collaborate_type: '品牌合作',
				username: '',
				phone_number: '',
				province: '',
				comment: '',
				title:'多多达人机器人-首页'
			}
		},
		 head () {
          return {
		      //title: this.title,
		     // meta: [
		      //  { hid: 'index', name: 'index', content: this.title }
		      //]
		    }
		  },
		created() {
			this.getNewsList()
			this.getDetNew()
		},
		computed: {

		},
		mounted: function() {
			const headst = document.querySelector('.headerContent').style.height
			const ab = headst.substr(0, 1)
			if(ab > 0) {
				document.querySelector("#botsT").style.borderBottom = "0px solid #3480B5";
				document.querySelector(".productTwo").style.color = "white";
				const foat = document.querySelector('.foat')
				foat.style.display = "none"
				document.querySelector('.headerContent').style.height = '0px'
			}
			window.addEventListener('scroll', this.handleScroll)
			this.bans = 'true'
			var total = window.clientHeight || document.documentElement.clientHeight || document.body.clientHeight
			var m = document.querySelector(".main-top").offsetTop
			var yheight1 = window.pageYOffset;
			if(yheight1 > 300 && yheight1 < 1900) {
				this.slide = 'true'
			}
			if(yheight1 > 900) {
				document.querySelector(".gubTop").style.background = "black"
			} else {
				document.querySelector(".gubTop").style.background = ""
			}
			if(yheight1 > 2000) {
				this.cont = 'true'
			}
			if(yheight1 > 3000) {
				this.nam = 'true'
			}
		},
		beforeMount() {
			this.addNavigator()
		},
		methods: {
			//提交信息
			//collaborates() {
			//	const that = this

		//	},
			addNavigator() {
				var reg = /([a-zA-Z]+)?([a-zA-Z]+.*\;\s([a-zA-Z0-9]+)?)/
				var newNav = navigator.appVersion.match(reg);
				if(newNav) {
					var nav = newNav[0];
					var navArr = nav.split(/(\s)|((\s\d\.\d)?\;)/);
					var flag = false;
					for(var i = 0, len = navArr.length; i < len; i++) {
						if(navArr[i] == 'Android' || navArr[i] == 'iPhone' || navArr[i] == 'iPad' || navArr[i] == 'MeeGo' || navArr[i] == 'NokiaN9' || navArr[i] == 'NOKIA') {
							flag = true;
							break;
						}
					}
					if(flag) {
						window.location.href = "http://mobile.aybc.so";
					} else {

					}
				}
			},
			getNewsList() {

			},
			getDetNew() {
				const that = this

			},
			clickLefts() {
				this.$refs['mest'].setActiveItem(0)
			},
			clickRights() {
				this.$refs['mest'].setActiveItem(1)
			},
			hidwe() {
				this.weCht = false
			},
			weText() {
				this.weCht = true
			},
			fitOver() {
				this.fit = false
				this.fittwo = true
			},
			fitOut() {
				this.fit = true
				this.fittwo = false
			},
			elem(callback) {
				if(callback == 3) {
					this.rants = 'true'
				}

				if(callback == 2) {
					this.mets = 'true'
				}

				if(callback == 1) {
					this.teo = 'true'
				}
			},
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				if(scrollTop > 900) {
					document.querySelector(".gubTop").style.background = "black"
				} else {
					document.querySelector(".gubTop").style.background = ""
				}

				if(scrollTop > 300) {
					this.slide = 'true'
				}

				if(scrollTop > 2000) {
					this.cont = 'true'
				}
				if(scrollTop > 3000) {
					this.nam = 'true'
				}

			},
			hotOver1() {
				document.querySelector('.hotP1').style.color = 'white'
				document.querySelector('.hotP1').style.background = '#5AB3FF'
				document.querySelector('.hot1').style.boxShadow = '0px 10px 10px #cccccc';
				this.hid1 = true

			},
			hotOut1() {
				document.querySelector('.hotP1').style.color = 'black'
				document.querySelector('.hotP1').style.background = 'white'
				document.querySelector('.hot1').style.boxShadow = '0 0 0px #cccccc';
				this.hid1 = false
			},
			hotOver2() {
				document.querySelector('.hotP2').style.color = 'white'
				document.querySelector('.hotP2').style.background = '#5AB3FF'
				document.querySelector('.hot2').style.boxShadow = '0px 10px 20px #cccccc';
				this.hid2 = true
			},
			hotOut2() {
				document.querySelector('.hotP2').style.color = 'black'
				document.querySelector('.hotP2').style.background = 'white'
				document.querySelector('.hot2').style.boxShadow = '';
				this.hid2 = false
			},
			hotOver3() {
				document.querySelector('.hotP3').style.color = 'white'
				document.querySelector('.hotP3').style.background = '#5AB3FF'
				document.querySelector('.hot3').style.boxShadow = '0 10px 10px #cccccc';
				this.hid3 = true
			},
			hotOut3() {
				document.querySelector('.hotP3').style.color = 'black'
				document.querySelector('.hotP3').style.background = 'white'
				document.querySelector('.hot3').style.boxShadow = '';
				this.hid3 = false
			},
			hotOver4() {
				document.querySelector('.hotP4').style.color = 'white'
				document.querySelector('.hotP4').style.background = '#5AB3FF'
				document.querySelector('.hot4').style.boxShadow = '0 10px 10px #cccccc';
				this.hid4 = true
			},
			hotOut4() {
				document.querySelector('.hotP4').style.color = 'black'
				document.querySelector('.hotP4').style.background = 'white'
				document.querySelector('.hot4').style.boxShadow = '';
				this.hid4 = false
			},
			upOver() {
				document.querySelector(".uptBnt").style.color = 'white'
				document.querySelector(".uptBnt").style.background = '#5AB3FF'
				document.querySelector(".uptBnt").style.boxShadow = '0px 5px 10px #C1C1C1'
			},
			upOut() {
				document.querySelector(".uptBnt").style.color = '#999999'
				document.querySelector(".uptBnt").style.background = 'white'
				document.querySelector(".uptBnt").style.boxShadow = ''
			},
			nuxtOver1() {
				document.querySelector('.timeP1').style.marginLeft = "20px";
				document.querySelector('.timeP1').style.color = "black";
				document.querySelector('.newText1').style.marginLeft = "20px";
				document.querySelector('.description1').style.marginLeft = "20px";
				this.max = true
			},
			nuxtOverOne1(){
				document.querySelector('.timePone1').style.marginLeft = "20px";
				document.querySelector('.timePone1').style.color = "black";
				document.querySelector('.newTextone1').style.marginLeft = "20px";
				document.querySelector('.descriptionone1').style.marginLeft = "20px";				
			},
			nuxtOutOne1() {
				document.querySelector('.timePone1').style.marginLeft = "0px";
				document.querySelector('.timePone1').style.color = "#C0C0C0";
				document.querySelector('.newTextone1').style.marginLeft = "0px";
				document.querySelector('.descriptionone1').style.marginLeft = "0px";				
			},
			nuxtOvertwo1(){
				document.querySelector('.timePtwo1').style.marginLeft = "20px";
				document.querySelector('.timePtwo1').style.color = "black";
				document.querySelector('.newTexttwo1').style.marginLeft = "20px";
				document.querySelector('.descriptiontwo1').style.marginLeft = "20px";				
			},
			nuxtOutOnetwo1() {
				document.querySelector('.timePtwo1').style.marginLeft = "0px";
				document.querySelector('.timePtwo1').style.color = "#C0C0C0";
				document.querySelector('.newTexttwo1').style.marginLeft = "0px";
				document.querySelector('.descriptiontwo1').style.marginLeft = "0px";				
			},
			nuxtOvertheer1(){
				document.querySelector('.timePtheer1').style.marginLeft = "20px";
				document.querySelector('.timePtheer1').style.color = "black";
				document.querySelector('.newTexttheer1').style.marginLeft = "20px";
				document.querySelector('.descriptiontheer1').style.marginLeft = "20px";				
			},
			nuxtOutOnetheer1() {
				document.querySelector('.timePtheer1').style.marginLeft = "0px";
				document.querySelector('.timePtheer1').style.color = "#C0C0C0";
				document.querySelector('.newTexttheer1').style.marginLeft = "0px";
				document.querySelector('.descriptiontheer1').style.marginLeft = "0px";				
			},
			nuxtOverfor1(){
				document.querySelector('.timePfor1').style.marginLeft = "20px";
				document.querySelector('.timePfor1').style.color = "black";
				document.querySelector('.newTextfor1').style.marginLeft = "20px";
				document.querySelector('.descriptionfor1').style.marginLeft = "20px";				
			},
			nuxtOutOnefor1() {
				document.querySelector('.timePfor1').style.marginLeft = "0px";
				document.querySelector('.timePfor1').style.color = "#C0C0C0";
				document.querySelector('.newTextfor1').style.marginLeft = "0px";
				document.querySelector('.descriptionfor1').style.marginLeft = "0px";				
			},
			nuxtOut1() {
				document.querySelector('.timeP1').style.marginLeft = "0px";
				document.querySelector('.timeP1').style.color = "#C0C0C0";
				document.querySelector('.newText1').style.marginLeft = "0px";
				document.querySelector('.description1').style.marginLeft = "0px";
				this.max = false
			},
			nuxtOver2() {
				document.querySelector('.timeP2').style.marginLeft = "20px";
				document.querySelector('.timeP2').style.color = "black";
				document.querySelector('.newText2').style.marginLeft = "20px";
				document.querySelector('.description2').style.marginLeft = "20px";
				this.max2 = true
			},
			nuxtOut2() {
				document.querySelector('.timeP2').style.marginLeft = "0px";
				document.querySelector('.timeP2').style.color = "#C0C0C0";
				document.querySelector('.newText2').style.marginLeft = "0px";
				document.querySelector('.description2').style.marginLeft = "0px";
				this.max2 = false
			},
			nuxtOver3() {
				document.querySelector('.timeP3').style.marginLeft = "20px";
				document.querySelector('.timeP3').style.color = "black";
				document.querySelector('.newText3').style.marginLeft = "20px";
				document.querySelector('.description3').style.marginLeft = "20px";
				this.max3 = true
			},
			nuxtOut3() {
				document.querySelector('.timeP3').style.marginLeft = "0px";
				document.querySelector('.timeP3').style.color = "#C0C0C0";
				document.querySelector('.newText3').style.marginLeft = "0px";
				document.querySelector('.description3').style.marginLeft = "0px";
				this.max3 = false
			},
			nuxtOver4() {
				document.querySelector('.timeP4').style.marginLeft = "20px";
				document.querySelector('.timeP4').style.color = "black";
				document.querySelector('.newText4').style.marginLeft = "20px";
				document.querySelector('.description4').style.marginLeft = "20px";
				this.max4 = true
			},
			nuxtOut4() {
				document.querySelector('.timeP4').style.marginLeft = "0px";
				document.querySelector('.timeP4').style.color = "#C0C0C0";
				document.querySelector('.newText4').style.marginLeft = "0px";
				document.querySelector('.description4').style.marginLeft = "0px";
				this.max4 = false
			},
			navTer() {
				this.nav = true
			},
			navTer1() {
				this.nav1 = true
			},
			navLeave() {
				this.nav = false
			},
			navLeave1() {
				this.nav1 = false;
			}
		}
	}
</script>-->

<style>
	#engst {
		width: 100%;
		height: 100%;
	}
	
	#index .fixt-right {
		position: fixed;
		right: 0;
		bottom: 250px;
		z-index: 999;
	}
	
	#index .hot4 {
		transform: translateY(180px);
		transition: all 2s ease;
		-webkit-transition: all 2s ease;
		-moz-transition: all 2s ease;
		-ms-transition: all 2s ease;
		-o-transition: all 2s ease;
		opacity: 0;
	}
	
	#index .hot3 {
		transform: translateY(180px);
		transition: all 2s ease;
		transition-delay: 0.3;
		opacity: 0;
	}
	
	#index .hot2 {
		transform: translateY(180px);
		transition: all 2s ease;
		transition-delay: 0.2;
		opacity: 0;
	}
	
	#index .hot1 {
		transform: translateY(180px);
		transition: all 2s ease;
		transition-delay: 0.1;
		opacity: 0;
	}
	
	#index .soli {
		transform: translateY(0px);
		opacity: 1;
	}
	
	#index .slide1-enter-active {
		transition: all .3s ease;
	}
	
	#index .slide1-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#index .slide1-enter,
	.slide1-leave-to {
		transform: translateX(10px);
		opacity: 0;
	}
	
	#index .gubTop {
		width: 100%;
		text-align: center;
		position: fixed;
		top: 0px;
		z-index: 666;
	}
	
	#bots {
		width: 60%;
		margin: 0 auto;
	}
	
	#index .sub {
		width: 100%;
		height: 47px;
		background: #4E4E4E;
		margin-top: 20px;
		border: 0px solid #000000;
		font-size: 16px;
		color: #fff;
	}
	
	#index .textArea {
		width: 100%;
		max-width: 100%;
		height: 162px;
		margin-top: 20px;
		max-height: 200px;
		font-size: 16px;
		padding: 8px 11px 8px 11px;
		border: 1px solid #C2C2C2;
	}
	
	#index .numberConts {
		width: 470px;
		height: 42px;
		margin-left: 20px;
		font-size: 16px;
		border: 1px solid #C2C2C2;
		padding-left: 11px;
	}
	
	#index .text-id-enter-active {
		transition: all 2s ease;
	}
	
	#index .text-id-leave-active {
		transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#index .text-id-enter,
	.text-id-leave-to {
		transform: translateX(-50%);
		opacity: 0;
	}
	
	#index .weChing-enter-active {
		transition: all 0.1s ease;
	}
	
	#index .weChing-leave-active {
		transition: all 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#index .weChing-enter,
	.weChing-leave-to {
		transform: translateY(-100px);
		opacity: 0;
	}
	
	#index .weChatbg img {
		position: absolute;
		top: 25%;
		left: 50%;
		margin-left: -215px;
	}
	
	#index .weChatbg {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.2);
		z-index: 1000;
	}
	
	#index .name-id-enter-active {
		transition: all 2s ease;
	}
	
	#index .name-id-leave-active {
		transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#index .name-id-enter,
	.name-id-leave-to {
		transform: translateX(-50%);
		opacity: 0;
	}
	
	#index .submit-nuxt-enter-active {
		transition: all 2s ease;
	}
	
	#index .submit-nuxt-leave-active {
		transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#index .submit-nuxt-enter,
	.submit-nuxt-leave-to {
		transform: translateX(50%);
		opacity: 0;
	}
	
	#index .num-nuxt-enter-active {
		transition: all 2s ease;
	}
	
	#index .num-nuxt-leave-active {
		transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#index .num-nuxt-enter,
	.num-nuxt-leave-to {
		transform: translateX(50%);
		opacity: 0;
	}
	
	#index .nameCont {
		width: 470px;
		height: 42px;
		font-size: 16px;
		border: 1px solid #C2C2C2;
		padding-left: 11px;
	}
	
	#leng {
		width: 967.3px;
		margin-left: auto;
		margin-right: auto;
		padding-bottom: 130px;
	}
	
	#num {
		width: 100%;
		min-width: 1170px;
		background: #F1F4FB;
		padding-top: 94px;
	}
	
	#index .fter4 .fter-p {
		font-size: 16px;
		color: #CCCCCC;
	}
	
	#index .fter3 .fter-p {
		font-size: 16px;
		color: #CCCCCC;
		margin-top: 0;
	}
	
	#index .fter2 p {
		font-size: 14px;
		color: #ABABAB;
		margin-top: 21px;
	}
	
	#index .fter2 .fter-p {
		margin-top: 0;
		font-size: 16px;
		color: #CCCCCC;
	}
	
	#index .fter4 {
		float: left;
		width: 270px;
		padding-left: 36px;
		margin-left: 30px;
	}
	
	#index .fter3 p {
		font-size: 14px;
		color: #ABABAB;
		margin-top: 21px;
	}
	
	#index .fter3 {
		float: left;
		width: 270px;
		text-align: center;
		margin-left: 30px;
	}
	
	#index .fter2 {
		float: left;
		width: 270px;
		text-align: center;
		margin-left: 30px;
	}
	
	#index .fter1 p {
		font-size: 14px;
		color: #ABABAB;
		margin-top: 21px;
	}
	
	#index .fter1 .fter-p {
		margin-top: 0;
		font-size: 16px;
		color: #CCCCCC;
	}
	
	#index .footMids {
		width: 1170px;
		margin: 0 auto;
	}
	
	#index .fter1 {
		float: left;
		width: 270px;
		text-align: center;
	}
	
	#index .footer {
		width: 100%;
		background: black;
	}
	
	a {
		text-decoration: none;
		color: black;
	}
	
	#index .fter4 .end-img p {
		font-size: 12px;
		color: #CCCCCC;
		margin-top: 11px;
		text-align: center;
	}
	
	#index .end-img img {
		width: 84px;
		height: 84px;
		margin-top: 25px;
	}
	
	#index .end-img {
		float: left;
	}
	
	#index .end {
		font-size: 14px;
		color: #999999;
		text-align: center;
		height: 60px;
		line-height: 60px;
	}
	
	#index .number {
		font-size: 18px;
		color: #697182;
		text-align: center;
	}
	
	#index .calk {
		font-size: 14px;
		color: #697182;
		margin-top: 20px;
		margin-bottom: 11px;
		text-align: center;
	}
	
	#index .footer-top {
		padding-top: 37px;
		background: #2D3445;
		padding-bottom: 71px;
	}
	
	#index .contP3 {
		font-size: 14px;
		margin-top: 1.04vw;
	}
	
	#index .contP2 {
		font-size: 16px;
	}
	
	#index .contP1 {
		color: 14px;
		margin-bottom: 3.125vw;
	}
	
	#index .contBor2 {
		border-top: 1px solid #FFFFFF;
		margin: 2.6vw 0;
		width: 100%;
		display: inline-block;
	}
	
	#index .contBor {
		border-top: 1px solid #5F88FF;
		margin: 1.04vw 0;
		width: 4.89vw;
		display: inline-block;
	}
	
	#index .contMe {
		font-size: 24px;
	}
	
	#index .mapTop-enter-active {
		transition: all 3s ease;
	}
	
	#index .mapTop-leave-active {
		transition: all 3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#index .mapTop-enter,
	.mapTop-leave-to {
		transform: translateX(70%);
	}
	
	#index .mapTop .cont-text {
		position: absolute;
		z-index: 9;
		width: 80%;
		text-align: right;
		color: #fff;
		right: 4.16vw;
		margin-top: 12.23vw;
	}
	
	#index .mapTop {
		position: absolute;
		top: 0;
		z-index: 8;
		right: 0;	
		border-bottom: 180vh solid black;
		border-left: 18.22vw solid transparent;
		width: 45%;
		height: 100%;
		color: #FFFFFF;

 
	}
	
	#mapImg {
		width: 100%;
		height: 100%;
	}
	
	#map {
		width: 100%;
		min-width: 1170px;
		height: 100vh;
		min-height: 800px;
		position: relative;
		background: url(../static/img/map-mmin.jpg) no-repeat center center;
		background-size: cover;
		overflow: hidden;
	}
	
	#index .lefBg {
		background: #00A4FF !important;
		color: white !important;
		border: 1px solid #00A4FF !important;
	}
	
	#index .right {
		display: inline-block;
		width: 55px;
		border: 1px solid #ddd;
		border-radius: 50%;
		position: absolute;
		margin-left: 50%;
		left: 20px;
		margin-top: 30px;
		height: 55px;
		cursor: pointer;
		transition: all .6s ease;
		color: black;
		background: #FFFFFF;
		text-align: center;
		padding-top: 12px;
		box-sizing: border-box;
	}
	
	#index .left .el-icon-arrow-left {
		font-size: 30px;
	}
	
	#index .right .el-icon-arrow-right {
		font-size: 30px;
	}
	
	#index .left {
		display: inline-block;
		margin-left: 50%;
		width: 55px;
		border: 1px solid #ddd;
		border-radius: 50%;
		position: absolute;
		left: -75px;
		margin-top: 30px;
		margin-right: 10px;
		height: 55px;
		cursor: pointer;
		transition: all .6s ease;
		color: black;
		background: #FFFFFF;
		text-align: center;
		padding-top: 12px;
		box-sizing: border-box;
	}
	
	#index .news-ctrl {
		position: relative;
		z-index: 66;
		box-sizing: border-box;
		height: 85px;
	}
	
	#nuxt {
		padding: 30px 35px 0 35px;
		height: 50%;
	}
	
	#index .newsBg {
		width: 100%;
		height: 100%;
		transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	}
	
	#index .newsBg>img{
		width: 100%;
		height: 100%;
	}
	
	#index .before {
		background-size: cover;
		width: 96%;
		height: 96%;
		transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
		overflow: hidden;
		background-size: cover;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
		background-position: center;
		margin-left: 2%;
		margin-top: 1%;
	}
	
	#index .beforeBort {
		position: absolute;
		z-index: 999;
		border: 0px solid #CCCCCC;
		width: 50%;
		height: 50%;
		transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
		-moz-transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
		-webkit-transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
		-o-transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
		margin-left: 25%;
		margin-top: 12.5%;
	}
	
	#index .bort {
		position: absolute;
		z-index: 9999;
		border: 1px solid #CCCCCC;
		width: 96%;
		height: 96%;
		transition: all 0.6s 0s;
		margin-left: 2%;
		margin-top: 1.2%;
	}
	
	#index .description {
		text-align: left;
		color: #999;
		line-height: 25px;
		transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
		-moz-transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
		-webkit-transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
		-o-transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
		margin-left: 0;
		margin-top: 10px;
		width: 100%;
		height: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 13px;
	}
	
	#index .news-content .news-flex .news-msg .newText {
		font-size: 16px;
		margin-bottom: 15px;
		margin-top: 20px;
		color: #666;
		display: inline-block;
		line-height: 30px;
		width: 100%;
		height: 30px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		float: left;
		transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	}
	
	#index .news-content .news-flex .news-msg .news-time {
		font-size: 20px;
		color: #CCCCCC;
		transition: all 0.5s ease-out;
		-moz-transition: all 0.5s ease-out;
		-webkit-transition: all 0.5s ease-out;
		-o-transition: all 0.5s ease-out;
	}
	
	#index .news-content .news-flex .news-msg {
		float: left;
		width: 25%;
		height: 100%;
		background: white;
		position: relative;
	}
	
	#index .news-content .news-flex {
		display: flex;
		height: 100%;
	}
	
	#index .news-content {
		box-sizing: border-box;
		width: 100%;
		height: 510px;
		padding: 0 15px;
	}
	
	#index .newsbor2 {
		width: 29px;
		border-bottom: 1px solid white;
		position: absolute;
		top: 50%;
		right: 42%;
	}
	
	#index .newsbor1 {
		width: 29px;
		border-bottom: 1px solid white;
		position: absolute;
		top: 50%;
		left: 42%;
	}
	
	#index .line {
		position: relative;
		text-align: center;
		color: white;
		font-size: 12px;
	}
	
	#index .store {
		text-align: center;
		color: white;
		font-size: 25px;
		height: 50px;
	}
	
	#index .news {
		width: 100%;
		min-width: 1170px;
		height: 100vh;
		min-height: 800px;
	}
	
	
	.news .introduce {
		width: 100%;
		height: 100%;
		padding-top: 6.04vw;
		background: url(../static/img/bg-min.jpg) no-repeat center center;
	}
	
	#index .news .newsTitle {
		width: 100%;
		margin-bottom: 2.7vw;
	}
	
	#index .mores p {
		font-size: 14px;
		color: #999999;
		width: 139px;
		height: 42px;
		line-height: 42px;
		text-align: center;
		border: 1px solid #5AB3FF;
		border-radius: 21px;
		margin: 0 auto;
	}
	
	#index .mores {
		text-align: center;
		margin-top: 100px;
		padding-bottom: 10px;
	}
	
	#index .over {
		overflow: hidden;
		padding-top: 40px;
		box-sizing: border-box;
	}
	
	#product .productContent ul {
		margin: 0;
		padding: 0;
		margin-top: 47px;
	}
	
	#index .mar {
		margin-left: 30px;
	}
	
	#product .productContent li p {
		position: absolute;
		bottom: 0px;
		display: inline-block;
		height: 40px;
		width: 100%;
		line-height: 40px;
		font-size: 16px;
		text-align: center;
	}
	
	#index .hover {
		transform: scale(1.08, 1.08);
	}
	
	#product .productContent li img:hover {
		transform: scale(1.08, 1.08);
	}
	
	#product .productContent li img {
		height: 100%;
		width: 100%;
		margin-bottom: 5px;
		transition: all 0.5s ease-out;
		-moz-transition: all 0.5s ease-out;
		-webkit-transition: all 0.5s ease-out;
		-o-transition: all 0.5s ease-out;
	}
	
	#product .productContent li {
		position: relative;
		float: left;
		list-style: none;
		width: 270px;
		background: white;
		height: 386px;
		overflow: hidden;
	}
	
	#index .titleP3 {
		border: 1.5px solid #5AB3FF;
		width: 56px;
		margin-left: auto;
		margin-top: 24px;
		margin-right: auto;
	}
	
	#index .titleP2 {
		font-size: 14px;
		color: #999999;
	}
	
	#index .titleP1 {
		font-size: 24px;
		padding: 22px 0;
		color: #333333;
	}
	
	#index .productTitle {
		text-align: center;
	}
	
	#index .main-top {
		width: 100%;
		min-width: 1170px;
		height: 100vh;
		min-height: 800px;
		background: #F1F4FB;
		padding-top: 3.69vw;
	}
	
	#index .productContent {
		width: 1170px;
		margin: auto;
		overflow: hidden;
	}
	
	#product {
		width: 100%;
	}
	
	
	#met p {
		font-size: 30px;
		text-align: center;
		color: white;
		display: block;
		margin-top: 10px;
	}
	
	#met {
		position: absolute;
		top: 400px;
		left: 50%;
		right: 50%;
		margin-left: -140px;
		margin-right: -140px;
	}
	
	#bg4 {
		background: url(../static/img/banner04-min.png) no-repeat center center;
		background-size: cover;
		width: 100%;
		height: 100%;
		position: relative;
	}
	
	#index .bgWhite {
		color: white;
	}
	
	#index .bannerTheer img {
		width: 126px;
		height: 126px;
	}
	
	#index .bannerTheer {
		position: absolute;
		top: 430px;
		right: 0px;
		width: 143px;
		height: 190px;
		background: white;
		text-align: center;
		padding-top: 14px;
		color: 16px;
	}
	
	#index .bannerLook {
		color: white;
		font-size: 18px;
		width: 225px;
		height: 61px;
		line-height: 61px;
		text-align: center;
		border: 1px solid #FFFFFF;
		margin-top: 40px;
	}
	
	#index .ment p {
		font-size: 30px;
		display: inline-block;
		color: white;
		margin-right: 12px;
	}
	
	#index .rant {
		position: absolute;
		left: 0;
		top: 281px;
		color: red;
		font-size: 48px;
	}
	
	#bgtheer {
		width: 1170px;
		margin: 0 auto;
		position: relative;
	}
	
	#bg2 {
		background: url(../static/img/light-min.png) no-repeat center center;
		width: 100%;
		height: 100%;
	}
	
	#bg3 {
		background: url(../static/img/bg-min.png) no-repeat center center;
		background-size: 100% 100%;
		width: 100%;
		height: 100%;
		text-align: center;
	}
	
	#banAmage {
		position: absolute;
		top: 166px;
		right: 0px;
	}
	
	#index .robotImg-enter-active {
		transition: all 2s ease;
	}
	
	#index .robotImg-leave-active {
		transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#index .robotImg-enter,
	.robotImg-leave-to{
		transform: translateX(350px);
		opacity: 0;
	}
	
	#index .texts-enter-active {
		transition: all 2s ease;
	}
	
	#index .texts-leave-active {
		transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#index .texts-enter,
	.texts-leave-to	{
		transform: translateX(-350px);
		opacity: 0;
	}
	
	#index .rant-enter-active {
		transition: all 2s ease;
	}
	
	#index .rant-leave-active {
		transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#index .rant-enter,
	.rant-leave-to {
		transform: translateY(-350px);
		opacity: 0;
	}
	
	#index .details-enter-active {
		transition: all 2s ease;
	}
	
	#index .details-leave-active {
		transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	#index .details-enter,
	.details-leave-to {
		transform: translateX(350px);
		opacity: 0;
	}
	
	#index .met-enter-active {
		transition: all 4s ease-out;
	}
	
	#index .met-leave-active {
		transition: all 4s ease-out;
	}
	
	#index .met-enter,
	.met-leave-to {
		opacity: 0;
	}
	
	#ban-nsi {
		margin-top: 15px;
	}
	
	#ban-nert {
		margin-top: 30px;
		margin-bottom: 20px;
	}
	
	#ban-tuteo {
		position: absolute;
		top: 290px;
		z-index: 555;
	}
	
	#index .after-ban {
		position: absolute;
		top: 640px;
		left: -300px;
	}
	
	#ban-tuone {
		position: absolute;
		top: 220px;
		z-index: 550;
	}
	
	#index .banner-light {
		position: absolute;
		top: 430px;
	}
	
	#index .banImg {
		width: 702px;
		height: 293px;
		top: 387px;
		position: absolute;
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
	
	#index .fade-enter-active {
		transition: all 0.9s ease-out;
	}
	
	#index .fade-leave-active {
		transition: all 0.9s ease-out;
	}
	
	#index .fade-enter,
	.fade-leave-to {
		opacity: 0;
		transform: translateX(60px);
	}
			
	#index .headerContent {
		width: 100%;
		height: 0px;
		background: black;
		position: fixed;
		z-index: 66;
		top: 0;
		transition-duration: 0.1s;
		-moz-transition-duration: 0.1s;
		-o-transition-duration: 0.1s;
	}
		
	#index .logo {
		width: 183px;
		height: 49px;
		background: url(../static/nav/LOGO-NEW.png) no-repeat center center;
		background-size: cover;
		float: left;
		margin-top: 13px;
	}
		
	#index .banHead {
		width: 100%;
		min-width: 1170px;
		height: 100vh;
		min-height: 974px;
		box-sizing: border-box;
	}
	
	#nav {
		width: 1170px;
		margin: 0 auto;
	}
	
	#index .clearfix:after {
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