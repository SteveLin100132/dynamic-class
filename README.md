# wistroni40-dynamic-class

# Install

```
npm i wistroni40-dynamic-class --save
```

# Table of Contents

- [Feature](#feature)
- [Usage](#usage)
- [Example](#example)

# Feature

- 提供動態實例類別
- 可自訂類別別名，讓產生實例時，可以透過其他名稱實例對應物件

# Usage

### Dynamic Class Decorator

使用添 `@DynamicClass()` 裝飾器，讓要動態實例的類別被記錄

```typescript
import { DynamicClass } from 'wistroni40-dynamic-class';

@DynamicClass()
export class CustomClass implements Custom {
  constructor(public property: string) {}

  public method() { ... }
}
```

#### @DynamicClass()

該裝飾器提供以下配置

| Paramter | Type                   | Description                |
| -------- | ---------------------- | -------------------------- |
| alias    | string &#124; string[] | 可提供單個或多個類別的別名 |

```typescript
// 單個別名
@DynamicClass({
  alias: 'AliasName'
})
class MyClass {}

// 多個別名
@DynamicClass({
  alias: ['AliasName1', 'AliasName2', ...]
})
class MyClass {}
```

### Dynamic Class Factory

使用 `DynamicClassFactory` 將指定的類別(以 String 給定類別名稱)實例

```typescript
import { DynamicClassFactory } from 'wistroni40-dynamic-class';

const custom = DynamicClassFactory.createInstance<Custom>(
  'CustomClass',
  'custom-property',
);
```

##### createInstance()

| Paramter  | Type   | Description                                  |
| --------- | ------ | -------------------------------------------- |
| classNmae | string | 要實例的類別名稱                             |
| ...args   | any[]  | 實例該類別所需的建構值參數，根據實際數量添加 |

# Example

- [完整範例](https://github.com/SteveLin100132/wistroni40-dynamic-class/blob/master/examples/index.ts)
