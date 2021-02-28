import './App.css';
import Card from './components/Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <font size="12" align="center" ><b>Weather Application</b> </font>
      </header>

      <br></br>
      <br></br>
     
      <font face = "Comic sans MS" size ="3">  
      <Card/> 
      </font>

    <footer>
        <h5 >  Weather Weather Weather </h5>
    </footer>
    
  </div>  
  );
}

export default App;
