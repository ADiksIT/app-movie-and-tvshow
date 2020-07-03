export class Request {
  async getData(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error from url = ${url}, status ${response.status}`);
    }
    return await response.json();
  }
}
