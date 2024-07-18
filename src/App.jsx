import { ProductCard } from "./components/ProductCard/ProductCard"
export const App = () => {
  return (
    <div>
      <h2>Lista de produtos</h2>
      <ProductCard
        title="Produto 1"
        discount="30%"
        category="Produto 1"
        price="100.00"
        imageUrl="https://placehold.co/80x80"
      />


      <ProductCard
        title="Produto 2"
        discount="30%"
        category="Produto 1"
        price="100.00"
        imageUrl="https://placehold.co/80x80"
      />
    </div>
  )
}
