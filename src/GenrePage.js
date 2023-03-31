import React from 'react'
import { useParams } from 'react-router'
import LeftNav from './LeftNav'
import PlayerContainer from './PlayerContainer'
import RightNav from './RightNav'
import './styles/GenrePage.css'
import { useState } from 'react'


function GenrePage(props) {
    const { genre } = useParams();
    const hiphop = ["song1", "song2", "song3", "song4", "song5"]
    const pop = ["pop1", "song22", "song3", "song4", "song5"]
    const classic = ["song111", "song2", "song3", "song4", "song5"]
    var songList = []
    const [likedSongs, setLikedSongs] = useState([""]);
    const [likeSongTitle, setLikeSongTitle] = useState([""])

    if (genre === 'hiphop') {
        songList=hiphop
    }
    else if (genre === 'pop') {
        songList=pop
    }
    else if (genre === 'classic') {
        songList=classic
    }
    // else if (genre === 'liked-songs') {
    //     songList=likedSongs
    // }
  
    return (
      <>
            <div className='hiphop'>
                <LeftNav></LeftNav>
                <h1 className='genreHeading'>{genre}</h1>

                <ul className='songList'>
                    {songList.map((song) => {
                        return (
                            <li>{song}</li>
                        );
                    })}
                </ul>

                <RightNav></RightNav>
                <PlayerContainer
                    likedSongs={likedSongs}
                    setLikedSongs={setLikedSongs}
                />
            </div>
      </>
  )
}

export default GenrePage