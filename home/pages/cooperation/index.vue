<template>
	<div id="cooperation">
		<logo/>
		<main class="coderst-cooperation">
			<div class="coopera">
				<img class="coopTop" src="../../static/haha/duoduo-min.png" />
				<div class="coopMid">
					IN 2018, THE "DODO ROBOT" GLOBAL AGENTS RECRUITED IN THE MIDDLE OF THE WORLD
				</div>
				<div class="coopCtenr">
					<a href="#id1">
						<div class="coopClick">点击抢位</div>
					</a>
				</div>
			</div>
			<div class="coopMainster">
				<h5>市场机遇</h5>
				<div class="market">MARKET OPPORTUNITY </div>
				<div class="oppor clearfix">
					<div class="nuxtBg nuxtCoop1" @mouseenter="nuxtCoop1" @mouseleave="nuxtCoopout">
						<p class="nuxtPing1 rengGent1">人工智能的崛起</p>
						<transition name="test">
							<p class="renGong" v-if="hiddent">人工智能的迅速发展将深刻改变社会生活、改变世界。<br/>响应国家国务院印发《中国制造2025》，实现制造强国的战略目标，统筹布局和推动智能机器人、服务机器人等产品的研发和产业化的“智能制造”主攻方向</p>
						</transition>
					</div>
					<div class="nuxtBg nuxtCoop2" @mouseenter="nuxtCoop2" @mouseleave="nuxtCoopout2">
						<p class="nuxtPing1 rengGent2">电商平台的疲态</p>
						<transition name="textwo">
							<p class="renGong" v-if="hiddent2">电商经过多年的发展已经逐步呈现下滑趋势，严重疲软，而被电商市场长期以来冲击的实体店铺，迎来了反击的共享经济时代</p>
						</transition>
					</div>
					<div class="nuxtBg nuxtCoop3" @mouseenter="nuxtCoop3" @mouseleave="nuxtCoopout3">
						<p class="nuxtPing1 rengGent3">高新科技的发展</p>
						<transition name="textheer">
							<p class="renGong" v-if="hiddent3">高新科技的发展让生活变得越来越高效，购物越来越便捷</p>
						</transition>
					</div>
					<div class="nuxtBg nuxtCoop4" @mouseenter="nuxtCoop4" @mouseleave="nuxtCoopout4">
						<p class="nuxtPing1 rengGent4">物联网带动经济的复兴</p>
						<transition name="textfor">
							<p class="renGong" v-if="hiddent4">物联网概念的诞生，预警着实体经济复兴的到来，物联网及智能机器人的迅速结合发展，带来了消费意识的改变</p>
						</transition>
					</div>
				</div>
				<div class="mid-bg"></div>
				<div class="calksCoop clearfix">
					<div class="calkSeent">
						<h1>招商范围:</h1>
						<div>面向全球各地开展，没有地域之分，不管您来自哪里，都可以将多多达人分享给大家。</div>
					</div>
					<div class="calkSeent">
						<h1>资质要求:</h1>
						<div>具有合法的营业资格和营业场所，熟悉市场运作规范。愿与多多达人携手赚取更多财富，一起走向成功的有识之士，更多详情敬请咨询客服</div>
					</div>
					<div class="calkSeent">
						<h1>品牌拓展支持:</h1>
						<div>根据市场情况，采取相应的促销政策（包括但不限于产品政策、促销品支持、费用支持等），按照区域代理商对应投入划分，以帮助代理商开拓、维护好市场。</div>
					</div>
					<div class="calkSeent">
						<h1>租售奖励政策</h1>
						<div>根据代理商季度、年度租售完成任务情况，按照相关奖励政策实施奖励。</div>
					</div>
				</div>
			</div>
			<div class="footEnd" id="id1">
				<div class="srceme"><span>我们无处不在，</span><span class="fotSp">随时与我们联系。</span></div>
				<div class="mint-end clearfix">
					<div class="mintLeft"><img class="min-imgWidth" src="../../static/haha/zhuangshi-min.png"></div>
					<div class="mintRight">
						<el-form :inline="true" :label-position="labelPosition" label-width="80px" :model="ruleForm2" :rules="rules" ref="ruleForm2" class="demo-ruleForm">
							<el-form-item label="合作方式:">
								<el-select v-model="ruleForm2.collaborate_type" placeholder="品牌合作">
									<el-option label="品牌合作" value="品牌合作"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="姓名:" prop="username">
								<el-input v-model="ruleForm2.username"></el-input>
							</el-form-item> <br />
							<el-form-item label="手机号:" prop="phone_number">
								<el-input v-model="ruleForm2.phone_number"></el-input>
							</el-form-item>
							<el-form-item label="省份:" prop="province" style="margin-left: 15px;">
								<el-input v-model="ruleForm2.province"></el-input>
							</el-form-item> <br />
							<el-form-item label="备注:" prop="text">
								<el-input type="textarea" v-model="ruleForm2.comment" style="width:430px;"></el-input>
							</el-form-item> <br /> <br />
							<el-form-item style="width:430px;">
								<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
							</el-form-item>
						</el-form>
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
		name:'cooperation',
		components: {
			Logo
		},
		transition: 'test',
		data() {
			return {
				title:'多多达人机器人-商务合作',
				hiddent: false,
				hiddent2: false,
				hiddent3: false,
				hiddent4: false,
				hid: true,
				show: false,
				labelPosition: 'top',
				ruleForm2: {
					username: '',
					province: '',
					type: '',
					phone_number: '',
					comment: '',
					collaborate_type: '品牌合作'
				},
				rules: {
					username: [{
							required: true,
							message: '请输入姓名',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 5,
							message: '长度在 2 到 5 个字符',
							trigger: 'blur'
						}
					],
					province: [{
						required: true,
						message: '请输入省份',
						trigger: 'change'
					}],
					phone_number: [{
						required: true,
						message: '请输入手机号',
						trigger: 'blur'
					}]
				}
			}
		},
		head () {
          return {
		      title: this.title,
		      meta: [
		        { hid: 'cooperation', name: 'cooperation', content: this.title }
		      ]
		    }
		  },
		computed: {

		},
		mounted: function() {
			window.addEventListener('scroll', this.cooperaScroll)

			var akey = window.pageYOffset;
			if(akey >= 100) {
				document.querySelector(".gubTop").style.background = "black"
			}
		},
		methods: {
			cooperaScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				if(scrollTop > 100) {
					document.querySelector(".gubTop").style.background = "black"
				} else {
					document.querySelector(".gubTop").style.background = ""
				}
			},
			nuxtCoopout4() {
				document.querySelector('.rengGent4').style.marginTop = '220px';
				this.hiddent4 = false
			},
			nuxtCoop4() {
				document.querySelector('.rengGent4').style.marginTop = '51px';
				this.hiddent4 = true
			},
			nuxtCoopout3() {
				document.querySelector('.rengGent3').style.marginTop = '220px';
				this.hiddent3 = false
			},
			nuxtCoop3() {
				document.querySelector('.rengGent3').style.marginTop = '51px';
				this.hiddent3 = true
			},
			nuxtCoopout2() {
				document.querySelector('.rengGent2').style.marginTop = '220px';
				this.hiddent2 = false
			},
			nuxtCoop2() {
				document.querySelector('.rengGent2').style.marginTop = '51px';
				this.hiddent2 = true
			},
			nuxtCoopout() {
				document.querySelector('.rengGent1').style.marginTop = '220px';
				this.hiddent = false
			},
			nuxtCoop1() {
				document.querySelector('.rengGent1').style.marginTop = '51px';
				this.hiddent = true
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						const that = this
						axios.post('https://mp.aybc.so/app/collaborates', {
							collaborate_type: that.ruleForm2.collaborate_type,
							username: that.ruleForm2.username,
							phone_number: that.ruleForm2.phone_number,
							province: that.ruleForm2.province,
							comment: that.ruleForm2.comment
						})
						.then(function(respone) {
							if(respone.data.status != 10000){
								alert(respone.data.message)
								return false
							}
							alert('提交成功!稍后会有工作人员与您取得联系,请保持电话通畅!')
							that.$refs[formName].resetFields();
							that.ruleForm2.comment = '';
							that.ruleForm2.collaborate_type = '';
						})
						.catch(function(error) {
							console.log(error);
						});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}								
		}
	}
