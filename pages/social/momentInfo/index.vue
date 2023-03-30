<template>
	<view class="layout layout-grey">
		<News :news="news"></News>
		<view class="title flex-ct">全部评论</view>
		<view class="comment-item" v-for="(comment,ii) in commentList" :key="ii">
			<Comment :comment="comment" />
		</view>
		<view class="no-more" v-show="tips">
			——— 没有更多内容了 ———
		</view>
	</view>
</template>

<script>
	import News from '../../../components/News.vue'
	import Comment from '../../../components/Comment.vue'

	export default {
		components: {
			News,
			Comment
		},
		data() {
			return {
				page: 1,
				pageSize: 10,
				onFetching: false,
				hasNextPage: true,
				tips:false,
				news: {
					avater: '',
					nickName: '王羽佳',
					createTime: '2021-1-3',
					location: '南昌',
					content: '我被录用了~~我会加油努力完成工作的',
					topic: '#诚聘新东方英语教师',
					imgs: ['/static/images/cover1.png', '/static/images/cover2.png'],
					likes: 123,
					comments: 45,
					isLike: false,
					isFold: true,
					tops: [{
						avater: '',
						nickName: '王羽佳',
						createTime: '2021.3.12',
						content: '活到老学到老，风景太美了。景色宜人，四季如春，呼吸新鲜空气，感受大自然风光…'
					}]
				},
				commentList:[
					{
						avater: '',
						nickName: '王羽佳',
						createTime: '2021.3.12',
						content: '活到老学到老，风景太美了。景色宜人，四季如春，呼吸新鲜空气，感受大自然风光…'
					},
					{
						avater: '',
						nickName: '王羽佳',
						createTime: '2021.3.12',
						content: '活到老学到老，风景太美了。景色宜人，四季如春，呼吸新鲜空气，感受大自然风光…'
					},
					{
						avater: '',
						nickName: '王羽佳',
						createTime: '2021.3.12',
						content: '活到老学到老，风景太美了。景色宜人，四季如春，呼吸新鲜空气，感受大自然风光…'
					}
				]
			}
		},

		onLoad(options) {
			
			this.loadMore()
		},
		methods: {
			loadMore() {
				if(this.onFetching) return
				this.onFetching = true
			
				let data = {
					page: this.page,
					pageSize: this.pageSize,
					label: this.label
				}
				// 调用接口
			}
		},
		onReachBottom() {
			if (!this.hasNextPage) {
				this.tips = true
				setTimeout(() => {
					this.tips = false
				}, 2000)
		
				return
			}
			this.loadMore()
		}
	}
</script>

<style lang="scss" scoped>
	.title{
		margin-top: 14rpx;
		height: 118rpx;
		padding-left: 54rpx;
		@include shc(34rpx,48rpx);
		font-weight: 600;
		background-color: #fff;
	}
	.comment-item{
		background-color: #fff;
		border-bottom: 2rpx solid #E2E2E2;
		padding: 6rpx 22rpx 6rpx 32rpx;
		&:last-of-type{
			border-bottom: 0;
		}
	}
</style>
