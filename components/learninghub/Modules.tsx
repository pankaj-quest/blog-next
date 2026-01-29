'use client';

import Image from 'next/image';

export const Topbar = ({ text }: { text: string }) => {
    return <></>;
};

export const Creator = ({ children }: { children: React.ReactNode; tableOfContent?: string[] }) => {
    return <div className="doc-creator-root space-y-0">{children}</div>;
};

export const HeroHeader = ({ text }: { text: string }) => {
    const id = text ? text.toLowerCase().trim().split(' ').join('-') : '';
    return (
        <h1
            className="text-[2.5rem] md:text-[2.75rem] font-bold leading-[1.2] tracking-tight text-zinc-900 dark:text-white mb-2"
            data-section-id={id}
            id={id}
        >
            {text}
        </h1>
    );
};

export const Heading1 = ({ children, className, text }: { children: React.ReactNode; className?: string; text?: string }) => {
    const content = typeof children === 'string' ? children : text || '';
    const id = content ? content.toLowerCase().trim().split(' ').join('-') : '';
    return (
        <h2
            className={`${className || ''} text-[1.5rem] font-semibold leading-[1.3] tracking-tight mt-12 mb-4 text-zinc-800 dark:text-zinc-100 flex items-center gap-3 group`}
            data-section-id={id}
            id={id}
        >
            <span className="w-1 h-6 bg-gradient-to-b from-violet-500 to-blue-500 rounded-full opacity-80"></span>
            {children}
        </h2>
    );
};

export const Heading2 = ({ children, className, text }: { children: React.ReactNode; className?: string; text?: string }) => {
    const content = typeof children === 'string' ? children : text || '';
    const id = content ? content.toLowerCase().trim().split(' ').join('-') : '';
    return (
        <h3
            className={`${className || ''} text-[1.125rem] font-semibold leading-[1.4] mt-8 mb-3 text-zinc-700 dark:text-zinc-200`}
            data-section-id={id}
            id={id}
        >
            {children}
        </h3>
    );
};

export const Content1 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <p className={`text-[1rem] leading-[1.75] mt-4 text-zinc-600 dark:text-zinc-400 ${className || ''}`}>
            {children}
        </p>
    );
};

export const Content2 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <p className={`text-[1rem] leading-[1.75] mt-3 text-zinc-600 dark:text-zinc-400 ${className || ''}`}>
            {children}
        </p>
    );
};

type ListDataType = React.ReactNode[] | Record<string, string>;

export const ListContent = ({ listData, style, listType = 'ul' }: { listData: ListDataType; style?: React.CSSProperties; listType?: 'ul' | 'ol' }) => {
    const renderList = () => {
        if (Array.isArray(listData)) {
            return listData.map((ele, index) => (
                <li
                    className="text-[1rem] leading-[1.75] text-zinc-600 dark:text-zinc-400 pl-2"
                    style={style}
                    key={index}
                >
                    {ele}
                </li>
            ));
        }
        return Object.keys(listData).map((ele, index) => (
            <li className="mt-4 pl-2" style={style} key={index}>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{ele}:</span>
                <span className="text-zinc-600 dark:text-zinc-400 ml-1">{listData[ele]}</span>
            </li>
        ));
    };

    const listClasses = listType === 'ul'
        ? "list-disc marker:text-violet-500 dark:marker:text-violet-400"
        : "list-decimal marker:text-violet-500 dark:marker:text-violet-400";

    return (
        <ul className={`${listClasses} ml-6 mt-4 space-y-3`} style={style}>
            {renderList()}
        </ul>
    );
};

export const ImageContent = ({ img, altText, style }: { img: string; altText: string; style?: React.CSSProperties }) => {
    return (
        <figure className="relative w-full mt-6 mb-2 group">
            <div className="relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                    src={img}
                    alt={altText}
                    className="w-full h-auto object-cover"
                    style={style}
                    loading="lazy"
                />
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
        </figure>
    );
};

export const TableContent = ({ columns, data }: { columns: string[]; data: Record<string, string>[] }) => {
    return (
        <div className="overflow-x-auto mt-6 mb-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="min-w-full">
                <thead>
                    <tr className="bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="py-3.5 px-4 text-left text-[0.8125rem] font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400"
                            >
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors"
                        >
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="py-3.5 px-4 text-[0.9375rem] text-zinc-700 dark:text-zinc-300"
                                >
                                    {row[column] || '—'}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

