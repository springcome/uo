import React from "react";
import Board from "./Board";

class Game extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Board />
                </div>
                <div>
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;