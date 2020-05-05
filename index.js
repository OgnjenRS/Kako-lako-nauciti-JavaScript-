/*METODE NA ARRAY-u(* ovo su sve koje se mogu kombinovati sa array prototype)
Array.prototype.metodaZaArr()

.length               Svojstvo length objekta koji je instanca tipa Array postavlja ili vraća broj elemenata u tom polju. Vrijednost je nepotpisani, 32-bitni cijeli broj koji je uvijek brojčano veći od najvišeg indeksa u nizu.(veci za 1 od zadnjeg rednog (njegove vrednosti))
isArray() ,           Metoda Array.isArray () određuje je li proslijeđena vrijednost Array.
pop() ,               Brise zadnji clan array-a
push() ,              Dodaje zadnji clan , ono sto je u () to se dodaje kao zadnji clan
unshift() ,           Dodaje na pocetak array-a clan kao prvi clan
shift() ,             Brise prvi clan array-a 

splice() ,            splice metod za brisanje elemenata niza //splice() metod prvo mesto broj clana koji se brise drugo mesto broj clanova kolko ce ih obrisati
                      fruits.splice(2, 0, "Lemon", "Kiwi"); takodje sa splice moze da se doda od drugog do nultog elementa dva elementa koji su navedeni kao u primeru
                      splice(2,0,"hello","world") ovako se dodaje od drugog pa nadalje clanova kolko god hocemo 
                      splice(0,2,"world","hello") a ovako se samo menjaju dva clana od nultog(prvog) do drugog
                      splice(0,2,"heloo","world","heloo123") a ovako se heloo123 dodaje beskonacno dok su heloo i world fiksirani oni se ne dodaju jer su oni sa 3 definisani sto znaci ako stavim 0,3 i heloo123 ce samo zameniti treci clan nekog niza

slice() ,             let kopijaArr = originalArr.slice(); ovako se pravi kopija arraya

findIndex() ,         Metoda findIndex () vraća indeks prvog elementa u nizu koji zadovoljava dato testiranje.
                      U suprotnom, vraća -1,što znači da nijedan element nije prošao test.
                      const array1 = [5, 12, 8, 130, 44];
                      const isLargeNumber = (element) => element > 13;
                      array1.findIndex(isLargerNumber); //3

find() ,              Metoda find () vraća vrijednost prvog elementa u ponuđenom nizu koji zadovoljava danu funkciju testiranja.
                      const array1 = [5, 12, 8, 130, 44];
                      const found = array1.find(element => element > 10);
                      console.log(found); //12 samo 12 jer uzima prvu koja se poklapa

map() ,               Metoda map () stvara novu niz popunjenu rezultatima pozivanja određene funkcije na svaki element u pozivajućem polju.
                      const array1 = [1, 4, 9, 16];
                      const map1 = array1.map(x => x * 2);
                      console.log(map1); //Array [2,8,18,32]

indexOf()             //ispituje na kome mestu se nalazi neka vrednost iz zagrada u array-u Primer: indexOf('bison') //npr. nema je onda je -1 ako je u array-u onda redni broj(0,1,2,3,...)
includes() ,          Metoda include () određuje da li niz uključuje određenu vrijednost među svojim unosima, vraćajući true ili false, prema potrebi(da li ima ili nema). arr1.includes(2) //true

forEach() ,           Metoda forEach () izvršava pruženu funkciju jednom za svaki element niza.
                      const array1 = ['a', 'b', 'c'];
                      array1.forEach(element => console.log(element));
                      //"a"
                      //"b"
                      //"c"

from () ,             Metoda Array.from () kreira novu, plitko kopiranu instancu Array iz objekta sličnog armiji ili iterable.Znaci rasclanjuje u vise clanova array-a .
                      console.log(Array.from('foo'));  //Array ["f","o","o"]
                      console.log(Array.from([1, 2, 3], x => x + x));  //Array [2,4,6]

reverse() ,           Metoda reverse () preokreće niz na mjestu. Prvi element polja postaje posljednji, a posljednji element matrice postaje prvi.
                      onst array1 = ['one', 'two', 'three'];
                      console.log('array1:', array1);
                      //"array1:" Array ["one", "two", "three"]

                      const reversed = array1.reverse();
                      console.log('reversed:', reversed);
                      //"reversed:" Array ["three", "two", "one"]

sort() ,              Metoda sort () sortira elemente niza na mjestu i vraća sortirani niz. Zadani redoslijed sortiranja je uzlazni, izgrađen nakon pretvaranja elemenata u nizove, a zatim uspoređujući njihove sekvence vrijednosti UTF-16 kodnih jedinica.
                      Vremenska i prostorna složenost vrste ne može se garantovati jer ovisi o primjeni.
                      const array1 = [1, 30, 4, 21, 100000];
                      array1.sort();
                      console.log(array1);
                      //Array [1, 100000, 21, 30, 4]

                      const months = ['March', 'Jan', 'Feb', 'Dec'];
                      months.sort();
                      console.log(months);
                      //Array ["Dec", "Feb", "Jan", "March"]

fill() ,              Metoda fill () mijenja sve elemente u nizu u statičku vrijednost, od početnog indeksa (zadanog 0) do krajnjeg indeksa (zadana array.length). Vraća modificirani niz.
                      const array1 = [1, 2, 3, 4];
                      console.log(array1.fill(0, 2, 4));
                      //[1, 2, 0, 0]
                      console.log(array1.fill(5, 1));
                      //[1, 5, 5, 5]
                      console.log(array1.fill(6));
                      //[6,6,6,6]

toSource() ,          DON'T USE IT
USE THIS => JSON.stringify()


toString() ,          Metoda toString () vraća string koji predstavlja specificirani niz i njegove elemente.
                      const array1 = [1, 2, 'a', '1a'];
                      console.log(array1.toString());
                      //"1,2,a,1a"

toLocaleString() ,    Metoda toLocaleString () vraća niz koji predstavlja elemente matrice.
                      Elementi se pretvaraju u string koristeći toLocaleString metode i te su string odvojene nizom specifičnim za lokaciju (kao što je zarez ",").
                      const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
                      const localeString = array1.toLocaleString('en', {timeZone: "UTC"});
                      console.log(localeString);
                      //"1,a,12/21/1997, 2:12:00 PM",

entries() ,           Metoda entries () vraća novi objekt Artera Iterator koji sadrži parove ključa / vrijednosti za svaki indeks u polju.
                      const array1 = ['a', 'b', 'c'];
                      const iterator1 = array1.entries();
                      console.log(iterator1.next().value);
                      //Array [0, "a"]
                      console.log(iterator1.next().value);
                      //Array [1, "b"]

every() ,             Metoda Every () testira prolaze li svi elementi u nizu test implementiranu pruženom funkcijom. Vraća bulovu vrijednost.zvanje ovog metoda na praznom array-u vraca true / moraju svi da ispune uslov iz funkcije
                      const isBelowThreshold = (currentValue) => currentValue < 40;
                      const array1 = [1, 30, 39, 29, 10, 13];
                      console.log(array1.every(isBelowThreshold));
                      //true

reduce() ,            Metoda redukcije reduce() izvršava funkciju reduktora (koju dajete) na svakom elementu matrice, rezultirajući jednom izlaznom vrijednošću.Spojice sve u arrayu u jednu vrednost str + str + num + num sve je = string 
                      const array1 = [1, 2, 3, 4];
                      const reducer = (accumulator, currentValue) => accumulator + currentValue;
                      // 1 + 2 + 3 + 4
                      console.log(array1.reduce(reducer));
                      //10
                      // 5 + 1 + 2 + 3 + 4
                      console.log(array1.reduce(reducer, 5));
                      //15

some() ,              some() metoda provjerava prolazi li barem jedan element u nizu test koji je implementirana pruženom funkcijom. Vraća bulovu vrijednost.Ako je array prazan vraca se false
                      const array = [1, 2, 3, 4, 5];
                      const even = (element) => element % 2 === 0;
                      console.log(array.some(even));
                      //true

values() ,            Metoda values () vraća novi objekt Array Iterator koji sadrži vrijednosti za svaki indeks u polju.
                      const array1 = ['a', 'b', 'c'];
                      const iterator = array1.values();

                      for (const value of iterator) {
                        console.log(value);
                      }
                      //"a"
                      //"b"
                      //"c"



join() ,              Metoda join () stvara i vraća novi string spajanjem svih elemenata u nizu (ili objekta sličnog nizu), razdvojenih zarezima ili određenim nizom separatora. 
                      Ako niz ima samo jednu stavku, tada će se ta stavka vratiti bez korištenja separatora.
                      const elements = ['Fire', 'Air', 'Water'];
                      console.log(elements.join());
                      //"Fire,Air,Water"
                      console.log(elements.join(''));
                      //"FireAirWater"
                      console.log(elements.join('-'));
                      //"Fire-Air-Water"


*/
/**TIPS AND TRICKS ON ARRAY
 * 
 * 
 */


                                /*Brise duplikate iz nekog nizu*/    
