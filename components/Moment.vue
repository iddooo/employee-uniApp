<template>
	<view class="moment" @click="tapMoment">
		<!-- 动态 -->
		<News :news="moment" 
			@tapTopic="tapTopic" 
			@tapAvater="tapAvater"
			@tapLikes="tapLikes"
			@tapComments="tapComments">
			<!-- 评论 -->
			<view class="comment-box" :style="{'height': itemHeight * items + 'px'}">
				<view class="comment-item" v-for="(comment,ii) in moment.tops" :key="ii">
					<Comment :comment="comment" />
					<view class="line"></view>
				</view>
			</view>
			<!-- 折叠 -->
			<view class="fold flex-ct-ct" v-if="moment.tops.length>1" @click.stop="fold">
				<image v-if="isFold" src="/static/images/fold.png" mode="" />
				<image v-else src="/static/images/unfold.png" mode="" />
			</view>
		</News>
	</view>
</template>

<script>
	import News from './News.vue'
	import Comment from './Comment.vue'
	export default {
		props: {
			moment: {
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
						// isLike: false,
						// isFold: true,
						// tops: [{
						// 		avater: '',
						// 		nickName: '王羽佳',
						// 		createTime: '2021.3.12',
						// 		content: '活到老学到老，风景太美了。景色宜人，四季如春，呼吸新鲜空气，感受大自然风光…'
						// 	},
						// 	{
						// 		avater: '',
						// 		nickName: '王羽佳',
						// 		createTime: '2021.3.12',
						// 		content: '活到老学到老，风景太美了。景色宜人，四季如春，呼吸新鲜空气，感受大自然风光…'
						// 	},
						// 	{
						// 		avater: '',
						// 		nickName: '王羽佳',
						// 		createTime: '2021.3.12',
						// 		content: '活到老学到老，风景太美了。景色宜人，四季如春，呼吸新鲜空气，感受大自然风光…'
						// 	}
						// ]
					}
				}
			}
		},
		components: {
			News,
			Comment
		},
		data() {
			return {
				itemHeight: 0,
				isFold: true,
				items:1,
			}
		},
		methods: {
			fold() {
				this.isFold = !this.isFold
				this.items = this.isFold ? 1 : this.moment.tops.length
			},
			tapMoment(){
				console.log('all 跳转评论内容');
				uni.navigateTo({
					url:'/pages/social/momentInfo/index'
				})
			},
			tapTopic(){
				this.$emit('tapTopic',this.moment)
			},
			tapAvater(){
				this.$emit('tapAvater',this.moment)
			},
			tapLikes(){
				this.$emit('tapLikes',this.moment)
			},
			tapComments(){
				this.$emit('tapComments',this.moment)
			}
		},
		mounted() {
			const query = uni.createSelectorQuery().in(this);
			query.select('.comment-item').boundingClientRect(data => {
				// console.log('comment-item',data.height)
				this.itemHeight = data.height
			}).exec();
			
		}
	}
</script>

<style lang="scss" scoped>
	.comment-box{
		overflow: hidden;
		transition: all .5s;
	}
	.comment-item {
		background: #F8F8F9;
	}
	.line{
		@include wh(100%,20rpx)
		background-color: #fff;
	}
	.fold{
		padding-top: 4rpx;
		padding-bottom: 20rpx;
		margin-bottom: -20rpx;
	}

	.fold image {
		@include wh(22rpx,22rpx)
	}
</style>
