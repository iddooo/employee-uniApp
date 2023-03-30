<template>
	<view class="news-card">
		<!-- 头像和位置 -->
		<view class="flex-ct-bwt mb24">
			<view class="flex-ct">
				<view class="head-pic" @click.stop="toHomePage">
					<image :src="news.avater" mode=""></image>
				</view>
				<view>
					<view class="name">
						{{news.nickName}}
					</view>
					<view class="time">
						{{news.createTime}}
					</view>
				</view>
			</view>
			<view class="site flex-ct">
				<image src="../static/images/loc.png" mode=""></image>
				<text>{{news.location}}</text>
			</view>
		</view>
		<!-- 内容 -->
		<view class="content-box mb24" @click.stop="fold">
			<view :class="['content',{'unfold':!isFold}]">
				{{news.content}}
			</view>
			<!-- 超过2行显示 -->
			<view class="fold" v-show="exceed">
				<!-- 折叠时 -->
				<view v-if="isFold">
					<text>...</text>
					<image src="../static/images/fold.png" mode=""></image>
				</view>
				<!-- 展开时 -->
				<image v-else src="../static/images/unfold.png" mode=""></image>
			</view>
		</view>
		<!-- 超话 -->
		<view class="topic" @click.stop="toJobDetail" v-if="news.topic">
			<image src="../static/images/topic.png" mode=""></image>
			<view>{{news.topic}}</view>
		</view>
		<!-- 图片 -->
		<view class="imgs flex-ct">
			<image v-for="(item,i) in news.imgs" :key="i" :src="item" mode=""></image>
		</view>
		<!-- 互动 -->
		<view class="interact flex-ct-end">
			<view class="r-item flex-ct" @click.stop="handlerLike">
				<image v-if="news.isLike" src="../static/images/hearting.png" mode=""></image>
				<image v-else src="../static/images/hearts.png" mode=""></image>
				<text>{{news.likes}}</text>
			</view>
			<view class="r-item flex-ct" @click.stop="handlerAddComment">
				<image src="../static/images/message.png" mode=""></image>
				<text>{{news.comments}}</text>
			</view>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			'news': {
				type: Object,
				default: () => {
					return {
						// avater: '',
						// nickName: '王羽佳',
						// createTime: '2021-1-3',
						// location: '南昌',
						// content: '发布了新的岗位，小伙伴们踊跃报名呀',
						// topic: '#诚聘新东方英语教师',
						// imgs: ['../static/images/cover1.png', '../static/images/cover2.png'],
						// likes: 123,
						// comments: 45,
						// isLike:false,
					}
				}
			}
		},
		data() {
			return {
				isFold: true,
				exceed: false,
			}
		},
		methods: {
			fold() {
				if(!this.exceed) return
				this.isFold = !this.isFold
			},
			handlerLike() {
				console.log('喜欢')
				this.news.isLike = true
				this.$emit('tapLikes', this.news)
			},
			handlerAddComment() {
				console.log('all 评论')
				this.$emit('tapComments', this.news)
			},
			send(){
				
			},
			toJobDetail() {
				// 跳转岗位详情
				this.$emit('tapTopic', this.news)
			},
			toHomePage() {
				this.$emit('tapAvater', this.news)
			}
		},
		mounted() {
			let lineHeight = 40
			uni.getSystemInfo({
				success: (res) => {
					// console.log(res);//设备像素比 
					let screenWidth = res.screenWidth // 414
					let lh = screenWidth / 750 * 40
					const query = uni.createSelectorQuery().in(this);
					query.select('.content').boundingClientRect(data => {
						// console.log(lh, data.height)
						let contentHeight = data.height
						this.exceed = contentHeight / lh > 1 ? true : false
					}).exec();
				}
			});
		},

	}
</script>

<style lang="scss" scoped>
	.news-card {
		padding: 30rpx;
		background-color: #fff;
	}

	.head-pic {
		width: 72rpx;
		height: 72rpx;
		background: #E2E2E2;
		border-radius: 50%;
		margin-right: 16rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.name {
		font-size: 28rpx;
		font-weight: 500;

		line-height: 40rpx;
	}

	.time {
		font-size: 20rpx;
		color: #909090;
		line-height: 28rpx;
		margin-top: 4rpx;
	}

	.site {
		font-size: 26rpx;
		font-weight: 500;

		line-height: 36rpx;
	}

	.site image {
		width: 26rpx;
		height: 30rpx;
		margin-right: 6rpx;
	}

	.mb24 {
		margin-bottom: 24rpx;
	}

	.content-box {
		position: relative;
		font-size: 28rpx;

		line-height: 40rpx;
	}

	.content {
		@include elips(2)
	}

	.content.unfold {
		overflow: auto;
		display: block;
	}

	.fold {
		position: absolute;
		right: 2rpx;
		bottom: 0;
		background-color: #fff;
		// background: linear-gradient(left, rgba(255,255,255,.5), rgba(255,255,255,1));
	}

	.fold image {
		margin-left: 44rpx;
		margin-right: 22rpx;
		width: 22rpx;
		height: 22rpx;
	}

	.topic {
		padding: 10rpx 20rpx 10rpx 66rpx;
		font-size: 26rpx;
		color: #0091FF;
		line-height: 36rpx;
		background: #F4F7F9;
		border-radius: 200rpx 200rpx 200rpx 0px;
		position: relative;
		display: inline-block;
	}

	.topic image {
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		left: 20rpx;
		top: 16rpx;
	}

	.imgs {
		padding-top: 16rpx;
		padding-bottom: 20rpx;
	}

	.imgs image {
		width: 206rpx;
		height: 206rpx;
		background: #E2E2E2;
		border-radius: 10rpx;
		margin-right: 12rpx;
	}

	.interact {
		padding-top: 40rpx;
		padding-bottom: 10rpx;
	}

	.r-item {
		font-size: 26rpx;
		color: #909090;
		line-height: 36rpx;
		margin-left: 50rpx;
	}

	.r-item image {
		width: 40rpx;
		height: 36rpx;
		margin-right: 10rpx;
	}

	.r-item text {
		min-width: 64rpx;
	}
</style>
