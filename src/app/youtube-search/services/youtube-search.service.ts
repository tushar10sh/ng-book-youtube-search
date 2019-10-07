import { Injectable, Inject } from '@angular/core';

export const YOUTUBE_API_KEY: string = 'XXXX';
export const YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

@Injectable()
export class YoutubeSearchService {

  constructor(
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) { }

}