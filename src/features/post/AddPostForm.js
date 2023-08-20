import { useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { postAdd } from "./postSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const users = useSelector(selectAllUsers)

  const onTitleChange = e => setTitle(e.target.value)
  const onContentChange = e => setContent(e.target.value)
  const onUserIdChange = e => setUserId(e.target.value)
  const dispatch = useDispatch();

  const onSavePost = e => {
    if (title && content) {
      dispatch(postAdd(title,content,userId)
      )
      setTitle('')
      setContent('')
      console.log(title, content);
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(useId)

  const userOptions = users.map(user=>(
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={onSavePost}>
        <label htmlFor="postTitle">Post Title</label>
        <input type="text"
        id="postTitle" 
        name= "postTitle"
        value= {title}
        onChange={onTitleChange}/>

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onUserIdChange}>
          <option value=""></option>
          {userOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea 
        name="postContent" 
        id="postContent" 
        value={content} 
        onChange={onContentChange}/>

        <button 
        type="button"
        onClick={onSavePost}
        disabled={!canSave}
        >Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm