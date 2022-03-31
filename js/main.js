//! destruktirizacia massiva
// const arr = [100,200,300,400,500];
// let [a,b,c,d,e] = arr;
// console.log(a,b,c,d,e); //? 100 200 300 400 500


//! Rest--operator
// let [a, ...rest] = arr;
// console.log(rest); //? [200 300 400 500]
// console.log(a); //? 100
// console.log(arr);//? [100, 200, 300, 400, 500]

//! podmena peremennyh
// let zero = 2;
// let one = 1;
// let two = 0;
// [zero,one,two] = [two,one, zero]; //? 0 1 2
// console.log(zero);
// console.log(one);
// console.log(two);

//! obrawenie k elementu masiiva
// const colors = ['red'];
// const [firstColor = 'blue'] = colors;
// console.log(firstColor); //? esli pustoi [] to 'blue' esli est' znach [red] to 'red'

//! destruktirizacia ob'ekta
// let artist = {
//     name:'travis',
//     lastName: 'scott',
//     position: 'rapper',
// };
// let {name,lastName,position} = artist;
// console.log(name);
// console.log(lastName);
// console.log(position);

//? perezapisuvaem klychi v peremennye
// let {lastName:hislastName,
//     name:hisname,
//     position:hisposition,
//     wife = 'kylie'} = artist;

// console.log(hisname);
// hisname = 'asap';
// console.log(hisname);
// console.log(hislastName);
// console.log(hisposition);
// console.log(artist);
// console.log(wife);

//! destruktirizacia stroki
// let str = 'plus ultra'.split(' ');//? ['plus','ultra']
// let [str1,str2]= str;
// console.log(str1,str2);


//! Spread--operatory
// let arr1 = ['hello','bye','spasibo' ];
// let arr2 = [10,20,...arr1,30,40];
// console.log(arr2); //? [10, 20, 'hello', 'bye', 'spasibo', 30, 40]

// let arr3 = [...arr1];
// console.log(arr3); //? ['hello', 'bye', 'spasibo']
// arr3.push(1000);
// console.log(arr3); //? ['hello', 'bye', 'spasibo', 1000]
// console.log(arr1);

//! sliania massiva
// let a = [20,30,];
// let b = [400,500];
// let arr = [...b,...a];
// console.log(arr); //? [400, 500, 20, 30]

// let letters = 'abcd';
// let arr = [...letters];
// console.log(arr); //? ['a', 'b', 'c', 'd']

//! sliania ob'ekta
// let obj1 = {name:'tyler', age:33};
// let obj2 = {name:'josh', age:32};
// let resObj = {...obj1,...obj2};
// console.log(resObj); //? {name: 'josh', age: 32}

// let obj1 = {name1:'tyler', age:33};
// let obj2 = {name:'josh', age1:32};
// let resObj = {...obj1,...obj2};
// console.log(resObj); //? {name1: 'tyler', age: 33, name: 'josh', age1: 32}
// let obj3 = {...obj1,status: true,name: 'jack'};
// console.log(obj3);

// function f1(a,...b){
//     console.log(a);
//     console.log(b);
// }
// f1(1, 2);
// f1(1,23,2,5,5,56,5,6,45,566,);

//! glubokoe kopirovanie

// const car = {color: 'red', wheels: { amount: 4,shape:'round'} };

//? poverhnostnoe kopirovanie Spread
// let car2 = {...car}
// console.log(car2); // {color: 'red', wheels: {…}}

// console.log(car2.wheels.amount); // 4
// car2.wheels.amount = 5;
// console.log(car2); // {color: 'red', wheels: {…}}

//? glubokoe kopirovanie Spread

// const car = {color: 'red', wheels: { amount: 4,shape:'round'} };
// let car2 = JSON.parse(JSON.stringify(car));
// console.log(car2);

// console.log(car2.wheels.amount); // 4
// car2.wheels.amount = 5;
// console.log(car2);
// console.log(car);

// let user = {
//     name:'asap',
//     sayHello: function(){
//     console.log(this.name);
    
// },
// };
// user.sayHello(); //? asap

// let newUser = JSON.parse(JSON.stringify(user));
// let newUser = {...user}; //? {name: 'asap', sayHello: ƒ}  ESLI bez JSON
// console.log(newUser); //? {name: 'asap'}
// newUser.sayHello(); //? owibka

let person1 = {
    name: 'Jack',
    age: 19,
    favoriteFood: ['Lagman', 'Manty'],
    pet: {
      name: 'Sharik',
      age: 2,
    },
    study: {
      university: 'KSTU',
      subjects: ['Math', 'Literature'],
      location: {
        str: 'Manas str 66',
        city: 'Bishkek',
      },
    },
  };
  let { 
    favoriteFood: [a, b], 
    pet: { 
        name 
    }, 
    study: { 
        university, 
        subjects: [, lit], 
        location:{city}, 
        mail='index' 
    } 
 } = person1; 

  console.log(`${a} and ${b}`); 
  console.log(name); 
  console.log(university); 
  console.log(lit); 
  console.log(city); 
  console.log(mail);

  

