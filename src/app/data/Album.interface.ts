export interface IPerson {
  firstName: string;
  lastName: string;
  bio: string;
  img: string;
}
export interface IAlbumTrack {
  src: string;
  title: string;
  duration?: number;
}
export interface IAlbum {
  date: Date;
  img: string;
  title: string;
  tracks: IAlbumTrack[];
}
export function getYear(album: IAlbum) {
  return album.date ? album.date.getFullYear().toString() : "";
}
export function getMonth(album: IAlbum) {
  return album.date
    ? Number(album.date.getMonth() + 1)
        .toString()
        .padStart(2, "0")
    : "";
}
export function getDay(album: IAlbum) {
  return album.date
    ? Number(album.date.getDate()).toString().padStart(2, "0")
    : "";
}
export function getDateSlug(album: IAlbum): string {
  return `${getYear(album)}/${getMonth(album)}/${getDay(album)}`;
}

export interface ICombinedTrackList extends IAlbumTrack {
  album: IAlbum;
}
