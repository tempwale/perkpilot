export interface ShareMetadata {
  url: string;
  title?: string;
  description?: string;
  category?: string;
  readTime?: string;
  tags?: string[];
  pageType?: string;
  author?: string;
  publishedAt?: string;
}

export interface ShareContent {
  body: string;
  copy: string;
  hashtags: string[];
}

export interface PlatformShareLinks {
  x: string;
  linkedin: string;
  instagram: string;
}

export interface SharePayload {
  content: ShareContent;
  links: PlatformShareLinks;
  webShareData: {
    title: string;
    text: string;
    url: string;
  };
}

const sanitize = (value?: string): string => {
  if (!value) return "";
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
};

const truncate = (value: string, limit = 220): string => {
  if (value.length <= limit) return value;
  return `${value.slice(0, limit - 1)}…`;
};

const capitalize = (value: string): string => {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const toHashtag = (value: string): string => {
  const cleaned = value.replace(/[^a-zA-Z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  if (!cleaned.length) return "";
  return cleaned
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};

const buildHashtags = (meta: ShareMetadata): string[] => {
  const seeds = [
    meta.category,
    ...(meta.tags ?? []),
    meta.pageType,
    "PerkPilot",
  ]
    .map(sanitize)
    .filter(Boolean)
    .map(toHashtag)
    .filter(Boolean);

  const uniqueTags = Array.from(new Set(seeds));
  return uniqueTags.slice(0, 4).map((tag) => `#${tag}`);
};

const buildShareBody = (meta: ShareMetadata): ShareContent => {
  const normalizedTitle = sanitize(meta.title) || "PerkPilot Insight";
  const normalizedDescription = sanitize(meta.description);
  const normalizedCategory = sanitize(meta.category);
  const normalizedReadTime = sanitize(meta.readTime);
  const normalizedPageType = sanitize(meta.pageType);

  const headerParts = [
    normalizedTitle,
    normalizedCategory ? `Category: ${normalizedCategory}` : undefined,
    normalizedReadTime ? `Read time: ${normalizedReadTime}` : undefined,
    normalizedPageType
      ? `via PerkPilot ${capitalize(normalizedPageType)}`
      : "via PerkPilot",
  ].filter(Boolean);

  const header = headerParts.join(" • ");
  const excerpt = normalizedDescription ? truncate(normalizedDescription) : "";
  const body = [header, excerpt].filter(Boolean).join("\n\n");
  const copy = body ? `${body}\n\n${meta.url}` : meta.url;

  return {
    body,
    copy,
    hashtags: buildHashtags(meta),
  };
};

export const createSharePayload = (meta: ShareMetadata): SharePayload => {
  if (!meta.url) {
    throw new Error("Share URL is required to create a share payload.");
  }

  const content = buildShareBody(meta);
  const encodedUrl = encodeURIComponent(meta.url);
  const encodedBody = encodeURIComponent(content.body || content.copy);
  const encodedTitle = encodeURIComponent(
    sanitize(meta.title) || "PerkPilot Insight",
  );
  const hashtagsParam = content.hashtags.length
    ? `&hashtags=${content.hashtags
        .map((tag) => tag.replace("#", ""))
        .join(",")}`
    : "";

  const links: PlatformShareLinks = {
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedBody}${hashtagsParam}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedBody}&source=PerkPilot`,
    instagram: `https://www.instagram.com/create/story/?caption=${encodedBody}%0A${encodedUrl}`,
  };

  const webShareData = {
    title: sanitize(meta.title) || "PerkPilot Insight",
    text: content.body || content.copy,
    url: meta.url,
  };

  return {
    content,
    links,
    webShareData,
  };
};

export type { SharePayload as ShareArtifacts };

