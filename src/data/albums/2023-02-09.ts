import { IAlbum } from "../../common/Album";

const album: IAlbum = {
  title: 'Let there be Church',
  date: new Date(2023, 1, 12),
  img: '/img/crossroads-devil.jpeg',
  tracks: [
    {
      title: 'Breakthrough',
      src: '/songs/2023-02-09/breakthrough.mp3',
    },
    {
      title: 'Bring It',
      src: '/songs/2023-02-09/bring_it.mp3',
    },
    {
      title: 'Mouth Horn Jazz',
      src: '/songs/2023-02-09/mouth_horn_jazz.mp3',
    },
    {
      title: 'Take me there',
      src: '/songs/2023-02-09/take_me_there.mp3'
    }
  ]
}
export default album;