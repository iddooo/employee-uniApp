<template>
	<view class="layout layout-grey">
		<JobHead :job="job"/>
	</view>
</template>

<script>
	import JobHead from './JobHead.vue'
	
	export default {
		components:{
			JobHead
		},
		data() {
			return {
				title: 'Hello',
				job:{
						type: 1, //2就业 1兼职
						title: "游戏ui设计师",
						price: 500,
						unit: '天',
						category: "简单易做",
						education: '本科',
						experience: '1-3年',
						settlementPeriod: "月结",
						sex: '女',
						recruitmentCycle: '长招',
						isGuaranteed: true,
						isAuthenticated: true,
						isDirect: false,
						companyName: '北京市新东方教育基地',
						site: '东城区'
					}
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
