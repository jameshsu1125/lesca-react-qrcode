/// <reference types="react" />
declare type DefaultProps = {
    content: string;
    size?: Number | string;
};
declare const Qrcode: {
    ({ content, size }: DefaultProps): JSX.Element;
    defaultProps: {
        url: string;
        size: number;
    };
};
export default Qrcode;
