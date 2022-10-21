const OptionsClick = ({ClickOption}) => {
      const options = [
    { id: 'None', value: 'None', text: 'Пусто' },
    { value: "kangoo-jumps", text: 'Kangoo jumps' },
    { value: "sky-jumping", text: 'Sky jumping' },
    { value: "stretching", text: 'Stretching' },
    { value: "health-back", text: 'Здорова спина' },
    { value: "tabata", text: 'Tabata' },
    { value: "high-heels", text: 'High heels' },
    { value: "tribal", text: 'Tribal fusion' },
    { value: "twerk", text: 'Twerk' },
    { value: "body-balet", text: 'Боди балет' },
    { value: "sky-jumping-child", text: 'Sky child' },
    { value: "kangoo-jumps-child-10", text: 'Kangoo діти (6-10)' },
    { value: "kangoo-jumps-child-14", text: 'Kangoo діти (10-14)' },
    { value: "yoga", text: 'Йога' },
    { value: "functional", text: 'Functional' },
    { value: "metabolick-workout", text: 'Metabolick workout' },
  ];
  return (
    <select
      // value={selectedOne}
      // onChange={handleChangeOne}
      // onClick={()=>{console.log("ZD")}}
      // onChange={(e)=>{console.log(e.target.value)}}
      onChange={ClickOption}

    >
      {options.map(option => (
        <option
          key={option.value}
          value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  )
}

export default OptionsClick;