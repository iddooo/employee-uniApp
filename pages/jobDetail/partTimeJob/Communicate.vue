<template>
	<view class="communicate flex-ct-bwt">
		<view class="btn1 flex-ct-ct" @click="goChat">
			在线沟通
		</view>
		<view class="btn2 flex-ct-ct" @click="participate">
			立即报名
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
			},
			participate(){
				console.log('立即报名');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.communicate{
		padding: 20rpx 30rpx 40rpx;
		background-color: #fff;
		
		.btn1{
			@include wh(242rpx,80rpx)
			background: #F8F8FB;
			border-radius: 4rpx;
			@include shc(32rpx,44rpx)
		}
		.btn2{
			@include wh(408rpx,80rpx)
			background: #00C777;
			border-radius: 4rpx;
			@include shc(32rpx,44rpx,#fff)
		}
	}
</style>
