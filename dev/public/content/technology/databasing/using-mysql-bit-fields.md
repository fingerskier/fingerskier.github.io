# Using MySQL Bit Fields


It is generally accepted that we should __not__ use the BIT type for boolean values.
But, if you find yourself in such a situation...and are using Node.js;
You can implement a general type-cast using the `mysql` & `mysql2` modules:


```js
  typeCast: function castBitFields(field, useDefaultTypeCasting) {
    if ((field.type === 'BIT') && (field.length === 1)) {
      const bytes = field.buffer()

      return (bytes[0] === 1)
    } else {
      return (useDefaultTypeCasting())
    }
  },
```
