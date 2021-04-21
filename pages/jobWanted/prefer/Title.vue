<template>
	<view class="title flex-btm">
		<text>{{title}}</text>
		<text class="sub-title">{{subtitle}}</text>
	</view>
</template>

<script>
	export default {
		props: ['title', 'subtitle']
	}
</script>

<style lang="scss" scoped>
	.title {
		font-size: 36rpx;
		font-weight: 500;
		
		line-height: 50rpx;
		margin-bottom: 30rpx;
		padding-top: 38rpx;
		.sub-title{
			font-size: 22rpx;
			color: #909090;
			line-height: 32rpx;
		}
	}
</style>
