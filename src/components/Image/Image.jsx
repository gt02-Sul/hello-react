import './Image.css'

export const Image = (props) => {
    return (
        <img
            className="image-root"
            src={props.src}
            style={{
                borderColor: props.borderColor
            }}
        />
    )
}