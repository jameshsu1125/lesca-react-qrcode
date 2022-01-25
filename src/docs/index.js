import React from 'react';
import { render } from 'react-dom';
import Qrcode from '../lib/index';
import './styles.less';

function Page() {
	const content = window.location.href;
	const size = '300';

	return (
		<>
			<div>
				<h1>install</h1>
				<p>npm install lesca-react-qrcode --save</p>
			</div>
			<div>
				<code>{`<Qrcode content='https://github.com/jameshsu1125/lesca-react-qrcode' size='300' />`}</code>
				<Qrcode {...{ content, size }} />
			</div>
			<div>
				<code>{`<Qrcode content='How Are You' size='300' />`}</code>
				<Qrcode {...{ size }} content='How Are You' />
			</div>
		</>
	);
}

render(<Page />, document.getElementById('app'));
