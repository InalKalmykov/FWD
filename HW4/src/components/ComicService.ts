import { Comic } from '../interfaces'; // Adjust import path based on your project structure

class ComicService {
  static async fetchComicNumber(): Promise<number> {
    try {
      const queryParams = new URLSearchParams("i.kalmykov@innopolis.university");
      const response = await fetch(`https://fwd.innopolis.university/api/hw2?${queryParams}`);
      if (!response.ok) {
        throw new Error('Failed to fetch comic identifier');
      }
      const { comicNumber } = await response.json();
      return comicNumber;
    } catch (error) {
      throw new Error('Error fetching comic identifier');
    }
  }

  static async fetchComic(): Promise<Comic> {
    try {
      const response = await fetch(`https://xkcd.com/${ComicService.fetchComicNumber()}/info.0.json`);
      if (!response.ok) {
        throw new Error('Failed to fetch comic');
      }
      const comicData = await response.json();
      return {
        title: comicData.title,
        img: comicData.img,
        alt: comicData.alt,
        year: comicData.year.toString(),
        month: comicData.month.toString(),
        day: comicData.day.toString(),
        transcript: comicData.transcript
      };
    } catch (error) {
      throw new Error('Error fetching comic');
    }
  }
}

export default ComicService;
