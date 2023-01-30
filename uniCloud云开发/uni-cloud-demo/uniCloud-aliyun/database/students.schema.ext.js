// schema扩展相关文档请参阅：https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html
module.exports = {
	trigger: {
		// 新增数据前
		beforeCreate: async function({
			collection,
			operation,
			addDataList,
			clientInfo
		} = {}) {
			// addDataList 是新增的数据列表
			// 可能是批量增加 所以 addDataList 是数组
			for (let i = 0; i < addDataList.length; i++) {
				const addDataItem = addDataList[i]
				const now = new Date()
				// 添加数据前自动添加以下两个字段的时间值
				addDataItem.createdAt = now
				addDataItem.updatedAt = now
			}
		},
		// 更新数据前
		beforeUpdate: async function({
			collection,
			operation,
			where,
			updateData,
			clientInfo
		} = {}) {
			if (Reflect.ownKeys(updateData).length > 0) {
				// updateData 要更新的数据对象
				updateData.updatedAt = new Date()
			}
		}
	}
}
