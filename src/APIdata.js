const ApiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const MakeGame = () => {
  fetch('${ApiUrl}games/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: "franklin's new game"
  }),
  }) 
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem('Game Index', data.result.split(' ')[3]);
  });
};

const addScore = (gameIndex, name, score) => {
  fetch(
    `${apiUrl}/games/${gameIndex}/scores`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score: score,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    },
  )
    .then((response) => response.json());
};

const GetScores = (gameIndex) => fetch(`${apiUrl}/games/${gameIndex}/scores`).then(response => response.json());

export {GetScores, MakeGame, addScore};