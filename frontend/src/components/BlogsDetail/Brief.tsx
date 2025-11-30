import React, { type ReactElement } from "react";
import type { BlogTool } from "../../types/blogs.types";

interface BriefProps {
  title?: string;
  description?: string;
  content?: string; 
  bulletPoints?: string[];
  imageUrl?: string;
  dealsMentioned?: BlogTool[];
}

const highlightToolNames = (text: string, tools?: BlogTool[]): React.ReactElement => {
  if (!tools || tools.length === 0) {
    const lines = text.split('\n');
    return (
      <>
        {lines.map((line, idx) => (
          <React.Fragment key={idx}>
            <span className="text-zinc-200 text-base sm:text-lg md:text-xl font-normal font-['Poppins'] leading-loose">{line}</span>
            {idx < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </>
    );
  }

  const toolNames = tools.map(t => t.toolName);
  const parts: ReactElement[] = [];
  let lastIndex = 0;
  let keyCounter = 0;

  const pattern = new RegExp(`(${toolNames.map(name => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const matches = Array.from(text.matchAll(pattern));

  matches.forEach((match) => {
    const matchIndex = match.index!;
    const matchText = match[0];
  
    if (matchIndex > lastIndex) {
      const beforeText = text.substring(lastIndex, matchIndex);
      const beforeLines = beforeText.split('\n');
      beforeLines.forEach((line, idx) => {
        if (line) {
          parts.push(
            <span key={`text-${keyCounter++}`} className="text-zinc-200 text-base sm:text-lg md:text-xl font-normal font-['Poppins'] leading-loose">
              {line}
            </span>
          );
        }
        if (idx < beforeLines.length - 1) {
          parts.push(<br key={`br-${keyCounter++}`} />);
        }
      });
    }
    parts.push(
      <span key={`tool-${keyCounter++}`} className="text-[#737eff] text-base sm:text-lg md:text-xl font-normal font-['Poppins'] underline leading-loose">
        {matchText}
      </span>
    );
    
    lastIndex = matchIndex + matchText.length;
  });
  if (lastIndex < text.length) {
    const remainingText = text.substring(lastIndex);
    const remainingLines = remainingText.split('\n');
    remainingLines.forEach((line, idx) => {
      if (line) {
        parts.push(
          <span key={`text-${keyCounter++}`} className="text-zinc-200 text-base sm:text-lg md:text-xl font-normal font-['Poppins'] leading-loose">
            {line}
          </span>
        );
      }
      if (idx < remainingLines.length - 1) {
        parts.push(<br key={`br-${keyCounter++}`} />);
      }
    });
  }

  return <>{parts.length > 0 ? parts : <span className="text-zinc-200 text-base sm:text-lg md:text-xl font-normal font-['Poppins'] leading-loose">{text}</span>}</>;
};

export default function Brief({
  title = "Overview",
  description,
  content,
  bulletPoints = [],
  imageUrl,
  dealsMentioned,
}: BriefProps) {
  const hasBulletPoints = bulletPoints.length > 0;
  const textContent = content || description || "";
  
  // Check if content contains HTML tags (improved detection)
  const hasHTML = textContent && (
    /<[a-z][\s\S]*>/i.test(textContent) || 
    /<[a-z]+[^>]*>/i.test(textContent) ||
    textContent.includes('</') ||
    textContent.includes('/>')
  );

  return (
    <div 
      data-layer="Frame 2147206173"
      className="Frame2147206173 self-stretch p-4 sm:p-6 bg-white/10 rounded-3xl outline-1 -outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-4 sm:gap-6 w-full"
    >
      <div 
        data-layer={title}
        className="WhichIsBetter self-stretch justify-start text-neutral-50 text-2xl sm:text-[32px] md:text-[40px] font-semibold font-['Urbanist'] leading-tight"
      >
        {title}
      </div>

      <div className="self-stretch flex flex-col gap-4">
        {hasBulletPoints
          ? bulletPoints.map((point, index) => {
              const pointHasHTML = /<[a-z][\s\S]*>/i.test(point);
              return (
                <div 
                  key={`${point}-${index}`} 
                  data-layer="Frame 2147206202"
                  className="Frame2147206202 self-stretch inline-flex justify-start items-start gap-4"
                >
                  <div 
                    data-layer="Ellipse 6044"
                    className="Ellipse6044 w-2 h-2 bg-[#737eff] rounded-full shrink-0 mt-2"
                  />
                  <div 
                    data-layer="Frame 2147206166"
                      className="Frame2147206166 flex-1 flex-col justify-start items-start gap-4 min-w-0"
                  >
                    <div 
                        className="self-stretch prose prose-invert max-w-none break-words"
                      dangerouslySetInnerHTML={pointHasHTML ? { __html: point } : undefined}
                    >
                      {!pointHasHTML && highlightToolNames(point, dealsMentioned)}
                    </div>
                  </div>
                </div>
              );
            })
          : hasHTML ? (

              <div 
                className="self-stretch prose prose-invert max-w-none break-words"
                dangerouslySetInnerHTML={{ __html: textContent }}
                style={{
                  wordBreak: "break-word",
                }}
              />
            ) : (
              textContent
                .split(/\n+/)
                .map((paragraph) => paragraph.trim())
                .filter(Boolean)
                .map((paragraph, index) => (
                  <div 
                    key={`${paragraph}-${index}`}
                    data-layer="Frame 2147206202"
                    className="Frame2147206202 self-stretch inline-flex justify-start items-start gap-4"
                  >
                    <div 
                      data-layer="Ellipse 6044"
                      className="Ellipse6044 w-2 h-2 bg-[#737eff] rounded-full shrink-0 mt-2"
                    />
                    <div 
                      data-layer="Frame 2147206166"
                      className="Frame2147206166 flex-1 flex-col justify-start items-start gap-4 min-w-0"
                    >
                    <div className="self-stretch justify-start text-zinc-200 text-base sm:text-lg md:text-xl font-normal font-['Poppins'] leading-loose break-words">
                        {highlightToolNames(paragraph, dealsMentioned)}
                      </div>
                    </div>
                  </div>
                ))
            )}
      </div>

      {imageUrl && imageUrl.trim() ? (
        <div 
          data-layer="Rectangle 39984"
          className="Rectangle39984 self-stretch h-[200px] sm:h-[300px] md:h-[400px] bg-white/10 rounded-3xl border border-white/10 overflow-hidden w-full"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : null}      
      <style>{`
        /* Base prose styles - matches editor base styles */
        .prose {
          color: #e4e4e7;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          line-height: 1.75;
          white-space: normal;
        }
        
        /* Ensure proper rendering of all HTML elements */
        .prose * {
          box-sizing: border-box;
        }
        
        /* Preserve inline font-size from editor */
        .prose [style*="font-size"],
        .prose [style*="fontSize"] {
          /* Inline styles will override base font-size */
        }
        
        /* Ensure divs and spans preserve their styling */
        .prose div,
        .prose span {
          /* Allow inline styles to work */
        }
        
        /* Headings */
        .prose h1 {
          font-size: 2em;
          font-weight: bold;
          margin: 0.67em 0;
          color: #fafafa;
          line-height: 1.2;
        }
        .prose h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin: 0.83em 0;
          color: #fafafa;
          line-height: 1.3;
        }
        .prose h3 {
          font-size: 1.17em;
          font-weight: bold;
          margin: 1em 0;
          color: #fafafa;
          line-height: 1.4;
        }
        .prose h4 {
          font-size: 1em;
          font-weight: bold;
          margin: 1.33em 0;
          color: #fafafa;
        }
        .prose h5 {
          font-size: 0.83em;
          font-weight: bold;
          margin: 1.67em 0;
          color: #fafafa;
        }
        .prose h6 {
          font-size: 0.67em;
          font-weight: bold;
          margin: 2.33em 0;
          color: #fafafa;
        }
        
        /* Paragraphs */
        .prose p {
          margin: 1em 0;
          color: #e4e4e7;
        }
        
        /* Text formatting */
        .prose strong,
        .prose b {
          font-weight: bold;
          color: #fafafa;
        }
        .prose em,
        .prose i {
          font-style: italic;
        }
        .prose u {
          text-decoration: underline;
        }
        .prose s,
        .prose strike,
        .prose del {
          text-decoration: line-through;
        }
        .prose sub {
          font-size: 0.8em;
          vertical-align: sub;
        }
        .prose sup {
          font-size: 0.8em;
          vertical-align: super;
        }
        
        /* Lists - Enhanced styling for proper rendering */
        .prose ul,
        .prose ol {
          padding-left: 2em;
          margin: 1em 0;
          color: #e4e4e7;
          list-style-position: outside;
          display: block;
        }
        .prose ul {
          list-style-type: disc;
        }
        .prose ol {
          list-style-type: decimal;
        }
        .prose li {
          margin: 0.5em 0;
          padding-left: 0.5em;
          color: #e4e4e7;
          display: list-item;
          list-style-position: outside;
        }
        /* Nested lists */
        .prose ul ul,
        .prose ol ol,
        .prose ul ol,
        .prose ol ul {
          margin: 0.5em 0;
          padding-left: 2em;
        }
        .prose ul ul {
          list-style-type: circle;
        }
        .prose ul ul ul {
          list-style-type: square;
        }
        .prose ol ol {
          list-style-type: lower-alpha;
        }
        .prose ol ol ol {
          list-style-type: lower-roman;
        }
        /* Ensure list items are properly displayed */
        .prose li::marker {
          color: #e4e4e7;
        }
        /* Fix for empty list items */
        .prose li:empty {
          min-height: 1.5em;
        }
        /* Preserve spacing in list items */
        .prose li p {
          margin: 0.5em 0;
          display: inline;
        }
        .prose li p:first-child {
          margin-top: 0;
        }
        .prose li p:last-child {
          margin-bottom: 0;
        }
        
        /* Text alignment */
        .prose [style*="text-align: left"],
        .prose [align="left"] {
          text-align: left;
        }
        .prose [style*="text-align: center"],
        .prose [align="center"] {
          text-align: center;
        }
        .prose [style*="text-align: right"],
        .prose [align="right"] {
          text-align: right;
        }
        .prose [style*="text-align: justify"],
        .prose [align="justify"] {
          text-align: justify;
        }
        
        /* Links */
        .prose a {
          color: #737eff;
          text-decoration: underline;
        }
        .prose a:hover {
          opacity: 0.8;
        }
        
        /* Images - Enhanced to match editor */
        .prose img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 16px 0;
          display: block;
        }
        /* Support for resized images from editor */
        .prose img[style*="width"],
        .prose img[style*="height"] {
          /* Preserve editor-set dimensions */
        }
        .prose .image-resize-wrapper {
          margin: 16px 0;
          display: block;
          position: relative;
          max-width: 100%;
        }
        .prose .image-resize-wrapper img {
          margin: 0;
          display: block;
        }
        /* Hide resize handles on frontend */
        .prose .image-resize-wrapper .resize-handle {
          display: none !important;
        }
        
        /* YouTube embeds - Enhanced to match editor */
        .prose [data-youtube-wrapper] {
          width: 100%;
          max-width: 800px;
          margin: 20px auto;
          position: relative;
          display: flex;
          justify-content: center;
          padding: 0;
          outline: none !important;
          border: none !important;
        }
        .prose [data-youtube-embed] {
          width: 800px;
          max-width: 100%;
          margin: 0 auto;
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          border-radius: 8px;
          overflow: hidden;
          background-color: #000;
          outline: none !important;
          border: none !important;
        }
        .prose [data-youtube-embed] iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
          pointer-events: auto;
        }
        /* Support for resized YouTube embeds from editor */
        .prose [data-youtube-embed][style*="width"],
        .prose [data-youtube-embed][style*="height"] {
          padding-bottom: 0;
          height: auto;
        }
        .prose [data-youtube-embed][style*="width"] iframe {
          position: relative;
        }
        
        /* Hide editor-specific elements on frontend */
        .prose .resize-handle,
        .prose .iframe-resize-handle {
          display: none !important;
        }
        .prose .resizable-iframe {
          outline: none !important;
          border: none !important;
        }
        
        /* Blockquotes */
        .prose blockquote {
          margin: 1em 0;
          padding-left: 1em;
          border-left: 3px solid #737eff;
          color: #a1a1aa;
          font-style: italic;
        }
        
        /* Code */
        .prose code {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.9em;
        }
        .prose pre {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 1em;
          border-radius: 8px;
          overflow-x: auto;
          margin: 1em 0;
        }
        .prose pre code {
          background: none;
          padding: 0;
        }
        
        /* Horizontal rule */
        .prose hr {
          border: none;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin: 2em 0;
        }
        
        /* Preserve inline styles from editor - inline styles have highest specificity */
        /* Inline styles will naturally override CSS rules, so we don't need to do anything special */
        
        /* However, ensure our base styles don't use !important which would override inline styles */
        /* All styles above use normal specificity, so inline styles will work correctly */
        
        /* Fix for content that might have been corrupted or improperly formatted */
        .prose br {
          display: block;
          margin: 0.5em 0;
          content: "";
        }
        
        /* Ensure proper spacing between paragraphs and lists */
        .prose p + ul,
        .prose p + ol,
        .prose ul + p,
        .prose ol + p {
          margin-top: 1em;
        }
        
        /* Preserve all formatting exactly as written */
        .prose {
          /* Don't normalize whitespace - preserve it */
          white-space: normal;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        
        /* Ensure list content is properly displayed */
        .prose li > * {
          display: inline;
        }
        .prose li > *:first-child {
          display: inline;
        }
        
        /* Additional editor feature support */
        
        /* Support for mixed content in lists */
        .prose li strong,
        .prose li b,
        .prose li em,
        .prose li i,
        .prose li u,
        .prose li a {
          display: inline;
        }
        
        /* Support for paragraphs within lists (from editor) */
        .prose li p {
          margin: 0.25em 0;
          display: block;
        }
        .prose li p:first-child {
          margin-top: 0;
          display: inline;
        }
        .prose li p:last-child {
          margin-bottom: 0;
        }
        .prose li p:only-child {
          display: inline;
        }
        
        /* Support for nested formatting */
        .prose strong em,
        .prose em strong,
        .prose b i,
        .prose i b {
          font-weight: bold;
          font-style: italic;
        }
        
        /* Support for text with multiple formatting */
        .prose u strong,
        .prose strong u {
          text-decoration: underline;
          font-weight: bold;
        }
        
        /* Ensure proper rendering of empty paragraphs */
        .prose p:empty {
          min-height: 1em;
        }
        .prose p:empty::before {
          content: "\\200B"; /* Zero-width space */
        }
        
        /* Support for line breaks within paragraphs */
        .prose p br {
          display: block;
          margin: 0.5em 0;
          content: "";
        }
        
        /* Support for editor-created divs with formatting */
        .prose div[style] {
          /* Preserve all inline styles */
        }
        
        /* Support for editor-created spans with formatting */
        .prose span[style] {
          /* Preserve all inline styles */
        }
        
        /* Ensure proper text direction (editor uses ltr) */
        .prose {
          direction: ltr;
          text-align: left;
        }
        .prose [dir="rtl"] {
          direction: rtl;
          text-align: right;
        }
        
        /* Support for editor font size changes */
        .prose [style*="font-size"] {
          /* Inline font-size takes precedence */
        }
        
        /* Ensure proper rendering of all text nodes */
        .prose {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}
