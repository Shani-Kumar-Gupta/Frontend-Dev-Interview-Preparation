const player = {
  name: "Virat",
  role: "Batsman",
};

const getPlayerInfo = function (country) {
  console.log(this); /* Output: { name: 'Virat', role: 'Batsman' } */
  console.log(this.name, this.role, country); /* Output: Virat Batsman India */
};

getPlayerInfo.call(player, "India");