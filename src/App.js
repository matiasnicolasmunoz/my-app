import {useState, useEffect} from "react";

function App() {
   const [data, setData] = useState(null)

   useEffect(() => {
     getData();
   }, [])

  const getData = async () => {
    try {
       const request = await fetch('https://dummyjson.com/products');
       const response = await request.json();
       
       setData(response);
     } catch (error) {
       console.error(error)
     }
  }

  return (
    <div>
     <h1>Products</h1>
     
         {data && data.products.map((item) => (
          <div>
             <li key={item.title}>{item.title}</li>
             <li key={item.description}>{item.description}</li>
             <li key={item.thumbnail}>{item.thumbnail}</li>
             <img src={item.thumbnail} />
          </div>
         ))}
     </div>
  );
 }
 export default App;
