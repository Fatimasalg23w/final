export default function BlogHeader1() {
  return (
    <div className="relative min-h-[60vh] flex flex-col justify-center text-white border-b-4 border-red-600 overflow-hidden">
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
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-red-500 font-black mb-3 leading-tight">
  Bienvenido a nuestro blog
</h1>

          <p className="text-lg text-gray-100 mb-6 leading-relaxed font-semibold">
            Aquí aprenderás todo sobre tecnología del vacío, aplicaciones de sistemas de vacío en la industria, artículos sobre reparación de bombas y sistemas de vacío, aplicación de vacío en tanques, casos de éxito con la implementación de nuestros productos y servicios. Guías de mantenimiento, detección de fugas y más.
          </p>
          <div className="flex items-center gap-2 text-gray-100">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-red-400 flex items-center justify-center text-xs font-bold text-white border-2 border-gray-900">
                I
              </div>
              <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-xs font-bold text-white border-2 border-gray-900">
                T
              </div>
              <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold text-white border-2 border-gray-900">
                V
              </div>
            </div>
            <span className="text-sm font-bold">Expertos Técnicos</span>
          </div>
        </div>
      </div>
    </div>
  );
}