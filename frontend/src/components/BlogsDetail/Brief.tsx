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
            <span className="text-zinc-200 text-xl font-normal font-['Poppins'] leading-loose">{line}</span>
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
            <span key={`text-${keyCounter++}`} className="text-zinc-200 text-xl font-normal font-['Poppins'] leading-loose">
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
      <span key={`tool-${keyCounter++}`} className="text-[#737eff] text-xl font-normal font-['Poppins'] underline leading-loose">
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
          <span key={`text-${keyCounter++}`} className="text-zinc-200 text-xl font-normal font-['Poppins'] leading-loose">
            {line}
          </span>
        );
      }
      if (idx < remainingLines.length - 1) {
        parts.push(<br key={`br-${keyCounter++}`} />);
      }
    });
  }

  return <>{parts.length > 0 ? parts : <span className="text-zinc-200 text-xl font-normal font-['Poppins'] leading-loose">{text}</span>}</>;
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
  const paragraphs = textContent
    ? textContent
        .split(/\n+/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
    : [];

  return (
    <div 
      data-layer="Frame 2147206173"
      className="Frame2147206173 self-stretch p-6 bg-white/10 rounded-3xl outline-1 -outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-6"
    >
      <div 
        data-layer={title}
        className="WhichIsBetter self-stretch justify-start text-neutral-50 text-[32px] md:text-[40px] font-semibold font-['Urbanist'] leading-tight"
      >
        {title}
      </div>

      <div className="self-stretch flex flex-col gap-4">
        {hasBulletPoints
          ? bulletPoints.map((point, index) => (
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
                  className="Frame2147206166 flex-1 flex-col justify-start items-start gap-4"
                >
                  <div className="self-stretch justify-start">
                    {highlightToolNames(point, dealsMentioned)}
                  </div>
                </div>
              </div>
            ))
          : paragraphs.map((paragraph, index) => (
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
                  className="Frame2147206166 flex-1 flex-col justify-start items-start gap-4"
                >
                  <div className="self-stretch justify-start">
                    {highlightToolNames(paragraph, dealsMentioned)}
                  </div>
                </div>
              </div>
            ))}
      </div>

      {imageUrl ? (
        <div 
          data-layer="Rectangle 39984"
          className="Rectangle39984 self-stretch h-[300px] md:h-[400px] bg-white/10 rounded-3xl border border-white/10 overflow-hidden"
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
          className="Rectangle39984 self-stretch h-[300px] md:h-[400px] bg-white/10 rounded-3xl border border-white/10"
        />
      )}
    </div>
  );
}
