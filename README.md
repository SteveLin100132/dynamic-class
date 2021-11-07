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

- 提更動態實例類別

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

使用 `DynamicClassFactory` 將指定的類別(以 String 給定類別名稱)實例

```typescript
import { DynamicClassFactory } from 'wistroni40-dynamic-class';

const custom = DynamicClassFactory.createInstance<Custom>(
  'CustomClass',
  'custom-property',
);
```

| Paramter  | Type   | Description                                  |
| --------- | ------ | -------------------------------------------- |
| classNmae | string | 要實例的類別名稱                             |
| ...args   | any[]  | 實例該類別所需的建構值參數，根據實際數量添加 |

# Example

- [完整範例](https://github.com/SteveLin100132/wistroni40-dynamic-class/blob/master/examples/index.ts)
