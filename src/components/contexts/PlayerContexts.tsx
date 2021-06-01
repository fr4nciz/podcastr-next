import { type } from 'node:os';
import {createContext, ReactNode, useState} from 'react'

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}


 
type PlayerContextData = {
    episodeList: Episode[];
    currentEpisodeIndex: number; 
    isPlaying: boolean;
    play: (episode: Episode) => void;
    playList: (list: Episode[], index: number) => void;
    setPlayingState: (state: boolean) => void;
    togglePlay: () => void;
};


export const PlayerContext = createContext({} as PlayerContextData);

type PlayerContextProviderProps = {
    children: ReactNode;
}

export function PlayerContextProvider({ children } : PlayerContextProviderProps) {
    const [episodeList, setEpisodeList] = useState([]);
    const [currentEpisodeIndex, setCurrentEpisodeList] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
  
    function play(episode) {
      setEpisodeList([episode]);
      setCurrentEpisodeList(0);
      setIsPlaying(true)
    }

    function playList(list:Episode[], index: number) {
        setEpisodeList(list);
        setCurrentEpisodeList(index);
        setIsPlaying(true)

    }
  
    function togglePlay() {
      setIsPlaying(!isPlaying)
    }
  
  
    function setPlayingState(state: boolean) {
      setIsPlaying(state);
    }
  
    return (
      <PlayerContext.Provider value={{
          episodeList, 
          currentEpisodeIndex, 
          play, 
          playList,
          isPlaying, 
          togglePlay, 
          setPlayingState}}>

          {children}

          </PlayerContext.Provider>
    ) 

}