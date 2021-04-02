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
}

/**
 * Block can be black/solved/unsolved
 * Block contains access to all other letter locations in the block (as an indices array)
 */
const Block: React.FC<IBlockProps> = (props: IBlockProps) => {
    const { clueRoot, indices, currentlySelected, currentLetter, isBlack } = props;
    const { setSelected } = props;
    const [ letter, setLetter ] = React.useState<string>(currentLetter || '');
    const ref: React.LegacyRef<HTMLDivElement> = React.createRef();

    let className = 'block';
    
    if (isBlack) {
        className += ' block-black';
    };
    
    // Setup event handlers
    let onKeyPress = undefined;
    const onClick = () => {
        setSelected && indices && setSelected(indices);
    }

    if (currentlySelected) {

        className += ' block-selected';

        onKeyPress = (ev: any) => {
            console.log(letter);
            if (/[a-zA-Z]/.test(ev.key)) {
                setLetter(ev.key.toUpperCase());
                indices && setSelected && setSelected([indices[0], indices[1] + 1])
            }
        };
    }

    return (
        <div ref={ref} className={className} onClick={onClick} onKeyPress={onKeyPress} tabIndex={0}>
            { clueRoot && 
                <div className='block-clue-root'>
                    { clueRoot }
                </div>
            }
            { letter }
        </div>
    );
}

export default Block;