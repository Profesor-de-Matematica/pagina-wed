export default function Comentarios({ comentarios }) {
  return (
    <div className="mt-8 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Comentarios de los usuarios</h2>
      {comentarios.length === 0 ? (
        <p>No hay comentarios todavía.</p>
      ) : (
        <ul className="list-disc pl-5">
          {comentarios.map((comentario, index) => (
            <li key={index}>{comentario}</li>
          ))}
        </ul>
      )}
    </div>
  );
}