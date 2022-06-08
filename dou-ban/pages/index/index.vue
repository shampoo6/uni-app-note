<template>
	<view>
		<!-- <button @click="getCamera">camera</button> -->
		<!-- <button @click="test3">test3</button> -->
		<navigator style="position: relative;" url="/pages/search/search">
			<uni-search-bar class="search-bar" placeholder="搜索" bgColor="#EEEEEE" />
			<view class="cover"></view>
		</navigator>
		<view class="container">
			<view style="display: none;" class="intro">本项目已包含uni
				ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
			<video-category title="影院热映" type="movie" tag="热门"></video-category>
			<video-category title="豆瓣热门" type="movie" tag="豆瓣高分"></video-category>
			<video-category title="近期热门剧集" type="tv" tag="热门"></video-category>
			<video-category title="近期热门综艺节目" type="tv" tag="综艺"></video-category>
			<video-category title="冷门佳片" type="movie" tag="冷门佳片"></video-category>
			<video-category title="日本动画" type="tv" tag="日本动画"></video-category>
		</view>
	</view>
</template>

<script>
	import netConfig from '@/config/net.config.js'
	
	const mTags = ["热门", "最新", "豆瓣高分", "冷门佳片", "华语", "欧美", "韩国", "日本"]
	const tTags = ["热门", "国产剧", "综艺", "美剧", "日剧", "韩剧", "日本动画", "纪录片"]
	
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
			getCamera(){
				var cmr = plus.camera.getCamera();
				console.log(cmr);
				cmr.captureImage((capturedFile )=>{
					console.log(capturedFile);
				}, (error)=>{
					console.error(error)
				}, {
					crop: {
						width: 600,
						height: 600,
					}
				});
			},
			test() {
				console.log('test');
				uni.request({
					url: `${netConfig.baseUrl}/j/search_tags?type=tv&source=index`,
					method: 'get',
					dataType: 'json',
					success(data) {
						console.log(data);
					},
					fail(reason) {
						console.log(reason);
					}
				})
			},
			test2() {
				uni.request({
					url: `${netConfig.baseUrl}/j/search_subjects?type=tv&tag=热门&page_limit=50&page_start=0`,
					method: 'get',
					dataType: 'json',
					success(data) {
						console.log(data);
					},
					fail(reason) {
						console.log(reason);
					}
				})
			},
			test3() {
				uni.request({
					url: `${netConfig.baseUrl}/j/subject_abstract?subject_id=34966363`,
					method: 'get',
					dataType: 'json',
					success(data) {
						console.log(data);
					},
					fail(reason) {
						console.log(reason);
					}
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		/* padding: 20px;
		font-size: 14px;
		line-height: 24px; */
		padding-bottom: 16px;
	}

	.search-bar {
		background-color: #42bd55;
	}

	.cover {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
