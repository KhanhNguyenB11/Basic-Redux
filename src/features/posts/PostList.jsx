import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionBtn from "./ReactionBtn";
function PostList() {
  const posts = useSelector(selectAllPosts);
 const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date));
  return (
    <section>
      <h2>Posts</h2>
      {orderedPosts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p className="postCredit">
            <PostAuthor userId={post.userId} />
            <TimeAgo timeStamp={post.date} />
          </p>
          <ReactionBtn post={post} />
        </article>
      ))}
    </section>
  );
}

export default PostList;
