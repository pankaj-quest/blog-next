'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    ChevronRight,
    ChevronDown,
    Rocket,
    Layout,
    Cloud,
    Users,
    Wrench,
    CreditCard,
    Folder,
    Bot,
    GitBranch,
    Zap,
    Database,
    Layers,
    Clock,
    Moon,
    Sun,
    FileText,
    CornerDownLeft
} from 'lucide-react';
import { data, getDocByLink, DocQuestion } from '@/components/learninghub/data';
import { docComponents } from '@/components/learninghub/Docs';
import SchemaOrg from '@/components/learninghub/SchemaOrg';
import { useTheme } from '@/components/ThemeProvider';

// TopBar Component with search - matching agent-greta v2 style
const TopBar = ({ onOpenSearch }: { onOpenSearch: () => void }) => {
    const router = useRouter();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="h-[60px] border-b border-zinc-200/80 dark:border-white/5 flex items-center justify-between px-6 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            {/* Logo */}
            <div className="flex items-center gap-4">
                <div
                    className="flex items-center gap-2.5 cursor-pointer group ml-[220px] lg:ml-0"
                    onClick={() => router.push("/")}
                >
                    <div className="relative h-7 flex items-center justify-center">
                        <Image
                            alt="Greta Logo"
                            width={72}
                            height={36}
                            src="/Gretanewlogo.svg"
                            className="dark:invert-0 invert transition-transform group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>

            {/* Center - Search Input */}
            <div className="flex-1 max-w-xl mx-8 hidden md:flex items-center gap-3">
                <div className="relative flex-1 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-gray-500 group-hover:text-zinc-600 dark:group-hover:text-gray-300 transition-colors" size={14} />
                    <input
                        type="text"
                        readOnly
                        onClick={onOpenSearch}
                        placeholder="Search documentation..."
                        className="w-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 rounded-full py-2 pl-9 pr-12 text-[13px] text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-gray-500 focus:outline-none transition-all cursor-pointer hover:bg-zinc-50 dark:hover:bg-white/10 hover:border-zinc-300 dark:hover:border-white/10"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <kbd className="text-[10px] text-zinc-400 dark:text-gray-400 bg-zinc-200 dark:bg-white/5 px-1.5 py-0.5 rounded border border-zinc-300 dark:border-white/10 font-sans">⌘K</kbd>
                    </div>
                </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4 text-[13px] text-zinc-500 dark:text-gray-400 font-medium">
                {/* Community link */}
                <span
                    className="hidden lg:block hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors duration-200"
                    onClick={() => window.open("https://discord.com/invite/vGjWMnBmtN", "_blank")}
                >
                    Community
                </span>

                {/* Theme toggle */}
                <motion.button
                    onClick={toggleTheme}
                    className="relative w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Toggle theme"
                >
                    <AnimatePresence mode="wait">
                        {theme === 'dark' ? (
                            <motion.div
                                key="sun"
                                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.15 }}
                            >
                                <Sun size={16} className="text-amber-500" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="moon"
                                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.15 }}
                            >
                                <Moon size={16} className="text-violet-500" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>

                {/* App button - vibrant gradient */}
                <button
                    onClick={() => window.open("https://greta.questera.ai/home", "_blank")}
                    className="hidden lg:block bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 hover:from-purple-500 hover:via-violet-400 hover:to-indigo-400 text-white px-5 py-2 text-[12px] font-medium rounded-lg cursor-pointer transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02]"
                >
                    Get Started
                </button>
            </div>
        </header>
    );
};

// Get category icon
const getCategoryIcon = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('getting started')) return Rocket;
    if (lower.includes('building')) return Layout;
    if (lower.includes('deployment')) return Cloud;
    if (lower.includes('collaboration')) return Users;
    if (lower.includes('troubleshooting')) return Wrench;
    if (lower.includes('pricing')) return CreditCard;
    if (lower.includes('project management')) return Folder;
    if (lower.includes('agent')) return Bot;
    if (lower.includes('github')) return GitBranch;
    if (lower.includes('features')) return Zap;
    if (lower.includes('database')) return Database;
    return Layers;
};

