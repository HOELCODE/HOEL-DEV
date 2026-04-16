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
  
  const nextMonth = () => {
    const currentIndex = monthArray.indexOf(month);
    const nextIndex = (currentIndex + 1) % monthArray.length;
    nextIndex === 0 ? setYear(year + 1) : setYear(year);
    setMonth(monthArray[nextIndex]);
  }

  const lastMonth = () => {
    const reverseMonthArray = monthArray.reverse();
    const currentIndex = monthArray.indexOf(month);
    const lastIndex = (currentIndex + 1) % monthArray.length;
    lastIndex === 0 ? setYear(year - 1) : setYear(year);
    setMonth(reverseMonthArray[lastIndex]);
  }



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
              <div className="day-number"><span className="number">1</span></div>
              <div className="day-number selected"><span className="number">2</span></div>
              <div className="day-number"><span className="number">3</span></div>
              <div className="day-number"><span className="number">4</span></div>
              <div className="day-number"><span className="number">5</span></div>
              <div className="day-number"><span className="number">6</span></div>
              <div className="day-number"><span className="number">7</span></div>
              <div className="day-number"><span className="number">8</span></div>
              <div className="day-number"><span className="number">9</span></div>
              <div className="day-number"><span className="number">10</span></div>
              <div className="day-number"><span className="number">11</span></div>
              <div className="day-number"><span className="number">12</span></div>
              <div className="day-number"><span className="number">13</span></div>
              <div className="day-number"><span className="number">14</span></div>
              <div className="day-number"><span className="number">15</span></div>
              <div className="day-number"><span className="number">16</span></div>
              <div className="day-number"><span className="number">17</span></div>
              <div className="day-number"><span className="number">18</span></div>
              <div className="day-number"><span className="number">19</span></div>
              <div className="day-number"><span className="number">20</span></div>
              <div className="day-number"><span className="number">21</span></div>
              <div className="day-number"><span className="number">22</span></div>
              <div className="day-number"><span className="number">23</span></div>
              <div className="day-number"><span className="number">24</span></div>
              <div className="day-number"><span className="number">25</span></div>
              <div className="day-number"><span className="number">26</span></div>
              <div className="day-number"><span className="number">27</span></div>
              <div className="day-number"><span className="number">28</span></div>
              <div className="day-number"><span className="number">29</span></div>
              <div className="day-number"><span className="number">30</span></div>
              <div className="day-number"><span className="number">31</span></div>
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