// var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"];
// // First method
// var uniqueFruits = Array.from(new Set(fruits));
// console.log(uniqueFruits); // returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]
// // Second method
// var uniqueFruits2 = [...new Set(fruits)];
// console.log(uniqueFruits2); // returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]


                                /*Izameni specificnu vrednost u nizu*/
// var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"];
// fruits.splice(0, 2, "potato", "tomato");
// console.log(fruits); // returns [“potato”, “tomato”, “orange”, “watermelon”, “apple”, “orange”, “grape”, “apple”]


                                /*Mapira niz bez map()*/
// var friends = [
//     { name: 'John', age: 22 },
//     { name: 'Peter', age: 23 },
//     { name: 'Mark', age: 24 },
//     { name: 'Maria', age: 22 },
//     { name: 'Monica', age: 21 },
//     { name: 'Martha', age: 19 },
// ]
// var friendsNames = Array.from(friends, ({name}) => name);
// console.log(friendsNames); // returns [“John”, “Peter”, “Mark”, “Maria”, “Monica”, “Martha”]


                                /*Isprazni neki niz i birise sve u njemu*/
// var fruits = ["banana", "apple","orange", "watermelon", "apple", "orange", "grape", "apple"];
// fruits.length = 0;
// console.log(fruits); // returns []


                                /*Konvertuje niz u objekat*/
