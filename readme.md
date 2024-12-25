[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/Typescript-4277c0?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

A qrocde Component by ~~google~~ quickchart qrcode generator.

#### [Live Demo](https://jameshsu1125.github.io/lesca-react-qrcode/)

# Installation

```sh
npm install lesca-react-qrcode --save
```

## Usage

```JSX
import Qrcode from 'lesca-react-qrcode';

const Components = () => {
  const content = 'https://exsample.com/';
  const size = '300';

  return <Qrcode {...{ content, size }} />;
};
```

## Development

### Props

| props                |  description   | default |
| :------------------- | :------------: | ------: |
| **content**:_string_ |  url or text   |      '' |
| **size**:_int_       | set image size |     500 |

### Features

- maintain if necessary
