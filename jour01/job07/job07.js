function jourtravaille(date) {
  const year = 2023;
  const month = date.getMonth();
  const day = date.getDate();
  const holidays = [
    [1, 1], // Nouvel An
    [5, 1], // Fête du Travail
    [5, 8], // Victoire 1945
    [7, 14], // Fête nationale
    [8, 15], // Assomption
    [11, 1], // Toussaint
    [12, 25] // Noël
  ];

  // Vérifie si la date est un jour férié
  for (let i = 0; i < holidays.length; i++) {
    if (month === holidays[i][0] - 1 && day === holidays[i][1]) {
      console.log(`Le ${day}/${month + 1}/${year} est un jour férié.`);
      return;
    }
  }

  // Vérifie si la date est un week-end
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    console.log(`Non, ${day}/${month + 1}/${year} est un week-end.`);
  } else {
    console.log(`Oui, ${day}/${month + 1}/${year} est un jour travaillé.`);
  }
}


const date = new Date(2023, 4, 1);
jourtravaille(date);

const date1 = new Date(2023, 3, 6);
jourtravaille(date1);

const date2 = new Date(2023, 3, 5);
jourtravaille(date2);
