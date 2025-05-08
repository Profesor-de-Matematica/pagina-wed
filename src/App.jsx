// src/App.jsx
import { useState } from "react";

const productos = [
  { id: 1, nombre: "Clase particular", descripcion: "1 Hora de clase personalizada", imagen: "./productos/1.jpg", precio: 10000 },
  { id: 2, nombre: "Resolución de Trabajo Practico", descripcion: "Resolución de Trabajo Practico", imagen: "./productos/2.jpg", precio: 1234 },
  { id: 3, nombre: "Resolución de Evaluación", descripcion: "Resolución del Evaluación", imagen: "./productos/3.jpg", precio: 15000 },
  { id: 4, nombre: "Dudas y Preguntas", descripcion: "Descripción del producto 4", imagen: "./productos/4.jpg", precio: 999 },
  { id: 5, nombre: "Actividades para Practicar", descripcion: "Descripción del producto 5", imagen: "./productos/5.jpg", precio: 1100 },
  { id: 6, nombre: "Promo 1", descripcion: "1 Hora de clase + Dudas y preguntas", imagen: "./productos/6.jpg", precio: 1325 },
  { id: 7, nombre: "Promo 2", descripcion: "1 Hora de clase + Actividades para practicar", imagen: "./productos/7.jpg", precio: 1475 },
  { id: 8, nombre: "Promo 3", descripcion: "Reservá 3 clases y conseguí un 15% de descuento en la tercera", imagen: "./productos/8.jpg", precio: 1699 },
  { id: 9, nombre: "Promo 4", descripcion: "1 Hora de clase + Dudas y preguntas + Actividades para practicar", imagen: "./productos/9.jpg", precio: 850 },
  { id: 10, nombre: "Promo 5", descripcion: "1 Hora de clase + Modelo de examen", imagen: "./productos/10.jpg", precio: 1780 },
  { id: 11, nombre: "Promo 6", descripcion: "1 Hora de clase + Modelo de examen + Dudas y preguntas", imagen: "./productos/11.jpg", precio: 1999 },
  { id: 12, nombre: "Promo 7", descripcion: "1 Hora de clase + Modelo de examen + Dudas y preguntas + Actividades para practicar", imagen: "./productos/12.jpg", precio: 699 },
  { id: 13, nombre: "Clases grupales", descripcion: "1 Hora con dos estudiantes", imagen: "./productos/13.jpg", precio: 2000 },
  { id: 14, nombre: "Clases grupales", descripcion: "1 Hora con tres estudiantes", imagen: "./productos/14.jpg", precio: 2150 },
  { id: 15, nombre: "Clases grupales", descripcion: "1 Hora con cuatro estudiantes", imagen: "./productos/15.jpg", precio: 2275 },
  { id: 16, nombre: "Clases grupales", descripcion: "1 Hora con cinco estudiantes", imagen: "./productos/16.jpg", precio: 1890 },
];

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  const total = carrito.reduce((acc, p) => acc + p.precio, 0);
  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const mensajeWhatsApp = carrito
    .map((p) => `${p.nombre} - $${p.precio}`)
    .join("%0A");

  return (
    <div className="min-h-screen bg-blue-100 relative">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-blue-200 shadow-md">
        <h1 className="text-3xl font-bold text-blue-900 text-center w-full">
          Tienda de Matemática
        </h1>
        <img src="logo.png" alt="Logo" className="h-12 absolute right-6" />
      </div>

      {/* Buscador */}
      <div className="p-6">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="w-full p-2 border border-gray-300 rounded-md mb-6"
          onChange={(e) => setBusqueda(e.target.value)}
        />

        {/* Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className="bg-white p-4 rounded shadow text-center"
            >
              <h2 className="text-lg font-semibold mb-2">{producto.nombre}</h2>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-40 object-contain mb-3"
              />
              <p className="text-gray-700 mb-2">{producto.descripcion}</p>
              <p className="text-gray-700 mb-2">
                ${producto.precio.toLocaleString()}
              </p>
              <button
                onClick={() => agregarAlCarrito(producto)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Carrito flotante */}
      <div className="fixed bottom-6 right-6 bg-white border p-4 rounded shadow-md w-80 max-h-[60vh] overflow-y-auto z-50">
        <h3 className="text-lg font-bold mb-2">🛒Carrito</h3>
        {carrito.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-1">
            <span>{item.nombre}</span>
            <div className="flex items-center gap-2">
              <span>${item.precio.toLocaleString()}</span>
              <button
                onClick={() => eliminarDelCarrito(index)}
                className="text-red-500 font-bold"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
        {carrito.length > 0 && (
          <>
            <p className="mt-3 font-bold">Total: ${total.toLocaleString()}</p>
            <a
              href={`https://wa.me/549XXXXXXXXXX?text=Hola! Quiero comprar los siguientes productos:%0A${mensajeWhatsApp}%0ATotal: $${total.toLocaleString()}%0AAlias: tu.alias.mp`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded"
            >
              Pagar
            </a>
          </>
        )}
        {carrito.length === 0 && <p>No hay productos en el carrito.</p>}
      </div>
    </div>
  );
}

export default App;
