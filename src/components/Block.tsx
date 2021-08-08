import * as React from 'react';

export interface IBlockProps {
    isBlack: boolean;
    words?: any[]; // IWord
    isSolved?: boolean;
    clueRoot?: string;
    currentLetter?: string;
    indices?: number[];
    currentlySelected?: boolean;
    setSelected?: (indices: number[]) => void;
    selectedWord?: string;
    setSelectedWord?: (newWord: string) => void;
}

/**
 * Block can be black/solved/unsolved
 * Block contains access to all other letter locations in the block (as an indices array)
 */
const Block: React.FC<IBlockProps> = (props: IBlockProps) => {
    const { clueRoot, indices, currentlySelected, currentLetter, isBlack, words, selectedWord } = props;
    const { setSelected, setSelectedWord } = props;
    const [ letter, setLetter ] = React.useState<string>(currentLetter || '');

    let className = 'block';
    
    if (isBlack) {
        className += ' block-black';
    };
    
    // Setup event handlers
    let onKeyPress = undefined;
    const onClick = () => {
        if (currentlySelected && words && setSelectedWord) {
            setSelectedWord(words?.filter(word => word !== selectedWord)[0]);
        } else if (!currentlySelected && words && setSelectedWord) {
            setSelectedWord(words[0]);
        }
        setSelected && indices && setSelected(indices);
    }

    if (currentlySelected) {
        className += ' block-selected';
    } else if (selectedWord && words && words.includes(selectedWord)) {
        className += ' word-selected';
    }

    return (
        <div className={className} onClick={onClick} tabIndex={0}>
            { clueRoot && 
                <div className='block-clue-root'>
                    { clueRoot }
                </div>
            }
            { currentLetter }
        </div>
    );
}

export default Block;