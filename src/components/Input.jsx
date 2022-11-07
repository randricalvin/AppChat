import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import photo from '../assets/photo.svg'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { db, storage } from '../firebase'
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'


const Input = () => {
  const [text, setText] = useState('')
  const [image, setImage] = useState(null)

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleKey = (e) => {
    e.code === 'Enter' && handleSend()
  }

  const handleSend = async() => {

    if (image) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
        (error) => {
          // setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderName: currentUser.displayName,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                image: downloadURL,
              })
            });
          })
        }
      )
        } else {
          await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderName : currentUser.displayName,
              senderId: currentUser.uid,
              date: Timestamp.now(),
        })
      })
      }

    await updateDoc(doc(db, "userchats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    })

    await updateDoc(doc(db, "userchats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    })


    setText("")
    setImage(null)
  }

  return (
    <div>
      <div className="flex justify-between mb-5 ml-5">
          <input 
            className="lg:w-3/4 md:w-5/6 sm:w-2/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-600 "
            type="text"
            placeholder="Type your message here..."
            onKeyDown={handleKey}
            onChange={(e) => setText(e.target.value)}
            value={text}
          >
          </input>

          <div className='flex w-1/4 items-center justify-around'>
              <input type="file" 
              id="file" 
              style={{display:"none"}} 
              onChange={(e) => setImage(e.target.files[0])}
              />
              <label htmlFor="file" className='cursor-pointer'>
                <img src={photo} alt="adding" />
              </label>
            <button className='bg-sky-600 w-28 text-white font-bold px-4 py-2 hover:bg-sky-700' onClick={handleSend}>Send</button>
          </div>
      </div>
    </div>
  )
}

export default Input