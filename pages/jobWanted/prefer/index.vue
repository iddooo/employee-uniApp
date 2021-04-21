<template>
	<view class="layout">
		<Title title="结算周期" subtitle="（可多选）"></Title>
		<view class="flex-ct-wrap">
			<view :class="['item item1',{active:calCicle.includes(item.value)}]" v-for="(item,i) in settlementPeriod" :key="i" @click="handlerCalCicle(item)">
				{{item.name}}
			</view>
		</view>
		<Title title="岗位类型" subtitle="（多选，最多8个）"></Title>
		<view class="flex-ct-wrap">
			<view :class="['item item2',{active:partType.includes(i)}]" v-for="(item,i) in category" :key="i" v-if="item" @click="handlerPartType(i)">
				{{item}}
			</view>
		</view>
		<Title title="工作区域" subtitle="（可多选）"></Title>
		<view class="flex-ct-wrap">
			<view :class="['item item1',{active:workArea.includes(item)}]" v-for="(item,i) in country" :key="i" @click="handlerWorkArea(item)">
				{{item}}
			</view>
		</view>
		<Title title="兼职标签" subtitle="（多选）"></Title>
		<view class="flex-ct-wrap">
			<view :class="['item item4',{active:jLabel.includes(i)}]" v-for="(item,i) in directional" :key="i" v-if="item" @click="handlerJLabel(i)">
				{{item}}
			</view>
		</view>

		<view class="flex-ct-bwt btn-box">
			<view class="reset flex-ct-ct" @click="reset">
				重置
			</view>
			<view class="cfm flex-ct-ct" @click="confirm">
				确定
			</view>
		</view>
	</view>
</template>

<script>
	import regions from './regions.js'
	var regionObj = {},
		regionList = []
	regions.forEach(p => {
		let citys = p.mallCityList
		citys.forEach(c => {
			let areas = c.mallAreaList
			regionObj[c.cityName] = []
			areas.forEach(a => {
				regionObj[c.cityName].push(a.areaName)
			})
		})
	})
	regionList = Object.keys(regionObj)

	import Title from './Title.vue'

	export default {
		components: {
			Title
		},
		data() {
			return {
				title: 'Hello',
				// 结算周期
				// 1-完工结 2-日结 3-周结 4-月结'
				settlementPeriod: [{
						name: '不限',
						value: "不限",
					},
					{
						name: '日结',
						value: "2",
					},
					{
						name: '周结',
						value: "3",
					},
					{
						name: '月结',
						value: "4",
					},
					{
						name: '完工结',
						value: "1",
					},
				],
				// 岗位类型 (兼职类型)
				// 1-市场推广 2-餐饮服务 3-店员导购 4-才艺技能 5-物流仓储 6-展会演出 7-家教培训 8-客服话务 9-文员助理 10-其他类型
				category: ['', '市场推广', '餐饮服务', '店员导购', '才艺技能', '物流仓储', '展会演出', '家教培训', '客服话务', '文员助理', '其他类型'],
				// 工作区域
				country: [],
				// 兼职标签
				// 1-宅家赚钱 2-快找急聘 3-优先上岗 4-品牌直销 5-简单易做'
				directional: ['', '宅家赚钱', '快找急聘', '优先上岗', '品牌直销', '简单易做'],
				calCicle:[],//结算周期 [1,2,3]
				partType:[],//兼职类型 [1,2,3]
				workArea:[],//工作区域 ['xxx','xxx']
				jLabel:[],//兼职标签 [1,2,3]
			}
		},
		onLoad() {
			let city = uni.getStorageSync('city')
			regionList.filter(r => {
				if (r.indexOf(city) > -1) {
					this.country = regionObj[r]
					return
				}
			})
			this.country.unshift('不限')
		},
		methods: {
			// 结算周期（多选）[1,2,3]
			handlerCalCicle(item){
				// 不限
				if(!item.value){
					this.calCicle = ['不限']
					return
				}
				// 互斥
				let aIndex = this.calCicle.indexOf('不限')
				aIndex!=-1 ? this.calCicle.splice(aIndex,1) : ''
				
				let index = this.calCicle.indexOf(item.value)
				if(index!=-1){
					this.calCicle.splice(index,1)
				}else{
					this.calCicle.push(item.value)
				}
			},
			// 兼职类型 （多选，最多8个） [1,2,3]
			handlerPartType(i){
				let index = this.partType.indexOf(i)
				if(index!=-1){
					this.partType.splice(index,1)
				}else{
					let length = this.partType.length
					length < 8 ? this.partType.push(i) :''
				}
			},
			// 工作区域 （多选）['xxx','xxx']
			handlerWorkArea(item){
				if(item=='不限'){
					this.workArea = ['不限']
					return
				}
				let aIndex = this.workArea.indexOf('不限')
				aIndex!=-1 ? this.workArea.splice(aIndex,1) : ''
				
				let index = this.workArea.indexOf(item)
				if(index!=-1){
					this.workArea.splice(index,1)
				}else{
					this.workArea.push(item)
				}
			},
			// 兼职标签 （多选）[1,2,3]
			handlerJLabel(i){
				let index = this.jLabel.indexOf(i)
				if(index!=-1){
					this.jLabel.splice(index,1)
				}else{
					this.jLabel.push(i)
				}
			},
			reset(){
				this.calCicle = []
				this.partType = []
				this.workArea = []
				this.jLabel = []
			},
			confirm(){
				console.log('结算周期',this.calCicle);
				console.log('兼职类型',this.partType);
				console.log('工作区域',this.workArea);
				console.log('兼职标签',this.jLabel);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.layout {
		padding-left: 40rpx;
		padding-bottom: 30rpx;
	}
	.item1 {
		width: 110rpx;
		margin-right: 30rpx;
	}

	.item2 {
		width: 324rpx;
		margin-right: 22rpx;
	}

	.item4 {
		width: 206rpx;
		margin-right: 26rpx;
	}
	.item {
		background: #F5F6FA;
		border-radius: 4rpx;
		font-size: 26rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 72rpx;
		margin-bottom: 22rpx;
		box-sizing: border-box;
		transition: all .3s;
		&.active {
			background: rgba(242, 252, 248, .4);
			border: 1px solid #00C777;
			color: #00C777;
		}
	}

	.btn-box {
		margin-top: 52rpx;
		font-size: 32rpx;
		padding-right: 40rpx;
	}

	.reset {
		width: 242rpx;
		height: 80rpx;
		background: #F8F8FB;
		border-radius: 4rpx;
	}

	.cfm {
		width: 408rpx;
		height: 80rpx;
		background: #00C777;
		border-radius: 4px;
		color: #fff;
	}
</style>
