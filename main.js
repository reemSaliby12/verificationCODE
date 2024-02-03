let one = document.querySelector('[name="one"]');
console.log(one);
let two = document.querySelector('[name="two"]');
console.log(two);
let three = document.querySelector('[name="three"]');
console.log(three);
let four = document.querySelector('[name="four"]');
console.log(four);
let five = document.querySelector('[name="five"]');
console.log(five);
let six = document.querySelector('[name="six"]');
console.log(six);

window.onload = () => {
  one.focus();
  one.onkeyup = () => {
    console.log(one.value)
    if (one.value.length === 1) {
      one.blur()
      two.focus()

    }
  }

  two.onkeyup = () => {
    console.log(two.value)

    if (two.value.length === 1) {
      two.blur()
      three.focus()
    }


  }
  three.onkeyup = () => {
    console.log(three.value)

    if (three.value.length === 1) {
      three.blur()
      four.focus()
    }


  }
  four.onkeyup = () => {
    console.log(four.value)

    if (four.value.length === 1) {
      four.blur()
      five.focus()
    }


  }
  five.onkeyup = () => {
    console.log(four.value)

    if (five.value.length === 1) {
      five.blur()
      six.focus()
    }


  }
  six.onkeyup = () => {
    console.log(six.value)

    if (six.value.length === 1) {
      six.blur()
      let load1 = document.querySelector('[name="load"]');
      load1.style.display='flex';
     
      
  
    }
  }
}


