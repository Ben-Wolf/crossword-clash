import * as React from 'react';
import Board from '../components/Board';

export interface IGameProps {}

const Game: React.FC = () => {
    return (
        <div>
            <Board />
        </div>
    );
}

export default Game;