let height = prompt("De quelle taille veux-tu qu'elle soit ?:")

for (var i = 1; i <= height; i++) {
  var row = '';

  for (var j = 1; j <= (height - i); j++) {
    row += ' ';
  }

  for (var k = 1; k <= i; k++) {
    row += '#';
  }

  console.log(row);
}
