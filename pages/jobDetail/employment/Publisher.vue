<template>
	<view class="publisher" @click="toEnterpriseInfomation">
		<view class="title">
			发布者
		</view>
		<view class="p-user">
			<view class="flex-ct">
				<view class="head-pic">
					<image :src="data.avater" mode=""></image>
				</view>
				<view>
					<view class="name">
						{{data.nickName}}
					</view>
					<view class="time flex-ct">
						<view>{{data.company}}</view>
					</view>
				</view>
			</view>
		</view>

		<image class="arrow" src="../../../static/images/right@2x.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		props: ['data'],
		data() {
			return {

			}
		},
		methods: {
			toEnterpriseInfomation() {
				console.log('跳转企业主页');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.publisher {
		padding: 30rpx;
		position: relative;
		background-color: #FFFFFF;
		margin-bottom: 24rpx;

		.title {
			@include shc(36rpx, 50rpx);
			font-weight: 500;
		}

		.p-user {
			padding-top: 34rpx;
			padding-left: 16rpx;
		}

		.head-pic {
			@include wh(86rpx, 86rpx);
			background: #E2E2E2;
			border-radius: 50%;
			margin-right: 10rpx;

			image {
				@include wh(100%, 100%);
			}
		}

		.name {
			@include shc(30rpx, 42rpx);
			font-weight: 500;
		}

		.time {
			@include shc(24rpx, 34rpx, #909090);
			margin-top: 8rpx;

			image {
				@include wh(24rpx, 24rpx);
				margin-left: 2rpx;
			}
		}

		.arrow {
			@include wh(12rpx, 24rpx);
			position: absolute;
			right: 36rpx;
			top: 108rpx;
		}
	}
</style>
