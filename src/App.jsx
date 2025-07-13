import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// function App(){
//   const [show,setshow] = useState(true);
//   const arr =["react","javascript","c++","python"];
//   const [fname,setname]=useState("")
//   const [finalname,setFinalname]=useState("")
//   const [a, setA] = useState(0)
//   const API_KEY = "q3sgJuh1bEBdxJesYnsT6oUyofspBodqqwXfeOlr";
//   const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`;
//   const [data,setdata] =useState(null)
//   function getNasa(){
//     fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       setdata(data)
    
//     });
//   }
//   useEffect(() =>{
//     getNasa();
//   },[])
    
//   //dependancy array
//   const inp =useRef(null);

//   function handleName(event){
//     const value = event.target.value;
//     setname(value);
//     //console.log(event.target.value);
    
//     console.log("hey you typed");
    
//   }
//   function MyBox() {
//   return (
//     <div className="my-box">
//       <p>This is a simple box.</p>
//     </div>
//   );
  
// }
// MyBox()
//   function handleclick(e){
//     inp.current.style.color="blue"
//     const value= inp.current.value;
//     console.log(value);
    
    
//     setFinalname(value)


//   }
//   return(
//     <>
//     <div className='heading'>
      
//       <h2>NASA INFO</h2>
//       </div>
    
//     <input type ="text" 
//     placeholder='Enter your name'
//     //onChange={handleName}
//      ref ={inp}/>
//     <button
//     onClick={handleclick}>Log in</button>
//     <p>Welcome {finalname}</p>
    

//     </>

//   )
// }

// export default App
//import { useState, useEffect, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=q3sgJuh1bEBdxJesYnsT6oUyofspBodqqwXfeOlr&count=10`
    )
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.log("Error:", err));
  }, []);

  const handleLogin = () => {
    setName(inputRef.current.value);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        background: "#000",
        color: "#fff",
      }}
    >
      <h1>NASA API</h1>

      <input
        type="text"
        placeholder="Enter your name"
        ref={inputRef}
        style={{ padding: "8px" }}
      />
      <button
        onClick={handleLogin}
        style={{ padding: "8px 12px", marginLeft: "10px" }}
      >
        Log In
      </button>
      <p>
        Welcome <strong>{name}</strong>
      </p>

      {[images.slice(0, 5), images.slice(5)].map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          {row.map((item, i) => (
            <div
              key={i}
              style={{
                width: "18%",
                border: "1px solid #555",
                padding: "10px",
                background: "#111",
              }}
            >
              <img
                src={item.url}
                alt={item.title}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <h4>{item.title}</h4>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
