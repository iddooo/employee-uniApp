<template>
	<view class="layout">
		<view class="title">
			选择城市
		</view>
		<view class="s-box">
			<SearchBox disabled @click="toSearchCity" placeholder="搜索城市名/拼音"></SearchBox>
		</view>
		<view class="c-box">
			<CitySelector v-model="location" @onSelect="onSelect"/>
		</view>
	</view>
</template>
<script>
	import CitySelector from './CitySelector.vue'
	import SearchBox from '../../../components/SearchBox.vue'
	
	export default {
		components: {
			CitySelector,
			SearchBox
		},
		data() {
			return {
				location: '南昌',
				query:'',
				boxHeight:0
			}
		},
		onLoad() {
			this.location = uni.getStorageSync('location')
		},
		methods: {
			toSearchCity() {
				uni.navigateTo({
					url: './searchCity'
				})
			},
			onSelect(city) {
				uni.setStorageSync('city',city.name)
				uni.switchTab({
					url:'../../tabbar/index/index'
				})
			},
		},
	}
</script>
<style lang="scss" scoped>
	.title {
		font-size: 50rpx;
		font-weight: 500;
		color: #2F2F2F;
		line-height: 72rpx;
		padding: 54rpx 40rpx 40rpx;
	}

	.s-box {
		width: 658rpx;
		height: 64rpx;
		margin: 0 auto 40rpx;
	}

	.c-box {
		padding-left: 40rpx;
	}
</style>
