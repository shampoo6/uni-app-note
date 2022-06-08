<template>
	<view>
		<!-- title 行 -->
		<view class="title-row">
			<!-- title -->
			<view class="title">{{title}}</view>
			<view class="more">产看更多<text style="font-size: 20px" class="iconfont icon-arrow-right"></text></view>
		</view>
		<!-- 滚动行 -->
		<scroll-view scroll-x="true" :show-scrollbar="true">
			<view class="scroll-container">
				<view v-for="item in listData" class="vedio-container" :key="item.id">
					<video-overview v-bind="item"></video-overview>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import netConfig from '@/config/net.config.js'

	export default {
		name: "video-category",
		props: {
			title: {
				type: String,
				default: () => '分类'
			},
			type: {
				type: String,
				default: () => 'movie'
			},
			tag: {
				type: String,
				default: () => '热门'
			}
		},
		created() {
			uni.request({
				url: `${netConfig.baseUrl}/j/search_subjects?type=${this.type}&tag=${this.tag}&page_limit=50&page_start=0`,
				method: 'get',
				dataType: 'json',
				success: (data) => {
					// console.log(data);
					console.log(data.data.subjects);
					this.listData = data.data.subjects.map(item=>({
						id: item.id,
						cover: item.cover,
						name: item.title,
						rate: item.rate
					}))
				},
				fail(reason) {
					console.log(reason);
				}
			})
		},
		data() {
			return {
				listData: []
			};
		}
	}
</script>

<style scoped>
	.title-row {
		display: flex;
		justify-content: space-between;
	}

	.title-row {
		font-size: 16px;
		padding: 16px;
	}

	.title {
		font-weight: bolder;
	}

	.more {
		color: #42bd55
	}

	.scroll-container {
		padding-left: 16px;
		display: flex;
	}

	.vedio-container {
		padding-right: 16px;
	}
</style>
