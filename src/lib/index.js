import React, { useState, useEffect } from 'react';

const Qrcode = ({ content, size }) => {
	const [qrcode, setQrcode] = useState('');

	useEffect(() => {
		const c = encodeURIComponent(content);
		setQrcode(`http://chart.apis.google.com/chart?cht=qr&chl=${c}&chs=${size}x${size}`);
	}, [size, content]);

	return (
		<div
			style={{
				width: `${size}px`,
				height: `${size}px`,
				backgroundColor: '#fff',
				backgroundImage: `url(${qrcode})`,
			}}
		></div>
	);
};

Qrcode.defaultProps = {
	url: '',
	size: 500,
};
export default Qrcode;
