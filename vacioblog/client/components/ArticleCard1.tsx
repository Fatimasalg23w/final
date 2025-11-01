import { Article1 } from "@/lib/articles1";
import { Clock, User, Calendar } from "lucide-react";

interface ArticleCard1Props {
  article: Article1;
  onClick: (article: Article1) => void;
}

export default function ArticleCard1({ article, onClick }: ArticleCard1Props) {
  return (
    <div
      onClick={() => onClick(article)}
      className="group cursor-pointer h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-900"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 aspect-video">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-white bg-red-600 px-2 py-1 rounded">
            {article.category}
          </span>
          <span className="text-xs text-gray-700 font-semibold">
            {article.readTime} min
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
          {article.title}
        </h3>

        <p className="text-gray-700 text-sm mb-4 line-clamp-2 flex-grow font-medium">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-700 border-t-2 border-gray-900 pt-3">
          <div className="flex items-center gap-1">
            <User size={14} className="text-red-600" />
            <span className="font-semibold">{article.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} className="text-red-600" />
            <span className="font-semibold">{article.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
