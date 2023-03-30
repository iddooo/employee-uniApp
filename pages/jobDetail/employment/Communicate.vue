<template>
	<view class="communicate flex-ct-bwt">
		<view class="btn2 flex-ct-ct" @click="goChat">
			在线沟通
		</view>
	</view>
</template>

<script>
	export default{
		props:['data'],
		methods:{
			goChat(){
				console.log('沟通');
				uni.navigateTo({
					url:'/pages/chat/privateChat/index?info='+JSON.stringify(this.data)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.communicate{
		padding: 20rpx 30rpx 40rpx;
		background-color: #fff;
		.btn2{
			@include wh(100%,80rpx)
			background: #00C777;
			border-radius: 4rpx;
			@include shc(32rpx,44rpx,#fff)
		}
	}
</style>
