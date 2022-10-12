import '../styles/App.scss';
import Contact from './Contact';
import Header from './Header';
import Presentation from './Presentation';
import Projects from './Projects';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
      <Header/>

      <main className='App--main'>
        <Presentation/>
        
        <Skills/>
        
        <Projects/>
        
        <Contact/>

      </main>      
      
    </div>
  );
}

export default App;
