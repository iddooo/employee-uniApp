<template>
	<view class="layout layout-grey">
		<JobCard v-for="(job,i) in jobList" :key="i" :job="job"/>
		<view class="no-more" v-show="tips">
			——— 没有更多内容了 ———
		</view>
	</view>
</template>

<script>
	import JobCard from '../../../components/JobCard.vue'
	export default {
		components: {
			JobCard
		},
		data() {
			return {
				label:1,
				page: 1,
				pageSize: 10,
				onFetching: false,
				hasNextPage: true,
				tips:false,
				jobList: [{
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
					},
					{
						type: 2, //2就业 1兼职
						title: "游戏ui设计师",
						price: 5000,
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
					},
				]
			}
		},
		onLoad(options) {
			let directional = JSON.parse(options.directional)
			console.log(directional)
			uni.setNavigationBarTitle({
				title:directional.name
			})
			this.label = directional.label
		},
		methods: {
			serchJob() {
				if(this.onFetching) return
				this.onFetching = true
			
				let data = {
					page: this.page,
					pageSize: this.pageSize,
					label: this.label
				}
				// 调用接口
			}
		},
		onReachBottom() {
			if (!this.hasNextPage) {
				this.tips = true
				setTimeout(() => {
					this.tips = false
				}, 2000)
		
				return
			}
			this.serchJob()
		}
	}
</script>

<style>
		
</style>
