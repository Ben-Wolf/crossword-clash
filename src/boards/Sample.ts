import { IBoardSquareInput } from "../components/Board";

const line1: IBoardSquareInput[] = [
    {correctLetter: 'D', words: [{clueNum: '1D', position: 1, otherIndices: [[0, 1], [0, 2], [0, 3], [0, 4]]}, {clueNum: '1A', position: 1, otherIndices: [[0, 1], [0, 2], [0, 3]]}]},
    {correctLetter: 'V', words: [{clueNum: '2D', position: 1, otherIndices: [[1, 1], [1, 2], [1, 3], [1, 4]]}, {clueNum: '1A', position: 2, otherIndices: [[0, 0], [0, 2], [0, 3]]}]},
    {correctLetter: 'R', words: [{clueNum: '3D', position: 1, otherIndices: [[2, 1], [2, 2], [2, 3], [2, 4]]}, {clueNum: '1A', position: 3, otherIndices: [[0, 0], [0, 1], [0, 3]]}]},
    {correctLetter: 'S', words: [{clueNum: '4D', position: 1, otherIndices: [[3, 1], [3, 2], [3, 3], [3, 4]]}, {clueNum: '1A', position: 4, otherIndices: [[0, 0], [0, 1], [0, 2]]}]},
    null
];

const line2: IBoardSquareInput[] = [
    {correctLetter: 'R', words: [{clueNum: '1D', position: 2, otherIndices: [[0, 0], [0, 2], [0, 3], [0, 4]]}, {clueNum: '5A', position: 1, otherIndices: [[1,1], [1,2], [1,3], [1,4]]}]},
    {correctLetter: 'I', words: [{clueNum: '2D', position: 2, otherIndices: [[1, 0], [1, 2], [1, 3], [1, 4]]}, {clueNum: '5A', position: 2, otherIndices: [[1,0], [1,2], [1,3], [1,4]]}]},
    {correctLetter: 'O', words: [{clueNum: '3D', position: 2, otherIndices: [[2, 0], [2, 2], [2, 3], [2, 4]]}, {clueNum: '5A', position: 3, otherIndices: [[1,0], [1,1], [1,3], [1,4]]}]},
    {correctLetter: 'T', words: [{clueNum: '4D', position: 2, otherIndices: [[3, 0], [3, 2], [3, 3], [3, 4]]}, {clueNum: '5A', position: 4, otherIndices: [[1,0], [1,1], [1,2], [1,4]]}]},
    {correctLetter: 'S', words: [{clueNum: '6D', position: 1, otherIndices: [[4, 2], [4, 3], [4, 4]]}, {clueNum: '5A', position: 5, otherIndices: [[1,0], [1,1], [1,2], [1,3]]}]},
];

const line3: IBoardSquareInput[] = [
    {correctLetter: 'A', words: [{clueNum: '1D', position: 3, otherIndices: [[0, 0], [0, 1], [0, 3], [0, 4]]}, {clueNum: '7A', position: 1, otherIndices: [[2,1], [2,2], [2,3], [2,4]]}]},
    {correctLetter: 'L', words: [{clueNum: '2D', position: 3, otherIndices: [[1, 0], [1, 1], [1, 3], [1, 4]]}, {clueNum: '7A', position: 2, otherIndices: [[2,0], [2,2], [2,3], [2,4]]}]},
    {correctLetter: 'G', words: [{clueNum: '3D', position: 3, otherIndices: [[2, 0], [2, 1], [2, 3], [2, 4]]}, {clueNum: '7A', position: 3, otherIndices: [[2,0], [2,1], [2,3], [2,4]]}]},
    {correctLetter: 'A', words: [{clueNum: '4D', position: 3, otherIndices: [[3, 0], [3, 1], [3, 3], [3, 4]]}, {clueNum: '7A', position: 4, otherIndices: [[2,0], [2,1], [2,2], [2,4]]}]},
    {correctLetter: 'E', words: [{clueNum: '6D', position: 2, otherIndices: [[4, 1], [4, 3], [4, 4]]}, {clueNum: '7A', position: 5, otherIndices: [[2,0], [2,1], [2,2], [2,3]]}]},
];

const line4: IBoardSquareInput[] = [
    {correctLetter: 'K', words: [{clueNum: '1D', position: 4, otherIndices: [[0, 0], [0, 1], [0, 2], [0, 4]]}, {clueNum: '8A', position: 1, otherIndices: [[3,1], [3,2], [3,3], [3,4]]}]},
    {correctLetter: 'L', words: [{clueNum: '2D', position: 4, otherIndices: [[1, 0], [1, 1], [1, 2], [1, 4]]}, {clueNum: '8A', position: 2, otherIndices: [[3,0], [3,2], [3,3], [3,4]]}]},
    {correctLetter: 'E', words: [{clueNum: '3D', position: 4, otherIndices: [[2, 0], [2, 1], [2, 2], [2, 4]]}, {clueNum: '8A', position: 3, otherIndices: [[3,0], [3,1], [3,3], [3,4]]}]},
    {correctLetter: 'I', words: [{clueNum: '4D', position: 4, otherIndices: [[3, 0], [3, 1], [3, 2], [3, 4]]}, {clueNum: '8A', position: 4, otherIndices: [[3,0], [3,1], [3,2], [3,4]]}]},
    {correctLetter: 'N', words: [{clueNum: '6D', position: 3, otherIndices: [[4, 1], [4, 2], [4, 4]]}, {clueNum: '8A', position: 5, otherIndices: [[3,0], [3,1], [3,2], [3,3]]}]},
];

const line5: IBoardSquareInput[] = [
    {correctLetter: 'E', words: [{clueNum: '1D', position: 5, otherIndices: [[0, 0], [0, 1], [0, 2], [0, 2]]}, {clueNum: '9A', position: 1, otherIndices: [[3,1], [3,2], [3,3], [3,4]]}]},
    {correctLetter: 'A', words: [{clueNum: '2D', position: 5, otherIndices: [[1, 0], [1, 1], [1, 2], [1, 3]]}, {clueNum: '9A', position: 2, otherIndices: [[3,0], [3,2], [3,3], [3,4]]}]},
    {correctLetter: 'R', words: [{clueNum: '3D', position: 5, otherIndices: [[2, 0], [2, 1], [2, 2], [2, 3]]}, {clueNum: '9A', position: 3, otherIndices: [[3,0], [3,1], [3,3], [3,4]]}]},
    {correctLetter: 'N', words: [{clueNum: '4D', position: 5, otherIndices: [[3, 0], [3, 1], [3, 2], [3, 3]]}, {clueNum: '9A', position: 4, otherIndices: [[3,0], [3,1], [3,2], [3,4]]}]},
    {correctLetter: 'S', words: [{clueNum: '6D', position: 4, otherIndices: [[4, 1], [4, 2], [4, 3]]}, {clueNum: '9A', position: 5, otherIndices: [[3,0], [3,1], [3,2], [3,3]]}]},
];

export const SAMPLE_BOARD: IBoardSquareInput[][] = [
    line1,
    line2,
    line3,
    line4,
    line5
];