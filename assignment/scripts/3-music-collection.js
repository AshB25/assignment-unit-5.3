console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

myCollection = [];

function addToCollection(collection, title, artist, yearPublished){
  let music = {
    title : `${title}`,
    artist : `${artist}`,
    yearPublished : `${yearPublished}`,
  };
collection.push(music);
return music;
}
addToCollection(myCollection, 'Days Are Gone', 'Haim', 2013);
addToCollection(myCollection,'The Miseducation of Lauryn Hill', 'Lauryn Hill',1998);
addToCollection(myCollection, 'Selena LIVE! The Last Concert','Selena', 1993);
addToCollection(myCollection,'Tori', 'Tori Kelly', 2023);
addToCollection(myCollection, 'Musiq Soulchild', 'Victims & Villains', 2023);
addToCollection(myCollection, 'The Age of Pleasure', 'Janelle Monae', 2023);
console.log(myCollection);











// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
