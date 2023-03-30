<template>
	<view class="site-map">
		<view class="time">
			<view>【时间类型】：{{data.recruitmentCycle}}</view>
			<view>【时间要求】：{{data.timeDate}}</view>
			<view>【工作时段】：{{data.workTime}}</view>
		</view>
		<view class="map">
			<map id="map" style="width: 100%; height: 100%;" :latitude="data.lat" :longitude="data.lng" :markers="data.markers">
				<cover-view slot="callout">
					<cover-view :marker-id="data.markers[0].id" class="callout">
						<cover-view class="site flex-ct-bwt">
							<cover-view class="address">
								{{data.address}}
							</cover-view>
							<cover-view class="distans">
								距我{{data.distans}}km
							</cover-view>
						</cover-view>
						<cover-view class="detail">
							{{data.addressDetails}}
						</cover-view>
					</cover-view>
				</cover-view>
			</map>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		props: ['data']
	}
</script>

<style lang="scss" scoped>
	.site-map {
		padding: 30rpx 34rpx 46rpx;
		background-color: #fff;
		margin-bottom: 24rpx;

		.time {
			font-size: 24rpx;
			line-height: 40rpx;
		}

		.map {
			margin: 22rpx auto 0;
			width: 610rpx;
			height: 334rpx;
			background: #E2E2E2;
			border-radius: 4rpx;
			overflow: hidden;
		}
	}

	.callout {
		width: 524rpx;
		height: 156rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		box-sizing: border-box;
		padding: 30rpx 30rpx 0 24rpx;

		.site {
			margin-bottom: 16rpx;

			.address {
				font-size: 26rpx;
				font-weight: 500;
				line-height: 36rpx;
			}
			.distans{
				font-size: 22rpx;
				line-height: 32rpx;
				color: #1E1E1E;
			}
		}
		.detail{
			font-size: 22rpx;
			line-height: 32rpx;
			color: #909090;
		}
	}
</style>
