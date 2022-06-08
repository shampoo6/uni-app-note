<template>
	<view class="cri">
		<!-- 内容 -->
		<view class="content">
			<view class="token"></view>
			<view class="list-container">
				<view v-for="(item,i) in list" :key="i" class="title">{{`${i+1}.${item.name}`}} <text
						class="score">{{item.score}}分</text></view>
			</view>
		</view>

		<image class="cover" mode="scaleToFill" :src="cover"></image>
	</view>
</template>

<script>
	export default {
		name: "rank-item",
		props: {
			cover: {
				type: String,
				default: () => '../../static/rank/rl/r-l-1.png'
			},
			list: {
				type: Array,
				default: () => [{
						name: '肖申克的救赎',
						score: '9.7'
					},
					{
						name: '霸王别姬',
						score: '9.6'
					},
					{
						name: '阿甘正传',
						score: '9.5'
					},
				]
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.cri {
		height: 200rpx;
		display: flex;
		align-items: center;
		position: relative;
	}

	.content {
		display: flex;
		width: 100%;
		height: 160rpx;
		border: 1px solid #e7e7e7;
		border-radius: 8rpx;
	}

	.token {
		width: 200rpx;
		height: 200rpx;
	}

	.list-container {
		padding-left: 32rpx;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.title {
		font-size: 24rpx;
		padding: 4rpx 0;
	}

	.score {
		color: #e5b569;
	}

	.cover {
		width: 200rpx;
		height: 200rpx;
		border-radius: 8rpx;

		position: absolute;
		left: 0;
		right: 0;
	}
</style>
