export const Title = (props) => {
    switch(props.tag) {
        case 'h1':
            return <h1>{props.content}</h1>
        case 'h2':
            return <h2>{props.content}</h2>
        case 'h3':
            return <h3>{props.content}</h3>
        default:
            return <h2>{props.content}</h2>
    }
}
