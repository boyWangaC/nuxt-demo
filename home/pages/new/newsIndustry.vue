<template>
	<div>
		<div class="new-comdetails">
			<div class="new-one new-comps" v-for="(item,index) in product.data" :class="{'hover-for':ind === index }" @mouseover="newTrends(index)" @mouseout="newTrendsout(index)">
				<nuxt-link :to="'/plase/'+item.id + '?type=2'">
                	<div class="img-end">
                		<img class="img-end" :src="item.image">
                	</div>
					<div class="h-btm clearfix">
						<div class="leftTextm" :class="{'hover-one':ind === index }">
							<p class="p1" :class="{'hover-two':ind === index }">{{(item.date).substring(0,4)}}</p>
							<p class="p2" :class="{'hover-thr':ind === index }">{{(item.date).substring(5)}}</p>
						</div>
						<div class="rightTextm">
							<p class="name" :class="{'hover':ind === index }" v-html="item.title"></p>
							<p class="details" v-html="item.describe"></p>
						</div>
					</div>
				</nuxt-link>
			</div>
		</div>
		<div>
			<el-pagination background layout="prev, pager, next" :total="product.total" :page-size="product.per_page" class="new-compss" @current-change="changeCurrent">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'new-newsIndustry',
		data() {
			return {
				ind: '',
				product: ""
			}
		},
		head () {
          return {
		      title: '多多达人机器人-新闻动态',
		       meta: [
		        { hid: 'new-newsIndustry', name: 'new-newsIndustry', content: '多多达人机器人-新闻动态' }
		      ]	      
		    }
		  },
		scrollToTop: true,
		computed: {
		
		},
		created() {
			this.getNewsIndustry()
		},
		methods: {
			// 下一页
			changeCurrent(page) {
				this.getNewsIndustry(page)
			},
			getNewsIndustry(page) {
				const that = this
				axios.get('https://mp.aybc.so/app/news', {
						params: {
							page: page || 1,
							type: 2
						}
					})
					.then(function(respone) {
						const data = respone.data
						that.product = data.data

					})
					.catch(function(error) {
						console.log(error);
					});
			},
			newTrends(index) {
				this.ind = index
			},
			newTrendsout(index) {
				this.ind = ''
			}
		}
	}
</script>

<style>
	.hover-for {
		border-bottom: 1px solid #3AA9FF !important;
	}
	
	.hover-thr {
		color: white !important;
	}
	
	.hover-two {
		color: white;
	}
	
	.hover-one {
		background: #3AA9FF;
	}
	
	.hover {
		color: #3AA9FF;
	}
	
	.new-compss {
		margin-top: 20px;
		text-align: right;
		width: 1170px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.new-comps {
		margin: 0 10px;
		margin-bottom: 30px;
	}
	
	.p2 {
		font-size: 14px;
		color: #999999;
	}
	
	.p1 {
		font-size: 20px;
	}
	.h-btm{
		height: 118px;
	}
	.h-btm .name {
		font-size: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		 word-break: break-all;
	}
	
	.details {
		font-size: 14px;
		color: #999999;
		text-align: left;
		margin-top: 18px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		 word-break: break-all;
	}
	
	*::-webkit-scrollbar {
		width: 0px;
	}
	
	.rightTextm {
		float: left;
		width: 252px;
		margin-top: 22px;
	}
	
	.leftTextm {
		float: left;
		padding: 13px 20px 15px 16px;
		border: 1px solid #CCCCCC;
		margin-top: 20px;
		margin-right: 30px;
	}
	
	.img-end {
		width: 100%;
		height: 208px;
	}
	
	.new-mids {
		margin: 0 30px;
	}
	
	.new-one {
		display: inline-block;
		width: 370px;
		border-bottom: 1px solid #EEEEEE;
		padding-bottom: 70px;
	}
	
	.new-comdetails {
		display: inline-block;
		width: 1170px;
		margin-top: 97px;
	}
	
	.pay-calk {
		min-width: 1170px;
		background: #F1F4FB;
		text-align: center;
		margin: -3px 0;
	}
	
	.clearfix:after {
		content: '';
		display: block;
		clear: both;
	}
</style>