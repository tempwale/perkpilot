
export interface BlogAuthor {
  _id?: string;
  authorName?: string;
  authorTitle?: string;
  authorImageURL?: string;
  authorDescription?: string;
}

export interface BlogTool {
  toolName: string;
  toolLogo: string;
  toolCategory: string;
  isVerified?: boolean;
}

export interface BlogModule {
  title: string;
  benefits: string[];
}

export interface BlogToolBlogCard {
  blogTitle: string;
  blogBody: string;
  blogImage?: string;
  dealsMentioned?: BlogTool[];
  additionalNote?: string;
}

export interface BlogMoreBlog {
  blogId?: string;
  blogSlug?: string;
  title?: string;
  description?: string;
  image?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  readingTime?: string;
  viewCount?: number;
  date?: string;
  blogHeading?: string;
  blogBody?: string;
  blogHeroImage?: string;
  blogCategory?: string;
  blogReadingTime?: string;
  blogIsPublished?: boolean;
  blogIsFeatured?: boolean;
}

export interface Blog {
  _id?: string;
  id?: string;
  blogHeading: string;
  blogBody: string;
  blogHeroImage: string;
  sectionHeadline?: string | undefined;
  tipBulbText?: string;
  blogToolsMentioned?: BlogTool[];
  blogAuthor?: string | BlogAuthor;
  blogCategory: string;
  blogReadingTime: string;
  modules?: BlogModule[];
  blogToolBlogCards?: BlogToolBlogCard[];
  moreBlogsSectionTitle?: string;
  moreBlogs?: BlogMoreBlog[];
  blogSlug: string;
  blogIsPublished?: boolean;
  blogIsFeatured?: boolean;
  blogViewCount?: number;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface BlogsResponse {
  data: Blog[];
  pagination: {
    current: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface FetchBlogsParams {
  page?: number;
  limit?: number;
  category?: string;
  published?: boolean | string;
  q?: string;
  sortBy?: string;
}