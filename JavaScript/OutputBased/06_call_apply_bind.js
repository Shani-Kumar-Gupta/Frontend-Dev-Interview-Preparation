const player = {
  name: "Virat",
  role: "Batsman",
};

const getPlayerInfo = function (country) {
  console.log(this);
  console.log(this.name, this.role, country); 
};

getPlayerInfo.call(player, "India");