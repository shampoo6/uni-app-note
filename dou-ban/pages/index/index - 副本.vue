<template>
	<view class="container">
		
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
		<button @click="test">click</button>
		<button @click="test2">click2</button>
		<button @click="test3">click3</button>
		<button @click="test3">click3</button>
		<button @click="test3">click3</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
			test(){
				uni.request({
					url: 'http://192.168.0.128:1024/j/search_tags?type=movie&source=index',
					method: 'get',
					dataType: 'json',
					success(data) {
						console.log(data);
					},
					fail(reason){
						console.log(reason);
					}
				})
			},
			test2(){
				uni.request({
					url: 'http://192.168.0.128:1024/j/search_subjects?type=tv&tag=热门&page_limit=50&page_start=0',
					method: 'get',
					dataType: 'json',
					success(data) {
						console.log(data);
					},
					fail(reason){
						console.log(reason);
					}
				})
			},
			test3(){
				uni.request({
					url: 'http://192.168.0.128:1024/j/subject_abstract?subject_id=34966363',
					method: 'get',
					dataType: 'json',
					success(data) {
						console.log(data);
					},
					fail(reason){
						console.log(reason);
					}
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
