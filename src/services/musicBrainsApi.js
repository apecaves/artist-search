export const getArtists = (artist) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch that artist';
      return res.json();
    });
};
