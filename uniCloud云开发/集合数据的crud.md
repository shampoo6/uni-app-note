# 集合数据的crud

要操作数据库，需要先获取数据库对象和集合对象

```js
// 获取数据库对象
const db = uniCloud.database()
// 获取集合
const students = db.collection('students')
```

## 新增数据

```js
// 参数是要加入数据库的对象，字段必须和数据库声明的字段相同
// 返回值 result 是对象 包含新增文档的 id 值
const result = await students.add({
    name: '张三',
    sex: 'male',
    age: 17
})
```

## 删除数据

```js
// 删除数据通常用数据id进行删除
// 通过 doc 方法指定数据 id
// 通过 remove 方法删除数据
const result = await students.doc('63d72dcbf5cf3a4b6627a4e5').remove()

// 还有一种通过条件删除数据的方法
// 使用 where 添加查询条件
// 以下内容代表删除名字叫 张三 的数据
const result = await students.where({name: '张三'}).remove()
```

## 修改数据

```js
// 通过 doc 指定 id
// 通过 update 指定要修改的数据
const result = await students.doc('63d72fb0e1a35c9969efb857').update({sex: 'other'})
// 或者 也可以通过 where 来指定查询条件
// 以下代码代表将名字叫 张三 的数据的 sex 字段改为 other
const result = await students.where({name: '张三'}).update({sex: 'other'})
```

## 查询数据

查询数据比较复杂，本教程不包含联表查询，若需要联表查询，请参考 [这里](https://uniapp.dcloud.net.cn/uniCloud/jql.html#lookup) 和 [这里](https://uniapp.dcloud.net.cn/uniCloud/schema.html#foreignkey%E5%AD%97%E6%AE%B5%E5%A4%96%E9%94%AE)

最简单的查询就是不加条件查询所有数据，例如

```js
const result = await students.get()
// 可以在get中添加参数来查询一条数据
const result = await students.get({getOne: true})
```

### 条件查询

通常查询数据的时候需要带条件，例如: 查询姓名长度为2个字的、查询人名包含某个字的、查询年龄在某个区间的数据等等

这种时候就需要为查询添加条件

添加查询条件有两种方法

- `where` 方法传入字符串参数
- `where` 方法配合查询指令传入对象参数

#### `where` 方法传入字符串参数

以查询名字叫 `张三` 或 `李四` 的数据为例

```js
// where 的参数字符串是一个会在云端执行的脚本
// 其中 name 代表的是每条记录中的 name 字段，同理 可以使用 sex age 访问每条记录的其他字段
// where 脚本需要是个 bool 表达式，结果为 true 的会被查询出来
db.collection('students').where(`name=='张三'||name=='李四'`).get()
db.collection('students').where(`name in ['张三', '李四']`).get()
```

#### `where` 方法配合查询指令传入对象参数

[查询指令的参考](https://uniapp.dcloud.net.cn/uniCloud/cf-database-dbcmd.html#%E6%9F%A5%E8%AF%A2%E7%AD%9B%E9%80%89%E6%8C%87%E4%BB%A4-query-command)

要进行条件查询，需要使用各种指令，例如 相等判断，大于判断，与或非等等

先获取指令对象

```js
const cmd = db.command
```

然后可以执行以下操作

```js
// 比较运算
db.collection('students').where({
	// 相等
	// name: cmd.eq('张三')
	// 不等于
	// name: cmd.neq('张三')
	// 小于
	// age: cmd.lt(20)
	// 在范围内
	// name: cmd.in(['张三', '李四'])
	// 不在范围内
	name: cmd.nin(['张三', '李四'])
}).get()

// 逻辑运算
// 与
// 查询 20 ~ 30 岁之间的数据
db.collection('students').where(cmd.and([{
	age: cmd.gt(20)
}, {
	age: cmd.lt(30)
}])).get()

// 或
// 查询 小于20 或 大于30 岁之间的数据
db.collection('students').where(cmd.or([{
	age: cmd.lt(20)
}, {
	age: cmd.gt(30)
}])).get()

// 非
// 查询性别不为女的数据
db.collection('students').where({
	sex: cmd.not(cmd.eq('female'))
}).get()

// 都不是
// "都不是"，当给出条件都不满足时，结果为真
// 例如: 查询性别不是男和女的数据
db.collection('students').where(cmd.nor([{
	sex: 'male'
}, {
	sex: 'female'
}])).get()
```

### 查询数量

```js
// 通过 count 查询符合条件的数据数量
db.collection('students').where(cmd.nor([{
	sex: 'male'
}, {
	sex: 'female'
}])).count()
```

### 分页查询

分页查询最重要的数据就是 当前页 `page` 和 每页记录数 `size`

有上述参数后就可以查询分页如下

```js
// 当前页为第二页
const page = 2
// 每页5条数据
const size = 5

db.collection('students')
    // orderBy 排序
    // 第一个参数: 排序字段
    // 第二个参数: 升序还是降序 desc 降序 asc 升序
	.orderBy('updatedAt', 'desc')
    // skip 跳过多少数据
	.skip((page - 1) * size)
    // limit 查询记录数
	.limit(size)
	.get()
```