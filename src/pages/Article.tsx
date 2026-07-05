import { Helmet } from "react-helmet";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { articles } from "@/data/articles";
import { useLanguage } from "@/contexts/LanguageContext";

const SITE = "https://bozovicsport.lovable.app";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/" replace />;

  const url = `${SITE}${article.path || `/clanak/${article.slug}`}`;
  const back = lang === "en" ? "Back to home" : "Nazad na početnu";
  const pageTitle = article.metaTitle || `${article.title} | Božović Sport`;
  const pageHeading = article.heading || article.title;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageHeading,
    description: article.excerpt,
    author: { "@type": "Person", name: article.author || "Zoran Božović" },
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    publisher: {
      "@type": "Organization",
      name: "Božović Sport",
      url: SITE,
    },
  };

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{pageTitle}</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageHeading} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-6 text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> {back}
          </Link>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 uppercase leading-tight">
              {pageHeading}
            </h1>
            <p className="text-sm text-muted-foreground">
              {article.author} · {article.datePublished}
            </p>
          </header>
          <div
            className="prose prose-lg max-w-none text-foreground [&_h2]:text-2xl [&_h2]:font-heading [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
};

export default Article;
