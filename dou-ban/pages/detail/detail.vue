<template>
	<view>
		<web-view v-if="id!==''" :src="`https://movie.douban.com/subject/${id}`"></web-view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			console.log(options);
			this.id = options.id
		},
		data() {
			return {
				id: ''
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
