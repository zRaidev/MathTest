function addition(difficulty) {
  //console.log(difficulty)
  if (difficulty == "easy") {
    let numOne = Math.floor(Math.random() * 11);
    if (numOne === 0) numOne = 11;
    let numTwo = Math.floor(Math.random() * 11);
    if (numTwo === 0) numTwo = 12;
    let answer = numOne + numTwo;
    opContainer.innerHTML = `
      <div class="operation">
        <h3>${numOne}+${numTwo}</h3>
      </div>
      <label for="number-input">=</label>
      <input type="number" id="number-input">
    `;
    generalOperationSistem(answer, 10);
  }
  else if (difficulty == "mid") {
    let numOne = Math.floor(Math.random() * 50);
    if (numOne === 0) numOne = 50;
    let numTwo = Math.floor(Math.random() * 50);
    if (numTwo === 0) numTwo = 51;
    let answer = numOne + numTwo;
    opContainer.innerHTML = `
      <div class="operation">
        <h3>${numOne}+${numTwo}</h3>
      </div>
      <label for="number-input">=</label>
      <input type="number" id="number-input">
    `;
    generalOperationSistem(answer, 12);
  }
  else if (difficulty == "hard") {
    let numOne = Math.floor(Math.random() * 62);
    if (numOne === 0) numOne = 62;
    let numTwo = Math.floor(Math.random() * 62);
    if (numTwo === 0) numTwo = 63;
    let numThree = Math.floor(Math.random() * 62);
    if (numThree === 0) numThree = 64;
    let answer = numOne + numTwo + numThree;
    opContainer.innerHTML = `
      <div class="operation">
        <h3>${numOne}+${numTwo}+${numThree}</h3>
      </div>
      <label for="number-input">=</label>
      <input type="number" id="number-input">
    `;
    generalOperationSistem(answer, 15);
  }
  else if (difficulty == "extreme") {
    let options = Math.floor(Math.random() * 2 + 1);
    console.log(options)
    let answer;
    if (options == 1) {
      let numOne = Math.floor(Math.random() * 73);
      if (numOne === 0) numOne = 73;
      let numTwo = Math.floor(Math.random() * 73);
      if (numTwo === 0) numTwo = 74;
      let numThree = Math.floor(Math.random() * 73);
      if (numThree === 0) numThree = 75;
      answer = numOne + numTwo + numThree;
      opContainer.innerHTML = `
        <div class="operation">
          <h3>${numOne}+${numTwo}+${numThree}</h3>
        </div>
        <label for="number-input">=</label>
        <input type="number" id="number-input">
      `;
    } else {
      let numOne = Math.floor(Math.random() * 100);
      if (numOne === 0) numOne = 100;
      let numTwo = Math.floor(Math.random() * 100);
      if (numTwo === 0) numTwo = 101;
      answer = numOne + numTwo;
      opContainer.innerHTML = `
        <div class="operation">
          <h3>${numOne}+${numTwo}</h3>
        </div>
        <label for="number-input">=</label>
        <input type="number" id="number-input">
      `;
    }
    generalOperationSistem(answer, 18);
  }
}

