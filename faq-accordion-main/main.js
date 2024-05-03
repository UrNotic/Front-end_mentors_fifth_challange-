function expand(element,img) {
  if (element.style.display === "block") {
    element.style.display = "none";
    img.src = './assets/images/icon-plus.svg'
  } else {
    element.style.display = "block";
    img.src = './assets/images/icon-minus.svg'
  }

}

const questionone = document.getElementById('icon-plus-one');
questionone.onclick = function () {
    const paragraph = document.getElementById('answer-one');
    expand(paragraph, questionone);
};

const questionTwo = document.getElementById('icon-plus-two');
questionTwo.onclick = function() {
  const paragraph = document.getElementById('answer-two');
  expand(paragraph, questionTwo);
};

const questionThree = document.getElementById('icon-plus-three');
questionThree.onclick = function() {
  const paragraph = document.getElementById('answer-three');
  expand(paragraph, questionThree);
};

const questionFour = document.getElementById('icon-plus-four');
questionFour.onclick = function() {
  const paragraph = document.getElementById('answer-four');
  expand(paragraph, questionFour);
};