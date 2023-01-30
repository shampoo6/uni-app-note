module.exports = {
	name: '这是云对象name属性',
	sum(num1, num2) {
		// return num1 + num2
		// 按照规范应该返回如下格式
		return {
			errCode: 0,
			errMsg: '操作成功',
			sum: num1 + num2
		}
	},
	div(num1, num2) {
		return {
			errCode: 0,
			errMsg: '操作成功',
			div: num1 / num2
		}
	}
}
