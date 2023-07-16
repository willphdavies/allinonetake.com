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
export class AlbumModel implements IAlbum {
  date!: Date;
  img!: string;
  title!: string;
  tracks!: IAlbumTrack[];
  get year() {
    return this.date.getFullYear().toString();
  }
  get month() {
    return Number(this.date.getMonth() + 1).toString().padStart(2,'0');
  }
  get day() {
    return Number(this.date.getDate()).toString().padStart(2,'0');
  }
  get dateSlug() {
    return `${this.year}/${this.month}/${this.day}`;
  }
}