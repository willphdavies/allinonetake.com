import { plainToInstance } from "class-transformer";
import { AlbumModel, IAlbum } from "../Album.interface";
import a1 from "./2023-02-12";
import a2 from "./2023-02-19";
import a3 from "./2023-02-26";
import a4 from "./2023-03-05";
import a5 from "./2023-03-12";
import a6 from "./2023-03-19";
import a7 from "./2023-03-26";
import a8 from "./2023-04-02";
import a9 from "./2023-04-09";
import a10 from "./2023-04-30";
import a11 from "./2023-05-07";
import a12 from "./2023-05-14";
import a13 from "./2023-05-21";
import a14 from "./2023-05-28";
import a15 from "./2023-06-04";
import a16 from "./2023-06-11";
import a17 from "./2023-06-18";
import a18 from "./2023-06-25";
import a19 from "./2023-07-02";
import a20 from "./2023-07-09";
import a21 from "./2023-07-16";
import a21a from "./2023-07-30";
import a22 from "./2023-08-06";
import a23 from "./2023-08-13";
import a24 from "./2023-08-20";
import a25 from "./2023-09-03";
import a26 from "./2023-09-10";
import a27 from "./2023-09-17";
import a28 from "./2023-09-24";
import a29 from "./2023-10-01";
import a30 from "./2023-10-08";
import a30a1 from "./2023-10-15";
import a30a from "./2023-10-29";
import a31 from "./2023-11-12";
import a32 from "./2023-11-19";
import a33 from "./2023-11-26";
import a34 from "./2023-12-10";
import a35 from "./2023-12-31";
import a36 from "./2024-01-07";
import a37 from "./2024-01-15";
import a38 from "./2024-01-22";
import a39 from "./2024-01-29";
import a40 from "./2024-02-04";
import a41 from "./2024-02-11";
import a42 from "./2024-03-04";
import a43 from "./2024-03-10";
import a44 from "./2024-03-17";
import a45 from "./2024-03-24";
import a46 from "./2024-03-31";
import a47 from "./2024-04-21";
import a47a from "./2024-04-28";
import a48 from "./2024-05-05";
const data: IAlbum[] = [
  a48,
  a47a,
  a47,
  a46,
  a45,
  a44,
  a43,
  a42,
  a41,
  a40,
  a39,
  a38,
  a37,
  a36,
  a35,
  a34,
  a33,
  a32,
  a31,
  a30a,
  a30a1,
  a30,
  a29,
  a28,
  a27,
  a26,
  a25,
  a24,
  a23,
  a22,
  a21a,
  a21,
  a20,
  a19,
  a18,
  a17,
  a16,
  a15,
  a14,
  a13,
  a12,
  a11,
  a10,
  a9,
  a8,
  a7,
  a6,
  a5,
  a4,
  a3,
  a2,
  a1,
];
export const albums = data.map((a: IAlbum) => plainToInstance(AlbumModel, a));
