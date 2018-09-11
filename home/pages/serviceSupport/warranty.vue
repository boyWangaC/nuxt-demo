<template>
	<div class="pay-calk" id="warranty">
		<div class="pay-top">
			<div class="pay-left">
				<nuxt-link to="/serviceSupport/purchaseNotes">
					<p>购买须知</p>
				</nuxt-link>
				<p class="text-pay">保修承诺</p>
				<nuxt-link to="/serviceSupport/commonProblems">
					<p>常见问题与解决方案</p>
				</nuxt-link>
			</div>
			<div class="parse-right">
				<h5>保修承诺</h5>
				<div class="box"></div>
				<p>1、本承诺的适用范围</p>
				<ul>
					<li>本承诺仅适用于在中华人民共和国境内（港、澳、台地区除外）销售和购买的哎哟不错机器人产品。</li>
					<li>与哎哟不错机器人产品一起捆绑销 售的其他产品或促销品，如属于符合《哎哟不错机器人保修说明》所列性能故障范围的则按《哎哟不错机器人保修说明》执行，如不属于《哎哟不错机器人保修说明》范围，则按照该商品各自的标准保修服务承诺执行。</li>
				</ul>
				<p>2、哎哟不错机器人否认的承诺</p>
				<ul>
					<li>除非本标准服务承诺中明确表示，哎哟不错机器人不做任何其它明示或暗示的承诺和保证，包括对产品的可销性和对某一特定用途的适用性的暗示保证。除非哎哟不错机器人另外作出明确承诺，否则：</li>
					<li>本保修服务承诺仅适用于哎哟不错机器人产品出厂时配置的主机和部件。任何机构或人员（如销售商）给您安装的一切非哎哟不错机器人部件，由该机构或人员或该部件生产厂家自行保修。</li>
					<li>任何机构和人员（如销售商）在本服务承诺之外就您购买的产品及其附属软硬件设备向您做出的任何额外承诺，哎哟不错机器人将不承担责任；您应向作出该承诺的机构或人员索要书面证明，以保证这些额外承诺能够兑现。</li>
				</ul>
				<p>3、保修的凭证</p>
				<ul>
					<li>发票及机器人保修卡是您要求哎哟不错机器人履行法定“三包”义务以及哎哟不错机器人标准.售后服务的重要依据，请务必妥善保管。</li>
					<li>当您需要哎哟不错机器人或哎哟不错机器人的认证服务机构履行法定“三包”义务时，您需要携带有效的“发票”和“机器人保修卡”，或者您能够有效地证明您的机器仍在三包有效期内，否则不实施三包。</li>
					<li>如果您需要哎哟不错机器人或哎哟不错机器人的认证服务机构提供哎哟不错机器人厂商标准维修服务，您需要携带有效“发票”和“机器人保修卡”。如果不能得到产品的有效保修信息，哎哟不错机器人将不提供免费保修服务。</li>
				</ul>
				<p>4、替换整机或部件的所有权</p>
				<ul>
					<li>哎哟不错机器人认证服务机构为您更换整机或故障部件后，原机器或故障部件将由哎哟不错机器人或哎哟不错机器人认证服务机构收回并享有所有权。</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	export default {
		name:'serviceSupport-warranty',
		data() {
			return {

			}
		},
		 head () {
		  return {
		      title: '多多达人机器人-保修承诺'	,
		      meta: [
			        { hid: 'serviceSupport-warranty', name: 'serviceSupport-warranty', content: '多多达人机器人-保修承诺' }
			      ]	
		    }
		  },
		scrollToTop: true,
		computed: {
		
		}
	}
</script>

<style>
	 a {
		text-decoration: none;
		color: black;
	}
	
	 .parse-right ul {
		display: inline-block;
		width: 710px;
		font-size: 14px;
		text-align: left;
		padding-left: 19px;
	}
	
	 .text-pay {
		background: #0793FF;
		color: white;
	}
	
	 .parse-right p {
		font-size: 14px;
		text-align: left;
		margin-bottom: 6px;
		margin-top: 6px;
	}
	
	 .box {
		display: inline-block;
		width: 593px;
		border-bottom: 1px solid #CCCCCC;
		margin-bottom: 48px;
		margin-top: 25px;
	}
	
	 .parse-right h5 {
		font-size: 22px;
	}
	
	 .pay-left p {
		height: 60px;
		font-size: 20px;
		line-height: 60px;
		text-align: left;
		padding-left: 86px;
	}
	
	 .parse-right {
		padding-top: 30px;
		float: left;
		padding-bottom: 107px;
	}
	
	 .pay-left {
		float: left;
		width: 315px;
		margin-right: 64px;
	}
	
	 .pay-top {
		display: inline-block;
		width: 1170px;
		background: white;
	}
	
	 .pay-calk {
		background: #F1F4FB;
		text-align: center;
		margin: -4px 0;
	}
	
	 .clearfix:after {
		content: '';
		display: block;
		clear: both;
	}
</style>