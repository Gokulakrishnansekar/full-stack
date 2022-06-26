let a=2;
if (a=3)
{

console.log(a);
}
else
console.log(a);
// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[16]; 
  console.log(player);
  // Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    let ele=records[id];
    if(value==="")
    {
      delete ele[prop];
    }
      if(prop!="tracks")
      {
          console.log("yes");
        ele[prop]=value;
      }
      else{
        if(!ele.hasOwnProperty("tracks"))
        {
           // var tracks=[value]
           if(ele.tracks)
          ele.tracks=[value];
        }
        else
        {
          
            ele["track"].push(value);
          
        }
      }
      return records;
    }
    
updateRecords(recordCollection, 2548, "artist", ""), 
 console.log(recordCollection);





 // Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total=0;
for(let i=0;i<myArr.length;i++)
{
    console.log("i");
  total+=myArr[i];
}
console.log(total+1);
// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    
    // Only change code below this line
    for(let i=0;i<contacts.length;i++)
    {
      if(contacts[i].firstName===name  )
      {
        if(contacts[i].hasOwnProperty(prop))
        return contacts[i][prop];
        else
        return "No such property";
      }
      else if(i===contacts.length-1)
      {
        return "No such contact";
  
      }
      
    }
    // Only change code above this line
  }
  let countArray=[];
  
  console.log(lookUpProfile("Kristin", "numbers"));
  console.log(Math.random())
  function countdown(n){
    if(n>1)
    {
      return [];
    }
    
  
    return countdown(n-1);
    countArray.push(n);
  }
  console.log(countdown(5));
var printNumTwo;
for (var i = 0; i < 4; i++) {
  
    printNumTwo = function() {
     console.log(i);
  };

}
printNumTwo();


const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);//reduce(fuction(total,currentvalue),initialvalue)
  }
console.log("sum is"+sum(4,3,3));
const arr=[1,2,3,4,4,5,443,3,2];
const maxv=(...arr)=>Math.max(...arr);


console.log(maxv(...arr));


const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);

// regex expression

console.log("regex usage");
let mainstr='Hi this is Gokul here!';
let test1=/gokul/i;
let test2=/Gokul/;
let match1=/[g.kul]/ig;
let match2=/gokul/ig;
console.log(mainstr.match(match2));


let quoteSample = "3 blind mice.";
let myRegex = /[^0-9^aeiou]/ig; // Change this line
let result = quoteSample.match(myRegex);
console.log(result);
let soccerWord = "gooooooooaloo!";
let gPhrase = "gut feeling";
let oPhrase = "over to the moon";
let goRegex = /go*/gi;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));
let quoteSample1='thisiis example';
let reg1=/i+/ig;
console.log(quoteSample1.match(reg1));


console.log("pattern matching:");
let username = "Oceans11";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/ig; // Change this line
console.log(userCheck.test(username));

console.log("remove space matching:");

console.clear();
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let val=hello.replace(wsRegex,"");
console.log(val);


let arr3=[1,2,3];
arr3=[...arr3];
console.log(arr3);

function quickCheck(arr, elem) {
  // Only change code below this line
  return arr.indexOf(elem);
  
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
  
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  let count=0;
  // Only change code below this line
  for(let val in usersObj)
  {
    console.log(val);
   
    if(usersObj[val].online===true)
    count+=1;
  }
  return count;
  // Only change code above this line
}

console.clear();
function findLongestWordLength(str) {
  let maxi=0;
  let len=0;
  let fin=0;
  for(let i=0;i<=str.length;i++)
  {
    //let len=0
    if(str[i]=" ")
    {
      let maxi1=(maxi,len)=>{return (maxi>len)?maxi:len};
      if(maxi1===maxi)
      maxi=len;
      len=0;
    }
    len++;

  }
  return maxi;
//  return newstr.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
