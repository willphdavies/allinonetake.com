import { IAlbum } from "../../common/Album";

const album: IAlbum = {
  title: "October Surprise",
  date: new Date(2023, 9, 15),
  img: "/img/stones.jpeg",
  tracks: [
    {
      title: "Pleased To Meet You",
      src: "/songs/2023-10-15/pleased_to_meet_you.mp3",
    },
    {
      title: "Pass It Around",
      src: "/songs/2023-10-15/pass_it_around.mp3",
    },
    {
      title: "Bigger Than The Government",
      src: "/songs/2023-10-15/bigger_than_the_government.mp3",
    },
    {
      title: "It's Only Rock & Roll",
      src: "/songs/2023-10-15/its_only_rock_and_roll.mp3",
    },
    { title: "Realign", src: "/songs/2023-10-15/realign.mp3" },
    { title: "Hoppu Doppu", src: "/songs/2023-10-15/hoppu_doppu.mp3" },
    {
      title: "Definitely Not A Cover",
      src: "/songs/2023-10-15/definitely_not_a_cover.mp3",
    },
    {
      title: "Only Original Stuff",
      src: "/songs/2023-10-15/only_original_stuff.mp3",
    },
    { title: "Egg Scramble", src: "/songs/2023-10-15/egg_scramble.mp3" },
    { title: "Practice Pad", src: "/songs/2023-10-15/practice_pad.mp3" },
    {
      title: "Boneyard Memo",
      src: "/songs/2023-10-15/boneyard_memo.mp3",
    },
  ],
};
export default album;
