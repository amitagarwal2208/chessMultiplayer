class Square {
    constructor(x, y, pieceOnThisSquare, canvasCoord) {
        this.x = x // Int 0 <= x <= 7
        this.y = y // Int 0 <= y <= 7 
        this.canvasCoord = canvasCoord
        this.pieceOnThisSquare = pieceOnThisSquare // ChessPiece || null
    }

    

    removePiece() {
        this.pieceOnThisSquare = null
    }

    getPiece() {
        return this.pieceOnThisSquare 
    }

    getPieceIdOnThisSquare() {
        if (this.pieceOnThisSquare === null) {
            return "empty"
        }
        return this.pieceOnThisSquare.id
    }

    isOccupied() {
        return this.pieceOnThisSquare != null
    }

    getCoord() {
        return [this.x, this.y]
    }

    getCanvasCoord() {
        return this.canvasCoord
    }
}

export default Square