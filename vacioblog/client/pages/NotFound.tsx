import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-md">
        <div className="mb-6">
          <div className="text-8xl font-bold opacity-80 mb-2">404</div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Página no encontrada</h1>
        <p className="text-lg text-blue-100 mb-8 leading-relaxed">
          Lo sentimos, la página que estás buscando no existe. Pero no te
          preocupes, puedes volver al inicio y explorar nuestros artículos.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
        >
          <Home size={20} />
          Volver al Inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
