import React, { useState } from 'react';
import { PageId, BlogPost } from '../types';
import { BLOG_POSTS } from '../data';
import { ArrowLeft, Calendar, Clock, ChevronRight, Search, BookOpen, Share2, Tag, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BlogProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Blog({ setCurrentPage }: BlogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const categories = ['All', 'Data Engineering', 'Generative AI', 'Insights'];

  // Filter posts based on Category and Search Query
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const activePost = BLOG_POSTS.find(post => post.id === activePostId);

  const handleBackToFeed = () => {
    setActivePostId(null);
    setCopied(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePostSelect = (id: string) => {
    setActivePostId(id);
    setCopied(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 bg-slate-50 text-slate-800" id="blog-page">
      {/* Background radial accent glow */}
      <div className="absolute left-[-20%] top-20 h-[500px] w-[500px] rounded-full bg-blue-300/10 glow-blur" />
      <div className="absolute right-[-20%] bottom-20 h-[500px] w-[500px] rounded-full bg-indigo-300/10 glow-blur" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <AnimatePresence mode="wait">
          {!activePostId ? (
            /* Feed View */
            <motion.div
              key="feed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-12"
              id="blog-feed-container"
            >
              {/* Blog Page Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest">
                  FLUMIX Publications
                </span>
                <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  Data & AI Insights
                </h1>
                <p className="text-base text-slate-600 leading-relaxed">
                  Deep technical guides, strategic frameworks, and analysis written by our managing directors and certified system researchers.
                </p>
              </div>

              {/* Toolbar: Category Filters and Search Box */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6" id="blog-feed-toolbar">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 w-full md:w-auto" id="blog-category-selector">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-full px-4 py-1.5 text-xs font-semibold border transition-all cursor-pointer shadow-sm ${
                        selectedCategory === cat
                          ? 'bg-gray-900 border-blue-500 text-white shadow-md shadow-blue-600/15'
                          : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-350'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-80" id="blog-search-bar">
                  <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-450" />
                  <input
                    type="text"
                    placeholder="Search articles or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Blog Listings Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts-grid">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      onClick={() => handlePostSelect(post.id)}
                      className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-500/20 hover:bg-slate-50/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                      id={`blog-post-${post.id}`}
                    >
                      <div className="space-y-4">
                        {/* Meta */}
                        <div className="flex items-center gap-3.5 text-3xs font-mono text-slate-500">
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Summary */}
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {post.summary}
                        </p>
                      </div>

                      {/* Footer Info */}
                      <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="h-6 w-6 rounded-full border border-slate-200 shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <span className="text-3xs font-semibold text-slate-700">{post.author.name}</span>
                        </div>

                        <span className="text-3xs font-bold text-blue-600 group-hover:text-blue-750 transition-colors flex items-center gap-0.5">
                          Read Article <ChevronRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 border border-dashed border-slate-200 rounded-2xl bg-white shadow-sm" id="blog-empty-state">
                  <BookOpen className="h-10 w-10 text-slate-400 mx-auto" />
                  <h3 className="mt-4 text-sm font-bold text-slate-800">No matching articles found</h3>
                  <p className="mt-1.5 text-xs text-slate-500 max-w-md mx-auto">
                    Try checking spelling or choosing a different category group in the navigation filters.
                  </p>
                </div>
              )}

            </motion.div>
          ) : (
            /* Detailed Article View */
            <motion.article
              key="reader"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="max-w-3xl mx-auto space-y-8"
              id="blog-reader"
            >
              {/* Back CTA */}
              <button
                onClick={handleBackToFeed}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-all cursor-pointer shadow-sm"
                id="blog-back-btn"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Return to insights feed</span>
              </button>

              {/* Article Head */}
              <div className="space-y-4 pb-6 border-b border-slate-200" id="blog-reader-header">
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                  <span className="rounded-full bg-blue-5 border border-blue-100 px-2.5 py-0.5 text-blue-600 text-[10px] font-bold uppercase tracking-wider">{activePost?.category}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {activePost?.date}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {activePost?.readTime}</span>
                </div>

                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  {activePost?.title}
                </h1>

                {/* Author Card Row */}
                <div className="flex items-center justify-between gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={activePost?.author.avatar}
                      alt={activePost?.author.name}
                      className="h-10 w-10 rounded-full shrink-0 border border-slate-200"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="block text-xs font-bold text-slate-900">{activePost?.author.name}</span>
                      <span className="block text-3xs text-slate-500 font-mono">{activePost?.author.role}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {copied && (
                      <span className="text-[10px] text-blue-600 font-mono font-bold bg-blue-50 border border-blue-100 rounded-full px-2 py-0.5 animate-pulse">
                        Link Copied
                      </span>
                    )}
                    <button
                      onClick={handleShare}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all cursor-pointer ${
                        copied
                          ? 'bg-blue-50 border-blue-500 text-blue-600'
                          : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                      title="Share Article"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Article Content Grid */}
              <div className="space-y-6 text-sm text-slate-750 leading-relaxed font-sans" id="blog-reader-body">
                {activePost?.content.map((pText, pIdx) => {
                  return (
                    <p key={pIdx} className="first-letter:text-lg first-letter:font-bold first-letter:text-slate-950">
                      {pText}
                    </p>
                  );
                })}
              </div>

              {/* Tags and Endnote */}
              <div className="pt-8 border-t border-slate-200 space-y-6" id="blog-reader-footer">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <Tag className="h-4 w-4 text-slate-500" />
                  <span className="font-mono text-3xs text-slate-500 uppercase tracking-wider shrink-0">Tags:</span>
                  {activePost?.tags.map(tag => (
                    <span key={tag} className="rounded-full bg-white border border-slate-200 px-2.5 py-0.5 text-2xs font-mono text-slate-600 shadow-3xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author BIO Card */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col sm:flex-row items-center sm:items-start gap-4 shadow-sm">
                  <img
                    src={activePost?.author.avatar}
                    alt={activePost?.author.name}
                    className="h-12 w-12 rounded-full shrink-0 border border-slate-200"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="text-xs font-bold text-slate-900">Written by {activePost?.author.name}</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Leading strategic initiatives on client warehouses, data mesh standardization, and private domain evaluations. Reach Marcus, Dr. Sarah, or Edward via the Canary Wharf strategic desk.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <button
                    onClick={handleBackToFeed}
                    className="text-xs font-bold text-blue-600 hover:text-blue-750 hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to publications list
                  </button>
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="rounded-full bg-gray-900 hover:bg-gray-500 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all cursor-pointer"
                  >
                    Discuss this topic
                  </button>
                </div>
              </div>

            </motion.article>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
