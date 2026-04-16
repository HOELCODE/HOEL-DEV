
const Calendrier = () => {
  return (
    <div className="Calendrier">
      <h1>Calendrier</h1>
      <div className="calendrier-app">
        <div className="calendrier-left">
          <div className="month-year">
            <h2>May, 2024</h2>
            <div className="calendrier-btn">
              <button className="btn-left"><i className="fa-solid fa-chevron-left"></i></button>
              <button className="btn-right"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
          <div className="days">
            <div className="days-title">
              <span className="day-title">MON</span>
              <span className="day-title">TUE</span>
              <span className="day-title">WED</span>
              <span className="day-title">THU</span>
              <span className="day-title">FRI</span>
              <span className="day-title">SAT</span>
              <span className="day-title">SUN</span>
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