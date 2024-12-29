import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';
import SearchProduct from './components/SearchProduct';
import DisplayProduct from './components/DisplayProduct';

function App() {
  return (
    <div>
    <AddProducts />
    <SearchProduct />
    <DisplayProduct />
    </div>
  );
}

export default App;
