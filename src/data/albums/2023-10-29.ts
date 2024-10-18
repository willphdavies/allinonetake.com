import { IAlbum } from "../../common/Album";

const album: IAlbum = {
  title: "Halloween Jamboree",
  date: new Date(2023, 9, 29),
  img: "/img/halloween.jpeg",
  video: "/videos/halloween.mp4",
  tracks: [
    {
      title: "Witches' Cauldron",
      src: "/songs/2023-10-29/witches_cauldron.mp3",
    },
    {
      title: "Lycanthropic Transformations",
      src: "/songs/2023-10-29/lycanthropic_transformations.mp3",
    },
    { title: "Pumkpin Pie", src: "/songs/2023-10-29/pumpkin_pie.mp3" },
    {
      title: "Costume Party",
      src: "/songs/2023-10-29/costume_party.mp3",
    },
    {
      title: "Dancing Skeletons",
      src: "/songs/2023-10-29/dancing_skeletons.mp3",
    },
    {
      title: "Ubiquitous Candy",
      src: "/songs/2023-10-29/ubiquitous_candy.mp3",
    },
    {
      title: "Thirsty Vampires",
      src: "/songs/2023-10-29/thirsty_vampires.mp3",
    },
    { title: "Dry Ice", src: "/songs/2023-10-29/dry_ice.mp3" },
    {
      title: "Ghostly Apparitions",
      src: "/songs/2023-10-29/ghostly_apparitions.mp3",
    },
    { title: "Candy Corn", src: "/songs/2023-10-29/candy_corn.mp3" },
    {
      title: "Haunted House",
      src: "/songs/2023-10-29/haunted_house.mp3",
    },
    {
      title: "Spooky Graveyard",
      src: "/songs/2023-10-29/spooky_graveyard.mp3",
    },
  ],
};
export default album;
