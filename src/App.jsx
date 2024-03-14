
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddBookmarks = (blog) => {
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog];
    // console.log(newBookmarks)
    setBookmarks(newBookmarks)
  }

  const handleAddReadingTime = (time, id) => {
    // console.log('clicked')
    // console.log(time)
    setReadingTime(readingTime + time)
    // remove the read blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className='flex mx-[100px] mt-10 gap-7'>
        <Blogs handleAddBookmarks={handleAddBookmarks} handleAddReadingTime={handleAddReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
