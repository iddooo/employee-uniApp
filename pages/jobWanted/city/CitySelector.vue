<template>
	<view class="select-city">
		<view class="index-bg-view">
			<view class="index">
				<!-- <view class="index-item" @click="scrollTo('1')">1</view> -->
				<view class="index-item" v-for="(letter,i) in rightArr" :key="i" @click="scrollTo(letter)">{{ letter }}</view>
			</view>
		</view>
		<scroll-view class="s-view" :style="{height: boxHeight + 'px'}" :scroll-into-view="scrollIntoId" @scroll="scrollChange" :scroll-y="true" :scroll-with-animation="isAnimation">
			<view class="content">
				<view class="section" id="1">
					<view class="city-title">定位城市</view>
					<view class="city-list">
						<view @click="onSelect({name:value})" class="city-item">
							{{ value }}
						</view>
					</view>
				</view>
				<view class="section" :id="item.title" v-for="(item,i) in citys" :key="i">
					<view class="letter">{{ item.title }}</view>
					<view class="city-list">
						<view class="city-item" :class="{ active: current === city.name }" v-for="(city, itemIndex) in item.item" :key="itemIndex"
						 @click="onSelect(city)">
							{{ city.name }}
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	import Citys from './citys';
	
	export default {
		props: {
			value: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				citys: Citys,
				current: this.value,
				isAnimation: true,
				scrollIntoId:'1',
				boxHeight:0,
				rightArr:[]
			};
		},
		mounted() {
			
		},
		created() {
			this.rightArr = this.resetRight(this.citys)
			console.log(this.rightArr);
		},
		beforeDestroy() {
		},
		methods: {
			resetRight(data){
				let rightArr = []
				for (let item of data) {
					// console.log(item,item.title);
					if(item.title != '热门城市'){
						rightArr.push(item.title);
					}
				}
				return rightArr
			},
			scrollChange: function(e) {},

			scrollTo(letter) {
				console.log(letter);
				this.isAnimation = true;
				this.scrollIntoId = letter === '1' ? 'current' : letter;
			},
			onSelect(city) {
				console.log(city);
				this.current = city.name;
				// this.$emit('input', city.name);
				this.$emit('on-select', city);
			},
		},
		mounted() {
			this.query = uni.createSelectorQuery().in(this);
			wx.getSystemInfo({
				success:res=>{
					// console.log(res);
					let windowHeight = res.windowHeight
					this.query
						.select('.s-view')
						.boundingClientRect(data => {
							// console.log(data)
							let top = data.top
							this.boxHeight = windowHeight - top
						}).exec()
				}
			})
		}
	};
</script>

<style lang="scss" scoped>
	.select-city {
		.index-bg-view {
			position: fixed;
			top: 0;
			right: 0rpx;
			z-index: 999;

			height: 100%;
			width: 20rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			.index {
				font-size: 20rpx;
				color: #00C777;
				.index-item {
					width: 20rpx;
					height: 25rpx;
					line-height: 25rpx;
				}
			}
			
		}
		

		.section {
			margin-bottom: 23rpx;

			.city-title,
			.letter {
				font-size: 34rpx;
				font-weight: 500;
				
				line-height: 48rpx;
				margin-bottom: 24rpx;
			}

			.city-list {
				display: flex;
				flex-wrap: wrap;

				.city-item {
					width: 202rpx;
					height: 66rpx;
					background: #FAFBFD;
					margin-right: 24rpx;
					margin-bottom: 24rpx;
					line-height: 66rpx;
					text-align: center;
					font-size: 24rpx;
					
					box-sizing: border-box;
					&.active {
						border: 1px solid #00C777;
						color: #00C777;
						background: rgba(237, 251, 245, .4);
					}
				}
			}
		}
	}
</style>
