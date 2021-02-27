import * as React from "react";
import {PostListResponse} from "../../server/post/post.types";

const PostUpdate = () => {
  const [post, setPost] = React.useState<string[]>([]);

  React.useEffect(() => {
    fetch('/api/post')
      .then<PostListResponse>((response) => response.json())
      .then((posts) => setPost(posts))
  })

  return (
    <nav>
      <ul>
        {post.map((item) => (
          `<li>${item}</li>`
        ))}
      </ul>
    </nav>
  )
}

export default PostUpdate;