function subtraction(difficulty) {
  //console.log(difficulty)
  if (difficulty == "easy") {
    let numOne = Math.floor(Math.random() * 11);
    if (numOne === 0) numOne = 12;
    let numTwo = Math.floor(Math.random() * 11);
    if (numTwo === 0) numTwo = 11;
    let newOne = Math.floor(Math.random() * 6);
    if (numOne < numTwo) numOne = numTwo + newOne;
    let answer = numOne - numTwo;
    opContainer.innerHTML = `
    <div class="operation">
    <h3>${numOne}-${numTwo}</h3>
    </div>
    <label for="number-input">=</label>
    <input type="number" id="number-input">
    `;
    generalOperationSistem(answer, 10);
  }
  else if (difficulty == "mid") {
    let numOne = Math.floor(Math.random() * 50);
    if (numOne === 0) numOne = 51;
    let numTwo = Math.floor(Math.random() * 50);
    if (numTwo === 0) numTwo = 52;
    let newOne = Math.floor(Math.random() * 10);
    if (numOne < numTwo) numOne = numTwo + newOne;
    let answer = numOne - numTwo;
    opContainer.innerHTML = `
    <div class="operation">
    <h3>${numOne}-${numTwo}</h3>
    </div>
    <label for="number-input">=</label>
    <input type="number" id="number-input">
    `;
    generalOperationSistem(answer, 12);
  }
  else if (difficulty == "hard") {
    let numOne = Math.floor(Math.random() * 62);
    if (numOne === 0) numOne = 63;
    let numTwo = Math.floor(Math.random() * 62);
    if (numTwo === 0) numTwo = 64;
    let numThree = Math.floor(Math.random() * 62);
    if (numThree === 0) numThree = 65;
    let newOne = Math.floor(Math.random() * 16);
    let TwoThree = numTwo + numThree;
    if (numOne < TwoThree) numOne = TwoThree + newOne;
    let answer = numOne - numTwo - numThree;
    opContainer.innerHTML = `
    <div class="operation">
    <h3>${numOne}-${numTwo}-${numThree}</h3>
    </div>
    <label for="number-input">=</label>
    <input type="number" id="number-input">
    `;
    generalOperationSistem(answer, 15);
  }
  else if (difficulty == "extreme") {
    let options = Math.floor(Math.random() * 2 + 1);
    console.log(options)
    let answer;
    if (options == 1) {
      let numOne = Math.floor(Math.random() * 72);
      if (numOne === 0) numOne = 73;
      let numTwo = Math.floor(Math.random() * 72);
      if (numTwo === 0) numTwo = 74;
      let numThree = Math.floor(Math.random() * 72);
      if (numThree === 0) numThree = 75;
      let newOne = Math.floor(Math.random() * 20);
      let TwoThree = numTwo + numThree;
      if (numOne < TwoThree) numOne = TwoThree + newOne;
      answer = numOne - numTwo - numThree;
      opContainer.innerHTML = `
        <div class="operation">
        <h3>${numOne}-${numTwo}-${numThree}</h3>
        </div>
        <label for="number-input">=</label>
        <input type="number" id="number-input">
      `;
    } else {
      let numOne = Math.floor(Math.random() * 100);
      if (numOne === 0) numOne = 101;
      let numTwo = Math.floor(Math.random() * 100);
      if (numTwo === 0) numTwo = 102;
      let newOne = Math.floor(Math.random() * 25);
      if (numOne < numTwo) numOne = numTwo + newOne;
      answer = numOne - numTwo;
      opContainer.innerHTML = `
      <div class="operation">
      <h3>${numOne}-${numTwo}</h3>
      </div>
      <label for="number-input">=</label>
      <input type="number" id="number-input">
      `;
    }
    generalOperationSistem(answer, 18);
  }
}


function multiplication(difficulty) {
  //console.log(difficulty)
  if (difficulty == "easy") {
    let numOne = Math.floor(Math.random() * 5);
    if (numOne === 0) numOne = 5;
    else if (numOne === 1) numOne = 6;
    let numTwo = Math.floor(Math.random() * 5);
    if (numTwo === 0) numTwo = 5;
    else if (numTwo === 1) numTwo = 6;
    let answer = numOne * numTwo;
    opContainer.innerHTML = `
    <div class="operation">
    <h3>${numOne}x${numTwo}</h3>
    </div>
    <label for="number-input">=</label>
    <input type="number" id="number-input">
    `;
    generalOperationSistem(answer, 10);
  }
  else if (difficulty == "mid") {
    let numOne = Math.floor(Math.random() * 8);
    if (numOne === 0) numOne = 8;
    else if (numOne === 1) numOne = 9;
    let numTwo = Math.floor(Math.random() * 8);
    if (numTwo === 0) numTwo = 8;
    else if (numTwo === 1) numTwo = 9;
    let answer = numOne * numTwo;
    opContainer.innerHTML = `
    <div class="operation">
    <h3>${numOne}x${numTwo}</h3>
    </div>
    <label for="number-input">=</label>
    <input type="number" id="number-input">
    `;
    generalOperationSistem(answer, 12);
  }
  else if (difficulty == "hard") {
    let numOne = Math.floor(Math.random() * 14);
    if (numOne === 0) numOne = 14;
    else if (numOne === 1) numOne = 15;
    let numTwo = Math.floor(Math.random() * 14);
    if (numTwo === 0) numTwo = 14;
    else if (numTwo === 1) numTwo = 15;
    let answer = numOne * numTwo;
    opContainer.innerHTML = `
    <div class="operation">
    <h3>${numOne}x${numTwo}</h3>
    </div>
    <label for="number-input">=</label>
    <input type="number" id="number-input">
    `;
    generalOperationSistem(answer, 15);
  }
  else if (difficulty == "extreme") {
    let options = Math.floor(Math.random() * 2 + 1);
    console.log(options)
    let answer;
    if (options == 1) {
      let numOne = Math.floor(Math.random() * 11);
      if (numOne === 0) numOne = 11;
      else if (numOne === 1) numOne = 12;
      let numTwo = Math.floor(Math.random() * 10);
      if (numTwo === 0) numTwo = 10;
      if (numTwo === 1) numTwo = 11;
      let numThree = Math.floor(Math.random() * 9);
      if (numThree === 0) numThree = 9;
      else if (numThree === 1) numThree = 10;
      answer = numOne * numTwo * numThree;
      opContainer.innerHTML = `
        <div class="operation">
        <h3>${numOne}x${numTwo}x${numThree}</h3>
        </div>
        <label for="number-input">=</label>
        <input type="number" id="number-input">
      `;
    } else {
      let numOne = Math.floor(Math.random() * 19);
      if (numOne === 0) numOne = 19;
      else if (numOne === 1) numOne = 20;
      let numTwo = Math.floor(Math.random() * 19);
      if (numTwo === 0) numTwo = 19;
      else if (numTwo === 1) numTwo = 20;
      answer = numOne * numTwo;
      opContainer.innerHTML = `
      <div class="operation">
      <h3>${numOne}x${numTwo}</h3>
      </div>
      <label for="number-input">=</label>
      <input type="number" id="number-input">
      `;
    }
    generalOperationSistem(answer, 18);
  }
}

