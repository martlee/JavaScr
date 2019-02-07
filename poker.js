//colors is black (spades ♠), red (hearts ♥), blue (diamonds ♦) and green (clubs ♣) 
// kontener zawiera czystą kartę id 0 i 52 karty 
//losujemy od 1 do 52 5 razy i do tablicy 
let talia = {
    Cards: [
      //{ Id: 0, Color: "back", Karta: '\u{1F0A0}' }, //CZYSTE PLECY KARTY :)

      { Id: 1, Color: "spades", Karta: '\u{1F0A1}' },       { Id: 2, Color: "spades", Karta: '\u{1F0A2}' },
      { Id: 3, Color: "spades", Karta: '\u{1F0A3}' },       { Id: 4, Color: "spades", Karta: '\u{1F0A4}' },
      { Id: 5, Color: "spades", Karta: '\u{1F0A5}' },       { Id: 6, Color: "spades", Karta: '\u{1F0A6}' },
      { Id: 7, Color: "spades", Karta: '\u{1F0A7}' },       { Id: 8, Color: "spades", Karta: '\u{1F0A8}' },
      { Id: 9, Color: "spades", Karta: '\u{1F0A9}' },       { Id: 10, Color: "spades", Karta: '\u{1F0AA}' },
      { Id: 11, Color: "spades", Karta: '\u{1F0AB}' },      { Id: 12, Color: "spades", Karta: '\u{1F0AC}' },
      { Id: 13, Color: "spades", Karta: '\u{1F0AD}' },
      { Id: 1, Color: "hearts", Karta: '\u{1F0B1}' },         { Id: 2,   Color: "hearts", Karta: '\u{1F0B2}' },
      { Id: 3,   Color: "hearts", Karta: '\u{1F0B3}' },       { Id: 4,   Color: "hearts", Karta: '\u{1F0B4}' },
      { Id: 5,   Color: "hearts", Karta: '\u{1F0B5}' },       { Id: 6,   Color: "hearts", Karta: '\u{1F0B6}' },
      { Id: 7,   Color: "hearts", Karta: '\u{1F0B7}' },       { Id: 8,   Color: "hearts", Karta: '\u{1F0B8}' },
      { Id: 9,   Color: "hearts", Karta: '\u{1F0B9}' },       { Id: 10,  Color: "hearts", Karta: '\u{1F0BA}' },
      { Id: 11, Color: "hearts", Karta: '\u{1F0BB}' },        { Id: 12, Color: "hearts", Karta: '\u{1F0BC}' },
      { Id: 13, Color: "hearts", Karta: '\u{1F0BD}' }, 
      { Id: 1, Color: "diamonds", Karta: '\u{1F0C1}' },       { Id: 2, Color: "diamonds", Karta: '\u{1F0C2}' },
      { Id: 3, Color: "diamonds", Karta: '\u{1F0C3}' },       { Id: 4, Color: "diamonds", Karta: '\u{1F0C4}' },
      { Id: 5, Color: "diamonds", Karta: '\u{1F0C5}' },       { Id: 6, Color: "diamonds", Karta: '\u{1F0C6}' },
      { Id: 7, Color: "diamonds", Karta: '\u{1F0C7}' },       { Id: 8, Color: "diamonds", Karta: '\u{1F0C8}' },
      { Id: 9, Color: "diamonds", Karta: '\u{1F0C9}' },       { Id: 10, Color: "diamonds", Karta: '\u{1F0CA}' },
      { Id: 11, Color: "diamonds", Karta: '\u{1F0CB}' },      { Id: 12, Color: "diamonds", Karta: '\u{1F0CC}' },
      { Id: 13, Color: "diamonds", Karta: '\u{1F0CD}' },
      { Id: 1, Color: "clubs", Karta: '\u{1F0D1}' },         { Id: 2, Color: "clubs", Karta: '\u{1F0D2}' },
      { Id: 3, Color: "clubs", Karta: '\u{1F0D3}' },         { Id: 4, Color: "clubs", Karta: '\u{1F0D4}' },
      { Id: 5, Color: "clubs", Karta: '\u{1F0D5}' },         { Id: 6, Color: "clubs", Karta: '\u{1F0D6}' },
      { Id: 7, Color: "clubs", Karta: '\u{1F0D7}' },         { Id: 8, Color: "clubs", Karta: '\u{1F0D8}' },
      { Id: 9, Color: "clubs", Karta: '\u{1F0D9}' },         { Id: 10, Color: "clubs", Karta: '\u{1F0DA}' },
      { Id: 11, Color: "clubs", Karta: '\u{1F0DB}' },        { Id: 12, Color: "clubs", Karta: '\u{1F0DC}' },
      { Id: 13, Color: "clubs", Karta: '\u{1F0DD}' },
    ],  //52 karty z obrazem graficznym
    FiveCardsCopy:  [ ],
    FiveCards:  [ //]
             { Id: 12, Color: "spades", Karta: '\u{1F0A6}' },
             { Id: 13, Color: "spades", Karta: '\u{1F0A7}' },
             { Id: 5, Color: "spades", Karta: '\u{1F0A8}' },
             { Id: 13, Color: "spades", Karta: '\u{1F0A9}' },
             { Id: 7, Color: "spades", Karta: '\u{1F0A9}' }
          ]
          ,

  TakeRandom: function(count) {
    this.FiveCards.pop;
     for (let index = 0; index < count; index++) {
          let aa = Math.floor(Math.random() * (13-index)) ;//+ 1;
          this.FiveCards.push( this.Cards[aa]);//
          this.Cards.splice(aa,1) ;
         // console.log(this.Cards);
          console.log("Wylosowano:", aa);
       }
   },//losujemy liczbe kart z tali 52, po kazdym losowaniu zmniejszamy talie o 1 i losujemy z pomniejszonej talii 
   
  CheckIfSameColor : function() { //jesli tak to true 
     
    let boolColor=true; 
     //console.log("Check..color");
      for(const el of this.FiveCards){
           if (this.FiveCards[0].Color!=el.Color)   {
               boolColor=false;
               break;
             }
         }
     return boolColor; 
   }, //check kolor

 CheckIfIsFigura : function(figura){
       let aa=this.FiveCards.findIndex(function aa(el) { return el.Id===figura; });
       if (aa>=0)
        { console.log(figura,aa);
          const bb=this.FiveCards.splice(aa,1);
        }
       // console.log("ta figura jest na indexie",aa);
       return (aa);
 },
 

 CheckIfRoyalFlush : function(count) { //a,k,q,j,10 w kolorze
    let bool=false;
    if (this.CheckIfSameColor()){
      //  console.log("kolor ok"); //if kolor sprawdz kolejnosc figur
        
        if (this.CheckIfIsFigura(1)>=0){            // console.log("ace");
            if (this.CheckIfIsFigura(13)>=0){       //  console.log("king") ;
                if (this.CheckIfIsFigura(12)>=0){   //   console.log("queen") ;
                    if (this.CheckIfIsFigura(11)>=0){ //  console.log("jack") ;
                       if (this.CheckIfIsFigura(10)>=0){
                            //console.log("ROYAL FLUSH");
                            bool=true;
                        }
                    }
                }
            }
        }
        // else{ console.log("No Royal Flush")
        //       return(-1) ; }
      }
    //    else{console.log("nie kolor");}
  return bool;  //jesli poker to 1 jesli nie -1 
 },
CheckIfStraightFlush : function(count) { //a,k,q,j,10 w kolorze
    let bool=false;
    let max=0;
    let placeInArray=0;
    if (this.CheckIfSameColor()){
      //  console.log("kolor ok"); //if kolor sprawdz kolejnosc figur
       for(let i=0;i<this.FiveCards.length;i++){
          if (this.FiveCards[i].Id>max)   { //znajdz max karte a potem kolejne mniejsze o jeden
                max=this.FiveCards[i].Id;
                placeInArray=i;
            }
        }
              //  console.log("sdf",max,placeInArray);
        if (this.CheckIfIsFigura(max)>=0){ //              console.log(max)
           if (this.CheckIfIsFigura(max-1)>=0){  //       console.log(max-1)
              if (this.CheckIfIsFigura(max-2)>=0){ //      console.log(max-2)
                 if (this.CheckIfIsFigura(max-3)>=0){ //  console.log(max-3)
                    if (this.CheckIfIsFigura(max-4)>=0){ //console.log('last',max-4);
                        //console.log("Straight FLUSH");
                        bool=true;
        }   }   }  } }

           
    }
  return bool;  //jesli poker to 1 jesli nie -1 
 },//sprawdz maly poker

 HowManyTimes : function(element,ile){
    // console.log('SZukamy',element);//elemnent np 10 ma wystapic 4 razy wtedy zwroc 4 
    let counter=0;
    let target = [];
    for (let index = 0; index < this.FiveCards.length; index++) {
        if (element===this.FiveCards[index].Id) 
            { target[counter]=index; 
                counter++; 
              //  console.log('Wystapil:',counter);//target.length,'targ1',target[index])
            };
      }
    if (counter === ile){
      //  console.log(target.length,'targ1', target[0], 'targ2', target[1], 'tear3',target[2],'tear4', target[3]);
      for (let index = target.length; index >0;index--)
        {
         //    console.log('target=',target[index-1]);
             const bb=this.FiveCards.splice(target[index-1],1);
         //     console.log(this.FiveCards);
         } 
       //  console.log('targ1', target[0], 'targ2', target[1], 'tearget3',target[2]);
       //   console.log(counter,target);
       //   console.log(this.FiveCards)
     }
    return counter;
 },//ile razy ten sam element
 
 CheckIfISFour : function(count) { //1,2,3,4  -- i -- 2,3,4,5
    let bool=false;
    if (this.HowManyTimes(this.FiveCards[0].Id,4)===4 ) {
        bool=true}
      else if (this.HowManyTimes(this.FiveCards[1].Id,4)===4 ) {bool=true};
    //else bool=false; 
    return bool;
 }, //czy czworka


 CheckIfISFull : function(count) {//1
    let bool3=false;
    let bool2=false;
    if (this.HowManyTimes(this.FiveCards[0].Id,3)===3)// ||this.HowManyTimes(this.FiveCards[1].Id)===3 || this.HowManyTimes(this.FiveCards[2].Id)===3 )
       {  bool3=true} //mamy trójkę
     else if (this.HowManyTimes(this.FiveCards[1].Id,3)===3)
       {  bool3=true} //mamy trójkę
     else if (this.HowManyTimes(this.FiveCards[2].Id,3)===3)
       {  bool3=true} //mamy trójkę

   // console.log('to zostalo',this.FiveCards);
    if (bool3===true){
        if (this.FiveCards[0].Id===this.FiveCards[1].Id)
         { bool2=true    };
     }
        return bool2;
 }//czy full 3 i 2 


}//talia

