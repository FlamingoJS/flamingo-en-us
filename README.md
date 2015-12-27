# flamingojs-i18n
FlamingoJS internationalization (i18n)

## Install
```
$ npm install --save flamingojs-i18n
```

## Usage
```js
const languagesENUS = require('flamingojs-i18n').enUS;

console.log(languagesENUS.defaultMessage);
//=> This value is invalid.

const languagesPTBR = require('flamingojs-i18n').ptBR;
console.log(languagesPTBR.defaultMessage);
//=> Este valor é inválido.
```

## License
MIT © [Bruno Queiros](https://github.com/brunoqueiros)
