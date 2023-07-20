export interface SearchMusic {
  artistId?: number;
  artistName?: string;
  collectionId?: number;
  collectionName?: string;
  collectionPrice?: number;
  artworkUrl100?: string;
  releaseDate?: string;
  trackCount?: number;
  trackId?: number;
  trackName?: string;
  previewUrl?: string;
}

const getMusicsAPI = async (id: string | undefined) => {
  const url = `https://itunes.apple.com/lookup?id=${id}&entity=song`;
  const request = await fetch(url);

  const requestJson = await request.json();
  const results = requestJson.results;
  // console.log('results');
  // console.log(results);

  const response: SearchMusic[] = results.map((item: SearchMusic) => ({
    artistId: item.artistId,
    artistName: item.artistName,
    collectionId: item.collectionId,
    collectionName: item.collectionName,
    collectionPrice: item.collectionPrice,
    artworkUrl100: item.artworkUrl100,
    releaseDate: item.releaseDate,
    trackCount: item.trackCount,
    trackId: item.trackId,
    trackName: item.trackName,
    previewUrl: item.previewUrl,
  }));
  // console.log(response);
  return response;
};

export default getMusicsAPI;
