<template>
	<view class="banner">
		<view class="swiper-container">
			<swiper class="swiper" 
				:indicator-dots="options.indicatorDots" 
				:autoplay="options.autoplay" 
				interval="2000"
				@change="swiperChange">
				<swiper-item v-for="(v,i) in banners" :key="v.id" @click="tapItem(i)">
					<image class="banner-img" :src="v.imgUrl" mode="scaleToFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 自定义小圆点 -->
		<slot>
			<view class="dots">
				<view v-for="(v,i) in banners" :key="i" :class="{dot:true,'is-active':currentIndex==i}"></view>
			</view>
		</slot>
	</view>
	
</template>

<script>
	export default{
		data(){
			return {
				currentIndex:0,
			}
		},
		props:{
			banners:{
				type:Array,
				default:()=>{
					return []
				},
				required:true
			},
			options:{
				type:Object,
				required:false,
				default:()=>{
					return {
						indicatorDots:false,
						autoplay:true,
					}
				}
			}
		},
		methods:{
			swiperChange(e){
				this.currentIndex = e.detail.current
				this.$emit('change',this.currentIndex)
			},
			tapItem(i){
				this.$emit('click',i)
			}
		}
	}
</script>

<style>
	.banner{
		padding:48rpx 36rpx 24rpx;
		position: relative;
	}
	.swiper-container{
		height: 306rpx;
		border-radius: 16rpx;
		overflow: hidden;
		transform: translateY(0);
	}
	.swiper{
		height: 100%;
	}
	.banner-img{
		width: 100%;
		height: 100%;
	}
	.dots{
		position: absolute;
		left: 50%;
		bottom: 48rpx;
		transform: translateX(-50%);
		display: flex;
		z-index: 1;
	}
	.dot{
		width:10rpx;
		height:10rpx;
		border-radius: 5rpx;
		background: #fff;
		opacity:0.42;
		margin-right: 14rpx;
	}
	.dot:last-of-type{
		margin-right: 0;
	}
	.dot.is-active{
		opacity:1;
		width: 24rpx;
	}
	
</style>