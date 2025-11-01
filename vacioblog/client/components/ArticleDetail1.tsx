import { Article1 } from "@/lib/articles1";
import { X, Clock, User, Calendar } from "lucide-react";
import { useEffect } from "react";

interface ArticleDetail1Props {
  article: Article1 | null;
  onClose: () => void;
}

export default function ArticleDetail1({
  article,
  onClose,
}: ArticleDetail1Props) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-gray-900"
      >
        {/* Close Button */}
        <div className="sticky top-0 bg-white border-b-4 border-gray-900 px-6 py-4 flex items-center justify-between">
          <div />
          <button
            onClick={onClose}
            className="p-2 hover:bg-red-100 rounded-lg transition-colors border-2 border-gray-900"
            aria-label="Close"
          >
            <X size={24} className="text-gray-900" />
          </button>
        </div>

        {/* Featured Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 aspect-video">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Category & Read Time */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-white bg-red-600 px-3 py-1 rounded">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-900 font-semibold">
              <Clock size={16} className="text-red-600" />
              {article.readTime} min de lectura
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 pb-8 border-b-2 border-gray-900">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <User size={20} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900">{article.author}</p>
                <p className="text-sm text-gray-700">Autor</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <Calendar size={18} className="text-red-600" />
              <span>{article.date}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-900 leading-relaxed text-base whitespace-pre-wrap font-medium">
              {article.content}
            </p>
          </div>

          {/* Footer Action */}
          <div className="mt-12 pt-8 border-t-2 border-gray-900">
            <button
              onClick={onClose}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors border-2 border-gray-900"
            >
              Cerrar Artículo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
