/* Tests for Tic-Tac Javascript */


describe("Tic Tac JS", function () {

    it("should detect a full board as full", function () {
        board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
        expect(isBoardFull()).toBeTruthy();
    });

    // STEP 2: Uncomment this out.

    it("should detect a non-full board as not full", function () {
       board = ["X", "X", null, "X", "X", "X", "X", "X", "X"];
       // Add a matcher for this test.
       expect(isBoardFull()).toBeFalsy();
    });
    
    it("should convert x, y to cell #", function () {
       var cellNumber1 = xyToCell(1, 1);
       var cellNumber2 = xyToCell(0, 0);
       // Add 2 matchers for this test, one for cellNumber1 and one for cellNumber2.
       expect(cellNumber1).toBe(4);
       expect(cellNumber2).toBe(0);
    });
    
    it("should make computer moves", function () {
       board = ["X", null, null, null, null, null, null, null, null];
       computerMove();
       var newBoardPiece = board[1];
       expect(newBoardPiece).toBe('O');
    });

    // END STEP 2

    // Add the following tests, or think of some of your own.
    it("should update the board correctly based on the board", function() {
        board = ["X", "O", null, "X", null, null, null, null, null];
        updateBoard();
        expect($("#cell-0").text()).toBe(board[0]);
        expect($("#cell-1").text()).toBe(board[1]);
        expect($("#cell-2").text()).toBe("");
        expect($("#cell-3").text()).toBe(board[3]);
        expect($("#cell-4").text()).toBe("");
        expect($("#cell-5").text()).toBe("");
        expect($("#cell-6").text()).toBe("");
        expect($("#cell-7").text()).toBe("");
        expect($("#cell-8").text()).toBe("");
    });
        
    // it should not fill in board slots that are already occupied
    it("should not fill in board slots that are already occupied", function() {
        board = ["X", "O", null, "X", null, null, null, null, null];
        var putOnX = placePiece(0, "O");
        var putOnN = placePiece(2, "X");
        expect(putOnX).toBeFalsy();
        expect(putOnN).toBeTruthy();
    });

    it("should be able to determine a winner", function(){
        board = ["X", "O", null, "X", null, null, null, null, null];
        expect(findWinner()).toBeFalsy();

        board = ["X", "X", "X", null, null, null, null, null, null];
        expect(findWinner()).toBe("X");

        board = ["O", "O", "O", null, null, null, null, null, null];
        expect(findWinner()).toBe("O");
    });
    // it should not determine a winner when there is a tie

    it("should not determine a winner when there is a tie", function(){
        board = ["X", "O", "X", "O", "X","O","O","X","O"];
        expect(findWinner()).toBeFalsy();
    });


    // it should be able to deduce the correct cell number
    // it should be able to declare a tie and end the game

});
