import { IAlbum } from "../../common/Album";

const album: IAlbum = {
  title: 'Chippin\' Away at Church',
  date: new Date(2023, 4, 28),
  img: '/img/jellyfish.jpeg',
  tracks: [
    {
      title: 'Smell The Funk',
      src: '/songs/2023-05-28/smell_the_funk.mp3',
    },
    {
      title: '7 Days a Week',
      src: '/songs/2023-05-28/seven_days_a_week.mp3',
    },
    {
      title: 'Jellyfish',
      src: '/songs/2023-05-28/jellyfish.mp3',
    },
    {
      title: 'Alchemist\'s Lab',
      src: '/songs/2023-05-28/alchemists_lab.mp3',
    },
    {
      title: 'Dreamscape Ballroom',
      src: '/songs/2023-05-28/dreamscape_ballroom.mp3',
    },
    {
      title: 'Another Sunday Afternoon',
      src: '/songs/2023-05-28/another_sunday_afternoon.mp3',
    },
    {
      title: 'The Lorian Mando',
      src: '/songs/2023-05-28/the_lorian_mando.mp3',
    },
  ]
}
export default album;