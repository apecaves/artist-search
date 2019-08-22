export const getArtists = (artist, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=10&offset=${(page - 1) * 10}`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch that artist';
      return res.json();
    });
};

export const getReleaseList = (id, page) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&limit=10&offset=${(page - 1) * 10}`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch their releases';
      return res.json();
    });
};

export const getSongList = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch their songs';
      return res.json();
    })
    .then(res => {
      return {
        songs: res.recordings
      };
    });
};
