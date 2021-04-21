<template>
	<view class="layout layout-grey">
		<view class="head">
			<Tabs v-model="type" :tabs="tabs" />
		</view>
		<view class="container">
			<Moment :moment="moment" v-for="(moment,i) in newsList" :key="i"
			 @tapMoment="toMomentInfo"
			 @tapTopic="toJobDetail" 
			 @tapAvater="toHomePage"
			 @tapLikes="handlerLike"
			 @tapComments="handlerAddComment"></Moment>
		</view>
		
		<image class="pbls" src="../../../static/images/add.png" mode="" @click="toPublish"></image>
	</view>
</template>

<script>
	import Tabs from '../../../components/Tabs.vue'
	import Moment from '../../../components/Moment.vue'

	export default {
		data() {
			return {
				type: 0,
				tabs: [{
						label: "青合社区",
						value: "0"
					},
					{
						label: "我的动态",
						value: "1"
					}
				],
				newsList: [{
					id:1,
					type:1, //1个人
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
					isFold:true,
					tops: [{
							avater: '',
							nickName: '王羽佳',
							createTime: '2021.3.12',
							content: '活到老学到老，风景太美了。景色宜人，四季如春，呼吸新鲜空气，感受大自然风光…'
						}
					]
				},{
					id:2,
					type:2,//企业
					avater: '',
					nickName: '王羽佳',
					createTime: '2021-1-3',
					location: '南昌',
					content: '这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式，这里是显示折叠后的样式。',
					topic: null,
					imgs: ['/static/images/cover1.png', '/static/images/cover2.png'],
					likes: 123,
					comments: 45,
					isLike: false,
					isFold:true,
					tops: [{
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
				}],
				auto:100,
			}
		},
		components: {
			Tabs,
			Moment
		},
		onLoad() {

		},
		methods: {
			toMomentInfo(moment){
				console.log('toMomentInfo',moment)
			},
			toJobDetail(moment){
				console.log('toJobDetail',moment)
			},
			toHomePage(moment){
				console.log('toHomePage',moment)
				uni.navigateTo({
					url:'../../social/homepage/index?moment=' + JSON.stringify(moment)
				})
			},
			handlerLike(moment){
				console.log('handlerLike',moment)
			},
			handlerAddComment(moment){
				console.log('handlerAddComment',moment)
			},
			toPublish(){
				uni.navigateTo({
					url:'../../social/publish/index'
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.head {
		padding: 40rpx;
		background-color: #fff;
	}

	.container {
		padding: 24rpx;
	}
	.pbls{
		position: fixed;
		right: 52rpx;
		bottom: 210rpx;
		width: 152rpx;
		height: 152rpx;
	}
	
</style>
