<template>
	<view class="container">
		<image class="big-img" src="../../static/rank/2020-move-rank.png" mode="widthFix"></image>
		<view class="space"></view>
		<image class="big-img" src="../../static/rank/week-rank.png" mode="widthFix"></image>
		<view class="space"></view>
		<view class="rank-list">
			<view v-for="(item, i) in rankData" :key="i">
				<rank-item v-bind="item"></rank-item>
				<view class="space"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import RankItem from '@/components/rank-item/rank-item.vue'

	let rankData = [{
			cover: '../../static/rank/rl/r-l-1.png',
			list: [{
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
		},
		{
			cover: '../../static/rank/rl/r-l-2.png',
			list: [{
					name: '异物志',
					score: '8.3'
				},
				{
					name: '西起陇西',
					score: '8'
				},
				{
					name: '村里来了个暴走女外科',
					score: '8.3'
				},
			]
		},
		{
			cover: '../../static/rank/rl/r-l-3.png',
			list: [{
					name: '我的解放日志',
					score: '9.2'
				},
				{
					name: '爱，死亡和机器人 第三季',
					score: '8.5'
				},
				{
					name: '风骚律师 第六季',
					score: '9.8'
				},
			]
		},
		{
			cover: '../../static/rank/rl/r-l-4.png',
			list: [{
					name: '哪吒之魔童降世',
					score: '8.4'
				},
				{
					name: '少年的你',
					score: '8.2'
				},
				{
					name: '谁先爱上他的',
					score: '8.6'
				},
			]
		}, 
		{
			cover: '../../static/rank/rl/r-l-5.png',
			list: [{
					name: '何以为家',
					score: '9.1'
				},
				{
					name: '绿皮书',
					score: '8.9'
				},
				{
					name: '小丑',
					score: '8.7'
				},
			]
		},
		{
			cover: '../../static/rank/rl/r-l-6.png',
			list: [{
					name: '爱尔兰人',
					score: '8.8'
				},
				{
					name: '婚姻故事',
					score: '8.6'
				},
				{
					name: '死无对证',
					score: '7.4'
				},
			]
		},
		{
			cover: '../../static/rank/rl/r-l-7.png',
			list: [{
					name: '星际穿越',
					score: '9.4'
				},
				{
					name: '黑客帝国',
					score: '9.1'
				},
				{
					name: '头号玩家',
					score: '8.7'
				},
			]
		},
		{
			cover: '../../static/rank/rl/r-l-8.png',
			list: [{
					name: '三傻大闹宝莱坞',
					score: '9.2'
				},
				{
					name: '大话西游之月光宝盒',
					score: '9'
				},
				{
					name: '两杆大烟枪',
					score: '9.1'
				},
			]
		},
		{
			cover: '../../static/rank/rl/r-l-9.png',
			list: [{
					name: '蝙蝠侠: 黑暗骑士崛起',
					score: '8.8'
				},
				{
					name: '谍影重重3',
					score: '8.8'
				},
				{
					name: '复仇者联盟4: 终局之战',
					score: '8.5'
				},
			]
		},
		{
			cover: '../../static/rank/rl/r-l-10.png',
			list: [{
					name: '泰坦尼克号',
					score: '9.4'
				},
				{
					name: '大话西游之大圣娶亲',
					score: '9.2'
				},
				{
					name: '乱世佳人',
					score: '9.3'
				},
			]
		},
		{
			cover: '../../static/rank/rl/r-l-11.png',
			list: [{
					name: '望江南',
					score: '8'
				},
				{
					name: '莫言的奇奇怪怪故事集',
					score: '8.7'
				},
				{
					name: '科幻精神',
					score: '8.5'
				},
			]
		},
		{
			cover: '../../static/rank/rl/r-l-12.png',
			list: [{
					name: '打开一颗心',
					score: '9.1'
				},
				{
					name: '可能性的艺术',
					score: '9.1'
				},
				{
					name: '乐园之丘',
					score: '8.3'
				},
			]
		},
		{
			cover: '../../static/rank/rl/r-l-13.png',
			list: [{
					name: '红楼梦',
					score: '9.6'
				},
				{
					name: '活着',
					score: '9.4'
				},
				{
					name: '1984',
					score: '9.4'
				},
			]
		},
	]

	export default {
		components: {
			'rank-item': RankItem
		},
		data() {
			return {
				rankData
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.container {
		padding: 32rpx;
		padding-bottom: 0;
	}

	.space {
		height: 32rpx;
	}

	.big-img {
		width: 100%;
	}

	.rank-list {
		/* height: 300px; */
	}
</style>