//talia.TakeRandom(5);
//console.log(talia.Cards[0]);
 console.log(talia.FiveCards[0]);
 console.log(talia.FiveCards[1]);
 console.log(talia.FiveCards[2]);
 console.log(talia.FiveCards[3]);
 console.log(talia.FiveCards[4]);
// console.log(talia.FiveCards[5]);
 console.log("Check..."); 
 talia.FiveCardsCopy=talia.FiveCards.slice();

 console.log("ROYAL FLUSH??")
 if (talia.CheckIfRoyalFlush()===true) {console.log("ROYAL FLUSH")}; //dziala duzy poker
 talia.FiveCards=talia.FiveCardsCopy.slice();
 console.log("FSTRAIGHT FLUSH??")
if (talia.CheckIfStraightFlush()===true) {console.log("STRAIGHT FLUSH")}; // maly poker
talia.FiveCards=talia.FiveCardsCopy.slice();
console.log("Four??")
if (talia.CheckIfISFour()===true) {console.log("Four of a kind")}; //kareta
talia.FiveCards=talia.FiveCardsCopy.slice();
//full
 console.log("Full ??")
 if (talia.CheckIfISFull()===true) {console.log("Full house")}; //full
 talia.FiveCards=talia.FiveCardsCopy.slice();

 if (talia.CheckIfSameColor()===true) {console.log("FLUSH-kolor")}; // kolor
 talia.FiveCards=talia.FiveCardsCopy.slice();
//strit
//trojka
//dwie pary
//para
//najwyzszakarta

 console.log(talia.FiveCards[0]);
 console.log(talia.FiveCards[1]);
 console.log(talia.FiveCards[2]);
 console.log(talia.FiveCards[3]);
 console.log(talia.FiveCards[4]);
 //console.log(talia.FiveCards[5]);