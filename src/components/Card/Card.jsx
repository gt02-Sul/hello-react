import { Image } from "../Image/Image"
import { Text } from "../Text/Text"
import { Title } from "../Title/Title"

export const Card = ({ title, image, text}) => {
    return (
        <div>
            <div>
                <Image src={image} />
            </div>
            <div>
                <Title
                    tag='h3'
                    content={title}
                />
                <Text content={text} />
            </div>
        </div>
    )
}