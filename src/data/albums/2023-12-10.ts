import { IAlbum } from "../../common/Album";

const album: IAlbum = {
  title: "Jubilicious Treats",
  date: new Date(2023, 11, 10),
  img: "/img/deep-state.jpeg",
  tracks: [
    { title: "Deep State", src: "/songs/2023-12-10/deep_state.mp3" },
    { title: "Cutting Edge", src: "/songs/2023-12-10/cutting_edge.mp3" },
    { title: "Funk It Up", src: "/songs/2023-12-10/funk_it_up.mp3" },
    {
      title: "Feel The Light",
      src: "/songs/2023-12-10/feel_the_light.mp3",
    },
    {
      title: "Silver Linings",
      src: "/songs/2023-12-10/silver_linings.mp3",
    },
    { title: "25 MOB", src: "/songs/2023-12-10/25_mob.mp3" },
    {
      title: "Glorious Triumph",
      src: "/songs/2023-12-10/glorius_triumph.mp3",
    },
    {
      title: "Message In A Bottle",
      src: "/songs/2023-12-10/message_in_a_bottle.mp3",
    },
  ],
};
export default album;
