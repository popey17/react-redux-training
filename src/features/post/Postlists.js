import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const Postlists = () => {

  const posts = useSelector(selectAllPosts)
  console.log(posts);


  return (
    <section>
      <h2>Posts</h2>
      {posts.map(post=>(
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0,100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId}/>
        <TimeAgo timestamp={post.date} />
      </p>
    </article>
  ))}
    </section>
  )
}

export default Postlists