import './css/index.css';
import Heading from './components/Heading';
import UploadForm from './components/UploadForm'
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="app">
      <Heading/>
      <UploadForm/>
      <Gallery/>
    </div>
  );
}

export default App;
