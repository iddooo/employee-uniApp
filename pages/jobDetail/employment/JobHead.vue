<template>
	<view class="data-card">
		<view class="flex-ct-end collection" @click="tapStar">
			<image v-if="data.isCollected" src="../../../static/images/star-color.png" mode=""></image>
			<image v-else src="../../../static/images/star.png" mode=""></image>
		</view>
		<view class="flex-ct-bwt">
			<view class="title">
				{{data.title}}
			</view>
			<view class="flex-btm ftc-green">
				<view class="symbol">
					¥
				</view>
				<view class="price">
					{{data.price}}
				</view>
				<view class="unit">
					元/{{data.type==1 ? data.unit : '月'}}
				</view>
			</view>
		</view>
		<view class="flex-ct box">
			<!-- 就业标签：岗位类型 学历 工作经验 -->
			<view class="lables flex-ct">
				<view class="label">{{data.category}}</view>
				<view class="label">{{data.education}}</view>
				<view class="label">{{data.experience}}</view>
			</view>
		</view>
		<view class="flex-ct-bwt" @click="toPlatformGuarantee">
			<view class="flex-ct">
				<!-- 是否平台担保 -->
				<image v-if="data.isGuaranteed" src="/static/images/danbao.png" mode="" class="grted"></image>
				<view class="company">
					放心投递  兼职无忧
				</view>
			</view>
			<view class="arrow">
				<image src="../../../static/images/right@2x.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			data: {
				type: Object,
				default: () => {
					return {
						// type: 1, //2就业 1兼职
						// title: "游戏ui设计师",
						// price: 5000,
						// unit: '天',
						// category: "简单易做",
						// education: '本科',
						// experience: '1-3年',
						// settlementPeriod: "月结",
						// sex: '女',
						// recruitmentCycle: '长招',
						// isGuaranteed: true,
						// isAuthenticated: true,
						// isDirect: false,
						// companyName: '北京市新东方教育基地',
						// site: '东城区'
					}
				}
			}
		},
		data() {
			return {
			}
		},
		methods:{
			tapStar(){
				this.$emit('tapStar',this.data)
			},
			toPlatformGuarantee(){
				this.$emit('link',this.data)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.data-card {
		padding: 26rpx 40rpx 26rpx 48rpx;
		margin-bottom: 24rpx;
		background-color: #fff;
		position: relative;
	}
	.data-type{
		position: absolute;
		top: 0;
		right: 0;
		width: 84rpx;
		height: 36rpx;
		background: #00C777;
		border-radius: 0px 0px 0px 200rpx;
		font-size: 22rpx;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 36rpx;
		text-align: center;
	}

	.title {
		font-weight: 600;
		@include shc(46rpx,64rpx,#333)
	}

	.ftc-green {
		font-weight: bold;
	}

	.symbol {
		@include shc(26rpx,30rpx,#00C777,'DINAlternate-Bold, DINAlternate')
	}

	.price {
		margin-left: 4rpx;
		@include shc(42rpx,50rpx,#00C777,'DINAlternate-Bold, DINAlternate')
	}

	.unit {
		@include shc(24rpx,34rpx,#00C777,'DINAlternate-Bold, DINAlternate')
	}

	.box {
		padding-top: 20rpx;
		padding-bottom: 32rpx;
	}

	.grted {
		@include wh(110rpx,40rpx);
		margin-right: 18rpx;
	}

	.label {
		@include wh(110rpx,48rpx);
		background: rgba(244, 244, 244, 0.7);
		margin-right: 10rpx;
		text-align: center;
		line-height: 48rpx;
		font-size: 22rpx;
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.shield {
		width: 32rpx;
		height: 32rpx;
		margin-right: 6rpx;
	}

	.company{
		font-size: 22rpx;
		line-height: 32rpx;
	}
	.arrow{
		width: 12rpx;
		height: 24rpx;
		margin-right: 20rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.collection{
		padding-right: 6rpx;
		image{
			width: 34rpx;
			height: 32rpx;
		}
		margin-bottom: 4rpx;
	}
</style>
