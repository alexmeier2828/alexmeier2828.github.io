/**
 * Author: Alex Meier
 * Email: alex_meier@student.uml.edu
 */

/**
 * Keeps track of score 
 */
class GameState {
    /**
     * 
     * @param {TileHolder} tileHolder 
     */
    constructor(tileHolder){
        this.score = 0;
        this.total_score = 0;
        this.tileHolder = tileHolder
    }

    /**
     * updates score for current played word
     */
    updateGameState(){
        var score_change = getScore() - this.score;
        this.score = getScore();
        $("#word_score").text(this.score);
        if(score_change >= 0){
            $("#word_score_change").text(" +" + score_change);
        } else {
            $("#word_score_change").text(score_change);
        }
    }

    /**plays the current word and updates score*/
    playWord(){
        this.total_score += this.score; //increase score
        this.score = 0;
        this.tileHolder.updateLettersInHolder();
        this.tileHolder.fillTileHolder();

        $("#word_score").text(this.score);
        $("#total_score").text(this.total_score);
        $("#word_score_change").text("");

        //clear board
        $(".board-space").empty();
        $(".board-space").removeClass('occupied');
        $(".board-space").droppable('enable');
    }
}

 /**
  * Keeps track of tile holder remaining piecs 
  */
 class TileHolder {
    constructor(){
        //fill letterBag
        this.letterBag = [];
        for (const letter in ScrabbleTiles) {
            if (ScrabbleTiles.hasOwnProperty(letter)){       
                const letter_info = ScrabbleTiles[letter];   
                for (let i = 0; i < letter_info["original-distribution"]; i++) {
                    this.letterBag.push(letter);
                }   
            }
        }

        //randomize the letterbag 
        for(let i = 0; i < this.letterBag.length; i++){
            var random_index = Math.floor(Math.random() * (this.letterBag.length - 1));
            var temp = this.letterBag[i];
            this.letterBag[i] = this.letterBag[random_index];
            this.letterBag[random_index] = temp;
        }

        this.tiles = [];
    }

    /**
     * Fills tile holder randomly from letterbag up to 7 pieces
     */
    fillTileHolder() {
        var tilesUsed = 7 - this.tiles.length;
        for(let i = 0; i < tilesUsed; i++){
            this.tiles.push(this.letterBag.shift()); //pull a piece from the letterBag
        }

        $("#holder").empty();
        var x = 0;
        this.tiles.forEach(letter => {
            //this oneliner creates a tile element that displays the tile image
            $("#holder").append($('<div></div>')
                .addClass("tile")
                .attr({id: "tile" + x, letter: letter})
                .append($('<img></img>')
                    .addClass("tile-image")
                    .attr({src: "graphics_data/Scrabble_Tiles/" + ScrabbleTiles[letter]["image"]})));
        });
        
        //make tiles draggable
        var tileOptions = {
            revert:true
        };
        $('.tile').draggable(tileOptions);
        firstPiecePlayed = false;
    }

    /**
     * Checks how many letters are in the dom holder and changes the model
     * to reflect this number
     */
    updateLettersInHolder(){
        var letters = [];
        //get letters from board
        $('#holder').children().each(function(index){
            letters.push($(this).attr('letter'));
        });
    
        this.tiles = letters;
    }
 }

/**
 * Returns the word writen in the board
 */
//  function getWord(){
//     var word = [];
//     //get letters from board
//     $('#board').children().each(function(index){
//         if($(this).hasClass('occupied')){
//             word.push($(this).children().attr('letter'))
//         }
//     });

//     return word;
//  }

 /**
  * calculates the score for the specified word
  * @param {Char[]} word 
  */
 function getScore(){
    //get letters from board
    var word_bonus = 1;
    var score = 0;
    $('#board').children().each(function(index){
        if($(this).hasClass('occupied')){
            var letter = $(this).children().attr('letter');
            var letter_bonus =  parseInt($(this).attr('letter_bonus'));
            score += ScrabbleTiles[letter]['value'] * letter_bonus; //apply letter bonus
            word_bonus = word_bonus * parseInt($(this).attr('word_bonus')); //apply word bonus
        }
    });
    score = score * word_bonus;
    return score
 }
 




 /**
  * On document ready
  */
$(function() {
    firstPiecePlayed = false;
    //initialize tile holder
    const tileHolder = new TileHolder();
    tileHolder.fillTileHolder();
    gameState = new GameState(tileHolder);


    //map buttons
    $('#play_word').click(function (e) { 
        e.preventDefault();
        gameState.playWord();
    });
    $('#restart').click(function (e) { 
        location.reload();
    });

});

