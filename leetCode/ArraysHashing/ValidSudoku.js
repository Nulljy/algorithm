/**36. ValidSudoku

 * https://leetcode.com/problems/valid-sudoku/
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 */


let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];


// var isValidSudoku = function(board) { !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!틀린 과정
//     // 3 * 3 으로 나누어준 후 x축이 같거나 y축에 같은 수가 있다면 false
//     // [0][0]~ [0][2], [0][3]~ [0][5], [0][6]~ [0][8]
//     // [1][0]~ [1][2], [1][3]~ [1][5], [1][6]~ [1][8]
//     // [2][0]~ [2][2], [2][3]~ [2][5], [2][6]~ [2][8]

//     // [3][0]~ [3][2], [3][3]~ [3][5], [3][6]~ [3][8]
//     // [4][0]~ [4][2], [4][3]~ [4][5], [4][6]~ [4][8]
//     // [5][0]~ [5][2], [5][3]~ [5][5], [5][6]~ [5][8]

//     // [6][0]~ [6][2], [6][3]~ [6][5], [6][6]~ [6][8]
//     // [7][0]~ [7][2], [7][3]~ [7][5], [7][6]~ [7][8]
//     // [8][0]~ [8][2], [8][3]~ [8][5], [8][6]~ [8][8]

//     // [0][0] 부터 [2][2] 까지 자르고, [3,0]부터 [5,2]까지 자르고, [6,0]부터 [8,2] 까지 자르고 result[0]에 넣어준다.
//     // [0][3] 부터 [2][5] 까지 자르고, [3,3]부터 [5,5]까지 자르고, [6,3]부터 [8,5] 까지 자르고 result[1]에 넣어준다.
//     // [0][6] 부터 [2][8] 까지 자르고, [3,6]부터 [5,8]까지 자르고, [6,3]부터 [8,5] 까지 자르고 result[2]에 넣어준다.
//     // [
//     //     [[sudoku1], [sudoku2], [sudoku3]],
//     //     [[sudoku4], [sudoku5], [sudoku6]],
//     //     [[sudoku7], [sudoku8], [sudoku9]],
//     // ]
//     // 
//     let result = [];
//     for(let j=0; j<9; j+=3) {
//         let sudoku = [];
//         for(let i=0; i<3; i++) {
//             sudoku.push(board[i+j].slice(0, 3));
//             sudoku.push(board[i+j].slice(3, 6));
//             sudoku.push(board[i+j].slice(6, 9));
//         }
//         result.push(sudoku);
//     }
//     return result;
// };

var isValidSudoku = function(board) { // 답지 분석
    let row = new Set(),
        col = new Set(),
        box = new Set();
    let _row; 
    let _col;
    let _box;
    
    for (let i = 0; i < 9; i++) {
        row.clear();
        col.clear();
        box.clear();
      for (let j = 0; j < 9; j++) { // j가 3이면 board[1][0] 4면 board[1][1] 5면 board[1][2] 6면 board[2][0]
        _row = board[i][j]; // row 추가
        _col = board[j][i]; // col 추가
        _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)] // 박스 전체 추가 숫자 0~8로 [0][0]부터 [2][2] 까지 표현 근데 i가 8까지 존재, [0],[0]부터 [8][8] 까지 표현 
        //3*Math.floor(i/3)+Math.floor(j/3) i가 3이 되기 전까지는 0, j가 6이되면 [2][0]
        
        if (_row != '.') {
          if (row.has(_row)) return false;
          row.add(_row);
        }
        if (_col != '.') {
          if (col.has(_col)) return false;
          col.add(_col);
        }
        
        if (_box != '.') {
          if (box.has(_box)) return false;
          box.add(_box);
        } 
        console.log(box);
      }
    }
    return true
  };
console.log(isValidSudoku(board));
