import { IAlbum } from "../../common/Album";

const album: IAlbum = {
  title: "Finely Tuned Machine",
  date: new Date(2024, 6, 28),
  img: "/img/car.jpeg",
  video: "/videos/car.mp4",
  tracks: [
    {
      title: "Calibration",
      src: "/songs/2024-07-28/calibration.mp3",
      duration: 881.088,
    },
    {
      title: "Test Drive",
      src: "/songs/2024-07-28/test_drive.mp3",
      duration: 765.216,
    },
    {
      title: "Open Road",
      src: "/songs/2024-07-28/open_road.mp3",
      duration: 852.864,
    },
    {
      title: "Scenic View",
      src: "/songs/2024-07-28/scenic_view.mp3",
      duration: 907.8,
    },
    {
      title: "Detour",
      src: "/songs/2024-07-28/detour.mp3",
      duration: 414.312,
    },
    {
      title: "U-Turn",
      src: "/songs/2024-07-28/u_turn.mp3",
      duration: 1052.928,
    },
    {
      title: "Turbo Charged",
      src: "/songs/2024-07-28/turbo_charged.mp3",
      duration: 681.864,
    },
    {
      title: "Round Trip",
      src: "/songs/2024-07-28/round_trip.mp3",
      duration: 1625.808,
    },
    {
      title: "Hovercraft",
      src: "/songs/2024-07-28/hovercraft.mp3",
      duration: 1047.864,
    },
  ],
};
export default album;
