# 10 个实用的 JavaScript 技巧

分享一些日常开发中非常实用的 JavaScript 技巧。

## 1. 解构赋值简化代码

```javascript
// Before
const name = user.name;
const age = user.age;

// After
const { name, age } = user;
```

## 2. 模板字符串

```javascript
const msg = `Hello, ${name}! You have ${count} new messages.`;
```

## 3. 可选链操作符

```javascript
// 安全访问深层嵌套属性
const city = user?.address?.city ?? 'Unknown';
```

## 4. 数组去重

```javascript
const unique = [...new Set([1, 2, 2, 3, 3, 4])];
// [1, 2, 3, 4]
```

## 5. 短路求值

```javascript
// 设置默认值
const name = input || 'Anonymous';

// 条件执行
isReady && doSomething();
```

## 6. 对象简写

```javascript
const name = 'Alice', age = 25;
const user = { name, age }; // { name: 'Alice', age: 25 }
```

## 7. Promise.all 并发请求

```javascript
const [users, posts] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json())
]);
```

## 8. 数组方法链式调用

```javascript
const total = items
  .filter(item => item.active)
  .map(item => item.price)
  .reduce((sum, price) => sum + price, 0);
```

## 9. 动态属性名

```javascript
const key = 'status';
const obj = { [key]: 'active' }; // { status: 'active' }
```

## 10. Nullish 合并运算符

```javascript
// ?? 只对 null/undefined 生效，区别于 ||
const count = data.count ?? 0;
```

---

掌握这些小技巧，可以让你的代码更加**简洁优雅**。记得在合适的场景使用它们！
