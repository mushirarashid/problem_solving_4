var nam = "musu";
var age = 20;
var student = true;
var arr = [1, 2, 3, 4];

console.log(typeof nam);
console.log(typeof student);

// check array
console.log(Array.isArray(arr));

console.log(arr.includes(9));

// adding array

var newArr = [11, 12, 13, 14];
var full = arr.concat(newArr);
console.log(full);

var splice_array = [0, 1, 2, 3, 4, 5, 8];

var result = splice_array.splice(2, 3, 99, 88, 77);
console.log(result);
console.log(splice_array);

// ============== Remove duble element
var person_details = ["abul", "babu", "kabul", "babu", "abul", 1, 2, 3, 2, 3];

function removeDuplicate(names_num) {
  var unique = [];
  for (var i = 0; i < names_num.length; i++) {
    var info = names_num[i];
    if (unique.includes(info) === false) {
      unique.push(info);
    }
  }
  return unique;
}
var uniqueResult = removeDuplicate(person_details);
console.log(uniqueResult);

var names = ["abul", "babu", "kabul", "babu", "abul"];

function delete_extra(per) {
  var uniqueName = [];
  for (var i = 0; i < per.length; i++) {
    var single = per[i];
    if (uniqueName.includes(single) === false) {
      uniqueName.push(single);
    }
  }
  return uniqueName;
}
var returnSingle = delete_extra(names);
console.log(returnSingle);

var numbers = [1, 2, 3, 58, 62, 2, 65, 3, 3, 2];

function removeExtraNumbers(pera_num) {
  var unique_num = [];
  for (var i = 0; i < pera_num.length; i++) {
    var num_element = pera_num[i];
    if (unique_num.includes(num_element) === false) {
      unique_num.push(num_element);
    }
  }
  return unique_num;
}
var return_num = removeExtraNumbers(numbers);
console.log(return_num);

// ====================
for (var i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 3 === 3) {
    console.log("foo");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}

var phones_details = [
  { name: "iphone", camera: 12, price: 36000 },
  { name: "samsun", camera: 12, price: 22000 },
  { name: "walton", camera: 12, price: 82000 },
  { name: "xaomi", camera: 12, price: 52000 },
  { name: "oppo", camera: 12, price: 20000 },
  { name: "nokia", camera: 12, price: 44000 },
  { name: "htc", camera: 12, price: 62000 },
];

function cheapestPhone(phones) {
  var cheapest = phones_details[0];
  for (var i = 0; i < phones.length; i++) {
    var phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  console.log(cheapest);
}
cheapestPhone(phones_details);

var phones_details = [
  { name: "iphone", camera: 20, price: 36000 },
  { name: "samsun", camera: 10, price: 22000 },
  { name: "walton", camera: 8, price: 82000 },
  { name: "xaomi", camera: 9, price: 52000 },
  { name: "oppo", camera: 12, price: 20000 },
  { name: "nokia", camera: 15, price: 44000 },
  { name: "htc", camera: 18, price: 62000 },
];

function heightCamera(cameras) {
  var height = phones_details[0];
  for (var i = 0; i < cameras.length; i++) {
    var element = phones_details[i];
    if (element.camera > height.camera) {
      height = element;
    }
  }
  console.log(height);
}
heightCamera(phones_details);

// array of object sum
var products = [
  { name: "shirt", price: 800, quantity: 3 },
  { name: "pant", price: 900, quantity: 3 },
  { name: "shoe", price: 1200, quantity: 3 },
  { name: "belt", price: 700, quantity: 3 },
];
function totalCost(perameter) {
  var sum = 0;
  var height = products[0];
  for (var i = 0; i < perameter.length; i++) {
    var element = products[i];
    var fullCost = element.price * element.quantity;
    sum += element.price + fullCost;
    if (element.price > height.price) {
      height = element;
    }
  }
  console.log(height);
  console.log(sum);
}
totalCost(products);

// ======================

function ticketPrice(numbers) {
  let first_100_rate = 100;
  let second_100_rate = 90;
  let rest_ticket_rate = 70;

  if (numbers <= 100) {
    var first_price = numbers * first_100_rate;
    return first_price;
  } else if (numbers > 100 && numbers <= 200) {
    var second_first_price = 100 * first_100_rate;

    var rest_quentity = numbers - 100;
    var second_last_quentity_price = rest_quentity * second_100_rate;
    var totalRate = second_first_price + second_last_quentity_price;

    return totalRate;
  } else if (numbers > 200) {
    var third_first_rate = 100 * first_100_rate;
    var second_first_price = 100 * second_100_rate;
    var third_fist_people = numbers - 200;
    var third_fist_rate = third_fist_people * rest_ticket_rate;

    var rest_price = third_first_rate + second_first_price + third_fist_rate;
    return rest_price;
  }
}
let return_price = ticketPrice(120);
console.log("price:", return_price);

let sum = 0;
for (let i = 0; i <= 3; i++) {
  sum = sum + i;
}
console.log(sum);

// ===================

function paperRequirements(book1, book2, book3) {
  var first_book_paper_need = 100;
  var second_book_paper_need = 200;
  var third_book_paper_need = 300;

  var total_first_book_paper_need = book1 * first_book_paper_need;

  var total_second_book_paper_need = book2 * second_book_paper_need;

  var total_third_book_paper_need = book3 * third_book_paper_need;

  var total_papers =
    total_first_book_paper_need +
    total_second_book_paper_need +
    total_third_book_paper_need;
  return total_papers;
}
var need_papers = paperRequirements(3, 4, 8);
console.log(need_papers);

// find longest string

var nam = ["sajid", "mamun", "jubayer bin rased", "chinku"];

function bestFriend(bigName) {
  var long = nam[0];
  for (var i = 0; i < bigName.length; i++) {
    var element = bigName[i];
    if (element.length > long.length) {
      long = element;
    }
  }
  console.log(long);
}
bestFriend(nam);

// find onlyPositive number

var number = [45, 87, 96, 11, 63, -56, 71, 28];

function onlyPositive(positiveNumber) {
  var positiveNumberOnly = [];
  for (var i = 0; i < positiveNumber.length; i++) {
    var element = positiveNumber[i];
    if (element < 0) {
      break;
    }
    positiveNumberOnly.push(element);
  }
  return positiveNumberOnly;
}
var positiveAns = onlyPositive(number);
console.log(positiveAns);
