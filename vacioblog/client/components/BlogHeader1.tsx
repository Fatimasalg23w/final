export default function BlogHeader1() {
  return (
    <div className="relative min-h-[60vh] flex flex-col justify-center text-white border-b-4 border-red-600 overflow-hidden">
      {/* 🔙 Botón fijo en pantalla */}
      <div className="fixed top-6 left-6 z-[999]">
        <button
          onClick={() => (window.location.href = "/")}
          className="px-4 py-2 bg-red-600 text-white rounded shadow-lg hover:bg-red-700 transition font-semibold"
        >
          Volver al menú inicial
        </button>
      </div>

      {/* 🎥 Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://www.pexels.com/es-es/download/video/30914505/"
          type="video/mp4"
        />
        Tu navegador no soporta video HTML5.
      </video>

      {/* 🖤 Filtro negro */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* 🧠 Contenido */}
      <div className="relative z-50 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl text-red-500 font-black mb-4">
          Bienvenido a nuestro blog
        </h1>
        <p className="text-lg text-gray-100 mb-6 font-semibold">
          Aquí aprenderás todo sobre tecnología del vacío, aplicaciones de sistemas de vacío en la industria, artículos sobre reparación de bombas y sistemas de vacío, aplicación de vacío en tanques, casos de éxito con la implementación de nuestros productos y servicios. Guías de mantenimiento, detección de fugas y más.
        </p>
      </div>
    </div>
  );
}