// var fruits = ["banana", "apple", "orange", "watermelon"];
// var fruitsObj = { ...fruits };
// console.log(fruitsObj); // returns {0: “banana”, 1: “apple”, 2: “orange”, 3: “watermelon”, 4: “apple”, 5: “orange”, 6: “grape”, 7: “apple”}


                                /*Ipuni niz sa podatcima*/
// var newArray = new Array(10).fill("i");
// console.log(newArray); // returns [“1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”]


                                /*Spaja nizove*/
// var fruits = ["apple", "banana", "orange"];
// var meat = ["poultry", "beef", "fish"];
// var vegetables = ["potato", "tomato", "cucumber"];
// var food = [...fruits, ...meat, ...vegetables];
// console.log(food); // [“apple”, “banana”, “orange”, “poultry”, “beef”, “fish”, “potato”, “tomato”, “cucumber”]


                                /*Trazi presek u dva niza tj. iste elemente dva niza*/
// var numOne = [0, 2, 4, 6, 8, 8];
// var numTwo = [1, 2, 3, 4, 5, 6];
// var duplicatedValues = [...new Set(numOne)].filter(item => numTwo.includes(item));
// console.log(duplicatedValues); // returns [2, 4, 6]


                                /*Brise falsy vrednosti elemenata iz niza*/
// var mixedArr = [0, "blue", "", NaN, 9, true, undefined, "white", false];
// var trueArr = mixedArr.filter(Boolean);
// console.log(trueArr); // returns [“blue”, 9, true, “white”]


                                /*Vraca neku random vrednosti iz nekog niza*/
// var colors = ["blue", "white", "green", "navy", "pink", "purple", "orange", "yellow", "black", "brown"];
// var randomColor = colors[(Math.floor(Math.random() * (colors.length)))];


                                /*Izvrce celi niz */
