import axios, { AxiosResponse } from 'axios';

const API_KEY = '35271862-c304d87b31bef31fd52b5f4d8';

interface PixabayHit {
  previewURL: string;
  [k: string]: any;
}

interface PixabayResponse {
  hits: PixabayHit[];
  total: number;
  totalHits: number;
}

export async function fetchImages(searchQ: string): Promise<PixabayResponse> {
  const response: AxiosResponse<PixabayResponse> = await axios(
    `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(searchQ)}`
  );
  return response.data;
}
