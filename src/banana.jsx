import { useState } from "react";

function Tags() {

  const [tags, setTags] = useState([
    "react",
    "vite"
  ]);

  function addTag() {
    setTags(prevTags => ["frontend", ...prevTags]);
  }
  
  function deleteTag(indexToDelete) {
    setTags(prevTags =>
      prevTags.filter((tag, index) => index !== indexToDelete)
    );
  }

  return (
   <div>
      <button onClick={addTag}>Add Frontend</button>
      {tags.map((tag, index) => (
  <p key={index}>
    {tag}
    <button onClick={() => deleteTag(index)}>
      Delete
    </button>
  </p>
))}
    </div>
  );
}

export default Tags;