/**
 * Author: Alex Meier
 * Email: alex_meier@student.uml.edu
 */


 /**
  * Keeps track of tile holder remaining piecs 
  */
 class TileHolder {
    constructor(){
        //fill letterBag
        this.letterBag = [];
        for (const letter in ScrabbleTiles) {
            if (ScrabbleTiles.hasOwnProperty(letterScrabbleTiles)){       
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
        tilesUsed = tiles.length - 7;
        for(let i = 0; i < tilesUsed; i++){
            this.tiles.push(this.letterBag.shift()); //pull a piece from the letterBag
        }

        $("#holder").empty();
        var x = 0;
        this.tiles.forEach(letter => {
            //this oneliner creates a tile element that displays the tile image
            $("#holder").append($('<div></div>')
                .addClass("tile")
                .attr({id: "tile" + x})
                .append($('<img></img>')
                    .addClass("tile-image")
                    .attr({src: ScrabbleTiles[letter]})));
        });
    }
 }

 /**
  * On document ready
  */
$(function() {
    //initialize tile holder
    const tileHolder = new TileHolder();
    tileHolder.fillTileHolder();

});