function mixOperation(difficulty) {
  //console.log(difficulty)
  if (difficulty == "easy") {
    let options = Math.floor(Math.random() * 3 + 1);
    //console.log(options)
    let answer;
    if (options == 1) {
      let numOne = Math.floor(Math.random() * 35);
      if (numOne === 0) numOne = 35;
      else if (numOne === 1) numOne = 36;
      let numTwo = Math.floor(Math.random() * 37);
      if (numTwo === 0) numTwo = 37;
      if (numTwo === 1) numTwo = 38;
      let numThree = Math.floor(Math.random() * 35);
      if (numThree === 0) numThree = 35;
      else if (numThree === 1) numThree = 36;
      if (numThree > numOne * numTwo) numThree = numOne * numTwo - 3;
      answer = numOne + numTwo - numThree;
      opContainer.innerHTML = `
        <div class="operation">
        <h3>${numOne}+${numTwo}-${numThree}</h3>
        </div>
        <label for="number-input">=</label>
        <input type="number" id="number-input">
      `;
    }
    else if (options == 2) {
      let numOne = Math.floor(Math.random() * 10);
      if (numOne === 0) numOne = 10;
      else if (numOne === 1) numOne = 11;
      let numTwo = Math.floor(Math.random() * 5);
      if (numTwo === 0) numTwo = 5;
      else if (numTwo === 1) numTwo = 6;
      let numThree = Math.floor(Math.random() * 37);
      if (numThree === 0) numThree = 37;
      if (numThree === 1) numThree = 38;
      answer = numOne * numTwo + numThree;
      opContainer.innerHTML = `
        <div class="operation">
        <h3>${numOne}x${numTwo}+${numThree}</h3>
        </div>
        <label for="number-input">=</label>
        <input type="number" id="number-input">
      `;
    }
    else if (options == 3) {
      let numOne = Math.floor(Math.random() * 11);
      if (numOne === 0) numOne = 11;
      else if (numOne === 1) numOne = 12;
      let numTwo = Math.floor(Math.random() * 5);
      if (numTwo === 0) numTwo = 5;
      else if (numTwo === 1) numTwo = 6;
      let numThree = Math.floor(Math.random() * 37);
      if (numThree === 0) numThree = 37;
      if (numThree === 1) numThree = 38;
      if (numOne < numThree) numThree = numOne * numTwo - 7
      answer = numOne * numTwo - numThree;
      opContainer.innerHTML = `
        <div class="operation">
        <h3>${numOne}x${numTwo}-${numThree}</h3>
        </div>
        <label for="number-input">=</label>
        <input type="number" id="number-input">
      `;
    }
    generalOperationSistem(answer, 10);
  }
  else if (difficulty == "mid") {
    let options = Math.floor(Math.random() * 3 + 1);
    //console.log(options)
    let answer;
    if (options == 1) {
      let numOne = Math.floor(Math.random() * 42);
      if (numOne === 0) numOne = 42;
      else if (numOne === 1) numOne = 43;
      let numTwo = Math.floor(Math.random() * 41);
      if (numTwo === 0) numTwo = 41;
      if (numTwo === 1) numTwo = 42;
      let numThree = Math.floor(Math.random() * 40);
      if (numThree === 0) numThree = 40;
      else if (numThree === 1) numThree = 41;
      if (numThree > numOne * numTwo) numThree = numOne * numTwo - 3;
      answer = numOne + numTwo - numThree;
      opContainer.innerHTML = `
        <div class="operation">
        <h3>${numOne}+${numTwo}-${numThree}</h3>
        </div>
        <label for="number-input">=</label>
        <input type="number" id="number-input">
      `;
    }
    else if (options == 2) {
      let numOne = Math.floor(Math.random() * 11);
      if (numOne === 0) numOne = 11;
      else if (numOne === 1) numOne = 12;
      let numTwo = Math.floor(Math.random() * 11);
      if (numTwo === 0) numTwo = 11;
      else if (numTwo === 1) numTwo = 12;
      let numThree = Math.floor(Math.random() * 45);
      if (numThree === 0) numThree = 45;
      answer = numOne * numTwo + numThree;
      opContainer.innerHTML = `
        <div class="operation">
        <h3>${numOne}x${numTwo}+${numThree}</h3>
        </div>
        <label for="number-input">=</label>
        <input type="number" id="number-input">
      `;
    }
    else if (options == 3) {
      let numOne = Math.floor(Math.random() * 11);
      if (numOne === 0) numOne = 11;
      else if (numOne === 1) numOne = 12;
      let numTwo = Math.floor(Math.random() * 11);
      if (numTwo === 0) numTwo = 11;
      else if (numTwo === 1) numTwo = 12;
      let numThree = Math.floor(Math.random() * 40);
      if (numThree === 0) numThree = 40;
      if (numThree === 1) numThree = 41;
      if (numOne < numThree) numThree = numOne * numTwo - 7
      answer = numOne * numTwo - numThree;
      opContainer.innerHTML = `
        <div class="operation">
        <h3>${numOne}x${numTwo}-${numThree}</h3>
        </div>
        <label for="number-input">=</label>
        <input type="number" id="number-input">
      `;
    }
    generalOperationSistem(answer, 12);
  }
  else if (difficulty == "hard") {
    let options = Math.floor(Math.random() * 3 + 1);
    //console.log(options)
    let answer;
    if (options == 1) {
      let numOne = Math.floor(Math.random() * 42);
      if (numOne === 0) numOne = 42;
      else if (numOne === 1) numOne = 43;
      let numTwo = Math.floor(Math.random() * 41);
      if (numTwo === 0) numTwo = 41;
      if (numTwo === 1) numTwo = 42;
      let numThree = Math.floor(Math.random() * 40);
      if (numThree === 0) numThree = 40;
      else if (numThree === 1) numThree = 41;
      answer = numOne + numTwo - numThree;
      opContainer.innerHTML = `
        <div class="operation">
        <h3>${numOne}+${numTwo}-${numThree}</h3>
        </div>
        <label for="number-input">=</label>
        <input type="number" id="number-input">
      `;
    }
    else if (options == 2) {
      let numOne = Math.floor(Math.random() * 13);
      if (numOne === 0) numOne = 13;
      else if (numOne === 1) numOne = 14;
      let numTwo = Math.floor(Math.random() * 14);
      if (numTwo === 0) numTwo = 14;
      else if (numTwo === 1) numTwo = 15;
      let numThree = Math.floor(Math.random() * 45);
      if (numThree === 0) numThree = 45;
      answer = numOne * numTwo + numThree;
      opContainer.innerHTML = `
        <div class="operation">
        <h3>${numOne}x${numTwo}+${numThree}</h3>
        </div>
        <label for="number-input">=</label>
        <input type="number" id="number-input">
      `;
    }
    else if (options == 3) {
      let numOne = Math.floor(Math.random() * 13);
      if (numOne === 0) numOne = 13;
      else if (numOne === 1) numOne = 14;
      let numTwo = Math.floor(Math.random() * 14);
      if (numTwo === 0) numTwo = 14;
      else if (numTwo === 1) numTwo = 15;
      let numThree = Math.floor(Math.random() * 40);
      if (numThree === 0) numThree = 40;
      if (numThree === 1) numThree = 41;
      if (numOne < numThree) numThree = numOne * numTwo - 7
      answer = numOne * numTwo - numThree;
      opContainer.innerHTML = `
        <div class="operation">
        <h3>${numOne}x${numTwo}-${numThree}</h3>
        </div>
        <label for="number-input">=</label>
        <input type="number" id="number-input">
      `;
    }
    generalOperationSistem(answer, 15);
  }
  else if (difficulty == "extreme") {
    let numZero = Math.floor(Math.random() * 13);
    if (numZero === 0) numZero = 13;
    else if (numZero === 1) numZero = 14;
    let numOne = Math.floor(Math.random() * 75);
    if (numOne === 0) numOne = 75;
    else if (numOne === 1) numOne = 76;
    let numTwo = Math.floor(Math.random() * 75);
    if (numTwo === 0) numTwo = 75;
    if (numTwo === 1) numTwo = 76;
    let numThree = Math.floor(Math.random() * 65);
    if (numThree === 0) numThree = 65;
    else if (numThree === 1) numThree = 66;
    if (numThree > numZero * numOne + numTwo) numThree = numZero * numOne + numTwo - 5;
    answer = numZero * numOne + numTwo - numThree;
    opContainer.innerHTML = `
      <div class="operation">
      <h3>${numZero}x${numOne}+${numTwo}-${numThree}</h3>
      </div>
      <label for="number-input">=</label>
      <input type="number" id="number-input">
    `;
    generalOperationSistem(answer, 18);
  }
}