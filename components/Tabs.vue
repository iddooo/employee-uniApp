<template>
	<view class="tabs flex-ct">
		<view v-for="(item,i) in tabs" :key="i" @click="change(item)" :class="['tab-item',{'is-active': item.value==value || tabs.length==0}]">
			{{item.label}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			'value':{
				type:[Number,String],
				required:false,
				default:1
			},
			'tabs': {
				type: Array,
				default: () => {
					return [{
							label: "优选兼职",
							value: 1
						},
						{
							label: "高薪就业",
							value: 2
						},
					]
				}
			}
		},
		data() {
			return {
			}
		},
		methods: {
			change(item) {
				this.$emit('input', item.value)
				this.$emit('change',item.value)
			}
		}
	}
</script>

<style lang="scss">
	.tabs {
		padding: 0 36rpx;

	}

	.tab-item {
		padding-top: 14rpx;
		padding-bottom: 6rpx;
		font-size: 26rpx;
		font-weight: 500;
		color: #C3C3C3;
		line-height: 36rpx;
		position: relative;
		margin-right: 40rpx;
		z-index: 2;
	}

	.tab-item.is-active {
		padding: 0;
		font-size: 40rpx;
		font-weight: 600;
		color: #333333;
		line-height: 56rpx;
	}

	.tab-item.is-active::after {
		content: '';
		width: 56rpx;
		height: 56rpx;
		background: rgba(0, 199, 119, 0.3);
		position: absolute;
		top: 2rpx;
		right: 14rpx;
		border-radius: 50%;
	}
</style>
