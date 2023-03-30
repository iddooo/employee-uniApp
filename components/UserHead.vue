<template>
	<view class="user-head">
		<image class="bg" src="/static/images/bg.png" mode=""></image>
		<!-- 1 Ta的动态  2Ta的发布-->
		<image v-if="type==1" class="cover1" src="/static/images/cover1.png" mode=""></image>
		<image v-else class="cover2" src="/static/images/cover2.png" mode=""></image>
		<view class="user-avater">
			<image :src="userInfo.avater" mode=""></image>
		</view>
		<view class="flex-ct info">
			<view class="name">
				{{userInfo.nickName}}
			</view>
			<view class="tag" v-if="userInfo.tags" v-for="(t,i) in userInfo.tags" :key="i" :style="{'backgroundColor':colors[i]}">
				{{t}}
			</view>
		</view>
		<view class="motto">
			{{userInfo.motto}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			userInfo:Object,
			type:{
				type:[Number,String],
				default:1
			}
		},
		data() {
			return {
				colors: ['#00C777', '#F7B500', '#37A9FF', '#9173FF', '#FF8A3C'],
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-head {
		width: 100%;
		position: relative;
		padding-bottom: 30rpx;
		background-color: #FFFFFF;

		.bg {
			width: 750rpx;
			height: 152rpx;
			display: block;
		}

		.cover1 {
			width: 240rpx;
			height: 208rpx;
			position: absolute;
			right: 46rpx;
			top: 30rpx;
		}

		.cover2 {
			width: 300rpx;
			height: 236rpx;
			position: absolute;
			right: 40rpx;
			top: 32rpx;
		}

		.user-avater {
			width: 138rpx;
			height: 138rpx;
			border-radius: 50%;
			border: 4px solid #fff;
			position: absolute;
			left: 42rpx;
			top: 72rpx;
			background-color: #E2E2E2;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.info {
			padding: 90rpx 46rpx 20rpx;

			.name {
				font-size: 36rpx;
				font-weight: 500;
				
				line-height: 50rpx;
				margin-right: 14rpx;
			}

			.tag {
				font-size: 22rpx;
				color: #FFFFFF;
				line-height: 32rpx;
				padding: 4rpx 10rpx;
				text-align: center;
				margin-right: 10rpx;
			}
		}

		.motto {
			font-size: 26rpx;
			color: #909090;
			line-height: 36rpx;
			padding: 0 46rpx;
		}
	}
</style>
