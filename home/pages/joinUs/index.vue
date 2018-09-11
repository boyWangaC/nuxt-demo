<template>
	<div id="joinUs">
		<logo/>
		<div class="case">
			<img src="../../static/new/come-min.png">
		</div>
		<div class='come'>
			<el-collapse v-model="activeName" @change="actibve" accordion>
				<template v-for="item in data.data">
					<el-collapse-item :title="item.position" :name="item.id">
						<div>
							<p style="font-size: 16px;font-weight: 600;">招聘职位：</p>{{ dataInfo.position }}</div>
						<div>
							<p style="font-size: 16px;font-weight: 600;">部门：</p>{{ dataInfo.department }}</div>
						<div>
							<p style="font-size: 16px;font-weight: 600;">人数：</p>{{ dataInfo.number }}</div>
						<div>
							<p style="font-size: 16px;font-weight: 600;">岗位职责：</p>
							<p style="word-break:break-all;" v-html="obligation"></p>
						</div>
						<div>
							<p style="font-size: 16px;font-weight: 600;">任职要求：</p>
							<p style="word-break:break-all;" v-html="demand"></p>
						</div>
					</el-collapse-item>
				</template>
			</el-collapse>
		</div>
	</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	import axios from 'axios'
	export default {
		name:'joinUs',
		components: {
			Logo
		},
		data() {
			return {				
				data: '', // 第一层解析数据
				activeName: '1',
				obligation: '', //岗位职责
				demand: '', // 任职要求
				dataInfo: '' // 第二层详细信息
			}
		},
		head () {
          return {
		      title: '多多达人机器人-加入我们',
		      meta: [
		        { hid: 'joinUs', name: 'joinUs', content: '多多达人机器人-加入我们' }
		      ]
		    }
		  },
		created() {
			this.getNewsJoinUs()
		},
		computed: {

		},
		mounted: function() {
			window.addEventListener('scroll', this.joinScroll)

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
			actibve(e) {
				if(!e) {
					return false
				}
				this.getrecruitsInfo(e)
			},
			getNewsJoinUs() {
				const _this = this
				axios.get('https://mp.aybc.so/app/recruits', {
						params: {
							page: 1
						}
					})
					.then(function(res) {
						const data = res.data.data
						_this.data = data
					})
			},
			getrecruitsInfo(id) {
				const _this = this
				axios.get('https://mp.aybc.so/app/recruits' + '/' + id)
					.then(function(res) {
						const data = res.data.data
						_this.dataInfo = data
						_this.obligation = data.obligation.replace(/\n|\r\n/g,"<br/>")
						_this.demand = data.demand.replace(/\n|\r\n/g,"<br/>")
					})
			},
			joinScroll() {
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
	#joinUs .come p {
		font-size: 14px;
		margin-top: 5px;
	}
	
	#joinUs .come h6 {
		font-size: 14px;
		margin-top: 25px;
	}
	
	#joinUs .come-border {
		display: inline-block;
		width: 1200px;
		border-bottom: 1px solid #CCCCCC;
		margin-top: 29px;
	}
	
	#joinUs .come h5 {
		font-size: 16px;
	}
	
	#joinUs .come {
		width: 1170px;
		margin-left: auto;
		margin-right: auto;
		padding: 60px 8px;
	}		
	
	#joinUs .case img {
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
		
	#joinUs .clearfix:after {
		content: '';
		display: block;
		clear: both;
	}
	/* 招聘样式 */	
	.el-collapse-item__header {
		font-size: 16px;
		color: #666;
		font-weight: 600;
	}
	
	.el-collapse-item__content div {
		font-size: 14px;
		color: #666;
		padding-bottom: 30px;
	}
</style>