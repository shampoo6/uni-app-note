<template>
	<navigator class="container" :url="`/pages/detail/detail?id=${id}`">
		<!-- #ifdef H5 -->
		<view class="cover" style="height: 250px;background-color: #0f0;"></view>
		<!-- #endif -->
		<!-- #ifdef APP -->
		<img class="cover" :src="cover" />
		<!-- #endif -->

		<view class="name">{{name}}</view>

		<!-- 评分 -->
		<view v-if="rate!==''" class="rate-row">
			<uni-rate :size="12" :allowHalf="true" :readonly="true" :value="rateValue" activeColor="#ffac2c"/>
			<view>{{rate}}</view>
		</view>
		
		<view v-if="rate===''" class="rate-row"><view>暂无评分</view></view>
	</navigator>
</template>

<script>
	export default {
		name: "video-overview",
		props: {
			id: {
				type: String,
				required: true
			},
			// 封面图url
			cover: {
				type: String,
				default: () => 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2356015154.webp'
			},
			name: {
				type: String,
				default: () => '海底总动员6666666666'
			},
			rate: {
				type: String,
				default: () => '4.7'
			}
		},
		computed: {
			rateValue() {
				return 5 * Number(this.rate) * 0.1
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.container {
		width:  80px;
	}

	.cover {
		width: 100%;
		height: 110px;
		border-radius: 5px;
	}

	.name {
		font-size: 16px;
		font-weight: bolder;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 4px 0;
	}

	.rate-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.rate-row>view {
		font-size: 10px;
		color: #7e7e7e;
	}
</style>
