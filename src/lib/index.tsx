import { useState, useEffect } from 'react';

type DefaultProps = {
  content: string;
  size?: Number | string;
};

const Qrcode = ({ content, size }: DefaultProps) => {
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
    />
  );
};

Qrcode.defaultProps = {
  url: '',
  size: 500,
};
export default Qrcode;
