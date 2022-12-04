import { apiBase } from '../../enums/url';

class HttpApiService {
  async get(url, options) {
    let result = await fetch(`${apiBase}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options,
      },
    });
    return result.json();
  }
}

export const httpApiService = new HttpApiService();
