import { useEffect, useState } from "react"
import { storage } from './firebaseConfig'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

function App() {
  const [imageUpload, setImageUpload] = useState(null)
  const [imageList, setImageList] = useState([])

  const handleUploadImage = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url])
      })
    })
  }

  const imageListRef = ref(storage, `images/`)

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url])
        })
      })
    })

  }, [])

  return (
    <main className=" text-center space-x-3 mt-10 items-center flex flex-col">
       <input className=" border bg-slate-400 border-slate-600" type="file" onChange={(e) => setImageUpload(e.target.files[0])} />
       <button onClick={handleUploadImage} className=" py-1 px-6 border border-slate-600 rounded-md">upload</button>
       <div className=" w-[50%] space-y-6 mt-10">
          {imageList.map((url, index) => (
            <div className="  border-red-600 border" key={index}>
                <img src={url} />
            </div>
          ))}
       </div>
    </main>
  )
}

export default App
