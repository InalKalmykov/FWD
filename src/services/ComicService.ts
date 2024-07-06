import { Comic, ComicIdResponse } from '../interfaces';

class ComicService {
  static async fetchComicId(): Promise<ComicIdResponse> {
    const email = 'i.kalmykov@innopolis.university'; // Replace with your email
    const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`;
    
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error fetching comic ID: ${response.status}`);
    }
    
    return response.json();
  }

  static async fetchComic(comicId: number): Promise<Comic> {
    const comicUrl = `https://xkcd.com/${comicId}/info.0.json`;

    const response = await fetch(comicUrl);
    if (!response.ok) {
      throw new Error(`Error fetching XKCD comic: ${response.status}`);
    }
    
    return response.json();
  }
}

export default ComicService;
