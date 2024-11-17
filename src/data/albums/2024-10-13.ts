import { IAlbum } from "../../common/Album";

const album: IAlbum = {
  title: "Bitesize Perfection",
  date: new Date(2024, 9, 13),
  img: "/img/chicken-band.jpeg",
  tracks: [
    {
      title: "A Frantic Initialization",
      src: "/songs/2024-10-13/a_frantic_initialization.mp3",
      duration: 460.128,
    },
    {
      title: "Flange Relax",
      src: "/songs/2024-10-13/flange_relax.mp3",
      duration: 732.792,
    },
    {
      title: "Peter Gunn's Insurrection",
      src: "/songs/2024-10-13/peter_gunns_insurrection.mp3",
      duration: 765.576,
    },
  ],
};
export default album;
