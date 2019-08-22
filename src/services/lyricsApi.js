export const getLyrics = (artist, title) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => {
      if(!res.ok) throw 'Unable to fetch them lyrics';
      return res.json();
    });
};