//  var colors = ["blue", "white", "green", "navy", "pink", "purple", "orange", "yellow", "black", "brown"];
// var reversedColors = colors.reverse();
// console.log(reversedColors); // returns [“brown”, “black”, “yellow”, “orange”, “purple”, “pink”, “navy”, “green”, “white”, “blue”]

// ILI BEZ MENJANJA ORIGINALNOG ARRAY-A :
// var reversedColors = [...colors].reverse();
// ILI
// var reversedColors = colors.slice().reverse();


                                /*Pokazuje zadnji indeks na kome se nalazi elementi koji se ponavljo u nizu*/
// var nums = [1, 5, 2, 6, 3, 5, 2, 3, 6, 5, 2, 7];
// var lastIndex = nums.lastIndexOf(5);
// console.log(lastIndex); // returns 9


                                 /*Sabira sve vrednosti niza cak i string sa brojem*/
// var nums = [1, 5, 2, 6];
// var sum = nums.reduce((x, y) => x + y);
// console.log(sum); // returns 14


                                 /*Bolje debug uz pomoc performance i merenja vremema*/
// console.time('loop')  
// for (let i = 0; i < 10000; i++) {   
//     // Do stuff here 
// }  
// console.timeEnd('loop');

// merging objects
const product = { name: 'Milk', packaging: 'Plastic', price: '5$' }
const manufacturer = { name: 'Company Name', address: 'The Company Address' }

const productManufacturer = { ...product, ...manufacturer };
console.log(productManufacturer); 
// outputs { name: "Company Name", packaging: "Plastic", price: "5$", address: "The Company Address" }

// merging an array of objects into one
const cities = [
    { name: 'Paris', visited: 'no' },
    { name: 'Lyon', visited: 'no' },
    { name: 'Marseille', visited: 'yes' },
    { name: 'Rome', visited: 'yes' },
    { name: 'Milan', visited: 'no' },
    { name: 'Palermo', visited: 'yes' },
    { name: 'Genoa', visited: 'yes' },
    { name: 'Berlin', visited: 'no' },
    { name: 'Hamburg', visited: 'yes' },
    { name: 'New York', visited: 'yes' }
];

const result = cities.reduce((accumulator, item) => {
  return {
    ...accumulator,
    [item.name]: item.visited
  }
}, {});

console.log(result);
/* outputs
Berlin: "no"
Genoa: "yes"
Hamburg: "yes"
Lyon: "no"
Marseille: "yes"
Milan: "no"
New York: "yes"
Palermo: "yes"
Paris: "no"
Rome: "yes"
*/



//1. Ternarni operator
//Ovo je sjajna ušteda koda kada želite napisati if..elseizjavu u samo jednom retku.

//Običan rukopis:

const x = 20;
let answer;

if (x > 10) {
    answer = "greater than 10";
} else {
    answer =  "less than 10";
}
//stenogram:

const answer = x > 10 ? "greater than 10" : "less than 10";
//Svoju ifizjavu možete gnijezditi i ovako:

const answer = x > 10 ? "greater than 10" : x < 5 ? "less than 5" : "between 5 and 10";



//2. Procjena kratkog spoja
//Kad dodijelite vrijednost varijable drugoj varijabli, možda želite osigurati da izvorna varijabla nije nula, nedefinirana ili prazna. Možete ili napisati dugu ifizjavu s više uvjeta ili koristiti procjenu kratkog spoja.

//Običan rukopis:

if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
     let variable2 = variable1;
}
//stenogram:

const variable2 = variable1  || 'new';
//Ne vjerujete mi? Testirajte sami (zalijepite sljedeći kôd u es6console ):

let variable1;
let variable2 = variable1  || 'bar';
console.log(variable2 === 'bar'); // prints true

variable1 = 'foo';
variable2 = variable1  || 'bar';
console.log(variable2); // prints foo
//Imajte na umu da ako postavite variable1na falseili 0, vrijednost barće biti dodijeljena.



//3. Proglašavanje skraćenice
//Dobra je praksa da svoje zadatke za varijable prijavite na početku svojih funkcija. Ova metoda skraćenice može vam uštedjeti puno vremena i prostora prilikom deklariranja više varijabli istovremeno.

