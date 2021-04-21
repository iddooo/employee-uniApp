<template>
	<view class="layout">
		<view class="s-box">
			<SearchBox v-model="keyword" @input="search" placeholder="搜索城市名">
				<view class="cancel" @click="cancel">取消</view>
			</SearchBox>
		</view>
		<view class="city-list" :style="{height: boxHeight + 'px'}">
			<view v-for=" (item,i) in cityList" :key="i">
				<view :class="['item',{'active':activeIndex == i+'-'+ii }]" v-for="(city,ii) in item.item" :key="ii" @click="onSelect(city)"
				 @touchstart="touchStart(i,ii)" @touchend="touchEnd">
					{{city.name}}
				</view>
			</view>
		</view>
		<view class="no-res" v-if="cityList.length==0 && keyword">
			<image src="../../../static/images/nores.png" mode=""></image>
			<view>没找到相关城市</view>
		</view>
	</view>
</template>

<script>
	import SearchBox from '../../../components/SearchBox.vue'
	import Citys from './citys';
	export default {
		components: {
			SearchBox,
		},
		data() {
			return {
				citys: Citys,
				keyword: undefined,
				cityList: [],
				activeIndex: '',
				boxHeight:0
			}
		},
		onLoad() {},
		methods: {
			cancel() {
				console.log(11);
				uni.switchTab({
					url: '../../tabbar/index/index'
				})
			},
			onSelect(city) {
				uni.setStorageSync('city',city.name)
				uni.switchTab({
					url:'../../tabbar/index/index'
				})
			},
			touchStart(i,ii) {
				this.activeIndex = i + '-' +ii
			},

			touchEnd() {
				this.activeIndex = ''

			},
			/**
			 * 搜索相关逻辑实现
			 */
			search() {
				console.log(this.keyword);
				if(!this.keyword){
					this.cityList = []
					return
				}
				let data = this.citys;
				let newData = [];
				for (let i = 0; i < data.length; i++) {
					let itemArr = [];
					for (let j = 0; j < data[i].item.length; j++) {
						if (data[i].item[j].name.indexOf(this.keyword) > -1) {
							let itemJson = {};
							for (let k in data[i].item[j]) {
								itemJson[k] = data[i].item[j][k];
							}
							itemArr.push(itemJson);
						}
					}
					if (itemArr.length === 0) {
						continue;
					}
					newData.push({
						title: data[i].title,
						type: data[i].type ? data[i].type : "",
						item: itemArr
					})
				}
				
				this.cityList = newData
				this.resetRight(newData);
			},
			resetRight(data) {
				let rightArr = []
				for (let item of data) {
					// console.log(item,item.title);
					if (item.title != '热门城市') {
						rightArr.push(item.title);
					}
				}
				return rightArr
			},
		},
		mounted() {
			this.query = uni.createSelectorQuery().in(this);
			wx.getSystemInfo({
				success:res=>{
					// console.log(res);
					let windowHeight = res.windowHeight
					this.query
						.select('.city-list')
						.boundingClientRect(data => {
							// console.log(data)
							let top = data.top
							this.boxHeight = windowHeight - top
						}).exec()
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.s-box {
		padding: 34rpx 30rpx 38rpx;
		background-color: #fff;

		.cancel {
			font-size: 26rpx;
			
			line-height: 36rpx;
			padding-left: 20rpx;
			padding-right: 6rpx;
		}
	}

	.city-list {
		overflow: scroll;
		.item {
			font-size: 28rpx;
			font-weight: 500;
			
			line-height: 80rpx;
			padding-left: 40rpx;

			&.active {
				background-color: #F2F2F2;
			}
		}
	}

	.no-res {
		font-size: 28rpx;
		color: #909090;
		line-height: 40rpx;
		text-align: center;
		position: absolute;
		top: 140rpx;
		width: 100%;
		image {
			width: 568rpx;
			height: 504rpx;
			display: block;
			margin: 168rpx auto 54rpx;
		}
	}
</style>
