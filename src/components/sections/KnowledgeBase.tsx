import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, ArrowRight } from "lucide-react";

const KnowledgeBase = () => {
  const { lang } = useLanguage();
  const heading = lang === "en" ? "Knowledge Base" : "Stručna baza";
  const subtitle =
    lang === "en"
      ? "Expert articles on swimming methodology, fear of water and kinesiotherapy."
      : "Stručni članci o metodologiji plivanja, strahu od vode i kineziterapiji.";
  const readMore = lang === "en" ? "Read more" : "Pročitaj više";

  return (
    <section id="strucna-baza" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              {heading}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            {heading}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((a) => (
            <Link
              key={a.slug}
              to={`/clanak/${a.slug}`}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {a.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {a.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-primary font-semibold text-sm">
                {readMore} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;
