export default function CardWrapper(props) {
    const classes = `rounded-xl drop-shadow-lg ${props.className}`;
    return <div className={classes}>{props.children}</div>;
}
