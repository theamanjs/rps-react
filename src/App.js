import './App.css';

function App() {
  return (
   <div className="container">
     <div className="inner-container">
       <div className="playing-area">
          <div className="heading">
            <h1 className="round-heading">Round</h1>
          </div>
          <div className="selection-area">
            <div className="proponent-wrapper">

              <div className="proponent-container">
                <div className="image-container">
                </div>
              </div>
            </div>
            <div className="opponent-wrapper">
              <div className="opponent-container"></div>
            </div>
          </div>
       </div>
     </div>
   </div>
  );
}

export default App;
