import '../../App.css';
import Sidebar from '../sidebar/Sidebar';
import Feed from '../feed/Feed';
import Widgets from '../widgets/Widgets';

function Home() {
    return (
      <div className='app'>
        
        {/* {sidebar} */}
        <Sidebar />
        {/* {feed} */}
        <Feed />
        
        {/* {widget} */}
        <Widgets />
      </div>
    );
  }
  
  export default Home;