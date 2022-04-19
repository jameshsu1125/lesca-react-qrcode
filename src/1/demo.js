import React, { useEffect } from 'react';
import { Code } from './components';
import Qrcode from '../lib/index';

const code1 = `import Qrcode from 'lesca-react-qrcode';

const Qrcode = () => {
	const setting = { 
		content: 'https://github.com/jameshsu1125/lesca-react-qrcode',
		size: '300'
	}
	return <Qrcode {...setting} />
}
export default Qrcode;
`;

const code2 = `import Qrcode from 'lesca-react-qrcode';

const Qrcode = () => <Qrcode content='Hey! This is Text' size='300' />;
export default Qrcode;
`;

const Demo = () => {
	const setting = {
		content: 'https://github.com/jameshsu1125/lesca-react-qrcode',
		size: '300',
	};
	return (
		<>
			<div>
				<h2>URL content</h2>
				<Code code={code1} />
				<Qrcode {...setting} />
			</div>
			<div>
				<h2>text content</h2>
				<Code code={code2} />
				<Qrcode content='Hey! This is Text' size='300' />
			</div>
		</>
	);
};
export default Demo;
