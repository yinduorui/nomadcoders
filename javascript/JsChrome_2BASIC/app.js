function sayHello(nameOfPerson) {
  console.log("Hello! " + nameOfPerson + " nice to meet you");
}

sayHello("daye");

const player = {
  name: "daye",
  greeting: function (othername) {
    console.log("Hello! " + othername);
  },
};

console.log(player.name);
player.greeting("daye");
