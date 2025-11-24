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
                        className="self-stretch justify-start text-zinc-200 text-base sm:text-lg md:text-xl font-normal font-['Poppins'] leading-loose prose prose-invert max-w-none break-words"
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
                className="self-stretch text-zinc-200 text-base sm:text-lg md:text-xl font-normal font-['Poppins'] leading-loose prose prose-invert max-w-none break-words"
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
                      <div className="self-stretch justify-start text-base sm:text-lg md:text-xl break-words">
                        {highlightToolNames(paragraph, dealsMentioned)}
                      </div>
                    </div>
                  </div>
                ))
            )}
      </div>

      {imageUrl ? (
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
      ) : (
        <div 
          data-layer="Rectangle 39984"
          className="Rectangle39984 self-stretch h-[200px] sm:h-[300px] md:h-[400px] bg-white/10 rounded-3xl border border-white/10 w-full"
        />
      )}      
      <style>{`
        .prose a {
          color: #737eff;
          text-decoration: underline;
        }
        .prose a:hover {
          opacity: 0.8;
        }
        .prose img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 16px 0;
          display: block;
        }
        .prose [data-youtube-embed] {
          width: 100%;
          max-width: 800px;
          margin: 20px auto;
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          border-radius: 8px;
          overflow: hidden;
        }
        .prose [data-youtube-embed] iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
      `}</style>
    </div>
  );
}
