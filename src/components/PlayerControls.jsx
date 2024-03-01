'use client';

import { SkipStartFill, PlayFill, SkipEndFill, PauseFill } from 'react-bootstrap-icons';
import { useMusicPlayer } from '../hooks/useMusicPlayer.js';

const PlayerControls = () => {
    // TODO: Add the player controls here
    const music = useMusicPlayer();

    return (
        <div>
            <div>
                <p>{music.currentTrackName}</p>
            </div>
            <button onClick={()=>music.playPreviousTrack()}>
                <SkipStartFill/>
            </button>
            <button onClick={()=>music.togglePlay()}>
               {music.isPlaying ? <PlayFill/> : <PauseFill/>}
            </button>
            <button onClick={()=>music.playNextTrack()}>
                <SkipEndFill/>
            </button>
        </div>
    );
  
    }

export default PlayerControls;