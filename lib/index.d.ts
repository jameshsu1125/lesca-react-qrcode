export type TProps = {
    content: string;
    size?: Number | string;
};
declare const Qrcode: {
    ({ content, size }: TProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        url: string;
        size: number;
    };
};
export default Qrcode;
