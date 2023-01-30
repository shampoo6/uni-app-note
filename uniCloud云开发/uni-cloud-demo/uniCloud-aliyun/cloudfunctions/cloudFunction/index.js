'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)

	//返回数据给客户端
	return {
		errCode: 0,
		errMsg: '操作成功',
		// 此处做了个参数的加法运算
		result: event.num1 + event.num2,
		// 返回云函数上下文
		context
	}
};
