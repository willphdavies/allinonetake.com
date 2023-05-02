export interface IPerson {
  firstName: string;
  lastName: string;
  bio: string;
  img: string;
}
export interface IAlbumTrack {
  src: string;
  title: string;
}
export interface IAlbum {
  date: Date;
  img: string;
  title: string;
  tracks: IAlbumTrack[];
}