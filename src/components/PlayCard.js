import React, { useState } from 'react';
import StartScreen from './StartScreen';
import GameScreen from './GameScreen';
import Words from '../assets/data/words';

const getWord = () => Words[Math.floor(Math.random() * Words.length)];

function PlayCard() {
    const [word, setWord] = useState(getWord());
    const [score, setScore] = useState(0);
    const [playing, setPlaying] = useState(false);

    const changeMode = () => setPlaying(!playing);

    const selectWord = () => setWord(getWord());

	return (
		<section className="section">
            <div className="columns">
                <div className="column">
                    <div className="playcard has-background-primary">
                        { playing ? 
                            <GameScreen 
                                changeMode={changeMode} 
                                score={score} 
                                setScore={setScore}
                                word={word}
                                selectWord={selectWord} 
                            /> : 
                            <StartScreen changeMode={changeMode} />}
                    </div>
                </div>
            </div>
        </section>
	);
}

export default PlayCard;
