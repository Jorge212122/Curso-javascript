// exercise: tournament winner

const tournamentWinner = (competitions, results) => {
    const scores = new Map();
    let winner = "";
  
    competitions.forEach(([home, away], idx) => {
      const winningTeam = results[idx] === 0 ? away : home;
      const newScore = (scores.get(winningTeam) || 0) + 3;
      scores.set(winningTeam, newScore);
      if (!winner || newScore > scores.get(winner)) {
        winner = winningTeam;
      }
    });
  
    return winner;
  };
  
  const competitions = [
    ["JavaScript", "C#"],
    ["C#", "Python"],
    ["Python", "JavaScript"],
  ];
  const results = [0, 0, 1];
  console.log(tournamentWinner(competitions, results));