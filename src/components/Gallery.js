import React from 'react'
import '../css/gallery.css'
import useFirestore from '../hooks/useFirestore'
import {motion} from 'framer-motion'

function Gallery() {
  const {docs} = useFirestore('images');
  console.log(docs);

  return (
    <div className='img-grid'>
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id}
          layout whileHover={{opacity: 1}}>
          <motion.img src={doc.url} alt={doc.fileName}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1}}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default Gallery
