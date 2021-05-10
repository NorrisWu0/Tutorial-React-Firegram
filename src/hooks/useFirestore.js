import { useState, useEffect } from "react"
import { projectFirestore } from "../_firebase/config";


function useFirestore(collection) {
  // Store the documents fetched from the collection
  const [docs, setDocs] = useState([]);

  // Fetch datas from the collection and insert them to docs
  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        // Loop through each of the documents collected from "snap"
        snap.forEach(doc => {
          // Add the new document to the documents list  
          documents.push({...doc.data(), id: doc.id});
        });
        // Update documents variable
        setDocs(documents);
      });

      // stop listening to the collection
      return () => unsub();
  }, [collection]);

  return {docs}
}

export default useFirestore
