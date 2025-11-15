import { AUTHORS_API } from "../config/backend";

export interface Author {
  _id: string;
  authorTitle: string;
  authorName: string;
  authorIndustry: string;
  authorViewProfileURL: string;
  authorDescription: string;
  authorImageURL?: string;
  authorXAccount?: string;
  authorIGAccount?: string;
  authorLinkedinAccount?: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchAuthorById = async (
  id: string,
  timeoutMs: number = 10000
): Promise<Author> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(`${AUTHORS_API}/${id}`, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        throw new Error("Request timeout");
      }
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
};