</script>

<style>
	#cooperation .coderst-cooperation{
		width: 100%;
		min-width: 1170px;
	}
	#cooperation .el-button {
		width: 100%;
	}
	
	#cooperation .renGong {
		width: 181px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 54px;
		font-size: 16px !important;
		color: white;
		line-height: 1.8;
	}
	
	#cooperation .test-enter-active {
		transition: all .3s ease;
	}
	
	#cooperation .test-leave-active {
		transition: all .3s ease;
	}
	
	#cooperation .test-enter,
	.test-leave-to {
		transform: translateY(100px);
		opacity: 0;
	}
	
	#cooperation .textwo-enter-active {
		transition: all .3s ease;
	}
	
	#cooperation .textwo-leave-active {
		transition: all .3s ease;
	}
	
	#cooperation .textwo-enter,
	.textwo-leave-to {
		transform: translateY(100px);
	}
	
	#cooperation .textheer-enter-active {
		transition: all .3s ease;
	}
	
	#cooperation .textheer-leave-active {
		transition: all .3s ease;
	}
	
	#cooperation .textheer-enter,
	.textheer-leave-to {
		transform: translateY(100px);
	}
	
	#cooperation .textfor-enter-active {
		transition: all .3s ease;
	}
	
	#cooperation .textfor-leave-active {
		transition: all .3s ease;
	}
	
	#cooperation .textfor-enter,
	.textfor-leave-to {
		transform: translateY(100px);
	}
	
	#cooperation .calkSeent {
		width: 170px;
		margin: 0 11px;
	}
	
	#cooperation .footEnd span {
		font-weight: 100;
	}
	
	#cooperation .fotSp {
		color: #33A6FF;
	}
	
	#cooperation .mint-end {
		width: 1170px;
		margin-top: 108px;
		margin-left: auto;
		margin-right: auto;
	}
	
	#cooperation .mintRight {
		float: left;
	}
	
	#cooperation .mintLeft {
		float: left;
		margin-right: 24px;
	}
	
	#cooperation .mintLeft .min-imgWidth{
		width: 700px;
	}
	
	#cooperation .srceme {
		text-align: center;
		font-size: 36px;
	}
	
	#cooperation .footEnd {
		background: white;
		padding-top: 74px;
		padding-bottom: 340px;
	}
	
	#cooperation .calksCoop div {
		float: left;
		width: 270px;
		font-size: 20px;
	}
	
	#cooperation .calksCoop {
		width: 1170px;
		margin: 0 auto;
		padding-top: 109px;
	}
	
	#cooperation .oppor {
		margin-top: 117px;
		width: 1170px;
		margin-left: auto;
		margin-right: auto;
	}
	
	#cooperation .mid-bg {
		margin-top: 179px;
		background: url("../../static/haha/bn-min.png") no-repeat center center;
		width: 100%;
		height: 535px;
	}
	
	#cooperation .nuxtPing1 {
		color: white;
		font-size: 24px;
		margin-top: 220px;
		text-align: center;
		transition: all 0.5s ease-out;
		-moz-transition: all 0.5s ease-out;
		-webkit-transition: all 0.5s ease-out;
		-o-transition: all 0.5s ease-out;
	}
	
	#cooperation .nuxtCoop1 {
		background: url("../../static/haha/01-min.png");
	}
	
	#cooperation .nuxtCoop2 {
		background: url("../../static/haha/02-min.png");
	}
	
	#cooperation .nuxtCoop3 {
		background: url("../../static/haha/03-min.png");
	}
	
	#cooperation .nuxtCoop4 {
		background: url("../../static/haha/04-min.png");
	}
	
	#cooperation .nuxtBg {
		float: left;
		width: 270px;
		height: 471px;
		margin: 0 11px;
	}
	
	#cooperation .market {
		font-size: 18px;
		color: #484848;
		text-align: center;
	}
	
	#cooperation .coopMainster h5 {
		font-size: 30px;
		text-align: center;
	}
	
	#cooperation .coopMainster {
		background: #F1F4FB;
		padding-top: 103px;
		padding-bottom: 88px;
	}
	
	#cooperation .coopCtenr {
		text-align: center;
		margin-top: 98px;
	}
	
	#cooperation .coopClick {
		display: inline-block;
		width: 255px;
		height: 60px;
		color: white;
		background: #2C7DC8;
		line-height: 60px;
		text-align: center;
	}
	
	#cooperation .coopMid {
		width: 342px;
		height: 102px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 62px;
		background: url("../../static/haha/rect-min.png");
		font-size: 14px;
		color: #CCCCCC;
		padding: 19px 43px 0 43px;
	}
	
	#cooperation .coopTop {
		display: block;
		margin: 0 auto;
	}
	
	#cooperation .coopera {
		background: url('../../static/haha/bg-min.png');
		width: 100%;
		height: 700px;
		padding-top: 173px;
	}
	
	#cooperation .clearfix:after {
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
		box-sizing: border-box;
	}
</style>