<template>
	<view class="layout layout-grey">
		<view class="s-box">
			<SearchBox v-model="keyword" @input="serchJob">
				<view v-if="keyword" class="cancel" @click="cancel">取消</view>
			</SearchBox>
		</view>
		<JobCard v-for="(job,i) in jobList" :key="i" :job="job" @click="toJobDetail" />
		<view class="no-more" v-show="tips">
			——— 没有更多内容了 ———
		</view>
		<view class="no-res" v-if="jobList.length==0 && keyword">
			<image src="../../../static/images/nores.png" mode=""></image>
			<view>未搜索到岗位</view>
		</view>
	</view>
</template>

<script>
	import SearchBox from '../../../components/SearchBox.vue'
	import JobCard from '../../../components/JobCard.vue'
	export default {
		components: {
			SearchBox,
			JobCard
		},
		data() {
			return {
				keyword: undefined,
				page: 1,
				pageSize: 10,
				onFetching: false,
				hasNextPage: true,
				tips:false,
				jobList: [
					{
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
		onLoad() {
			this.serchJob()
		},
		methods: {
			cancel() {
				uni.navigateBack()
			},
			serchJob() {
				if(this.onFetching) return
				this.onFetching = true

				let data = {
					page: this.page,
					pageSize: this.pageSize,
					keyword: this.keyword
				}
				// 调用接口
			},
			toJobDetail(job) {

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

<style lang="scss" scoped>
	.s-box {
		padding: 34rpx 30rpx 30rpx;
		background-color: #fff;

		.cancel {
			font-size: 26rpx;
			
			line-height: 36rpx;
			padding-left: 20rpx;
			padding-right: 6rpx;
		}
	}

	.no-more {
		text-align: center;
		font-size: 20rpx;
		color: #CDCDCD;
		line-height: 28rpx;
		padding-bottom: 12rpx;
		background-color: #F6F6F6;
	}
	.no-res{
		font-size: 28rpx;
		color: #909090;
		line-height: 40rpx;
		text-align: center;
		image{
			width: 568rpx;
			height: 504rpx;
			display: block;
			margin: 168rpx auto 54rpx;
		}
	}
</style>
