export const getArtists = (artist, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=10&offset=${(page - 1) * 10}`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch that artist';
      return res.json();
    });
};
