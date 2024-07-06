import { IAlbum } from "../../common/Album";

const album: IAlbum = {
  title: "Givin' Thanks",
  date: new Date(2023, 10, 26),
  img: "/img/cowboys.jpeg",
  tracks: [
    {
      title: "Progression Tension",
      src: "/songs/2023-11-26/progression_tension.mp3",
    },
    { title: "Cloudwalkers", src: "/songs/2023-11-26/cloudwalkers.mp3" },
    { title: "Unwavering", src: "/songs/2023-11-26/unwavering.mp3" },
    {
      title: "Deep Space Station",
      src: "/songs/2023-11-26/deep_space_station.mp3",
    },
    { title: "Sand Dune", src: "/songs/2023-11-26/sand_dune.mp3" },
    { title: "Gateway", src: "/songs/2023-11-26/gateway.mp3" },
    { title: "Lava Lamp", src: "/songs/2023-11-26/lava_lamp.mp3" },
    {
      title: "Tenacity Capacity",
      src: "/songs/2023-11-26/tenacity_capacity.mp3",
    },
  ],
};
export default album;
