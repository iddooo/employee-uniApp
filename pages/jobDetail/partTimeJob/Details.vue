<template>
	<view class="details">
		<view class="title">
			兼职详情
		</view>
		<view class="des" :style="{height:autoHeight + 'px'}">
			<view class="type">
				【工作薪资】
			</view>
			<view class="content">
				{{data.details}}
			</view>
			<view class="type">
				【工作薪资】
			</view>
			<view class="content">
				{{data.details}}
			</view>
			<view class="type">
				【工作薪资】
			</view>
			<view class="content">
				{{data.details}}
			</view>
		</view>
		<!-- 折叠 -->
		<view class="fold flex-ct-ct" v-if="exceed" @click="fold">
			<image v-if="isFold" src="../../../static/images/fold.png" mode=""></image>
			<image v-else src="../../../static/images/unfold.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		props:['data'],
		data(){
			return{
				isFold:true,
				autoHeight:'',
				exceed:false,
				designHeight:"",
				contentHeight:''
			}
		},
		methods:{
			fold(){
				this.isFold = !this.isFold
				this.autoHeight = this.isFold ? this.designHeight : this.contentHeight
			},
		},
		mounted() {
			console.log('mounted');
			let designHeightRpx = 499 //rpx
			uni.getSystemInfo({
			    success: (res) => {
			        // console.log(res);//设备像素比 
					let screenWidth = res.screenWidth // 414
					let rate = 750/screenWidth
					this.designHeight = designHeightRpx / rate //px
					const query = uni.createSelectorQuery().in(this);
					query.select('.des').boundingClientRect(data => {
						console.log(data.height,this.designHeight)
						this.contentHeight = data.height
						this.exceed = this.contentHeight > this.designHeight ? true : false
						this.autoHeight = this.exceed ? this.designHeight : this.contentHeight
					}).exec();
			    }
			});
		}
	}
</script>

<style lang="scss" scoped> 
.details{
	padding: 30rpx 30rpx 66rpx;
	background-color: #fff;
	position: relative;
	margin-bottom: 24rpx;
	.title{
		font-weight: 500;
		@include shc(36rpx,50rpx)
	}
}
.des{
	@include shc(24rpx,40rpx,#909090)
	box-sizing: border-box;
	overflow: hidden;
	transition: all .5s; 
	.type{
		padding: 0 4rpx;
		margin-top: 30rpx;
		margin-bottom: 16rpx;
	}
	.content{
		padding: 0 16rpx;
		margin-bottom: 10rpx;
	}
}
.fold{
	position: absolute;
	padding: 24rpx 24rpx 26rpx;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	image{
		display: block;
		width: 22rpx;
		height: 18rpx;
	}
}
</style>
