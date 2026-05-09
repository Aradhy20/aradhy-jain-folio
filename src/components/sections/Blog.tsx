"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const ARTICLES = [
  {
    category: "Data Analysis",
    title: "Getting Started with Exploratory Data Analysis in Python",
    excerpt:
      "A practical walkthrough of EDA fundamentals — from null handling and outliers to visual storytelling with Pandas, Matplotlib, and Seaborn.",
    readTime: "6 min read",
    date: "Mar 2025",
    url: "https://www.linkedin.com/in/aradhyjain",
  },
  {
    category: "Career Insights",
    title: "From Excel to SQL: My Data Analyst Toolkit",
    excerpt:
      "How I leveled up from spreadsheet wizardry to writing efficient, highly-optimized SQL queries, plus the core schemas that made the jump.",
    readTime: "5 min read",
    date: "Feb 2025",
    url: "https://www.linkedin.com/in/aradhyjain",
  },
  {
    category: "Machine Learning",
    title: "Building My First Sentiment Analysis Model",
    excerpt:
      "An end-to-end walkthrough of building, training, and evaluating an NLP classification pipeline using Python and scikit-learn.",
    readTime: "8 min read",
    date: "Jan 2025",
    url: "https://www.linkedin.com/in/aradhyjain",
  },
  {
    category: "Generative AI",
    title: "How Generative AI Is Reshaping Data Careers",
    excerpt:
      "My take on what every aspiring analyst and engineer should learn about LLMs, prompt engineering, and agent-based workflows.",
    readTime: "7 min read",
    date: "Dec 2024",
    url: "https://www.linkedin.com/in/aradhyjain",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 sm:py-28 relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <p className="section-kicker">Writing & Insights</p>
          <h2 className="section-title">Latest Articles & Technical Publications</h2>
          <p className="section-copy">
            Sharing thoughts, tutorials, and deep-dives into modern data science, generative AI, and professional development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ARTICLES.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group block"
            >
              <article className="panel border-border/70 bg-white/45 p-6 shadow-xl backdrop-blur-xl dark:bg-white/5 rounded-[2rem] overflow-hidden h-full relative transition-all duration-300">
                <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-cyan-500/5 blur-xl group-hover:bg-cyan-500/10 transition-all duration-300" />
                
                <div className="flex items-center gap-3 text-xs text-foreground/50 mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-semibold">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-foreground/60 mb-5 leading-relaxed">
                  {article.excerpt}
                </p>

                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                  Read full publication
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </article>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
