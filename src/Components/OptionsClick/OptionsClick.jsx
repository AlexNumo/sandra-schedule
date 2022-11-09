const OptionsClick = ({ClickOption}) => {
  const options = [
    { id: '-', value: '-', text: '-' },
    { id: 'None', value: 'None', text: 'Пусто' },
    { id: "kangoo-jumps", value: "kangoo-jumps", text: 'Kangoo jumps' },
    { id: "sky-jumping", value: "sky-jumping", text: 'Sky jumping' },
    { id: "stretching", value: "stretching", text: 'Stretching' },
    { id: "health-back", value: "health-back", text: 'Здорова спина' },
    { id: "tabata", value: "tabata", text: 'Tabata' },
    { id: "high-heels", value: "high-heels", text: 'High heels' },
    { id: "tribal", value: "tribal", text: 'Tribal fusion' },
    { id: "twerk", value: "twerk", text: 'Twerk' },
    { id: "body-balet", value: "body-balet", text: 'Боди балет' },
    { id: "sky-jumping-child", value: "sky-jumping-child", text: 'Sky child' },
    { id: "kangoo-jumps-child-10", value: "kangoo-jumps-child-10", text: 'Kangoo діти (6-10)' },
    { id: "kangoo-jumps-child-14", value: "kangoo-jumps-child-14", text: 'Kangoo діти (10-14)' },
    { id: "yoga", value: "yoga", text: 'Йога' },
    { id: "functional", value: "functional", text: 'Functional' },
    { id: "metabolick-workout", value: "metabolick-workout", text: 'Metabolick workout' },
  ];
  const weekDaysTime = [
    { id: 'monday' },
    { id: 'tuesday'},
    { id: 'wednesday'},
    { id: 'thursday'},
    { id: 'friday'},
    { id: 'saturday'},
    { id: 'sunday' },
  ];
    const Times = [
    { id: '0900', text: '9:00' },
    { id: '1000', text: '10:00' },
    { id: '1100', text: '11:00' },
    { id: '1200', text: '12:00' },
    { id: '1300', text: '13:00' },
    { id: '1400', text: '14:00' },
    { id: '1500', text: '15:00' },
    { id: '1600', text: '16:00' },
    { id: '1700', text: '17:00' },
    { id: '1800', text: '18:00' },
    { id: '1900', text: '19:00' },
    { id: '2000', text: '20:00' },
 
  ];
  return (
    <>
      {Times.map(time => (
        <tr
          key={time.id}
          id={time.id}
        >
          <td id={time.id}>{time.text}</td>
          {weekDaysTime.map(weekDay => (
            <td
              key={weekDay.id}
              id={weekDay.id}
              // time={time.id}
              onChange={ClickOption}
            >
              <select>
                {options.map(option => (
                  <option
                    key={option.id}
                    id={option.id}
                    value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}

export default OptionsClick;