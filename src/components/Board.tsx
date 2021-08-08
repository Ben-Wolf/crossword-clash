import * as React from 'react';
import { SAMPLE_BOARD } from '../boards/Sample';
import { IPlayer } from './Player';
import Block from './Block';

export interface IBoardProps {
    boardToLoad: string;
    players: IPlayer[]; // Sockets
}

export interface IWord {
    clueNum: string;
    position: number;
    otherIndices: number[][];
}

export interface IBoardSquare {
    correctLetter: string;
    words: IWord[];
}

export type IBoardSquareInput = IBoardSquare | null;

// TODO: Logic that chooses board
const getBoardForSelection = (selection?: string): IBoardSquareInput[][] => {
    return SAMPLE_BOARD;
}

/**
 * The Board contains the actual crossword puzzle.
 * All blocks are contained within the board.
 * When a word is solved board will tell game to update scores
 */
const Board: React.FC = () => {
    const board: any[] = [];
    const boardInput = getBoardForSelection();
    const [ currentlySelected, setSelected ] = React.useState<number[]>([0, 0]);
    const [ letterTyped, setLetterTyped ] = React.useState('');
    const [ selectedWord, setSelectedWord ] = React.useState('1A');
    const [ maxIndices, setMaxIndices ] = React.useState<number[]>([0, 0]);

    // When a key is pressed navigate to next index in word
    const onKeyPress = (ev: any) => {
        if (/[a-zA-Z]/.test(ev.key)) {
            setLetterTyped(ev.key.toUpperCase());
            if (selectedWord.length && selectedWord[selectedWord.length - 1] === 'A') {
                setSelected([currentlySelected[0], currentlySelected[1] + 1]);
            } else {
                setSelected([currentlySelected[0] + 1, currentlySelected[1]]);
            }
        }
    };

    // bsi for boardSquareInput
    boardInput.forEach((bsiRow, row) => {
        const line: any[] = [];
        bsiRow.forEach((bsi, col) => {
            if (bsi) {
                let clueRoot = undefined;
                for (const word of bsi.words) {
                    if (word.position === 1) {
                        clueRoot = word.clueNum.slice(0, 1);
                        break;
                    }
                }
                const isSelected = row === currentlySelected[0] && col === currentlySelected[1];
                line.push(
                    <Block 
                        indices={[row, col]} 
                        currentlySelected={isSelected} 
                        words={bsi.words.map(word => word.clueNum)}
                        selectedWord={selectedWord}
                        clueRoot={clueRoot}
                        isSolved={false}
                        isBlack={false}
                        setSelected={setSelected}
                        setSelectedWord={setSelectedWord}
                        currentLetter={isSelected ? letterTyped : ''}
                    />
                );
            } else {
                line.push(<Block isBlack={true} />);
            }
        });
        board.push(line);
    });

    return (
        <div onKeyPress={onKeyPress}>
            { board.map((row, index) => (
                <div className={`board-row row-${index}`}>
                    { row }
                </div>
            ))}
        </div>
    );
}

export default Board;