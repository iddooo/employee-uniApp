<template>
	<view class="sys-msg">
		<view class="msg-box" v-for="(msg,i) in msgList" :key="i">
			<view class="time">
				{{msg.createTime}}
			</view>
			<view class="content-box">
				<view class="content">
					{{msg.content}}
				</view>
				<view class="tips flex-ct-bwt">
					<text>查看详情</text>
					<image src="../../../static/images/right@2x.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				msgList:[
					{
						createTime:"15:31",
						content:"您已被招聘者录用，快去看看吧~您已被招聘者录用，快去看看吧~您已被招聘者录用，快去看看吧~"
					}
				]
			}
		},
		created() {
			console.log(222);
		}
	}
</script>

<style lang="scss" scoped>
	.msg-box{
		margin: 0 24rpx;
		border-top: 2rpx solid #E2E2E2;
		border-bottom: 2rpx solid #E2E2E2;
		padding:36rpx 0 6rpx 0;
		.time{
			@include shc(28rpx, 40rpx,#909090);
			text-align: center;
			margin-bottom: 30rpx;
		}
		.content-box{
			background-color: #fff;
			padding: 0 38rpx;
			margin-bottom: 30rpx;
			.content{
				height: 100rpx;
				line-height: 100rpx;
				@include  elips(1);
				padding:0 38rpx;
				width: 100%;
				box-sizing: border-box;
				border-bottom: 2rpx solid #E2E2E2;
			}
			.tips{
				padding-left: 38rpx;
				padding-right: 40rpx;
				height: 84rpx;
				@include shc(28rpx, 40rpx,#909090);
				image{
					@include wh(14rpx,20rpx);
				}
			}
		}
	}
</style>

