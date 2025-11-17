import { BLOGS_API } from "../config/backend";
import {type Blog, type BlogsResponse, type FetchBlogsParams } from "../types/blogs.types"




export const fetchBlogs = async (
  params: FetchBlogsParams = {}
): Promise<BlogsResponse> => {
  const {
    page = 1,
    limit = 20,
    category,
    published,
    q,
    sortBy = "-createdAt",
  } = params;

  const queryParams = new URLSearchParams();
  queryParams.append("page", page.toString());
  queryParams.append("limit", limit.toString());
  queryParams.append("sortBy", sortBy);
  
  if (category) {
    queryParams.append("category", category);
  }
  
  if (published !== undefined) {
    queryParams.append("published", published.toString());
  }
  
  if (q) {
    queryParams.append("q", q);
  }

  const url = `${BLOGS_API}?${queryParams.toString()}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs: ${response.statusText}`);
  }

  return response.json();
};

export const fetchBlogById = async (id: string): Promise<Blog> => {
  const response = await fetch(`${BLOGS_API}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blog: ${response.statusText}`);
  }

  return response.json();
};

export const fetchBlogBySlug = async (slug: string): Promise<Blog> => {
  const response = await fetch(`${BLOGS_API}/slug/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blog: ${response.statusText}`);
  }

  return response.json();
};