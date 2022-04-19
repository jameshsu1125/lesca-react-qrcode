import { Button, ButtonGroup, Box, TextField } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import Qrcode from '../../lib';

const Demo = () => {
  const [content, setContent] = useState(window.location.href);
  const [size, setSize] = useState(320);

  const [qrcode, setQrcode] = useState({ size, content });

  const sizeRef = useRef();
  const contentRef = useRef();

  return (
    <div className='Demo'>
      <h2>Demo</h2>

      <Qrcode content={qrcode.content} size={qrcode.size} />
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete='off'
        style={{ marginTop: '20px' }}
      >
        <TextField
          ref={contentRef}
          required
          id='outlined-required'
          label='Content'
          defaultValue={content}
          onChange={(e) => {
            const { value } = e.target;
            setContent(value);
          }}
        />
        <TextField
          ref={sizeRef}
          required
          id='outlined-required'
          label='Size'
          defaultValue={size}
          type='number'
          onChange={(e) => {
            const { value } = e.target;
            setSize(value);
          }}
        />
      </Box>

      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            setQrcode({ size, content });
          }}
        >
          generate qrcode
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;
