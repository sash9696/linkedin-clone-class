import Sidebar from './Sidebar';
import './App.css';
import Nav from './Nav';
import Feed from './Feed';

function App() {
  return (
    <div className='app'>
       <Nav/>
      <div className="app_body">
        <Sidebar/>
        <Feed/>
        {/* News  */}
      </div>
       
        
    </div>
  );
}


export default App;
