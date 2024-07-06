"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IAlbum, IAlbumTrack, ICombinedTrackList } from "./Album.interface";
import { albums } from "./albums";
import { findAlbums } from "./findAlbums";
export interface IAppState {
  albums: IAlbum[];
  currentAlbum: IAlbum | null;
  currentTrack: IAlbumTrack | null;
  setCurrentAlbum: (album: IAlbum) => void;
  setCurrentTrack: (track: IAlbumTrack) => void;
  onTrackEnd: () => void;
  isPlaying: boolean;
  setIsPlaying: (val: boolean) => void;
  onTrackClick: (track: IAlbumTrack, album: IAlbum) => void;
  findAlbums: (year: string, month: string, day: string) => IAlbum[];
  allTracks: ICombinedTrackList[];
  playRandom: () => void;
  setIsRandom: (value: boolean) => void;
  isRandom: boolean;
}
const AppContext = createContext<IAppState>({} as IAppState);
export function useAppState() {
  return useContext(AppContext);
}
interface AppProviderProps {
  children: ReactNode;
}
export function AppProvider(props: AppProviderProps) {
  const { children } = props;
  const [currentTrack, setCurrentTrack] = useState<IAlbumTrack | null>(null);
  const [currentAlbum, setCurrentAlbum] = useState<IAlbum | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [allTracks, setAllTracks] = useState<ICombinedTrackList[]>([]);
  useEffect(() => {
    if (!allTracks.length) {
      const tracks = albums
        .map((album) => album.tracks.map((track) => ({ ...track, album })))
        .flat();
      setAllTracks(tracks);
    }
  }, [allTracks]);
  return (
    <AppContext.Provider
      value={{
        albums,
        currentAlbum,
        setCurrentAlbum,
        currentTrack,
        setCurrentTrack,
        onTrackEnd,
        onTrackClick,
        isPlaying,
        setIsPlaying,
        findAlbums,
        allTracks,
        playRandom,
        setIsRandom,
        isRandom,
      }}
    >
      {children}
    </AppContext.Provider>
  );

  function onTrackClick(track: IAlbumTrack, album: IAlbum) {
    if (track.title !== currentTrack?.title) {
      setCurrentAlbum(album);
      setCurrentTrack(track);
      return;
    }
    setIsPlaying(!isPlaying);
  }
  function playRandom() {
    const length = allTracks.length;
    const nextTrackIndex = Math.floor(Math.random() * length);
    return onTrackClick(
      allTracks[nextTrackIndex],
      allTracks[nextTrackIndex].album
    );
  }
  function onTrackEnd() {
    let endingTrackIndex = -1;
    if (currentAlbum) {
      currentAlbum.tracks.map((track, index) => {
        if (track.title === currentTrack?.title) {
          endingTrackIndex = index;
        }
      });
      if (isRandom) {
        playRandom();
      }
      if (endingTrackIndex > 0 && currentAlbum.tracks[endingTrackIndex + 1]) {
        return onTrackClick(
          currentAlbum.tracks[endingTrackIndex + 1],
          currentAlbum
        );
      }
      setCurrentAlbum(null);
      setCurrentTrack(null);
    }
  }
}
