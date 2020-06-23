import React, { useState } from 'react';

function StartScreen(props) {
    const [startScreen, setScreen] = useState(true);
    const handleInstructClick = () => setScreen(!startScreen);

    return (
        <div className="columns is-multiline">
            <div className="column is-full has-text-right">
                <span className="is-size-4">Score: 0</span>
            </div>
            <div className="column is-full has-text-centered game-body">
                <div className="game-body">
                    { 
                        startScreen ?
                        <span className="is-size-1">Are You Ready?</span> :
                        <span className="is-size-3 has-text-justified">
                            <p>1. Hear the Word. </p>
                            <p>2. Try To Spell It. </p>
                        </span> 
                    }
                </div>
            </div>
            <div className="column is-offset-one-fifth is-one-fifth is-narrow">
                <button class="button is-success is-size-4" onClick={props.changeMode} >Let's Start</button>
            </div>
            <div className="column is-offset-one-fifth is-one-fifth is-narrow">
                <button class="button is-warning is-size-4" onClick={handleInstructClick}>Instructions</button>
            </div>
        </div>
    );
}

export default StartScreen;