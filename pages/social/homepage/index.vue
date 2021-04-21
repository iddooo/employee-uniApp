<template>
	<view class="layout layout-grey">
		<!-- identity 1个人 2企业 -->
		<UserHead :userInfo="userInfo" :identity="identity" />
		<view class="tab-box">
			<Tabs v-model="type" :tabs="tabs" />
		</view>
		<!-- Ta的动态 -->
		<view class="container" v-if="type==1">
			<Moment :moment="moment" v-for="(moment,i) in newsList" :key="i"></Moment>
		</view>
		<!-- Ta的发布 -->
		<view class="j-contatiner" v-if="identity==2 && type==0">
			<JobCard :job="job" v-for="(job,i) in jobList" :key="i" @click="toJobDetail"/>
		</view>
	</view>
</template>

<script>
	import Tabs from '../../../components/Tabs.vue'
	import Moment from '../../../components/Moment.vue'
	import JobCard from '../../../components/JobCard.vue'
	import UserHead from './UserHead.vue'
	const tabsUser = [
		{
			label: "Ta的动态",
			value: "1"
		}
	]
	const tabsCompany = [{
			label: "Ta的发布",
			value: "0"
		},
		{
			label: "Ta的动态",
			value: "1"
		}
	]
	export default {
		components: {
			Tabs,
			Moment,
			UserHead,
			JobCard
		},
		data() {
			return {
				identity: 1,
				userInfo: {
					nickName: '王羽佳',
					avater: '',
					motto: '不要贬低黄昏，黄昏和清晨一样是奋斗的时间，如果你现在不努力，老来回望一生一定追悔莫及。',
					tags:['文艺青年','爱吃','设计师','文艺青年']
				},
				type: 0,

				tabs: tabsCompany,
				jobList: [{
						type: 1, //2就业 1兼职
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
					}
				],
				newsList: [{
					avater: '',
					nickName: '王羽佳',
					createTime: '2021-1-3',
					location: '南昌',
					content: '我被录用了~~我会加油努力完成工作的',
					topic: '#诚聘新东方英语教师',
					imgs: ['/static/images/cover1.png', '/static/images/cover2.png'],
					likes: 123,
					comments: 45,
					isLike: false,
					isFold: true,
					tops: [{
						avater: '',
						nickName: '王羽佳',
						createTime: '2021.3.12',
						content: '活到老学到老，风景太美了。景色宜人，四季如春，呼吸新鲜空气，感受大自然风光…'
					}]
				}, {
					avater: '',
					nickName: '王羽佳',
					createTime: '2021-1-3',
					location: '南昌',
					content: '这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式。',
					topic: null,
					imgs: ['/static/images/cover1.png', '/static/images/cover2.png'],
					likes: 123,
					comments: 45,
					isLike: false,
					isFold: true,
					tops: [{
							avater: '',
							nickName: '王羽佳',
							createTime: '2021.3.12',
							content: '活到老学到老，风景太美了。景色宜人，四季如春，呼吸新鲜空气，感受大自然风光…'
						},
						{
							avater: '',
							nickName: '王羽佳',
							createTime: '2021.3.12',
							content: '活到老学到老，风景太美了。景色宜人，四季如春，呼吸新鲜空气，感受大自然风光…'
						},
						{
							avater: '',
							nickName: '王羽佳',
							createTime: '2021.3.12',
							content: '活到老学到老，风景太美了。景色宜人，四季如春，呼吸新鲜空气，感受大自然风光…'
						}
					]
				}],

			}
		},

		onLoad(options) {
			console.log(options)
			let moment = JSON.parse(options.moment)
			this.identity = moment.type
			this.tabs = this.identity==1 ? tabsUser : tabsCompany
			this.type = this.tabs[0].value
		},
		methods: {
			handlerLike(moment) {
				console.log('handlerLike', moment)
			},
			handlerAddComment(moment) {
				console.log('handlerAddComment', moment)
			},
			toJobDetail(job){
				console.log('查看岗位详情',job)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab-box {
		padding-top: 46rpx;
		padding-bottom: 42rpx;
		background-color: #FFFFFF;
	}

	.container {
		padding: 24rpx;
	}
	.j-contatiner{
		margin-top: 20rpx;
	}
</style>