//Običan rukopis:

let x;
let y;
let z = 3;
stenogram:

let x, y, z=3;



//4. Ako je Skraćenica prisutnosti
//To bi moglo biti trivijalno, ali vrijedi spomenuti. Prilikom ifprovjere, operatori dodjele mogu se ponekad izostaviti.

//Običan rukopis:

if (likeJavaScript === true)
//stenogram:

if (likeJavaScript)
//Napomena: ova dva primjera nisu potpuno jednaka, jer će provjera kratkih ruka proći onoliko dugo koliko likeJavaScriptje valjana vrijednost .

//Evo još jednog primjera. Ako aNIJE jednak istini, učinite nešto.

//Običan rukopis:

let a;
if ( a !== true ) {
// do something...
}


//stenogram:

let a;
if ( !a ) {
// do something...
}



//5. JavaScript za skraćivanje petlje
//Ovaj mali savjet zaista je koristan ako želite običan JavaScript i ne želite se oslanjati na vanjske biblioteke, poput jQuery ili lodash.

//Običan rukopis:

const fruits = ['mango', 'peach', 'banana'];
for (let i = 0; i < fruits.length; i++)
//stenogram:

for (let fruit of fruits)
//Ako ste samo željeli pristupiti indeksu, učinite:

for (let index in fruits)
//Ovo se također radi ako želite pristupiti tipkama u doslovnom objektu:

const obj = {continent: 'Africa', country: 'Kenya', city: 'Nairobi'}
for (let key in obj)
  console.log(key) // output: continent, country, city
//Skraćenica za Array.forEach:

function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
// a[0] = 2
// a[1] = 5
// a[2] = 9



//6. Procjena kratkog spoja
//Umjesto da napišemo šest redaka koda da dodijelimo zadanu vrijednost ako je planirani parametar nula ili nedefinirana, jednostavno možemo upotrijebiti logički operator kratkog spoja i istu stvar izvršiti sa samo jednom linijom koda.

//Običan rukopis:

let dbHost;
if (process.env.DB_HOST) {
  dbHost = process.env.DB_HOST;
} else {
  dbHost = 'localhost';
}
//stenogram:

const dbHost = process.env.DB_HOST || 'localhost';



//7. Decimalni osnovni dijelovi
//Možda ste ovo vidjeli uokolo. To je u biti fantastičan način za pisanje brojeva bez slijedećih nula. Na primjer, 1e7 u osnovi znači 1, a slijedi 7 nula. Predstavlja decimalnu bazu (što JavaScript tumači kao plutajući tip) jednaku 10 000 000.

//Običan rukopis:

for (let i = 0; i < 10000; i++) {}
//stenogram:

for (let i = 0; i < 1e7; i++) {}

// All the below will evaluate to true
1e0 === 1;
1e1 === 10;
1e2 === 100;
1e3 === 1000;
1e4 === 10000;
1e5 === 100000;



//8. Skraćenje imovine objekta
//Definiranje literalnih objekata u JavaScriptu olakšava život. ES6 pruža još jednostavniji način dodjeljivanja svojstava objektima. Ako je naziv varijable isti kao objektni ključ, možete iskoristiti oznaku skraćenice.

//Običan rukopis:

const x = 1920, y = 1080;
const obj = { x:x, y:y };
//stenogram:

const obj = { x, y };



//9. Skraćenica funkcija strelice
//Klasične funkcije lako se čitaju i pišu u običnom obliku, ali obično postaju malo složene i zbunjujuće kad ih počnete gnijezditi u ostalim pozivima funkcija.

//Običan rukopis:

function sayHello(name) {
  console.log('Hello', name);
}

setTimeout(function() {
  console.log('Loaded')
}, 2000);

list.forEach(function(item) {
  console.log(item);
});
//stenogram:

sayHello = name => console.log('Hello', name);

setTimeout(() => console.log('Loaded'), 2000);

list.forEach(item => console.log(item));
//Važno je napomenuti da se vrijednost thisunutar funkcije strelice određuje drugačije nego za funkcije s dugim rukama, tako da dva primjera nisu strogo jednaka. Pogledajte ovaj članak o sintaksi funkcije strelice za više pojedinosti.




