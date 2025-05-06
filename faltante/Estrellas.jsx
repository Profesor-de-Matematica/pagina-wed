import { useState } from "react";

export default function Estrellas({ valor = 0, onChange }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          type="button"
          key={star}
          className={
            (hover || valor) >= star ? "text-yellow-400" : "text-gray-400"
          }
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
}