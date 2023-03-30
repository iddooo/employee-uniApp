<template>
	<view class="job-card" @click="toJobDetail">
		<slot>
			<view class="job-type" :style="{backgroundColor:job.type==1 ? '#0091FF' : '#00C777'}">
				{{job.type==1 ? '兼职' : '就业' }}
			</view>
		</slot>
		<view class="flex-ct-bwt">
			<view class="title">
				{{job.title}}
			</view>
			<view class="flex-btm ftc-green">
				<view class="symbol">
					¥
				</view>
				<view class="price">
					{{job.price}}
				</view>
				<view class="unit">
					元/{{job.type==1 ? job.unit : '月'}}
				</view>
			</view>
		</view>
		<view class="flex-ct box">
			<!-- 是否平台担保 -->
			<image v-if="job.isGuaranteed" src="/static/images/danbao.png" mode="" class="grted"></image>
			<!-- 就业标签：岗位类型 学历 工作经验 -->
			<view class="lables flex-ct" v-if="job.type==2">
				<view class="label">{{job.category}}</view>
				<view class="label">{{job.education}}</view>
				<view class="label">{{job.experience}}</view>
			</view>
			<!-- 兼职标签：岗位类型 结算周期(日结/完工结/周结/月结) 性别要求 工作时间(长招显示/短招不显示)-->
			<view class="lables flex-ct"  v-if="job.type==1">
				<view class="label">{{job.category}}</view>
				<view class="label">{{job.settlementPeriod}}</view>
				<view class="label">{{job.sex}}</view>
				<view class="label">{{job.recruitmentCycle==='长招' ? '长招' : ''}}</view>
			</view>
		</view>
		<view class="flex-ct-bwt">
			<view class="flex-ct">
				<!-- 是否认证 -->
				<image v-if="job.isAuthenticated" src="/static/images/shield.png" mode="" class="shield"></image>
				<!-- 是否直聘 -->
				<image v-if="job.isDirect" src="/static/images/direct.png" mode="" class="direct"></image>
				<view class="company">
					{{job.companyName}}
				</view>
			</view>
			<view class="company site">
				{{job.site}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			job: {
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
			toJobDetail(){
				console.log('all跳转岗位详情',this.job.type);
				// 1兼职 2就业
				if(this.job.type==1){
					uni.navigateTo({
						url:'/pages/jobDetail/partTimeJob/index',
						success:(res)=>{
							
						},
						fail:(err)=>{
							console.log(err);
						}
					})
				}else{
					uni.navigateTo({
						url:'/pages/jobDetail/employment/index'
					})
				}
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	.job-card {
		padding: 42rpx 36rpx 30rpx;
		margin-bottom: 20rpx;
		background-color: #fff;
		position: relative;
	}
	.job-type{
		position: absolute;
		top: 0;
		right: 0;
		@include wh(84rpx,36rpx)
		@include shc(22rpx,36rpx,#FFFFFF)
		background: #00C777;
		border-radius: 0px 0px 0px 200rpx;
		font-weight: 500;
		text-align: center;
	}

	.title {
		font-weight: 600;
		@include shc(34rpx,48rpx,#333333)
	}

	.ftc-green {
		color: #00C777;
		font-family: DINAlternate-Bold, DINAlternate;
	}

	.symbol {
		font-size: 22rpx;
		font-weight: bold;
	}

	.price {
		font-size: 34rpx;
		margin: 0 2rpx 0 4rpx;
		font-weight: bold;
	}

	.unit {
		font-size: 16rpx;
	}

	.box {
		padding-top: 20rpx;
		padding-bottom: 30rpx;
	}

	.grted {
		width: 110rpx;
		height: 40rpx;
		margin-right: 28rpx;
	}

	.label {
		width: 110rpx;
		height: 40rpx;
		background: rgba(244, 244, 244, 0.7);
		margin-right: 10rpx;
		text-align: center;
		line-height: 40rpx;
		font-size: 22rpx;
		font-weight: 500;
		color: #1E1E1E;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.shield {
		width: 32rpx;
		height: 32rpx;
		margin-right: 6rpx;
	}

	.direct {
		width: 32rpx;
		height: 30rpx;
		margin-right: 6rpx;
	}

	.company {
		font-size: 22rpx;
		
		line-height: 32rpx;
	}

	.site {
		color: #909090;
	}
</style>
