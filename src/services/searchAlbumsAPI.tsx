export interface SearchResult {
  artistId: number;
  artistName: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  artworkUrl100: string;
  releaseDate: string;
  trackCount: number;
}

const searchAlbumsAPI = async (artist: string): Promise<SearchResult[]> => {
  const artistNameURL = encodeURI(artist).replaceAll('%20', '+');

  const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;

  const APIResponse = await fetch(getAlbumsAPI);

  const { results } = await APIResponse.json();

  // console.log(results);

  const response: SearchResult[] = results.map((item: SearchResult) => ({
    artistId: item.artistId,
    artistName: item.artistName,
    collectionId: item.collectionId,
    collectionName: item.collectionName,
    collectionPrice: item.collectionPrice,
    artworkUrl100: item.artworkUrl100,
    releaseDate: item.releaseDate,
    trackCount: item.trackCount,
  }));

  return response;
};

export default searchAlbumsAPI;
