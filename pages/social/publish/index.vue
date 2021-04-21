<template>
	<view class="layout">
		<view class="flex-ct-end p-box">
			<view class="btn" @click="publish">
				发布
			</view>
		</view>
		<textarea class="txt" :value="content" placeholder="这一刻的想法....." />
		<view class="flex-ct pd">
			<view class="img-box" v-for="(img,i) in imgs" :key="i" maxlength="100" @input="handlerInput">
				<image :src="img" mode=""></image>
			</view>
			<view class="img-box add-img flex-ct-ct" @click="chooseImg">
				<image src="../../../static/images/plus.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:'',
				imgs: []
			}
		},
		onLoad() {

		},
		methods: {
			chooseImg(){
				uni.chooseImage({
					count: 3, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: (res)=> {
						console.log(res.tempFilePaths);
						this.imgs = res.tempFilePaths
					}
				})
			},
			handlerInput(e){
				this.content = e.detail.value
			},
			publish(){
				if(!this.content){
					uni.showToast({
						title:'内容不能为空',
						icon:'none'
					})
					return
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.p-box{
		padding: 40rpx 52rpx;
		.btn{
			width: 102rpx;
			height: 52rpx;
			background: #00C777;
			border-radius: 4rpx;
			text-align: center;
			line-height: 52rpx;
			color: #fff;
			font-size: 28rpx;
			font-weight: 500;
		}
	}
	.txt{
		width: 640rpx;
		height: 176rpx;
		font-size: 32rpx;
		font-weight: 500;
		
		line-height: 44rpx;
		margin: 0 auto 40rpx;
	}
	.pd{
		padding: 0 54rpx;
	}
	.img-box{
		width: 206rpx;
		height: 206rpx;
		background: #F0F4F8;
		border-radius: 10px;
		overflow: hidden;
		margin-right: 12rpx;
	}
	.add-img image{
		width: 44rpx;
		height: 44rpx;
	}
</style>
