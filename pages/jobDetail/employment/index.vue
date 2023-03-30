<template>
	<view class="layout layout-grey">
		<JobHead :data="job" @tapStar="tapStar" @link="toPlatformGuarantee"/>
		<view class="container">
			<Publisher :data="job.publisher" />
			<Details :data="job" />
			<SiteMap :data="job" />
		</view>
		<view class="container">
			<view class="title">
				相关推荐
			</view>
			<JobCard v-for="(job,i) in jobList" :key="i" :job="job"><view></view></JobCard>
		</view>
		<Communicate :data='job'/>
		
	</view>
</template>

<script>
	import JobHead from './JobHead.vue'
	import SiteMap from './SiteMap.vue'
	import Details from './Details.vue'
	import Publisher from './Publisher.vue'
	import Communicate from './Communicate.vue'
	import JobCard from '../../../components/JobCard.vue'

	export default {
		components: {
			JobHead,
			SiteMap,
			Details,
			Publisher,
			JobCard,
			Communicate
		},
		data() {
			return {
				title: 'Hello',
				job: {
					id:2,
					type: 2, //2就业 1兼职
					title: "游戏ui设计师",
					price: 5000,
					unit: '月',
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
					site: '东城区',
					isCollected: false,
					timeDate: "任意日期,周末节假日,工作日",
					workTime: "上午；下午；晚上",
					// 30.53833,104.062627
					lat: 30.53833,
					lng: 104.062627,
					address: "成都银泰城",
					addressDetails: "上饶市海淀区安宁庄路26号楼813-2",
					distans: 20,
					companyImage:"/static/images/companyImage.png",
					markers: [{
						id: 1,
						width: 13,
						height: 24,
						latitude: 30.53833,
						longitude: 104.062627,
						iconPath: '../../../static/images/mk.png',
						customCallout: {
							display: "ALWAYS",
							anchorY: -10,
						}
					}],
					details: "信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息文本信息",
					publisher: {
						id:222,
						avatar:"",
						isAuthenticated: true,
						nickName: "王羽佳",
						company: "深圳腾讯科技"
					},
					company:'陶龙科技有限责任公司'
				},
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
		onLoad() {

		},
		methods: {
			tapStar(job){
				console.log('收藏');
			},
			toPlatformGuarantee(){
				console.log('跳转到平台保障页面');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.layout {
		overflow: hidden;
	}

	.container {
		margin: 24rpx;
		/deep/ .job-card{
			margin-bottom: 0;
			border-bottom: 2rpx solid #E2E2E2;
			&:last-of-type{
				border-bottom: 0;
			}
		}
	}

	.title {
		background-color: #fff;
		padding: 40rpx 34rpx 12rpx;
		font-weight: 500;
		@include shc(36rpx, 50rpx)
	}
</style>
