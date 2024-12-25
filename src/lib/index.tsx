import { useState, useEffect } from 'react';

export type TProps = {
  content: string;
  size?: Number | string;
};

const Qrcode = ({ content, size }: TProps) => {
  const [qrcode, setQrcode] = useState<string>('');

  useEffect(() => {
    const c = encodeURIComponent(content);
    setQrcode(`https://quickchart.io/qr?text=${c}&size=${size}`);
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
