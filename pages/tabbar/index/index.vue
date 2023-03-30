<template>
	<view class="layout">
		<!-- 搜索框 -->
		<view class="head flex-ct">
			<view class="site flex-ct-bwt" @click="setCity">
				<image class="loc" src="../../../static/images/loc.png" mode=""></image>
				<text>{{city}}</text>
				<image class="down" src="../../../static/images/down.png" mode=""></image>
			</view>
			<view class="s-box">
				<SearchBox disabled @click="toSearchJob"></SearchBox>
			</view>
		</view>
		<!-- 类型切换 -->
		<Tabs v-model="type" @change="changeType" />
		<!-- 轮播图 -->
		<Banner :banners="banners"></Banner>
		<!-- 定向工作 -->
		<view class="entry flex-ct-bwt">
			<view class="item" v-for="item in directional" :key='item.name' @click="toDirectionalJob(item)">
				<image :src="item.icon" mode=""></image>
				<view class="label">
					{{item.name}}
				</view>
			</view>
		</view>
		<!-- 广告 -->
		<image class="ad" src="../../../static/images/cover2.png" mode=""></image>
		<!-- 意向 -->
		<view class="flex-ct-bwt mb20" @click="setPrefer">
			<Tabs :tabs="tabsTitle" />
			<view class="prefer flex-ct-end">
				<text>意向设置</text>
				<image src="../../../static/images/right@2x.png" mode=""></image>
			</view>
		</view>
		<!-- 精选发现 -->
		<JobCard v-for="(job,i) in jobList" :key="i" :job="job">
			<view></view>
		</JobCard>
	</view>
</template>

<script>
	import Banner from '../../../components/Banner.vue'
	import SearchBox from '../../../components/SearchBox.vue'
	import Tabs from '../../../components/Tabs.vue'
	import JobCard from '../../../components/JobCard.vue'
	import IMService from "../../../lib/imservice.js";

	export default {
		data() {
			return {
				title: 'Hello',
				city: '南昌',
				type: 1,
				banners: [{
					imgUrl: '/static/images/cover1.png'
				}],
				// 1-宅家赚钱 2-快找急聘 3-优先上岗 4-品牌直销 5-简单易做
				directional: [{
						label: 1,
						name: "宅家赚钱",
						icon: "/static/images/index/scan.png"
					},
					{
						label: 2,
						name: "快找急聘",
						icon: "/static/images/index/classify.png"
					},
					{
						label: 3,
						name: "优先上岗",
						icon: "/static/images/index/family.png"
					},
					{
						label: 4,
						name: "品牌直聘",
						icon: "/static/images/index/guide.png"
					},
					{
						label: 5,
						name: "简单易做",
						icon: "/static/images/index/kw.png"
					}
				],
				tabsTitle: [{
					label: "精选发现",
					value: 1
				}],
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
		components: {
			Banner,
			SearchBox,
			Tabs,
			JobCard
		},
		onLoad() {

		},
		onShow() {
			// 定位城市
			let location = uni.getStorageSync('location')
			// 用户选择城市
			let city = uni.getStorageSync('city')

			this.city = city ? city : location ? location : this.getLocationInfo()

			// 获取当前用户
			// let currentUser = uni.getStorageSync('currentUser');
			let currentUser = {
				id: 333,
				"name": "Nacy",
				"password": "123",
				"avatar": '/static/images/Avatar-3.png',
				"company":"深圳腾讯科技"
			}
			uni.setStorageSync('currentUser', currentUser)
			console.log(currentUser);
			// if(!currentUser){
			// 	uni.navigateTo({
			// 		url: "../login/login"
			// 	})
			// 	return;
			// }
			//建立连接
			getApp().globalData.imService = new IMService(this.im);
			getApp().globalData.imService.connectIM(currentUser);


		},
		methods: {
			toSearchJob() {
				uni.navigateTo({
					url: '../../jobWanted/searchJob/index'
				})
			},
			changeType(v) {

			},
			toDirectionalJob(item) {
				uni.navigateTo({
					url: '../../jobWanted/directionalJob/index?directional=' + JSON.stringify(item)
				})
			},
			setCity() {
				uni.navigateTo({
					url: '../../jobWanted/city/index'
				})
			},
			setPrefer() {
				uni.navigateTo({
					url: '../../jobWanted/prefer/index'
				})
			},
			// 获取城市定位
			getLocationInfo() {
				// 获取定位城市
				let location = '南昌'
				uni.setStorageSync('location', location)
				uni.setStorageSync('city', location)
				return location
			}
		}
	}
</script>

<style lang="scss" scoped>
	.head {
		padding: 24rpx 36rpx 40rpx;

		.site {
			font-size: 34rpx;
			font-weight: 500;

			line-height: 52rpx;
			width: 164rpx;
			padding: 0 18rpx 0 4rpx;
			box-sizing: border-box;

			.loc {
				width: 30rpx;
				height: 36rpx;
			}

			.down {
				width: 20rpx;
				height: 14rpx;
			}
		}

		.s-box {
			flex: 1;
		}
	}

	.entry {
		padding: 26rpx 42rpx;

		.item {
			flex: 1;
			font-size: 24rpx;
			color: #3B3B3B;
			line-height: 34rpx;
			text-align: center;

			image {
				width: 84rpx;
				height: 84rpx;
				margin-bottom: 24rpx;
			}
		}
	}

	.ad {
		margin: 24rpx auto 62rpx;
		width: 678rpx;
		height: 194rpx;
		border-radius: 16rpx;
		display: block;
	}

	.mb20 {
		margin-bottom: 20rpx;
	}

	.prefer {
		font-size: 26rpx;
		color: #909090;
		line-height: 36rpx;
		padding-right: 36rpx;

		image {
			width: 12rpx;
			height: 24rpx;
			margin-left: 20rpx;
		}
	}
</style>
