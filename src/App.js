import './App.css';
import Footer from './components/Footerdiv/Footer';
import NavBar from './components/NavBar/NavBar';
import JobDiv from './components/jobdiv/Job';
import Search from './components/searchdiv/Search';
import Value from './components/valuediv/Value';
function App() {
  return (
    <div className='w-[85%] m-auto bg-white'>
    <NavBar />
    <Search />
    <JobDiv/>
    <Value />
    <Footer />

    
    
    
    </div>
  );
}

export default App;
