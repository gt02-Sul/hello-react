import './App.css'
import { Title } from './components/Title/Title'
import { Text } from './components/Text/Text'

export const App = () => {
  return (
    <>
      <Title />
      <Text
        content="Olá props!"
        content2="Olá props2!"
      />
      {/* <Text />
      <Text />
      <Text /> */}
    </>
  );
}
