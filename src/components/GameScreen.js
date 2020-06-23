import React, { useState } from 'react';


function GameScreen(props) {
    const [inputText, setText] = useState("");
    const [inputMode, setMode] = useState(true);
    const [resMsg, setMsg] = useState("");
    var gameBody;

    const speakStuff = (value) => {
        window.speechSynthesis.cancel();
        var msg = new SpeechSynthesisUtterance(value);
        window.speechSynthesis.speak(msg);
    };

    const handleChange = (event) => setText(event.target.value);

    const handleSubmit = () => {
        if(inputMode){
            setMode(false);
            if(props.word === inputText.toLowerCase())
                setMsg("Correct Answer +10 Points");
            else
                setMsg("Incorrect Answer: " + props.word);
        }
        else{
            setMode(true);
            if(props.word === inputText.toLowerCase())
            props.setScore(props.score+10);
            setText("");
            if(props.score>=50){
                props.changeMode();
            }
            props.selectWord();
        }
    };

    if(!inputMode)
        gameBody = (<span className="is-size-1">{resMsg}</span>);
    else
        gameBody = (
            <input
                type="text"
                value={inputText}
                onChange={handleChange}
                placeholder="Spell the word"
                className="input is-size-1 spell-input"
            />
        );

    return (
        <div className="columns is-multiline">
            <div className="column is-full has-text-right">
    <span className="is-size-4">Score: { props.score }</span>
            </div>
            <div className="column is-full has-text-centered game-body">
                <div className="game-body">
                    { gameBody }
                </div>
            </div>
            <div className="column is-offset-one-fifth is-one-fifth is-narrow">
                <button class="button is-success is-size-4" onClick={() => speakStuff(props.word)}>Hear It</button>
            </div>
            <div className="column is-offset-one-fifth is-one-fifth is-narrow">
                <button class="button is-warning is-size-4" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default GameScreen;