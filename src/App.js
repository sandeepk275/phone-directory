import Header from "./Header";
import './App.css';

let subscribers = [
  {
    id:
      1
    ,
    name: "Shilpa Bhat"
    ,
    phone: "8888888888"
  },
  {
    id:
      2
    ,
    name: "Srishti Gupta"
    ,
    phone: "9999999999"
  },
  {
    id:3,
    name: "sandeep kumar",
    phone: "8076806032"
  }
];

function App() {
  return (
    <div>
      <Header/>
    <button id="button">ADD</button><br/>
    <div id="heading-grid">
        <span id="name">NAME</span>
        <span id="phone">PHONE</span> 
    </div>

      {
        subscribers.map(sub => {
          return <div key={sub.id} className="grid-container">
            <span className="grid-name-item">{sub.name}</span>
            <span className="grid-phone-item">{sub.phone}</span>
            <span><button className="dlt-btn">DELETE</button></span>
            
          </div>
        })
      }

    </div>
  );
}





export default App;
