<template>
	<view>
		<button @click="showToast">show toast</button>
		<button @click="showLoading">show loading</button>
		<button @click="showModal">show modal</button>
		<button @click="showActionSheet">show action sheet</button>
	</view>
</template>

<script>
	// 交互反馈 https://uniapp.dcloud.io/api/ui/prompt.html

	export default {
		data() {
			return {

			}
		},
		methods: {
			showToast() {
				uni.showToast({
					title: '提示',
					icon: 'success',
					// mask: true,
					duration: 5000
				})
			},
			showLoading() {
				uni.showLoading({
					title: '加载中...',
					mask: false
				})

				setTimeout(() => {
					uni.hideLoading()
				}, 3000)
			},
			showModal() {
				uni.showModal({
					title: '提示',
					content: '这是一个模态弹窗',
					editable: true,
					placeholderText: '请输入内容',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							console.log(res.content);
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			showActionSheet(){
				uni.showActionSheet({
					itemList: ['A', 'B', 'C'],
					success: function (res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			}
		}
	}
</script>

<style>

</style>
