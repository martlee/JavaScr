//   Scale riddle. With 8 balls  EXAM
//Waga i 8 kól, jest 8 jedkaowych o tej samej wadze kól, jedną zwekszamy o jeden
//Waga psuje się  po 2 pomiarze I jak sprawdzic to która kola jest ciezsza
//1 kule po 3 na dwie strony  zostają 2 Wybieramy grupe gdzie jest ciezsza i losowo na wage
//Porównania 2 razy , która ciezsza, rozumienie kodu

// Drugi kontener to waga scale
// Metoda zwaz (set1 set2)
// Weight: (set1, set2) => ‘result’  //flaga 3 stanowa albo 1 albo 2 albo ta grupa niezwarzona
// Zwróć ten cięższy
let kontener = {
  Balls: [
    { Id: 1, Weight: 10, Group: 1 },
    { Id: 2, Weight: 10, Group: 1 },
    { Id: 3, Weight: 10, Group: 1 },
    { Id: 4, Weight: 10, Group: 2 },
    { Id: 5, Weight: 10, Group: 2 },
    { Id: 6, Weight: 10, Group: 2 },
    { Id: 7, Weight: 10, Group: 3 },
    { Id: 8, Weight: 10, Group: 3 }
  ],
  markRandom: function() {
    let index = Math.floor(Math.random() * 8) + 1;
    console.log("Wylosowano:", index);
    this.Balls[index - 1].Weight += 1; //dodaje 1 do losowo wybranej kulki 1 to pierwsza 8-to siódma -1 bo zapis do tablicy
  },
  show: function() {
    for (let index = 0; index < kontener.Balls.length; index++) {
      console.log(
        "Id",
        kontener.Balls[index].Id,
        "=",
        kontener.Balls[index].Weight
      );
    }
  }
};

let scale = {
  //porownaj 3 kule
  set1: 0,
  set2: 0,
  set3: 0,
  winner: 0, //wygrana
  rightBasket: 0,
  twoBaskets: function() {
    // sumuje w petli koszyk 1 i koszyk 2 patrzac po grupie
    for (let index = 0; index < kontener.Balls.length; index++) {
      if (kontener.Balls[index].Group === 1)
        this.set1 = this.set1 + kontener.Balls[index].Weight;
      else if (kontener.Balls[index].Group === 2)
        this.set2 = this.set2 + kontener.Balls[index].Weight;
    } // this.show(this.set1,this.set2);//wyswietl 2 koszyki
  },
  // show: function(item1,item2){// wyswietl dwa sety do wagi
  //     console.log('koszyk1',item1);
  //     console.log('koszyk2',item2);
  //     },
  //---------------------------------------------------
  compare: function(item1, item2, item3, waga) {
    if (item1 > item2) {
      if (this.rightBasket === 0) {
        //jesli to pierwsze wazenie to
        this.rightBasket = 1; //ustaw na 1 kulę
        this.set1 = kontener.Balls[0].Weight;
        this.set2 = kontener.Balls[1].Weight;
        this.set3 = kontener.Balls[2].Weight;
      } else this.winner = this.rightBasket; //jesli 2 wazenie to winer
    } //koniec if i1>i2
    else if (item1 < item2) {
      if (this.rightBasket === 0) {
        //jesli to pierwsze wazenie to
        this.rightBasket = 4; // ustaw na 4 kulę
        this.set1 = kontener.Balls[3].Weight;
        this.set2 = kontener.Balls[4].Weight;
        this.set3 = kontener.Balls[5].Weight;
      } else this.winner = this.rightBasket + 1; //jesli 2 wazenie do winera dodaj 1
    } else if ((item1 = item2)) {
      if (this.rightBasket === 0) {
        //jesli to pierwsze wazenie to
        this.rightBasket = 7; // ustaw na 7 kulę, bo to żadna z 6pierwszych
        this.set1 = kontener.Balls[6].Weight;
        this.set2 = kontener.Balls[7].Weight;
      } else this.winner = this.rightBasket + 2; //jesli 2 wazenie do winera dodaj 2
    }
  }
};

kontener.markRandom(); // losuj jedną kulę
kontener.show(); // pokaż wszystkie wagi kul
console.log("-------------");
scale.twoBaskets();
scale.compare(scale.set1, scale.set2, scale.set3, scale.rightBasket);
scale.compare(scale.set1, scale.set2, scale.set2, scale.rightBasket);
//console.log(scale.rightBasket);
console.log("winner:", scale.winner);
