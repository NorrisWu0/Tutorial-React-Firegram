import {useState} from 'react'
import './css/index.css'
import Heading from './components/Heading'
import UploadForm from './components/UploadForm'
import Gallery from './components/Gallery'
import ImageDetail from './components/ImageDetail'

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  
  return (
    <div className="app">
      <Heading/>
      <UploadForm/>
      <Gallery setSelectedImg={setSelectedImg}/>
      {selectedImg && <ImageDetail selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
    </div>
  );
}

export default App;
