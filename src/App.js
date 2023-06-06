
import { useState, useEffect } from "react";

//components
import NavBar from "./components/NavBar";
import BreadCrumb from "./components/BreadCrumb";
import Images from "./components/Images";

import { getImages } from "./services/api";


function App() {
  const [data, setData]= useState([]);


  const [text, setText] = useState('');
  const [count, setCount] = useState(5);


 useEffect(() => {
    if(count < 3 || count > 200) {
      return;
    }

    const getData = async () => {
      const res = await getImages(text, count);
      setData(res.data.hits);

    }
    getData();

  }, [text, count])

  return (
    <div >
      <NavBar />
      <BreadCrumb setText={setText } setCount={setCount} />
      <Images data ={data}/>
    </div>
  );
}

export default App;
