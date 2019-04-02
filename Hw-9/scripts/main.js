/*
Author: Dani Briggs
Date: March 12, 2019
Purpose: JSON and AJAX
*/

$(document).ready(function(){

  $("button").click(function(){
    $.getJSON("pokedex.json", function(result){
     $.each(result, function(i, field){
       $("div").append(field + " ");
     });
   });
 });
});
/*
    $("#pokemonData").load("data/pokedex.json", function(result){
        var poke = JSON.parse(result);
        $("#pokemonData").html("Id:"
                + poke.id + "<br>Number:"
                + poke.num + "<br>Name:"
                + poke.name + "<br>Picture:"
                + poke.img + "<br>Type:"
                + poke.type + "<br>Height:"
                + poke.height + "<br>Weight:"
                + poke.weight + "<br>Candy:"
                + poke.candy + "<br>Candy Count:"
                + poke.candy_count + "<br>Egg:"
                + poke.egg + "<br>Spawn Chance:"
                + poke.spawn_chance + "<br>Average Spawn:"
                + poke.avg_spawns + "<br>Spawn Time:"
                + poke.spawn_time + "<br>Multipliers:"
                + poke.multipliers + "<br>Weaknesses:<br>" +
                poke.weaknesses[0] + "<br>" + poke.weaknesses[1] + "<br>" + poke.weaknesses[2] + "<br>" + poke.weaknesses[3]
                + "<br>Evolves Into:<br>" +
                poke.next_evolution.num + "<br>" + poke.next_evolution.name
                + "<br>Pervous Evolution:<br>" +
                poke.prev_evolution.num + "<br>" + poke.prev_evolution.name
        );
      });
    });
  });
*/
