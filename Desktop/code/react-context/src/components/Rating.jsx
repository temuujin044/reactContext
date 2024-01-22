import React from "react";

export default function Rating({ rating }) {
  return (
    <div>
      <button>up arrow</button>
      <p>{rating}</p>
      <button>down arrow</button>
    </div>
  );
}
