import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../_firebase/config'

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null); 

  useEffect(() => {
    // create reference to storage and firestore
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    
    // Upload file to Firebase Storage.
    storageRef.put(file).on('state_changed', (upload) => {
      //  Track file upload progress.
      let uploadPercentage = (upload.bytesTransferred/upload.totalBytes) * 100;
      setProgress(uploadPercentage);
    }, (err) => {
      // Prepare error message.
      setError(err);
      if (err)
        console.log(err);
      else
        console.log('no error when uploading');
    }, async() => {
      // Fetch image url after file is uploaded.
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp;
      const fileName = file.name;
      // Add this document to firestore collection
      collectionRef.add({fileName, url, createdAt});
      setUrl(url);
    });    
  }, [file] );

  return { progress, error, url}
}

export default useStorage
