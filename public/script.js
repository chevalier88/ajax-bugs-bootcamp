const firstDiv = document.getElementById('firstDiv');
console.log(firstDiv.innerHTML);
const secondDiv = document.getElementById('secondDiv');

const buttons = () => {
  // create input for bug form
  const postBugButton = document.createElement('button');
  postBugButton.innerText = 'Create a bug';
  postBugButton.addEventListener('click', () => {
    const postBugFormDiv = document.createElement('div');
    postBugFormDiv.setAttribute('class', 'input-form');
    const inputProblem = document.createElement('input');
    inputProblem.setAttribute('type', 'text');
    const inputErrorText = document.createElement('input');
    inputErrorText.setAttribute('type', 'text');
    const inputCommit = document.createElement('input');
    inputCommit.setAttribute('type', 'text');
    const inputFeature = document.createElement('input');
    inputFeature.setAttribute('type', 'number');
    const submitBugButton = document.createElement('button');
    submitBugButton.innerText = 'Submit Your Bug';
    submitBugButton.addEventListener('click', () => {
      console.log(inputProblem.value);
      const data = {
        problem: inputProblem.value,
        errorText: inputErrorText.value,
        commit: inputCommit.value,
        featureId: Number(inputFeature.value),
      };
      console.log(data);
      axios
        .post('/', data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    postBugFormDiv.append(inputProblem, inputErrorText, inputCommit, inputFeature, submitBugButton);

    firstDiv.appendChild(postBugFormDiv);
  });
  const postFeatureButton = document.createElement('button');
  postFeatureButton.innerText = 'Create a feature';
  postFeatureButton.addEventListener('click', () => {
    const postFeatureFormDiv = document.createElement('div');
    postFeatureFormDiv.setAttribute('class', 'input-form');
    const inputFeature = document.createElement('input');
    inputFeature.setAttribute('type', 'text');
    const secondButton = document.createElement('button');
    secondButton.innerText = 'Submit Your Feature';
    secondButton.addEventListener('click', () => {
      console.log(inputFeature.value);
      const data = {
        name: inputFeature.value,
      };
      console.log(data);
      axios
        .post('/add-feature', data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    postFeatureFormDiv.append(inputFeature, secondButton);
    secondDiv.appendChild(postFeatureFormDiv);
  });
  firstDiv.appendChild(postBugButton);
  secondDiv.appendChild(postFeatureButton);
};

buttons();
