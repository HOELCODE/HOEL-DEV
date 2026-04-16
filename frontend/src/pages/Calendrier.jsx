import { useState } from "react";

const Calendrier = () => {

  // Tableau des mois et jours
  const monthArray = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre'];
  const daysArray = ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM'];

  // Récupération de la date actuelle, puis du mois et de l'année
  const date = new Date();
  const currentMonth = date.toLocaleDateString('default', { month: 'long' });
  const currentYear = date.getFullYear();

  // State pour le mois, avec une fonction pour passer au mois suivant ou précédent
  const [month, setMonth] = useState(currentMonth);

  // State pour l'année 
  const [year, setYear] = useState(currentYear);
  
  // Bouton prochain mois
  const nextMonth = () => {
    const currentIndex = monthArray.indexOf(month);
    const nextIndex = (currentIndex + 1) % monthArray.length;
    nextIndex === 0 ? setYear(year + 1) : setYear(year);
    setMonth(monthArray[nextIndex]);
  }

  // Bouton mois précédent
  const lastMonth = () => {
    const reverseMonthArray = monthArray.reverse();
    const currentIndex = monthArray.indexOf(month);
    const lastIndex = (currentIndex + 1) % monthArray.length;
    lastIndex === 0 ? setYear(year - 1) : setYear(year);
    setMonth(reverseMonthArray[lastIndex]);
  }

  // Déterminer le chiffre de la date d'ajourd'hui
  const currentDay = date.getDate();
  // Déterminer le jour correspondant au premier jour du mois
  const firstDayOfMonth = new Date(year, monthArray.indexOf(month), 1).getDay();
  // Déterminer le nombre de jours dans le mois
  const daysInMonth = new Date(year, monthArray.indexOf(month) + 1, 0).getDate();
  //Déterminer le chiffre de la date d'ajourd'hui de ce mois et de cette année
  const currentDayOfMonth = (month === currentMonth && year === currentYear) ? currentDay : null;


  return (
    <div className="Calendrier">
      <h1>Calendrier</h1>
      <div className="calendrier-app">
        <div className="calendrier-left">
          <div className="month-year">
            <h2>{month}, {year}</h2>
            <div className="calendrier-btn">
              <button className="btn-left" onClick={lastMonth}><i className="fa-solid fa-chevron-left"></i></button>
              <button className="btn-right" onClick={nextMonth}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
          <div className="days">
            <div className="days-title">
              {daysArray.map((day, index) => (
                <span key={index} className="day-title">{day}</span>
              ))}
            </div>
            <div className="day">
              {Array.from({ length: firstDayOfMonth -1 }, (_, index) => (
                <div key={index} className="day-number empty"></div>
              ))}
              {Array.from({ length: daysInMonth }, (_, index) => (
                <div key={index} className={`day-number ${index + 1 === currentDayOfMonth ? 'selected' : ''}`}>
                  <span className="number">{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="calendrier-right">

        </div>
      </div>

    </div>
  )
};

export default Calendrier;