//10. Implicitna kratica za povratak
//Povratak je ključna riječ koju često koristimo za vraćanje konačnog rezultata funkcije. Funkcija strelice s jednim izrazom implicitno će vratiti rezultat njegove ocjene (funkcija mora izostaviti zagrade ( {}) da bi se izostavljala ključna riječ povrat).

//Za povratak naredbe s više redaka (kao što je objektni literal) potrebno je ()umjesto {}funkcije omotati svoje tijelo funkcije. To osigurava da se kôd procjenjuje kao jedna izjava.

//Običan rukopis:

function calcCircumference(diameter) {
  return Math.PI * diameter
}
//stenogram:

calcCircumference = diameter => (
  Math.PI * diameter;
)



//11. Zadane vrijednosti parametara
//Možete upotrebljavati ifizraz za definiranje zadanih vrijednosti za parametre funkcije. U ES6, možete definirati zadane vrijednosti u samoj deklaraciji funkcija.

//Običan rukopis:

function volume(l, w, h) {
  if (w === undefined)
    w = 3;
  if (h === undefined)
    h = 4;
  return l * w * h;
}
//stenogram:

volume = (l, w = 3, h = 4 ) => (l * w * h);

volume(2) //output: 24
//12. Literali predložaka
//Zar vam nije dosadilo koristiti ' + 'za spajanje više varijabli u niz? Ne postoji li puno lakši način za to? Ako ste u mogućnosti koristiti ES6, tada ste sretni. Sve što trebate je upotrijebiti za kontrolu pozadine i ${}priložiti svoje varijable.

//Običan rukopis:

const welcome = 'You have logged in as ' + first + ' ' + last + '.'

const db = 'http://' + host + ':' + port + '/' + database;
//stenogram:

const welcome = `You have logged in as ${first} ${last}`;

const db = `http://${host}:${port}/${database}`;



//13. Skraćenje dodjele za uništavanje
//Ako radite s bilo kojim popularnim internetskim okvirom, velike su šanse da ćete koristiti polja ili podatke u obliku objektnih literala za prosljeđivanje podataka između komponenata i API-ja. Nakon što objekt podataka dosegne komponentu, trebat ćete ga raspakirati.

//Običan rukopis:

const observable = require('mobx/observable');
const action = require('mobx/action');
const runInAction = require('mobx/runInAction');

const store = this.props.store;
const form = this.props.form;
const loading = this.props.loading;
const errors = this.props.errors;
const entity = this.props.entity;
//stenogram:

import { observable, action, runInAction } from 'mobx';

const { store, form, loading, errors, entity } = this.props;
//Možete dodijeliti i svoja imena varijabli:

const { store, form, loading, errors, entity:contact } = this.props;



//14. Višenamjenska nizova kratica
//Ako ste ikada imali potrebu za pisanjem nizova s ​​više linija u kod, evo kako bi to napisali:

//Običan rukopis:

const lorem = 'Lorem ipsum dolor sit amet, consectetur\n\t'
    + 'adipisicing elit, sed do eiusmod tempor incididunt\n\t'
    + 'ut labore et dolore magna aliqua. Ut enim ad minim\n\t'
    + 'veniam, quis nostrud exercitation ullamco laboris\n\t'
    + 'nisi ut aliquip ex ea commodo consequat. Duis aute\n\t'
    + 'irure dolor in reprehenderit in voluptate velit esse.\n\t'
//Ali postoji lakši način. Samo koristite pozadine.

//stenogram:

const lorem = `Lorem ipsum dolor sit amet, consectetur
    adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse.`



//    15. Raširite operatora Skraćenica
//Operator širenja , uveden u ES6, ima nekoliko slučajeva upotrebe koji JavaScript kod čine učinkovitijim i zabavnijim za upotrebu. Može se koristiti za zamjenu određenih funkcija polja. Operator širenja jednostavno je niz od tri točke.

//Običan rukopis

// joining arrays
const odd = [1, 3, 5];
const nums = [2 ,4 , 6].concat(odd);

