import { useState } from "react";
import logo from "./assets/images/logo.png";

const productos = [
  { id: 1, nombre: "Clase particular", descripcion: "Una clase individual de 1 hora, enfocada en los temas que necesites. Se puede grabar para que la tengas y la repases cuando quieras", precio: 17000 },
  { id: 2, nombre: "Resolución de Trabajo Practico", descripcion: "El precio de realización de un trabajo práctico depende de la cantidad de actividades que tenga y del tiempo que se requiera para realizarlo.", precio: 1 },
  { id: 3, nombre: "Resolución de Evaluación", descripcion: "El precio de realización de un examen depende de la cantidad de actividades que incluya y del tiempo disponible para hacerlo.", precio: 1 },
  { id: 4, nombre: "Repaso Exprés", descripcion: "Una herramienta ideal para cuando no tenés tiempo de ir a clase pero igual querés aprobar. Incluye videos explicativos, actividades de repaso y ejercicios extra para practicar cuando puedas, a tu ritmo y desde cualquier lugar. ¡Todo lo necesario para no quedarte atrás!", precio: 1},
  { id: 5, nombre: "Promp IA personalizado de matemática", descripcion: "Un prompt es una instrucción diseñada para interactuar con la inteligencia artificial. Con este recurso exclusivo vas a poder utilizar ChatGPT para generar actividades para practicar matemática de manera ilimitada. ¿Qué vas a lograr con este prompt? Crear infinitas actividades de práctica, obtener soluciones paso a paso para cada ejercicio, adaptar las consignas a tu nivel y a los temas que necesites reforzar, estudiar de forma más dinámica y efectiva para tus exámenes.", precio: 1 },
  { id: 6, nombre: "Mate Socio", descripcion: "La duración es de 1 mes e incluye clases conceptuales grabadas de aproximadamente 30 minutos, un grupo de consultas para dudas puntuales, material complementario y hasta 3 clases particulares por mes con un 15% de descuento.", precio: 7000 },
  { id: 7, nombre: "Dudas y Preguntas", descripcion: "Durante 2 semanas podrás enviar tus dudas y preguntas al docente por WhatsApp, y recibirás respuestas personalizadas para ayudarte con tus estudios.", precio: 7000 },
  { id: 8, nombre: "Actividades para Practicar", descripcion: "Recibí actividades para practicar, enviadas por el docente, junto con sus soluciones para que puedas corregirte y aprender.", precio: 7500 },
  { id: 9, nombre: "Modelo de examen", descripcion: "Un examen de práctica como el que te tomarían en clase, pero sin respuestas y sin desarrollo.", precio: 10000 },
  { id: 10, nombre: "Modelo de examen con respuesta", descripcion: "Contiene ejercicios parecidos a los del examen con las respuestas finales.", precio: 10500 },
  { id: 11, nombre: "Modelo de examen con respuesta y desarrollo", descripcion: "Contiene ejercicios respuestas finales y resolución paso a paso.", precio: 14500 },
  { id: 12, nombre: "Promo 1", descripcion: "1 Hora de clase + Dudas y preguntas", precio: 22800 },
  { id: 13, nombre: "Promo 2", descripcion: "1 Hora de clase + Actividades para practicar", precio: 23300 },
  { id: 14, nombre: "Promo 3", descripcion: "Reservá 3 clases y conseguí un 15% de descuento en la tercera", precio: 47000 },
  { id: 15, nombre: "Promo 4", descripcion: "1 Hora de clase + Dudas y preguntas + Actividades para practicar", precio: 30000 },
  { id: 16, nombre: "Promo 5", descripcion: "1 Hora de clase + Modelo de examen", precio: 25600 },
  { id: 17, nombre: "Promo 6", descripcion: "1 Hora de clase + Modelo de examen + Dudas y preguntas", precio: 32700 },
  { id: 18, nombre: "Promo 7", descripcion: "1 Hora de clase + Modelo de examen + Dudas y preguntas + Actividades para practicar", precio: 39500 },
  { id: 19, nombre: "Promo 8", descripcion: "Incluye 8 horas de clases individuales durante el mes, adaptadas a tus necesidades y ritmo. Podés usar las horas como mejor te convenga: una por semana, dos seguidas, etc.", precio: 120000 },
  { id: 20, nombre: "Promo 9", descripcion: "Incluye 16 horas de clases individuales durante el mes, adaptadas a tus necesidades y ritmo. Podés usar las horas como mejor te convenga: una por semana, dos seguidas, etc.", precio: 224000 },
  { id: 21, nombre: "Clases grupales", descripcion: "1 Hora con dos estudiantes", precio: 30500 },
  { id: 22, nombre: "Clases grupales", descripcion: "1 Hora con tres estudiantes", precio: 44300 },
  { id: 23, nombre: "Clases grupales", descripcion: "1 Hora con cuatro estudiantes", precio: 57000 },
  { id: 24, nombre: "Clases grupales", descripcion: "1 Hora con cinco estudiantes", precio: 68000 },
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
      {/* Header modificado */}
      <header className="flex items-center justify-between px-4 py-3 bg-blue-200 shadow-md">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
          Tienda de Matemática
        </h1>
        <img src={logo} alt="Logo" className="w-10 sm:w-12 md:w-14 h-auto ml-4" />
      </header>

      {/* Buscador */}
      <div className="p-6 pb-40">
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
              className="bg-white p-4 rounded shadow text-center flex flex-col justify-between"
            >
              <h2 className="text-lg font-semibold mb-2">{producto.nombre}</h2>
              <p className="text-gray-700 mb-2">{producto.descripcion}</p>
              <p className="text-gray-700 mb-4">
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
              href={`https://wa.me/5491151803271?text=Hola! Quiero comprar los siguientes productos:%0A${mensajeWhatsApp}%0ATotal: $${total.toLocaleString()}%0AAlias: lucas.taborda`}
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
