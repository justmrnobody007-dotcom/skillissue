import { useState } from "react";

function Tags() {

  const [tags, setTags] = useState([
    "bleh",
    "blah"
  ]);

  function addTag() {
  const pokemon = ["pikachu", "eevee", "snorlax", "mew", "psyduck", "jigglypuff"];

  const randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];

  setTags(prevTags => [...prevTags, randomPokemon]);
}

  function deleteTag(indexToDelete) {
    setTags(prevTags =>
      prevTags.filter((tag, index) => index !== indexToDelete)
    );
  }

  return (
   <div className="tags-card">
      <button className="btn-add" onClick={addTag}>+ Catch Pokémon</button>
      
      <div className="tags-container">
        {tags.map((tag, index) => (
          <p key={index} className="tag-item">
            <span className="tag-name">#{tag}</span>
            <button className="btn-del" onClick={() => deleteTag(index)}>
              ✕
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Tags;