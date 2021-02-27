import * as React from "react";

const PostComponent = ({title, description, time}) => {
  return (
    <div>
      <h5>{title}</h5>
      <h5>{description}</h5>
      <h5>{time}</h5>
    </div>
  )
}

export default PostComponent;
