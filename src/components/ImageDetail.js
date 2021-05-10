import React from 'react'
import '../css/imageDetail.css'
import {motion} from 'framer-motion'


function ImageDetail({selectedImg, setSelectedImg}) {
  function closeImageDetail(e) {
    if (e.target.classList.contains('backdrop'))
      setSelectedImg(null);
  }
  
  return (
    <motion.div className="backdrop" onClick={closeImageDetail}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.2}}
    >
      <motion.img src={selectedImg.url} alt={selectedImg.fileName} />
      <h1>{selectedImg.fileName}</h1>
    </motion.div>
  )
}

export default ImageDetail
