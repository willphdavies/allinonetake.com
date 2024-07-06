import { IAlbum, getDateSlug, getMonth, getYear } from "./Album.interface";
import { albums } from "./albums";
export function findAlbums(
  year: string,
  month?: string,
  day?: string
): IAlbum[] {
  if (!year) {
    throw new Error("Year not set");
  }
  if (!month && !day) {
    return albums.filter((album) => getYear(album) === year);
  }
  if (month && !day) {
    return albums.filter(
      (album) => `${getYear(album)}/${getMonth(album)}` === `${year}/${month}`
    );
  }
  return albums.filter(
    (album) => getDateSlug(album) === `${year}/${month}/${day}`
  );
}