// Helper to truncate long titles
const truncateTitle = (title: string) => {
    return title.replace(/^How to /, '').replace(/\?$/, '');
};

// SidebarItem - OpenRouter exact style
const SidebarItem = ({ label, isActive, onClick, hasIcon, Icon }: {
    label: string;
    isActive?: boolean;
    onClick?: () => void;
    hasIcon?: boolean;
    Icon?: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
}) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 w-full px-3 py-[6px] text-[13.5px] text-left rounded-md transition-colors
            ${isActive
                ? 'bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
            }`}
    >
        {hasIcon && Icon && (
            <Icon size={15} strokeWidth={1.5} className={isActive ? 'text-violet-600 dark:text-violet-400' : 'text-zinc-400 dark:text-zinc-500'} />
        )}
        <span className="truncate">{label}</span>
    </button>
);

// Sidebar - OpenRouter exact style
const Sidebar = ({
    activeCategory,
    activeDocLink,
    onSelectDoc
}: {
    activeCategory: string;
    activeDocLink: string;
    onSelectDoc: (category: string, doc: DocQuestion) => void;
}) => {
    const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

    useEffect(() => {
        if (activeCategory && !expandedCategories.includes(activeCategory)) {
            setExpandedCategories(prev => [...prev, activeCategory]);
        }
    }, [activeCategory, expandedCategories]);

    const toggleCategory = (cat: string) => {
        setExpandedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    return (
        <aside className="fixed top-16 left-0 bottom-0 w-[220px] bg-white dark:bg-[#0a0a0a] border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto z-40 hidden lg:block hide-scrollbar">
            <nav className="p-3 space-y-1">
                {data.map((category, idx) => {
                    const isExpanded = expandedCategories.includes(category.category);
                    const isActiveGroup = category.category === activeCategory;
                    const Icon = getCategoryIcon(category.category);

                    return (
                        <div key={idx}>
                            {/* Category header */}
                            <button
                                onClick={() => toggleCategory(category.category)}
                                className={`flex items-center justify-between w-full px-3 py-[6px] text-left rounded-md transition-colors
                                    ${isActiveGroup && !isExpanded
                                        ? 'bg-violet-100 dark:bg-violet-500/15'
                                        : 'hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                                    }`}
                            >
                                <div className="flex items-center gap-2 min-w-0">
                                    <Icon
                                        size={15}
                                        strokeWidth={1.5}
                                        className={isActiveGroup
                                            ? 'text-violet-600 dark:text-violet-400 flex-shrink-0'
                                            : 'text-zinc-400 dark:text-zinc-500 flex-shrink-0'
                                        }
                                    />
                                    <span className={`text-[13.5px] truncate ${
                                        isActiveGroup
                                            ? 'text-violet-700 dark:text-violet-300 font-medium'
                                            : 'text-zinc-700 dark:text-zinc-300'
                                    }`}>
                                        {category.category}
                                    </span>
                                </div>
                                <ChevronDown
                                    size={14}
                                    className={`text-zinc-400 dark:text-zinc-500 flex-shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {/* Sub items */}
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="ml-5 mt-1 space-y-[2px]">
                                            {category.questions.map((q, qIdx) => (
                                                <SidebarItem
                                                    key={qIdx}
                                                    label={truncateTitle(q.question)}
                                                    isActive={activeDocLink === q.link}
                                                    onClick={() => onSelectDoc(category.category, q)}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
};

// SearchModal Component - matching agent-greta v2 style
const SearchModal = ({
    isOpen,
    onClose,
    onSelect
}: {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (category: string, doc: DocQuestion) => void;
}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<{ doc: DocQuestion; category: string }[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    // Group all docs for searching
    const allDocs = useMemo(() => {
        return data.flatMap(cat => cat.questions.map(q => ({ doc: q, category: cat.category })));
    }, []);

    // Default/suggested actions when search is empty
    const defaultActions = useMemo(() => {
        return allDocs.slice(0, 5);
    }, [allDocs]);

    // Items to display (either search results or defaults)
    const displayItems = query.trim() ? results : defaultActions;

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
            setQuery('');
            setResults([]);
            setSelectedIndex(0);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }
        const lowerQ = query.toLowerCase();
        const filtered = allDocs.filter(({ doc, category }) =>
            doc.question.toLowerCase().includes(lowerQ) ||
            doc.description.toLowerCase().includes(lowerQ) ||
            category.toLowerCase().includes(lowerQ)
        ).slice(0, 8);
        setResults(filtered);
        setSelectedIndex(0);
    }, [query, allDocs]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            const items = displayItems;
            if (items.length === 0) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % items.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + items.length) % items.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (items[selectedIndex]) {
                    onSelect(items[selectedIndex].category, items[selectedIndex].doc);
                    onClose();
                }
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, displayItems, selectedIndex, onSelect, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
                />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="w-full max-w-2xl bg-white dark:bg-[#0F0F0F] border border-zinc-200 dark:border-[#27272A] rounded-xl shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[60vh]"
                >
                    {/* Input Header */}
                    <div className="flex items-center gap-3 px-4 py-4 border-b border-zinc-200 dark:border-[#27272A] shrink-0">
                        <Search className="text-zinc-400 dark:text-gray-500" size={18} />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search documentation..."
                            className="bg-transparent border-none outline-none text-[15px] text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-gray-500 flex-1"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button onClick={onClose} className="px-2 py-1 bg-zinc-100 dark:bg-[#1F1F1F] rounded text-[10px] text-zinc-500 dark:text-gray-400 font-medium border border-zinc-200 dark:border-[#333]">ESC</button>
                    </div>

                    {/* Results Area */}
                    <div className="overflow-y-auto flex-1 p-2">
                        {query.trim() === '' ? (
                            <div className="flex flex-col gap-1">
                                <p className="text-[10px] uppercase font-bold text-zinc-400 dark:text-gray-600 px-3 py-2 flex items-center gap-2">
                                    <Zap size={12} /> Quick Actions
                                </p>
                                {defaultActions.map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            onSelect(item.category, item.doc);
                                            onClose();
                                        }}
                                        className={`flex items-start gap-3 px-3 py-3 rounded-lg text-left transition-colors group w-full
                                            ${idx === selectedIndex ? 'bg-zinc-100 dark:bg-[#1F1F1F]' : 'hover:bg-zinc-50 dark:hover:bg-[#151515]'}`}
                                    >
                                        <div className={`mt-0.5 p-1 rounded-md shrink-0 border ${idx === selectedIndex ? 'border-zinc-300 dark:border-gray-600 bg-zinc-200 dark:bg-[#27272A] text-zinc-700 dark:text-white' : 'border-zinc-200 dark:border-[#27272A] bg-zinc-100 dark:bg-[#151515] text-zinc-400 dark:text-gray-500'}`}>
                                            <Clock size={14} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className={`text-[13px] font-medium truncate ${idx === selectedIndex ? 'text-zinc-900 dark:text-white' : 'text-zinc-700 dark:text-gray-300'}`}>
                                                {item.doc.question}
                                            </h4>
                                            <p className="text-[12px] text-zinc-400 dark:text-gray-500 line-clamp-1">
                                                <span className="text-zinc-500 dark:text-gray-600 mr-2">{item.category}</span>
                                            </p>
                                        </div>
                                        {idx === selectedIndex && <CornerDownLeft size={14} className="ml-auto mt-2 text-zinc-400 dark:text-gray-500" />}
                                    </button>
                                ))}
                            </div>
                        ) : results.length > 0 ? (
                            <div className="flex flex-col gap-1">
                                <p className="text-[10px] uppercase font-bold text-zinc-400 dark:text-gray-600 px-3 py-2">Documentation</p>
                                {results.map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            onSelect(item.category, item.doc);
                                            onClose();
                                        }}
                                        className={`flex items-start gap-3 px-3 py-3 rounded-lg text-left transition-colors group w-full
                                            ${idx === selectedIndex ? 'bg-zinc-100 dark:bg-[#1F1F1F]' : 'hover:bg-zinc-50 dark:hover:bg-[#151515]'}`}
                                    >
                                        <div className={`mt-0.5 p-1 rounded-md shrink-0 border ${idx === selectedIndex ? 'border-zinc-300 dark:border-gray-600 bg-zinc-200 dark:bg-[#27272A] text-zinc-700 dark:text-white' : 'border-zinc-200 dark:border-[#27272A] bg-zinc-100 dark:bg-[#151515] text-zinc-400 dark:text-gray-500'}`}>
                                            <FileText size={14} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className={`text-[13px] font-medium truncate ${idx === selectedIndex ? 'text-zinc-900 dark:text-white' : 'text-zinc-700 dark:text-gray-300'}`}>
                                                {item.doc.question}
                                            </h4>
                                            <p className="text-[12px] text-zinc-400 dark:text-gray-500 line-clamp-1">
                                                <span className="text-zinc-500 dark:text-gray-600 mr-2">{item.category}</span>
                                                {item.doc.description}
                                            </p>
                                        </div>
                                        {idx === selectedIndex && <CornerDownLeft size={14} className="ml-auto mt-2 text-zinc-400 dark:text-gray-500" />}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="py-8 text-center text-zinc-400 dark:text-gray-500 text-sm">
                                No results found for &quot;<span className="text-zinc-600 dark:text-gray-300">{query}</span>&quot;
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-2 bg-zinc-50 dark:bg-[#151515] border-t border-zinc-200 dark:border-[#27272A] flex items-center justify-between text-[11px] text-zinc-400 dark:text-gray-500 shrink-0">
                        <span>Search docs, guides, and more</span>
                        <div className="flex gap-3">
                            <span className="flex items-center gap-1"><span className="bg-zinc-200 dark:bg-[#2D2D2D] px-1 rounded">↑</span><span className="bg-zinc-200 dark:bg-[#2D2D2D] px-1 rounded">↓</span> to navigate</span>
                            <span className="flex items-center gap-1"><span className="bg-zinc-200 dark:bg-[#2D2D2D] px-1 rounded">Enter</span> to select</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default function DocPageClient() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const contentRef = useRef<HTMLDivElement>(null);
    const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string }[]>([]);
    const [activeSection, setActiveSection] = useState<string>('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const docData = useMemo(() => {
        return getDocByLink(`/learninghub/${id}`);
    }, [id]);

    const ActiveDocComponent = docData?.doc?.docId ? docComponents[docData.doc.docId] : null;
    const Icon = docData ? getCategoryIcon(docData.category) : Layers;

    // Handle document selection - navigate to doc URL
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleSelectDoc = useCallback((_category: string, doc: DocQuestion) => {
        if (!doc || !doc.docId) return;
        const linkPath = doc.link.replace('/learninghub/', '');
        router.push(`/learninghub/${linkPath}`);
    }, [router]);

    // Keyboard shortcut for search (Cmd+K or Ctrl+K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
            }
            if (e.key === '/' && !isSearchOpen) {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isSearchOpen]);

    // Extract TOC from rendered content
    useEffect(() => {
        const timer = setTimeout(() => {
            if (contentRef.current) {
                const headers = contentRef.current.querySelectorAll('[data-section-id]');
                const toc = Array.from(headers).map(h => ({
                    id: h.getAttribute('data-section-id') || '',
                    text: h.textContent || ''
                })).filter(item => item.id && item.text);
                setTableOfContents(toc);
                if (toc.length > 0) setActiveSection(toc[0].id);
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [docData]);

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (!contentRef.current) return;
            const sections = contentRef.current.querySelectorAll('[data-section-id]');
            let current = '';
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150) current = section.getAttribute('data-section-id') || '';
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    if (!docData) {
        return (
            <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center px-6"
                >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                        <Layers size={28} className="text-white" />
                    </div>
                    <h1 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">Document Not Found</h1>
                    <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-sm">The requested documentation page doesn't exist or may have been moved.</p>
                    <motion.button
                        onClick={() => router.push('/learninghub')}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-violet-500/25 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <ChevronRight size={16} className="rotate-180" />
                        Back to Learning Hub
                    </motion.button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white">
            <TopBar onOpenSearch={() => setIsSearchOpen(true)} />

            {/* Search Modal */}
            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                onSelect={handleSelectDoc}
            />

            {/* Sidebar */}
            <Sidebar
                activeCategory={docData.category}
                activeDocLink={docData.doc.link}
                onSelectDoc={handleSelectDoc}
            />

            {/* Main content area */}
            <main className="lg:ml-[220px] pt-[60px] min-h-screen">
                <div className="flex">
                    {/* Content column */}
                    <article className="flex-1 max-w-3xl mx-auto px-6 lg:px-8 py-12">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-1.5 text-[13px] mb-8">
                            <button
                                onClick={() => router.push('/')}
                                className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
                            >
                                Home
                            </button>
                            <ChevronRight size={14} className="text-zinc-400 dark:text-zinc-600" />
                            <button
                                onClick={() => router.push('/learninghub')}
                                className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
                            >
                                Docs
                            </button>
                            <ChevronRight size={14} className="text-zinc-400 dark:text-zinc-600" />
                            <span className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 font-medium">
                                <Icon size={14} className="text-violet-500" />
                                {docData.category}
                            </span>
                        </nav>

                        {/* Description callout */}
                        {docData.doc.description && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-10 p-5 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-500/5 dark:to-indigo-500/5 border border-violet-200/60 dark:border-violet-500/10 rounded-2xl"
                            >
                                <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    {docData.doc.description}
                                </p>
                            </motion.div>
                        )}

                        {/* Doc content */}
                        <motion.div
                            ref={contentRef}
                            className="doc-content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            {docData && <SchemaOrg doc={docData.doc} category={docData.category} />}
                            {ActiveDocComponent ? <ActiveDocComponent /> : null}
                        </motion.div>

                        {/* Footer navigation hint */}
                        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                            <p className="text-sm text-zinc-500 dark:text-zinc-500">
                                Need help? Check out our other guides in the sidebar or{' '}
                                <button
                                    onClick={() => router.push('/learninghub')}
                                    className="text-violet-600 dark:text-violet-400 hover:underline font-medium"
                                >
                                    browse all documentation
                                </button>.
                            </p>
                        </div>
                    </article>

                    {/* Table of Contents */}
                    <aside className="hidden xl:block w-[220px] shrink-0 pr-6">
                        <div className="sticky top-24 pt-8">
                            {/* TOC Header */}
                            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                                <Clock size={14} className="text-zinc-400 dark:text-zinc-500" />
                                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider">
                                    On This Page
                                </span>
                            </div>

                            {/* TOC Items */}
                            <nav className="flex flex-col gap-0.5">
                                {tableOfContents.map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`relative text-left text-[13px] py-2 pl-3 pr-2 rounded-lg transition-all duration-150 line-clamp-2
                                            ${activeSection === item.id
                                                ? 'text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-500/10 font-medium'
                                                : 'text-zinc-500 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
                                            }`}
                                    >
                                        {/* Active indicator */}
                                        {activeSection === item.id && (
                                            <motion.span
                                                layoutId="toc-indicator"
                                                className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-violet-500 rounded-full"
                                            />
                                        )}
                                        {item.text}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
