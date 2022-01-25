[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/) [![npm](https://img.shields.io/badge/npm-Jameshsu1125-red)](https://www.npmjs.com/~jameshsu1125)

# Installation

```sh
npm install lesca-react-qrcode --save
```

# Demo

[Live Demo](https://jameshsu1125.github.io/lesca-react-qrcode/)

# Usage

```javascript
import Qrcode from 'lesca-react-qrcode';

const Components = () => {
	const content = 'https://exsample.com/';
	const size = '300';

	return <Qrcode {...{ content, size }} />;
};
```

# Porps

| props   |  type  |  description   | default |
| :------ | :----: | :------------: | ------: |
| content | string |  url or text   |      '' |
| size    | string | set image size |     500 |