// cloning arrays
const arr = [1, 2, 3, 4];
const arr2 = arr.slice()
//stenogram:

// joining arrays
const odd = [1, 3, 5 ];
const nums = [2 ,4 , 6, ...odd];
console.log(nums); // [ 2, 4, 6, 1, 3, 5 ]

// cloning arrays
const arr = [1, 2, 3, 4];
const arr2 = [...arr];
//Za razliku od concat()funkcije, operator raširenja možete koristiti za umetanje niza u bilo koje drugo polje.

const odd = [1, 3, 5 ];
const nums = [2, ...odd, 4 , 6];
//Također možete kombinirati operatora širenja s notama za uništavanje ES6:

const { a, b, ...z } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a) // 1
console.log(b) // 2
console.log(z) // { c: 3, d: 4 }



//16. Skraćenica obveznog parametra
//JavaScript će prema zadanim postavkama postaviti parametre funkcija undefinedako im se ne prođe vrijednost. Neki će drugi jezici iznijeti upozorenje ili grešku. Da biste nametnuli dodjeljivanje parametara, pomoću ifizjave možete izbaciti pogrešku ako undefinedili možete iskoristiti "Skraćenicu parametra".

//Običan rukopis:

function foo(bar) {
  if(bar === undefined) {
    throw new Error('Missing parameter!');
  }
  return bar;
}
//stenogram:

mandatory = () => {
  throw new Error('Missing parameter!');
}

foo = (bar = mandatory()) => {
  return bar;
}




//17. Array.Find Prečast
//Da ste ikada imali zadatak pisati funkciju pronalaženja u običnom JavaScript-u, vjerojatno biste koristili forpetlju. U ES6 find()uvedena je nova funkcija matriksa nazvana .

//Običan rukopis:

const pets = [
  { type: 'Dog', name: 'Max'},
  { type: 'Cat', name: 'Karl'},
  { type: 'Dog', name: 'Tommy'},
]

function findDog(name) {
  for(let i = 0; i<pets.length; ++i) {
    if(pets[i].type === 'Dog' && pets[i].name === name) {
      return pets[i];
    }
  }
}
//stenogram:

pet = pets.find(pet => pet.type ==='Dog' && pet.name === 'Tommy');
console.log(pet); // { type: 'Dog', name: 'Tommy' }



//18. Objekt [tipka] Skraćenica
//Jeste li znali da Foo.barse to može napisati i kao Foo['bar']? U početku, čini se da nema razloga zašto biste ga tako napisali. No ovaj vam zapis daje sastavni blok za pisanje koda koji se može ponovo upotrebljavati.
//
//Razmotrite ovaj pojednostavljeni primjer funkcije provjere valjanosti:

function validate(values) {
  if(!values.first)
    return false;
  if(!values.last)
    return false;
  return true;
}

console.log(validate({first:'Bruce',last:'Wayne'})); // true
//Ova funkcija savršeno radi svoj posao. Međutim, razmislite o scenariju u kojem imate jako puno oblika gdje trebate primijeniti provjeru valjanosti, ali s različitim poljima i pravilima. Ne bi li bilo lijepo izgraditi generičku funkciju provjere valjanosti koja se može konfigurirati za vrijeme izvođenja?

//stenogram:

// object validation rules
const schema = {
  first: {
    required:true
  },
  last: {
    required:true
  }
}

// universal validation function
const validate = (schema, values) => {
  for(field in schema) {
    if(schema[field].required) {
      if(!values[field]) {
        return false;
      }
    }
  }
  return true;
}


console.log(validate(schema, {first:'Bruce'})); // false
console.log(validate(schema, {first:'Bruce',last:'Wayne'})); // true
//Sada imamo funkciju provjere valjanosti koju možemo ponovo upotrijebiti u svim oblicima bez potrebe za pisanjem prilagođene funkcije provjere valjanosti za svakog.

