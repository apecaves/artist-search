const NUMBER_PER_PAGE = 24;

export const getArtists = (artist, page) => {
  const offset = (page - 1) * NUMBER_PER_PAGE;
  return fetch(
    `http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=24&offset=${offset}`
  ).then(res => {
    if(!res.ok) throw 'Unable to fetch that artist';
    return res.json();
  });
};

export const getReleaseList = (id, page) => {
  const offset = (page - 1) * NUMBER_PER_PAGE;
  return fetch(
    `http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&limit=24&offset=${offset}`
  ).then(res => {
    if(!res.ok) throw 'Unable to fetch their releases';
    return res.json();
  });
};

export const getSongList = id => {
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
