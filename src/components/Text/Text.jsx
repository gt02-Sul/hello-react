import './Text.css'

export const Text = (props) => {

    console.log(props.content);

    return (
        <p className="text-root">
            Meu primeiro componente!
        </p>
    )
}
