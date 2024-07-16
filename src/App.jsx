import './App.css'
import { Title } from './components/Title/Title'
import { Card } from './components/Card/Card';

export const App = () => {
  return (
    <>
      <Title tag="h1" content="Card List" />
      <Title tag="h2" content="There's a card list" />
      <div className="card-list">
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
      
    </>
  );
}
