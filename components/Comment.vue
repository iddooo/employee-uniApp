<template>
	<view class="comment">
		<view class="flex-ct mb10">
			<view class="head-pic">
				<image :src="comment.avater" mode=""></image>
			</view>
			<view>
				<view class="name">
					{{comment.nickName}}
				</view>
				<view class="time">
					{{comment.createTime}}
				</view>
			</view>
		</view>
		<view class="content">
			{{comment.content}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			comment: {
				type: Object,
				default: () => {
					return {
						// avater: '',
						// nickName: '王羽佳',
						// createTime: '2021.3.12',
						// content: '活到老学到老，风景太美了。景色宜人，四季如春，呼吸新鲜空气，感受大自然风光…'
					}
				}
			}
		},
		data() {
			return {}
		}
	}
</script>

<style lang="scss" scoped>
	.comment {
		padding: 30rpx 30rpx 30rpx 20rpx;
	}

	.head-pic {
		width: 54rpx;
		height: 54rpx;
		background: #E2E2E2;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 14rpx;
	}

	.head-pic image {
		width: 100%;
		height: 100%;
	}

	.name {
		font-size: 26rpx;
		font-weight: 500;
		color: #2F2F2F;
		line-height: 36rpx;
	}

	.time {
		font-size: 22rpx;
		color: #909090;
		line-height: 32rpx;
	}

	.mb10 {
		margin-bottom: 10rpx;
	}

	.content {
		font-size: 26rpx;
		color: #909090;
		line-height: 36rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		padding-left: 68rpx;
	}
</style>
