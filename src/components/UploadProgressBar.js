import React, { useEffect } from 'react'
import '../css/uploadForm.css'
import useStorage from '../hooks/useStorage'
import {motion} from 'framer-motion'

function UploadProgressBar({file, setFile}) 
{
  // Deconstruct the array received when uploading file
  const {progress, url} = useStorage(file);
  
  // Set file to null when image url is returned from the storage
  useEffect(() => {
    if (url)
      setFile(null);
  }, [url]);

  return (
    <motion.div className="progress-bar"
      initial={{width: 0}}
      animate={{width: progress + '%'}}
    >
    </motion.div>
  )
}

export default UploadProgressBar
