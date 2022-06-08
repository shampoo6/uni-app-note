<template>
	<view>
		<uni-search-bar v-if="!isSearch" class="search-bar" placeholder="搜索" bgColor="#EEEEEE" @confirm="onConfirm" />
		<web-view v-if="isSearch"
			:src="`https://m.douban.com/search/?query=${query}`">
		</web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSearch: false,
				query: ''
			}
		},
		created() {
			uni.request({
				url: `https://search.douban.com/movie/subject_search?search_text=%E6%88%91%E7%9A%84&cat=1002`,
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
		methods: {
			onConfirm(e) {
				console.log('confirm');
				console.log(e.value);
				this.query = e.value
				this.isSearch = true
			}
		}
	}
</script>

<style scoped>
	.search-bar {
		background-color: #42bd55;
	}
</style>
