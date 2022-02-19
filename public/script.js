const firstDiv = document.getElementById('firstDiv');
console.log(firstDiv.innerHTML);

const firstButton = () => {
  const buttonOne = document.createElement('button');
  buttonOne.innerText = 'Create a bug';
  buttonOne.addEventListener('click', () => {
    const formDiv = document.createElement('div');

    const inputProblem = document.createElement('input');
    inputProblem.setAttribute('type', 'text');
    const inputErrorText = document.createElement('input');
    inputErrorText.setAttribute('type', 'text');
    const inputCommit = document.createElement('input');
    inputCommit.setAttribute('type', 'text');
    const secondButton = document.createElement('button');
    secondButton.innerText = 'Submit Your Bug';
    secondButton.addEventListener('click', () => {
      console.log(inputProblem.value);
      const data = {
        problem: inputProblem.value,
        errorText: inputErrorText.value,
        commit: inputCommit.value,
      };
      axios
        .post('/', data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    formDiv.append(inputProblem, inputErrorText, inputCommit, secondButton);

    firstDiv.appendChild(formDiv);
  });

  firstDiv.appendChild(buttonOne);
};

firstButton();
