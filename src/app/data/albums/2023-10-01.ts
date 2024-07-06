import { IAlbum } from "../../common/Album";

const album: IAlbum = {
  title: 'Cooking with Gas',
  date: new Date(2023, 9, 1),
  img: '/img/hopscotch.jpeg',
  tracks: [
    {
      title: 'Double Dutch Hopscotch',
      src: '/songs/2023-10-01/double_dutch_hopscotch.mp3',
    },
    {
      title: 'Cycle of Life',
      src: '/songs/2023-10-01/cycle_of_life.mp3',
    },
    {
      title: 'Burnt Toast, Spilled Tea',
      src: '/songs/2023-10-01/burnt_toast_spilled_tea.mp3',
    },
    {
      title: 'The Mountain is Calling',
      src: '/songs/2023-10-01/the_mountain_is_calling.mp3',
    },
    {
      title: '(Nobody wants to do the) Dirty Work',
      src: '/songs/2023-10-01/dirty_work.mp3',
    },
    {
      title: 'Frequent Flyer Program',
      src: '/songs/2023-10-01/frequent_flyer_program.mp3',
    },
    {
      title: 'Last Chance Confessions',
      src: '/songs/2023-10-01/last_chance_confessions.mp3',
    },
    {
      title: 'Spooky Man',
      src: '/songs/2023-10-01/spooky_man.mp3',
    },
  ]
}
export default album;