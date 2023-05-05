.<template>
    <div class="contianer">
      <div class="calendar">
        <div class="calendar-header">
          <span class="month-picker" id="month-picker"> May </span>
          <div class="year-picker" id="year-picker">
            <span class="year-change" id="pre-year">
              <pre> &lt;</pre>
            </span>
            <span id="year">2020 </span>
            <span class="year-change" id="next-year">
              <pre>></pre>
            </span>
          </div>
        </div>
 
        <div class="calendar-body">
          <div class="calendar-week-days">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div class="calendar-days">
          </div>
        </div>
        <div class="calendar-footer">
        </div>
        <div class="date-time-formate">
          <div class="day-text-formate">TODAY</div>
          <div class="date-time-value">
            <div class="time-formate">02:51:20</div>
            <div class="date-formate">23 - july - 2022</div>
          </div>
        </div>
        <div class="month-list"></div>
      </div>
    </div>
  
</template>

<script setup>
const isLeapYear = (year) => {
    return (
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    );
  };
  const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
  };
  let calendar = document.querySelector('.calendar');
  const month_names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let month_picker = document.querySelector('#month-picker');
  const dayTextFormate = document.querySelector('.day-text-formate');
  const timeFormate = document.querySelector('.time-formate');
  const dateFormate = document.querySelector('.date-formate');
  
  month_picker.onclick = () => {
    month_list.classList.remove('hideonce');
    month_list.classList.remove('hide');
    month_list.classList.add('show');
    dayTextFormate.classList.remove('showtime');
    dayTextFormate.classList.add('hidetime');
    timeFormate.classList.remove('showtime');
    timeFormate.classList.add('hideTime');
    dateFormate.classList.remove('showtime');
    dateFormate.classList.add('hideTime');
  };
  
  const generateCalendar = (month, year) => {
    let calendar_days = document.querySelector('.calendar-days');
    calendar_days.innerHTML = '';
    let calendar_header_year = document.querySelector('#year');
    let days_of_month = [
      31,
      getFebDays(year),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    
    let currentDate = new Date();
    
    month_picker.innerHTML = month_names[month];
    
    calendar_header_year.innerHTML = year;
    
    let first_day = new Date(year, month);
  
  
  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
  
      let day = document.createElement('div');
  
      if (i >= first_day.getDay()) {
        day.innerHTML = i - first_day.getDay() + 1;

        if (i - first_day.getDay() + 1 === currentDate.getDate() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
          day.classList.add('current-date');
        }
      }
      calendar_days.appendChild(day);
    }
  };
  
  let month_list = calendar.querySelector('.month-list');
  month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div>${e}</div>`;
  
    month_list.append(month);
    month.onclick = () => {
      currentMonth.value = index;
      generateCalendar(currentMonth.value, currentYear.value);
      month_list.classList.replace('show', 'hide');
      dayTextFormate.classList.remove('hideTime');
      dayTextFormate.classList.add('showtime');
      timeFormate.classList.remove('hideTime');
      timeFormate.classList.add('showtime');
      dateFormate.classList.remove('hideTime');
      dateFormate.classList.add('showtime');
    };
  });
  
  (function () {
    month_list.classList.add('hideonce');
  })();
  document.querySelector('#pre-year').onclick = () => {
    --currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
  };
  document.querySelector('#next-year').onclick = () => {
    ++currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
  };
  
  let currentDate = new Date();
  let currentMonth = { value: currentDate.getMonth() };
  let currentYear = { value: currentDate.getFullYear() };
  generateCalendar(currentMonth.value, currentYear.value);

  const todayShowTime = document.querySelector('.time-formate');
  const todayShowDate = document.querySelector('.date-formate');
  
  const currshowDate = new Date();
  const showCurrentDateOption = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  const currentDateFormate = new Intl.DateTimeFormat(
    'en-US',
    showCurrentDateOption
  ).format(currshowDate);
  todayShowDate.textContent = currentDateFormate;
  setInterval(() => {
    const timer = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const formateTimer = new Intl.DateTimeFormat('en-us', option).format(timer);
    let time = `${`${timer.getHours()}`.padStart(
      2,
      '0'
    )}:${`${timer.getMinutes()}`.padStart(
      2,
      '0'
    )}: ${`${timer.getSeconds()}`.padStart(2, '0')}`;
    todayShowTime.textContent = formateTimer;
  }, 1000);
  
</script>

<style>
/* :root {
    --dark-text: #f8fbff;
    --light-body: #f3f8fe;
    --light-main: #fdfdfd;
    --light-second: #c3c2c8;
    --light-hover: #f0f0f0;
    --light-text: #151426;
    --light-btn: #9796f0;
    --blue: #0000ff;
    --white: #fff;
    --shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    --font-family: consolas;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,
  body {
    place-items: center;
    font-family: var(--font-family);
    background:linear-gradient(to right, #9796f0, #fbc7d4);
    overflow: hidden;
  } */
  .contianer {
    width: max-content;
    height: max-content;
    position: relative;
    display: flex;
    padding: 0;
    justify-content: center;
    /* top: 10%; */
    right: 0%;
    width: 100%;
    height: 100%;
  }
  .calendar {
    height: 25rem;
    width: max-content;
    background-color: white;
    border-radius: 1.5rem;
    overflow: hidden;
    padding: 1rem 1rem 0 1rem;
  }
  .calendar {
    box-shadow: var(--shadow);
  }
  .calendar-header {
    background: #9796f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    color: var(--white);
    /* border-radius: 1rem; */
  }
  .calendar-body {
    pad: .5rem;
  }
  .calendar-week-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    font-weight: 600;
    cursor: pointer;
    color:rgb(104, 104, 104);
  }
  .calendar-week-days div:hover {
  color:black;
  transform: scale(1.2);
  transition: all .2s ease-in-out;
  }
  .calendar-week-days div {
    display: grid;
    place-items: center;
    color: var(--bg-second);
    height: 2rem;
  }
  .calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
    color: var(--color-txt);
    justify-items: center;
  }
  .calendar-days div {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    position: relative;
    cursor: pointer;
    animation: to-top 1s forwards;
  }
  .month-picker {
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
  }
  .month-picker:hover {
    background-color: var(--color-hover);
  }
  .month-picker:hover {
    color: var(--color-txt);
  }
  .year-picker {
    display: flex;
    align-items: center;
  }
  .year-change {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin: 0px 10px;
    cursor: pointer;
  }
  .year-change:hover {
    background-color: var(--light-btn);
    transition:all .2s ease-in-out ;
    transform: scale(1.12);
  }
  .year-change:hover pre {
    color: var(--bg-body);
  }
  .calendar-footer {
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #year:hover{
    cursor: pointer;
    transform: scale(1.2);
    transition: all 0.2 ease-in-out;
  }
  .calendar-days div span {
    position: absolute;
  }
   .calendar-days div:hover {
    transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
    background-color: #fbc7d4;
    border-radius: 20%;
    color: var(--dark-text);
  }
  .calendar-days div.current-date {
    color: var(--dark-text);
    background-color: var(--light-btn);
    border-radius: 20%;
  }
  .month-list {
    position: relative;
    left: 0;
    top: -50px;
    background-color: #ebebeb;
    color: var(--light-text);
    display: grid;
    grid-template-columns: repeat(3, auto);
    /* gap: 2px; */
    border-radius: 20px;
  }
  .month-list > div {
    display: grid;
    place-content: center;
    /* margin: .2rem .5rem; */
    transition: all 0.2s ease-in-out;
  }
  .month-list > div > div {
    border-radius: 1rem;
    padding: .5rem;
    cursor: pointer;
  }
  .month-list > div > div:hover {
    background-color:var(--light-btn);
    color: var(--dark-text);
    transform: scale(0.9);
    transition: all 0.2s ease-in-out;
  }
  .month-list.show {
    visibility: visible;
    pointer-events: visible;
    transition: 0.6s ease-in-out;
    animation: to-left .71s forwards;
  }
  .month-list.hideonce{
    visibility: hidden;
  }
  .month-list.hide {
    animation: to-right 1s forwards;
    visibility: none;
    pointer-events: none;
  }
  .date-time-formate {
    width: max-content;
    height: max-content;
    font-family: Dubai Light, Century Gothic;
    position: relative;
    display: inline;
    top: 3.4rem;
    justify-content: center;
  }
  .day-text-formate {
    font-family: Microsoft JhengHei UI;
    font-size: 1rem;
    padding-right: 5%;
    border-right: 3px solid #9796f0;
    position: absolute;
    left: .5rem;
    font-weight: 500;
  }
  .date-time-value {
    display: block;
    height: max-content;
    width: max-content;
    position: relative;
    left: 40%;
    top: -1rem;
    text-align: center;
  }
  .time-formate {
    font-size: 1.1rem;
    font-weight: 500;
  }
  .time-formate.hideTime {
    animation: hidetime 1.5s forwards;
  }
  .day-text-formate.hidetime {
    animation: hidetime 1.5s forwards;
  }
  .date-formate.hideTime {
    animation: hidetime 1.5s forwards;
  }
  .day-text-formate.showtime{
    animation: showtime 1s forwards;
  }
  .time-formate.showtime {
    animation: showtime 1s forwards;
  }
  .date-formate.showtime {
    animation: showtime 1s forwards;
  }
  @keyframes to-top {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    100% {
      transform: translateY(100%);
      opacity: 1;
    }
  }
  @keyframes to-left {
    0% {
      transform: translatex(230%);
      opacity: 1;
    }
    100% {
      transform: translatex(0);
      opacity: 1;
    }
  }
  @keyframes to-right {
    10% {
      transform: translatex(0);
      opacity: 1;
    }
    100% {
      transform: translatex(-150%);
      opacity: 1;
    }
  }
  @keyframes showtime {
    0% {
      transform: translatex(250%);
      opacity: 1;
    }
    100% {
      transform: translatex(0%);
      opacity: 1;
    }
  }
  @keyframes hidetime {
    0% {
      transform: translatex(0%);
      opacity: 1;
    }
    100% {
      transform: translatex(-370%);
      opacity: 1;
    }
  }
  @media (max-width:375px) {
    .month-list>div{
  
      margin: 5px 0px;
    }
  }
</style>