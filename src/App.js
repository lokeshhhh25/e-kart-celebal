import './App.css';
import { useEffect, useCallback, useState } from 'react';
import Header from './Header';
import Card from './Card';
function App() {

  const [productData, setProductData] = useState([]);
  const [showProduct,setShowProduct]=useState(true);
  const fetchData = useCallback(async () => {
    const response = await fetch('https://mocki.io/v1/101be704-1080-43cd-bb58-5d828b1c2b7e');
    const data = await response.json();
    console.log(data);
    setProductData(data);
  }, []);

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  const onShowProductHandler=()=>
  {
    setShowProduct(!showProduct);
  }

  return (
    <div>
      <Header showProduct={onShowProductHandler}></Header>
      <div className='App'>
        {showProduct&&<Card items={productData}></Card>}
      </div>
    </div>
  );
}

export default App;
