const mm = require('music-metadata');
const fs = require('fs');
const final = [];
(async () => {
  try {
    const dir = getDirectories('./public/songs')
    const lastDir = dir[dir.length - 1];
    const current = `./public/songs/${lastDir}`;
    const files = getFiles(current);
    for(let i=0; i<files.length; i++) {
      const file = files[i];
      const metadata = await mm.parseFile(`${current}/${file}`);
      final.push({
        title: metadata.common.title,
        album: metadata.common.album,
        no: metadata.common.track.no,
        src: `/songs/${lastDir}/${file}`
      });
    }
    console.log(final.sort((a, b) => a.no - b.no).map((item) => ({ title: item.title, src: item.src })));
  } catch (error) {
    console.error(error.message);
  }
})();

function getDirectories(source) {
  return fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
}
function getFiles(source) {
  return fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => !dirent.isDirectory())
    .map(dirent => dirent.name);
}