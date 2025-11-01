import { useState } from "react";
import { articles1, Article1 } from "@/lib/articles1";
import ArticleCard1 from "@/components/ArticleCard1";
import ArticleDetail1 from "@/components/ArticleDetail1";
import BlogHeader1 from "@/components/BlogHeader1";

export default function VacuumPumps() {
  const [selectedArticle, setSelectedArticle] = useState<Article1 | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <BlogHeader1 />

      {/* Articles Grid */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles1.map((article) => (
            <ArticleCard1
              key={article.id}
              article={article}
              onClick={setSelectedArticle}
            />
          ))}
        </div>
      </main>

      {/* Article Detail Modal */}
      <ArticleDetail1
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Footer Click Overlay */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
}
