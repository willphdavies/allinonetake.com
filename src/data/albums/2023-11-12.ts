import { IAlbum } from "../../common/Album";

const album: IAlbum = {
  title: 'Flying High',
  date: new Date(2023, 10, 12),
  img: '/img/turkey.jpeg',
  tracks: [
    {
      title: 'She Gets The Motor Clean',
      src: '/songs/2023-11-12/she_gets_the_motor_clean.mp3'
    },
    {
      title: 'A Very Happy Birthday',
      src: '/songs/2023-11-12/a_very_happy_birthday.mp3'
    },
    {
      title: 'Are You Ready For Another Dimension?',
      src: '/songs/2023-11-12/are_you_ready_for_another_dimension.mp3'
    },
    {
      title: 'A Dollar In My Pocket',
      src: '/songs/2023-11-12/a_dollar_in_my_pocket.mp3'
    },
    {
      title: 'Ripped From A Solid Bass',
      src: '/songs/2023-11-12/ripped_from_a_solid_base.mp3'
    },
    {
      title: 'Somewhere, Getting Lost In The Heat Of The Magic',
      src: '/songs/2023-11-12/somewhere_getting_lost_in_the_heat_of_the_magic.mp3'
    },
    {
      title: "It's An End, But It's Not The End",
      src: '/songs/2023-11-12/its_an_end_but_its_not_the_end.mp3'
    },
    {
      title: "Secret Track - It's 11 O' Clock",
      src: '/songs/2023-11-12/its_11_o_clock.mp3'
    }
  ]
}
export default album;