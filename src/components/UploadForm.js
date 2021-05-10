import React, { useState } from 'react'
import '../css/uploadForm.css'


function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const allowTypes=['image/png', 'image/jpeg'];

  const uploadImage = (form) => {
    let _file = form.target.files[0];

    console.log(_file);

    if (_file && allowTypes.includes(_file.type)) {
      setFile(_file);
      setError('');
    }
    else {
      setFile(null);
      setError('The image uploaded must be in jpeg or png format');
    }
  }

  return (
    <form>
      <label>
        <input type="file" onChange={uploadImage}/>
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className='error'>{error}</div> }
        {file && <div>uploading {file.name}...</div> }
      </div>
    </form>
  )
}

export default UploadForm
