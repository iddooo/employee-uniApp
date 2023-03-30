<template>
	<view class="layout layout-grey">
		<view class="tab-box">
			<Tabs :tabs="tabs" v-model="type" />
		</view>
		<Conversations v-if="type==1" :conversations="conversations"/>

		<SysMsg v-else />

	</view>
</template>

<script>
	import SysMsg from './SysMsg.vue'
	import Conversations from './Conversations.vue'
	import Tabs from '../../../components/Tabs.vue'
	import IMService from "../../../lib/imservice.js";

	export default {
		components: {
			Tabs,
			Conversations,
			SysMsg
		},
		data() {
			return {
				type: 1,
				tabs: [{
						label: "会话消息",
						value: 1
					},
					{
						label: "系统消息",
						value: 2
					}
				],
				unreadTotal: 0,
				conversations: [],
				action: {
					conversation: null,
					show: false,
					toastMessage: '',
					showToast: false
				}
			}
		},
		onShow() {
			// 获取当前用户
			let currentUser = uni.getStorageSync('currentUser');
			// if(!currentUser){
			// 	uni.navigateTo({
			// 		url: "../login/login"
			// 	})
			// 	return;
			// }
			// 获取链接状态
			if (this.im.getStatus() == 'disconnected') {
				//建立连接
				getApp().globalData.imService = new IMService(this.im);
				getApp().globalData.imService.connectIM(currentUser);
			}
			
			uni.showLoading();
			//监听会话列表变化
			this.im.on(this.GoEasyIM.EVENT.CONVERSATIONS_UPDATED, (conversations) => {
				console.log('会话列表变化');
				this.conversations = conversations.conversations || []; //会话列表
				this.unreadTotal = conversations.unreadTotal; //未读消息总数
				this.setUnreadAmount()
			});
			//加载会话列表
			this.im.latestConversations()
				.then(res => {
					console.log('获取会话成功',res);
					let content = res.content;
					this.conversations = content.conversations; //会话列表
					this.unreadTotal = content.unreadTotal; //未读消息总数
					this.setUnreadAmount();
					uni.hideLoading();
				})
				.catch(e => {
					console.log(e);
					uni.hideLoading()
				});
		},
		methods: {
			navigateToChat(conversation) {
				let path = conversation.type === this.GoEasyIM.SCENE.PRIVATE ?
					'../chat/privateChat/privateChat?to=' + conversation.userId :
					'../chat/groupChat/groupChat?to=' + conversation.groupId;
				uni.navigateTo({
					url: path
				})
			},
			showAction(conversation) {
				this.action.conversation = conversation;
				this.action.show = true
			},
			topConversation() {
				let conversation = this.action.conversation;
				let failedDescription = conversation.top ? '取消置顶失败' : '置顶失败';
				let promise;
				uni.showLoading();
				if (conversation.type === this.GoEasyIM.SCENE.PRIVATE) {
					promise = this.im.topPrivateConversation(conversation.userId, !conversation.top)
				} else {
					promise = this.im.topGroupConversation(conversation.groupId, !conversation.top)
				}
				this.afterDoAction(promise, failedDescription)
			},
			removeConversation() {
				uni.showLoading();
				let promise, conversation = this.action.conversation;
				if (conversation.type === this.GoEasyIM.SCENE.PRIVATE) {
					promise = this.im.removePrivateConversation(conversation.userId)

				} else {
					promise = this.im.removeGroupConversation(conversation.groupId)
				}
				this.afterDoAction(promise, '删除失败')
			},
			afterDoAction(promise, failedDescription) {
				promise.then(() => {
					uni.hideLoading()
				}).catch(() => {
					uni.hideLoading();
					this.action.toastMessage = failedDescription;
					this.action.showToast = true;
					setTimeout(() => {
						this.action.showToast = false
					}, 2000)
				});
				this.action.show = false
			},
			setUnreadAmount() {
				// if (this.unreadTotal > 0) {
				// 	uni.setTabBarBadge({
				// 		index: 3,
				// 		text: this.unreadTotal.toString()
				// 	})
				// } else {
				// 	uni.removeTabBarBadge({
				// 		index: 3
				// 	})
				// }
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab-box {
		padding: 34rpx 0 38rpx;
		background-color: #fff;
	}
</style>
