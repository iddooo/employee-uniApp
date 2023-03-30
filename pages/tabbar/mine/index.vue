<template>
	<view class="layout layout-grey">
		<view class="edit flex-ct-end">
			<image @click="linkTo(profile)" src="/static/images/edit.jpg" mode=""></image>
		</view>
		<UserHead :userInfo="userInfo" />
		<view class="statics">
			<Tabs :tabs="tabs" />
			<view class="flex-ct-bwt s-box" @click="linkTo(applies)">
				<view class="item">
					<view class="value">{{statics.total}}</view>
					<view class="name">全部记录</view>
				</view>
				<view class="item">
					<view class="value">{{statics.applied}}</view>
					<view class="name">已报名</view>
				</view>
				<view class="item">
					<view class="value">{{statics.Accepted}}</view>
					<view class="name">已录取</view>
				</view>
				<view class="item">
					<view class="value">{{statics.ended}}</view>
					<view class="name">已结束</view>
				</view>
			</view>
		</view>
		<view class="mine flex-ct-bwt">
			<view class="m-item flex-ct" @click="linkTo(resume)">
				<view class="m-name">
					我的简历
				</view>
				<view class="m-value">
					{{resumePercent}}%
				</view>
			</view>
			<view class="m-item flex-ct" @click="linkTo(collections)">
				<view class="m-name">
					我的收藏
				</view>
				<view class="m-value">
					{{collectionTotal}}
				</view>
			</view>
		</view>

		<view class="follow" @click="linkTo(officialAccount)" >
			<image src="/static/images/follow.jpg" mode=""></image>
		</view>

		<view class="links">
			<view class="cell flex-ct-bwt" v-for="(l, i) in links" :key='i' @click="linkTo(l)">
				<view class="flex-ct">
					<image class="icon" :src="l.icon" mode=""></image>
					<text class="des">{{l.name}}</text>
				</view>
				<image class="arrow" src="/static/images/right@2x.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import UserHead from '../../../components/UserHead.vue'
	import Tabs from '../../../components/Tabs.vue'

	export default {
		components: {
			UserHead,
			Tabs
		},
		data() {
			return {
				userInfo: {
					nickName: '王羽佳',
					avater: '',
					motto: '不要贬低黄昏，黄昏和清晨一样是奋斗的时间，如果你现在不努力，老来回望一生一定追悔莫及。',
					tags: ['文艺青年', '爱吃', '设计师', '文艺青年']
				},
				tabs: [{
					label: "我的报名",
					value: "1"
				}],
				statics: {
					total: 75,
					applied: 24,
					Accepted: 4,
					ended: 3
				},
				resumePercent: 70,
				collectionTotal: 13,
				links: [{
						icon: "/static/images/kf.png",
						name: "联系客服",
						url:"/pages/about/customerService/index"
					},
					{
						icon: "/static/images/about.png",
						name: "关于青合力",
						url:"/pages/about/aboutUs/index"
					},
					{
						icon: "/static/images/xy.png",
						name: "用户隐私协议",
						url:"/pages/about/privacyProtocol/index"
					}
				],
				officialAccount:{
					name: "关注公众号",
					url:"/pages/about/officialAccount/index"
				},
				resume:{
					name: "我的简历",
					url:"/pages/social/resume/index"
				},
				collections:{
					name: "我的收藏",
					url:"/pages/social/collections/index"
				},
				applies:{
					name: "我的报名",
					url:"/pages/social/applies/index"
				},
				profile:{
					name: "个人简介",
					url:"/pages/social/profile/index"
				}
				
			}
		},
		onLoad() {

		},
		methods: {
			linkTo(l){
				console.log(l.url);
				uni.navigateTo({
					url:l.url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.layout{
		overflow: hidden;
	}
	.edit {
		height: 36rpx;
		background-color: #20C280;
		padding-right: 32rpx;

		image {
			@include wh(36rpx);

		}
	}

	.statics {
		margin: 24rpx;
		background-color: #fff;
		padding-top: 32rpx;

		.s-box {
			padding: 40rpx 50rpx 44rpx;

			.item {
				flex: 1;
				text-align: center;

				.value {
					font-size: 40rpx;
					font-family: DINAlternate-Bold, DINAlternate;
					font-weight: bold;
					color: #2F2F2F;
					line-height: 48rpx;
					margin-bottom: 4rpx;
				}

				.name {
					@include shc(24rpx, 34rpx, #909090);
				}
			}
		}
	}

	.mine {
		margin: 24rpx;

		.m-item {
			@include wh(340rpx, 112rpx);
			background: #FFFFFF;
			border-radius: 10rpx;
			padding: 28rpx 0 28rpx 40rpx;
			box-sizing: border-box;

			.m-name {
				@include shc(32rpx, 44rpx);
				margin-right: 24rpx;
			}

			.m-value {
				font-size: 48rpx;
				font-family: DINAlternate-Bold, DINAlternate;
				font-weight: bold;
				color: #2F2F2F;
				line-height: 56rpx;
			}
		}
	}

	.follow {
		margin: 24rpx;
		@include wh(702rpx, 178rpx);
		image{
			@include wh(100%);
		}
	}

	.links {
		margin: 24rpx;

		.cell {
			height: 106rpx;
			padding: 0 32rpx;
			border-bottom: 2rpx solid #E2E2E2;
			background-color: #fff;
			&:last-of-type {
				border-bottom: 0;
			}

			.icon {
				@include wh(50rpx, 52rpx);
				margin-right: 26rpx;
			}

			.des {
				@include shc(28rpx, 40rpx, #333);
			}

			.arrow {
				@include wh(12rpx, 24rpx);
				margin-right: 6rpx;
			}
		}
	}
</style>
