<template>
	<view class="pop" v-show="commit">
		<view class="allcover"></view>
		<!-- <view class="input-box flex-ct" :style="{bottom:bottom+'px'}"> -->
			<view class="input-box flex-ct">
			<input type="text" confirm-type="发送" v-model="value" placeholder="说点什么吧" @confirm="send" :focus="commit"
			 cursor-spacing="10" 
			 :adjust-position='true' 
			 :hold-keyboard="true" 
			 @keyboardheightchange="keyboardheightchange" />
			<view class="view-btn">
				<button type="primary" @tap="send">发送</button>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		props: ['commit', 'value'],
		data() {
			return {
				val: '',
				bottom: 0,
				rate:1,
			}
		},
		watch:{
			commit:{
				handler(v,o){
					console.log(v,o);
				}
			}
		},
		methods: {
			send() {
				this.$emit('input', this.value)
			},
			cancel() {
				this.$emit('cancel')
			},
			keyboardheightchange(e) {
				let {
					height,
					duration
				} = e.detail
				console.log('keyboardheightchange',height, duration);
				this.bottom = height
				if (height == 0 && Number(duration)!==0) {
					console.log('cancel');
					this.$emit('cancel')
				}
			}
		},
		mounted() {
			uni.getSystemInfo({
				success: (res)=> {
					let screenWidth = res.screenWidth // 414
					this.rate = 750 / screenWidth
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.pop {
		transition: all .5s;
	}

	.allcover {
		@include allcover;
		background-color: rgba(0, 0, 0, .4);
	}

	.input-box {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		box-sizing: border-box;
		border-top: 1px solid rgba(204, 204, 204, .4);
		background-color: #fff;
		z-index: 999;

		input {
			// border-radius: 30rpx;
			border: 1px solid #EEEEEE;
			background: #EEEEEE;
			padding-left: 20rpx;
			padding-top: 10rpx;
			padding-bottom: 10rpx;
			flex: 1;
			margin-right: 20rpx;
		}

		.view-btn {
			width: 80px;
		}

		button {
			background-color: #FFC000;
			font-size: 14px;
		}
	}
</style>
