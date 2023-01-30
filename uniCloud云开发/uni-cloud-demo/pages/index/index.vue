<template>
	<view>
		<!-- <button @click="callCO">调用云对象</button>
		<button @click="callCoFunction">调用云函数</button>
		<button @click="createOp">create</button>
		<button @click="deleteOp">delete</button>
		<button @click="updateOp">update</button>
		<button @click="readOp">read</button>
		<image :src="img" mode="widthFix" style="width: 100%"></image>
		<button @click="upload">上传图片</button> -->
		<button @click="getCaptcha">获取验证码</button>
		<image :src="captchaImg" mode="widthFix" style="width: 100%"></image>
		<input type="text" v-model="captcha">
		<button @click="registry">注册</button>
		<button @click="logout">登出</button>
		<button @click="login">登录</button>
		<view>{{isLogin? nickname: '未登录'}}</view>
		<navigator url="/uni_modules/uni-id-pages/pages/userinfo/userinfo">
			<button>查看个人资料</button>
		</navigator>
	</view>
</template>

<script>
	const db = uniCloud.database()
	const students = db.collection('students')
	const cmd = db.command
	const uniIdCo = uniCloud.importObject('uni-id-co')

	export default {
		data() {
			return {
				img: '',
				captchaImg: '',
				captcha: '',
				isLogin: false,
				nickname: ''
			}
		},
		onShow() {
			this.getUserInfo()
		},
		methods: {
			async callCO() {
				const co = uniCloud.importObject('cloudObject')
				console.log(await co.sum(1, 2))
				console.log(await co.div(1, 2))
			},
			async callCoFunction() {
				// 调用方法
				// 方法一: 通过 await 调用并获取返回值
				// const result = await uniCloud.callFunction({
				// 	name: 'cloudFunction',
				// 	data: {
				// 		num1: 3,
				// 		num2: 5
				// 	}
				// })
				// console.log(result);
				// 方法二: 通过 success 回调函数获取返回值
				uniCloud.callFunction({
					name: 'cloudFunction',
					data: {
						num1: 3,
						num2: 5
					},
					success: (result) => {
						console.log(result);
					}
				})
			},
			async createOp() {
				const result = await students.add({
					name: '张三',
					sex: 'male',
					age: 17
				})
				console.log(result);
			},
			async deleteOp() {
				// const result = await students.doc('63d72dcbf5cf3a4b6627a4e5').remove()
				const result = await students.where({
					name: '张三'
				}).remove()
				console.log(result);
			},
			async updateOp() {
				// const result = await students.doc('63d72fb0e1a35c9969efb857').update({sex: 'other'})
				const result = await students.where({
					name: '张三'
				}).update({
					sex: 'other'
				})
				console.log(result);
			},
			async readOp() {
				const result = await students.get()
				// const result = await students.where(`name.length==2`).get()
				console.log(result);
			},
			async upload() {
				// let result = await uni.chooseImage()
				// console.log(result);
				// this.img = result.tempFilePaths[0]
				// const filename = this.img.match(/(?<=\/)[^\/]*$/)[0]
				// console.log(filename);
				// result = await uniCloud.uploadFile({
				// 	filePath: this.img,
				// 	cloudPath: `demo/${filename}`,
				// 	onUploadProgress: (event) => {
				// 		console.log(event);
				// 	}
				// })
				// console.log(result);
				// console.log(result.fileID);
				let result = await uniCloud.chooseAndUploadFile({
					type: 'image'
				})
				console.log(result);
			},
			async getCaptcha() {
				const result = await uniIdCo.createCaptcha({
					scene: 'register'
				})
				this.captchaImg = result.captchaBase64
			},
			async registry() {
				const result = await uniIdCo.registerUser({
					// 用户名
					username: 'abc',
					// 密码
					password: 'a11111111',
					// 图形验证码
					captcha: this.captcha,
					// 昵称
					nickname: '张三'
				})
				console.log(result);
				uni.setStorageSync('uni_id_token', result.newToken.token)
				uni.setStorageSync('uni_id_token_expired', result.newToken.tokenExpired)
			},
			async logout() {
				const result = await uniIdCo.logout()
				console.log(result);
				if (result.errCode === 0) {
					uni.removeStorageSync('uni_id_token')
					uni.removeStorageSync('uni_id_token_expired')
					this.isLogin = false
				}
			},
			async login() {
				const result = await uniIdCo.login({
					// 用户名
					username: 'abc',
					// 密码
					password: 'a11111111',
					// 验证码非必填
					// captcha
				})
				uni.setStorageSync('uni_id_token', result.newToken.token)
				uni.setStorageSync('uni_id_token_expired', result.newToken.tokenExpired)
				await this.getUserInfo()
			},
			async getUserInfo() {
				const info = uniCloud.getCurrentUserInfo()
				console.log(info);
				if (info.uid !== null) {
					this.isLogin = true
					// 查询用户名
					db.collection('uni-id-users').doc(info.uid).field('nickname').get({
						getOne: true
					}).then(result => {
						console.log(result);
						this.nickname = result.result.data.nickname
					}).catch(reason => {
						console.log(reason);
					})
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
