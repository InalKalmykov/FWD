// interfaces.ts

// Example interface for a Project
export interface Project {
  id: number;
  name: string;
  description: string;
  // Add more fields as needed
}

export interface Comic {
  title: string;
  img: string;
  alt: string;
  year: string; // Assuming year, month, and day are strings
  month: string;
  day: string;
  transcript?: string;
}



export interface ComicIdResponse {
  id: number;
}

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;