//19. Dvostruko bitno NE Skraćeno
//Operatori s bitnim postupcima jedna su od značajki o kojima učite u početnim JavaScript udžbenicima i nikad ih ne možete primijeniti bilo gdje. Osim toga, tko želi raditi s onim i nulom ako se ne bavite binarnim?
//Međutim, postoji vrlo praktičan slučaj upotrebe za Operator Double Bitwise NOT. Možete ga koristiti kao zamjenu za Math.floor(). Prednost operatora Double Bitwise NOT je u tome što isti rad obavlja mnogo brže. Možete pročitati više o bitovima operatera ovdje .

//Običan rukopis:

Math.floor(4.9) === 4  //true
//stenogram:

~~4.9 === 4  //true



//20. Skraćena snaga eksponenta
//Skraćenica za funkciju napajanja eksponenta Math:

//Običan rukopis:

Math.pow(2,3); // 8
Math.pow(2,2); // 4
Math.pow(4,3); // 64
//stenogram:

2**3 // 8
2**4 // 4
4**3 // 64



//21. Pretvaranje niza u broj
//Postoje slučajevi kada vaš kôd prima podatke koji dolaze u String formatu, ali ih treba obraditi u numeričkom formatu. Nije velika stvar, možemo izvršiti brzu pretvorbu.

//Običan rukopis:

const num1 = parseInt("100");
const num2 =  parseFloat("100.01");
//stenogram:

const num1 = +"100"; // converts to int data type
const num2 =  +"100.01"; // converts to float data type



//22. Dodjela imovine na objektima
//Razmotrite sljedeći dio koda:

let fname = { firstName : 'Black' };
let lname = { lastName : 'Panther'}
//Kako biste ih spojili u jedan objekt? Jedan od načina je pisati funkciju koja kopira podatke iz drugog objekta na prvi. Nažalost, ovo možda nije ono što želite - možda ćete trebati stvoriti potpuno novi objekt bez mutiranja bilo kojeg od postojećih objekata. Najlakši način je upotreba Object.assignfunkcije uvedene u ES6:

let full_names = Object.assign(fname, lname);
//Također možete koristiti oznaku uništenja objekta uvedenu u ES8:

let full_names = {...fname, ...lname};
//Ne postoji ograničenje broja objekata koji možete spojiti. Ako imate objekte s identičnim imenima svojstava, vrijednosti će biti prebrisane redoslijedom spajanja.




// 23. Bitno indeks kratice
// Prilikom pretraživanja pomoću matrice, indexOf()funkcija se koristi za dobivanje položaja stavke koju tražite. Ako stavka nije pronađena, -1vraća se vrijednost . U JavaScript 0se smatra 'lažnim', dok su brojevi veći ili manji nego što 0su "truthy". Kao rezultat, mora se napisati ispravan kod kao što je ovaj.

// Običan rukopis:

if(arr.indexOf(item) > -1) { // Confirm item IS found

}

if(arr.indexOf(item) === -1) { // Confirm item IS NOT found

}
stenogram:

if(~arr.indexOf(item)) { // Confirm item IS found

}

if(!~arr.indexOf(item)) { // Confirm item IS NOT found

}
bitwise(~)//Operator će vratiti vrijednost truthy za ništa, ali -1. Negirati to je jednostavno kao i raditi !~. Alternativno, možemo koristiti i includes()funkciju:

if(arr.includes(item)) { // Returns true if the item exists, false if it doesn't

}



// 24. Object.entries ()
// Ovo je značajka koja je uvedena u ES8 koja omogućuje pretvaranje doslovnog objekta u niz parova ključ / vrijednost. Pogledajte primjer u nastavku:

const credits = { producer: 'John', director: 'Jane', assistant: 'Peter' };
const arr = Object.entries(credits);
console.log(arr);

/** Output:
[ [ 'producer', 'John' ],
  [ 'director', 'Jane' ],
  [ 'assistant', 'Peter' ]
]
**/



//25.Vrijednosti objekta ()
//Ovo je također nova značajka uvedena u ES8 koja ima sličnu funkciju Object.entries(), ali bez ključnog dijela:

const credits = { producer: 'John', director: 'Jane', assistant: 'Peter' };
const arr = Object.values(credits);
console.log(arr);

/** Output:
[ 'John', 'Jane', 'Peter' ]
**/
