import './App.css'
import { Title } from './components/Title/Title'
import { Card } from './components/Card/Card';
import { Image } from './components/Image/Image';

export const App = () => {
  return (
    <>
      <Title tag="h1" content="Card List" />
      <Title tag="h2" content="There's a card list" />
      <Image
        src="https://placehold.co/200x200/orange/white?text=Hello+World"
        borderColor="blue"
        />
      <Image
        src="https://placehold.co/200x200/blue/white?text=Hello+World+2"
        borderColor="red"
      />
      <Image
        src="https://placehold.co/200x200/red/white?text=Hello+World+3"
        borderColor="#4a4a4a"
      />
      <div className="card-list">
        <Card
          title="O titulo"
          text="O texto"
          image="O src da image"
        />

      </div>
      
    </>
  );
}
