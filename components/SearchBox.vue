<template>
	<!-- 搜索框 -->
	<view class="search flex-ct" @click="linkTo">
		<view class="search-box flex-ct">
			<icon class="search-icon" type="search" color="#333" size="14"></icon>
			<input :disabled="disabled" class="weui-input" placeholder-class="plc" @input="onInput" @confirm="onConfirm" confirm-type="搜索" :value="value" :placeholder="placeholder || '搜索岗位'" />
			<view class="reset" @click="reset">
				<image src="/static/images/clear.png" mode=""></image>
			</view>
		</view>
		<slot>
			<!-- <view class="cancel">
				取消
			</view> -->
		</slot>
	</view>
</template>

<script>
	export default{
		props:['value','disabled','placeholder'],
		methods:{
			reset(){
				this.$emit('input','')
			},
			onInput(e){
				this.$emit('input',e.detail.value)
			},
			onConfirm(){
				this.$emit('confirm')
			},
			linkTo(){
				this.$emit('click')
			}
		}
	}
</script>

<style scoped>
	.search {
	  width: 100%;
	  background-color: #fff;
	  /* padding: 0 30rpx; */
	  box-sizing: border-box;
	  display: flex;
	}
	
	.search-box {
	  flex: 1;
	  height: 64rpx;
	  background: rgba(245, 246, 250, 1);
	  border-radius: 33rpx;
	  color: #2F2F2F;
	  line-height: 36rpx;
	  font-size: 26rpx;
	  padding-left: 26rpx;
	  box-sizing: border-box;
	}
	.search-icon {
	  margin-right: 10rpx;
	  height: 28rpx;
	}
	
	.weui-input {
	  flex: 1;
	}
	.reset{
		padding: 0 30rpx;
	}
	.reset image{
		width: 34rpx;
		height: 36rpx;
		display: block;
	}
	.cancel{
		font-size: 26rpx;
		color: #2F2F2F;
		line-height: 36rpx;
		padding-left: 20rpx;
		padding-right: 6rpx;
	}
</style>