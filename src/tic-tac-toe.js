class TicTacToe {
    constructor() {
        this.symbol = 'x';
        this.matrix = Array(3).fill().map(() => Array(3).fill(null));
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.symbol = this.symbol === 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        return this.isDraw() || this.getWinner() !== null;
    }

    getWinner() {
        let rowTop = this.matrix[0];
        let rowMiddle = this.matrix[1];
        let rowBottom = this.matrix[2];

        let columnLeft = this.matrix.map(row => row[0]);
        let columnMiddle = this.matrix.map(row => row[1]);
        let columnRight = this.matrix.map(row => row[2]);

        let diagonalLeft = [];
        for (let i = 0; i < this.matrix.length; i++) {
            diagonalLeft.push(this.matrix[i][i]);
        }

        let diagonalRight = [];
        let n = 3;
        for (let i = 0; i < this.matrix.length; i++) {
            diagonalRight.push(this.matrix[i][--n]);
        }

        let XO_ARRAY = [rowTop, rowMiddle, rowBottom, columnLeft, columnMiddle, columnRight, diagonalLeft, diagonalRight];
        let WINNER = XO_ARRAY.filter(arr => {
            return new Set(arr).size == 1;
        })

        return WINNER.flat()[0] ? WINNER.flat()[0] : null;
    }

    noMoreTurns() {
        return this.matrix.flat().every(char => char !== null ? true : false);
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex] ? this.matrix[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;
