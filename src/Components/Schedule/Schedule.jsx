// import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import OptionsClick from '../OptionsClick/OptionsClick';
import { addDataAPI } from '../API/API';

function Schedule() {
  // const [monday0900, setMonday0900] = useState([]);
  // const [tuesday0900, setTuesday0900] = useState([]);
  // const [wednesday0900, setWednesday0900] = useState([]);
  // const [thursday0900, setThursday0900] = useState([]);
  // const [friday0900, setFriday0900] = useState([]);
  // const [saturday0900, setSaturday0900] = useState([]);
  // const [sunday0900, setSunday0900] = useState([]);
  // const [monday1000, setMonday1000] = useState([]);
  // const [tuesday1000, setTuesday1000] = useState([]);
  // const [wednesday1000, setWednesday1000] = useState([]);
  // const [thursday1000, setThursday1000] = useState([]);
  // const [friday1000, setFriday1000] = useState([]);
  // const [saturday1000, setSaturday1000] = useState([]);
  // const [sunday1000, setSunday1000] = useState([]);
  // const [monday1100, setMonday1100] = useState([]);
  // const [tuesday1100, setTuesday1100] = useState([]);
  // const [wednesday1100, setWednesday1100] = useState([]);
  // const [thursday1100, setThursday1100] = useState([]);
  // const [friday1100, setFriday1100] = useState([]);
  // const [saturday1100, setSaturday1100] = useState([]);
  // const [sunday1100, setSunday1100] = useState([]);
  // const [monday1200, setMonday1200] = useState([]);
  // const [tuesday1200, setTuesday1200] = useState([]);
  // const [wednesday1200, setWednesday1200] = useState([]);
  // const [thursday1200, setThursday1200] = useState([]);
  // const [friday1200, setFriday1200] = useState([]);
  // const [saturday1200, setSaturday1200] = useState([]);
  // const [sunday1200, setSunday1200] = useState([]);
  // const [monday1300, setMonday1300] = useState([]);
  // const [tuesday1300, setTuesday1300] = useState([]);
  // const [wednesday1300, setWednesday1300] = useState([]);
  // const [thursday1300, setThursday1300] = useState([]);
  // const [friday1300, setFriday1300] = useState([]);
  // const [saturday1300, setSaturday1300] = useState([]);
  // const [sunday1300, setSunday1300] = useState([]);
  // const [monday1400, setMonday1400] = useState([]);
  // const [tuesday1400, setTuesday1400] = useState([]);
  // const [wednesday1400, setWednesday1400] = useState([]);
  // const [thursday1400, setThursday1400] = useState([]);
  // const [friday1400, setFriday1400] = useState([]);
  // const [saturday1400, setSaturday1400] = useState([]);
  // const [sunday1400, setSunday1400] = useState([]);
  // const [monday1500, setMonday1500] = useState([]);
  // const [tuesday1500, setTuesday1500] = useState([]);
  // const [wednesday1500, setWednesday1500] = useState([]);
  // const [thursday1500, setThursday1500] = useState([]);
  // const [friday1500, setFriday1500] = useState([]);
  // const [saturday1500, setSaturday1500] = useState([]);
  // const [sunday1500, setSunday1500] = useState([]);
  // const [monday1600, setMonday1600] = useState([]);
  // const [tuesday1600, setTuesday1600] = useState([]);
  // const [wednesday1600, setWednesday1600] = useState([]);
  // const [thursday1600, setThursday1600] = useState([]);
  // const [friday1600, setFriday1600] = useState([]);
  // const [saturday1600, setSaturday1600] = useState([]);
  // const [sunday1600, setSunday1600] = useState([]);
  // const [monday1700, setMonday1700] = useState([]);
  // const [tuesday1700, setTuesday1700] = useState([]);
  // const [wednesday1700, setWednesday1700] = useState([]);
  // const [thursday1700, setThursday1700] = useState([]);
  // const [friday1700, setFriday1700] = useState([]);
  // const [saturday1700, setSaturday1700] = useState([]);
  // const [sunday1700, setSunday1700] = useState([]);
  // const [monday1800, setMonday1800] = useState([]);
  // const [tuesday1800, setTuesday1800] = useState([]);
  // const [wednesday1800, setWednesday1800] = useState([]);
  // const [thursday1800, setThursday1800] = useState([]);
  // const [friday1800, setFriday1800] = useState([]);
  // const [saturday1800, setSaturday1800] = useState([]);
  // const [sunday1800, setSunday1800] = useState([]);
  // const [monday1900, setMonday1900] = useState([]);
  // const [tuesday1900, setTuesday1900] = useState([]);
  // const [wednesday1900, setWednesday1900] = useState([]);
  // const [thursday1900, setThursday1900] = useState([]);
  // const [friday1900, setFriday1900] = useState([]);
  // const [saturday1900, setSaturday1900] = useState([]);
  // const [sunday1900, setSunday1900] = useState([]);
  // const [monday2000, setMonday2000] = useState([]);
  // const [tuesday2000, setTuesday2000] = useState([]);
  // const [wednesday2000, setWednesday2000] = useState([]);
  // const [thursday2000, setThursday2000] = useState([]);
  // const [friday2000, setFriday2000] = useState([]);
  // const [saturday2000, setSaturday2000] = useState([]);
  // const [sunday2000, setSunday2000] = useState([]);
  
  const ClickOption = (e) => {
    const event = e.target.value;
    const dayTime = e.nativeEvent.path[1].attributes[0].nodeValue;
    const apiSend = () =>(addDataAPI({id: dayTime, day: dayTime, kind_trainee: event}));
    if (dayTime === 'monday0900') {
      apiSend();
    }
    if (dayTime === 'tuesday0900') {
      apiSend();
    }
    if (dayTime === 'wednesday0900') {
      apiSend();
    }
    if (dayTime === 'thursday0900') {
      apiSend();
    }
    if (dayTime === 'friday0900') {
      apiSend();
    }
    if (dayTime === 'saturday0900') {
      apiSend();
    }
    if (dayTime === 'sunday0900') {
      apiSend();
    }
    if (dayTime === 'monday1000') {
      apiSend();
    }
    if (dayTime === 'tuesday1000') {
      apiSend();
    }
    if (dayTime === 'wednesday1000') {
      apiSend();
    }
    if (dayTime === 'thursday1000') {
      apiSend();
    }
    if (dayTime === 'friday1000') {
      apiSend();
    }
    if (dayTime === 'saturday1000') {
      apiSend();
    }
    if (dayTime === 'sunday1000') {
      apiSend();
    }
    if (dayTime === 'monday1100') {
      apiSend();
    }
    if (dayTime === 'tuesday1100') {
      apiSend();
    }
    if (dayTime === 'wednesday1100') {
      apiSend();
    }
    if (dayTime === 'thursday1100') {
      apiSend();
    }
    if (dayTime === 'friday1100') {
      apiSend();
    }
    if (dayTime === 'saturday1100') {
      apiSend();
    }
    if (dayTime === 'sunday1100') {
      apiSend();
    }
    if (dayTime === 'monday1200') {
      apiSend();
    }
    if (dayTime === 'tuesday1200') {
      apiSend();
    }
    if (dayTime === 'wednesday1200') {
      apiSend();
    }
    if (dayTime === 'thursday1200') {
      apiSend();
    }
    if (dayTime === 'friday1200') {
      apiSend();
    }
    if (dayTime === 'saturday1200') {
      apiSend();
    }
    if (dayTime === 'sunday1200') {
      apiSend();
    }
    if (dayTime === 'monday1300') {
      apiSend();
    }
    if (dayTime === 'tuesday1300') {
      apiSend();
    }
    if (dayTime === 'wednesday1300') {
      apiSend();
    }
    if (dayTime === 'thursday1300') {
      apiSend();
    }
    if (dayTime === 'friday1300') {
      apiSend();
    }
    if (dayTime === 'saturday1300') {
      apiSend();
    }
    if (dayTime === 'sunday1300') {
      apiSend();
    }
    if (dayTime === 'monday1400') {
      apiSend();
    }
    if (dayTime === 'tuesday1400') {
      apiSend();
    }
    if (dayTime === 'wednesday1400') {
      apiSend();
    }
    if (dayTime === 'thursday1400') {
      apiSend();
    }
    if (dayTime === 'friday1400') {
      apiSend();
    }
    if (dayTime === 'saturday1400') {
      apiSend();
    }
    if (dayTime === 'sunday1400') {
      apiSend();
    }
    if (dayTime === 'monday1500') {
      apiSend();
    }
    if (dayTime === 'tuesday1500') {
      apiSend();
    }
    if (dayTime === 'wednesday1500') {
      apiSend();
    }
    if (dayTime === 'thursday1500') {
      apiSend();
    }
    if (dayTime === 'friday1500') {
      apiSend();
    }
    if (dayTime === 'saturday1500') {
      apiSend();
    }
    if (dayTime === 'sunday1500') {
      apiSend();
    }
    if (dayTime === 'monday1600') {
      apiSend();
    }
    if (dayTime === 'tuesday1600') {
      apiSend();
    }
    if (dayTime === 'wednesday1600') {
      apiSend();
    }
    if (dayTime === 'thursday1600') {
      apiSend();
    }
    if (dayTime === 'friday1600') {
      apiSend();
    }
    if (dayTime === 'saturday1600') {
      apiSend();
    }
    if (dayTime === 'sunday1600') {
      apiSend();
    }
    if (dayTime === 'monday1700') {
      apiSend();
    }
    if (dayTime === 'tuesday1700') {
      apiSend();
    }
    if (dayTime === 'wednesday1700') {
      apiSend();
    }
    if (dayTime === 'thursday1700') {
      apiSend();
    }
    if (dayTime === 'friday1700') {
      apiSend();
    }
    if (dayTime === 'saturday1700') {
      apiSend();
    }
    if (dayTime === 'sunday1700') {
      apiSend();
    }
    if (dayTime === 'monday1800') {
      apiSend();
    }
    if (dayTime === 'tuesday1800') {
      apiSend();
    }
    if (dayTime === 'wednesday1800') {
      apiSend();
    }
    if (dayTime === 'thursday1800') {
      apiSend();
    }
    if (dayTime === 'friday1800') {
      apiSend();
    }
    if (dayTime === 'saturday1800') {
      apiSend();
    }
    if (dayTime === 'sunday1800') {
      apiSend();
    }
    if (dayTime === 'monday1900') {
      apiSend();
    }
    if (dayTime === 'tuesday1900') {
      apiSend();
    }
    if (dayTime === 'wednesday1900') {
      apiSend();
    }
    if (dayTime === 'thursday1900') {
      apiSend();
    }
    if (dayTime === 'friday1900') {
      apiSend();
    }
    if (dayTime === 'saturday1900') {
      apiSend();
    }
    if (dayTime === 'sunday1900') {
      apiSend();
    }
    if (dayTime === 'monday2000') {
      apiSend();
    }
    if (dayTime === 'tuesday2000') {
      apiSend();
    }
    if (dayTime === 'wednesday2000') {
      apiSend();
    }
    if (dayTime === 'thursday2000') {
      apiSend();
    }
    if (dayTime === 'friday2000') {
      apiSend();
    }
    if (dayTime === 'saturday2000') {
      apiSend();
    }
    if (dayTime === 'sunday2000') {
      apiSend();
    }
  }
  // const resState = [
  //     { id: 'monday0900', day: 'monday0900', kind_trainee: monday0900 },
  //     { id: 'tuesday0900', day: 'tuesday0900', kind_trainee: tuesday0900 },
  //     { id: 'wednesday0900', day: 'wednesday0900', kind_trainee: wednesday0900 },
  //     { id: 'thursday0900', day: 'thursday0900', kind_trainee: thursday0900 },
  //     { id: 'friday0900', day: 'friday0900', kind_trainee: friday0900 },
  //     { id: 'saturday0900', day: 'saturday0900', kind_trainee: saturday0900 },
  //     { id: 'sunday0900', day: 'sunday0900', kind_trainee: sunday0900 },
  //     { id: 'monday1000', day: 'monday1000', kind_trainee: monday1000 },
  //     { id: 'tuesday1000', day: 'tuesday1000', kind_trainee: tuesday1000 },
  //     { id: 'wednesday1000', day: 'wednesday1000', kind_trainee: wednesday1000 },
  //     { id: 'thursday1000', day: 'thursday1000', kind_trainee: thursday1000 },
  //     { id: 'friday1000', day: 'friday1000', kind_trainee: friday1000 },
  //     { id: 'saturday1000', day: 'saturday1000', kind_trainee: saturday1000 },
  //     { id: 'sunday1000', day: 'sunday1000', kind_trainee: sunday1000 },
  //     { id: 'monday1100', day: 'monday1100', kind_trainee: monday1100 },
  //     { id: 'tuesday1100', day: 'tuesday1100', kind_trainee: tuesday1100 },
  //     { id: 'wednesday1100', day: 'wednesday1100', kind_trainee: wednesday1100 },
  //     { id: 'thursday1100', day: 'thursday1100', kind_trainee: thursday1100 },
  //     { id: 'friday1100', day: 'friday1100', kind_trainee: friday1100 },
  //     { id: 'saturday1100', day: 'saturday1100', kind_trainee: saturday1100 },
  //     { id: 'sunday1100', day: 'sunday1100', kind_trainee: sunday1100 },
  //     { id: 'monday1200', day: 'monday1200', kind_trainee: monday1200 },
  //     { id: 'tuesday1200', day: 'tuesday1200', kind_trainee: tuesday1200 },
  //     { id: 'wednesday1200', day: 'wednesday1200', kind_trainee: wednesday1200 },
  //     { id: 'thursday1200', day: 'thursday1200', kind_trainee: thursday1200 },
  //     { id: 'friday1200', day: 'friday1200', kind_trainee: friday1200 },
  //     { id: 'saturday1200', day: 'saturday1200', kind_trainee: saturday1200 },
  //     { id: 'sunday1200', day: 'sunday1200', kind_trainee: sunday1200 },
  //     { id: 'monday1300', day: 'monday1300', kind_trainee: monday1300 },
  //     { id: 'tuesday1300', day: 'tuesday1300', kind_trainee: tuesday1300 },
  //     { id: 'wednesday1300', day: 'wednesday1300', kind_trainee: wednesday1300 },
  //     { id: 'thursday1300', day: 'thursday1300', kind_trainee: thursday1300 },
  //     { id: 'friday1300', day: 'friday1300', kind_trainee: friday1300 },
  //     { id: 'saturday1300', day: 'saturday1300', kind_trainee: saturday1300 },
  //     { id: 'sunday1300', day: 'sunday1300', kind_trainee: sunday1300 },
  //     { id: 'monday1400', day: 'monday1400', kind_trainee: monday1400 },
  //     { id: 'tuesday1400', day: 'tuesday1400', kind_trainee: tuesday1400 },
  //     { id: 'wednesday1400', day: 'wednesday1400', kind_trainee: wednesday1400 },
  //     { id: 'thursday1400', day: 'thursday1400', kind_trainee: thursday1400 },
  //     { id: 'friday1400', day: 'friday1400', kind_trainee: friday1400 },
  //     { id: 'saturday1400', day: 'saturday1400', kind_trainee: saturday1400 },
  //     { id: 'sunday1400', day: 'sunday1400', kind_trainee: sunday1400 },
  //     { id: 'monday1500', day: 'monday1500', kind_trainee: monday1500 },
  //     { id: 'tuesday1500', day: 'tuesday1500', kind_trainee: tuesday1500 },
  //     { id: 'wednesday1500', day: 'wednesday1500', kind_trainee: wednesday1500 },
  //     { id: 'thursday1500', day: 'thursday1500', kind_trainee: thursday1500 },
  //     { id: 'friday1500', day: 'friday1500', kind_trainee: friday1500 },
  //     { id: 'saturday1500', day: 'saturday1500', kind_trainee: saturday1500 },
  //     { id: 'sunday1500', day: 'sunday1500', kind_trainee: sunday1500 },
  //     { id: 'monday1600', day: 'monday1600', kind_trainee: monday1600 },
  //     { id: 'tuesday1600', day: 'tuesday1600', kind_trainee: tuesday1600 },
  //     { id: 'wednesday1600', day: 'wednesday1600', kind_trainee: wednesday1600 },
  //     { id: 'thursday1600', day: 'thursday1600', kind_trainee: thursday1600 },
  //     { id: 'friday1600', day: 'friday1600', kind_trainee: friday1600 },
  //     { id: 'saturday1600', day: 'saturday1600', kind_trainee: saturday1600 },
  //     { id: 'sunday1600', day: 'sunday1600', kind_trainee: sunday1600 },
  //     { id: 'monday1700', day: 'monday1700', kind_trainee: monday1700 },
  //     { id: 'tuesday1700', day: 'tuesday1700', kind_trainee: tuesday1700 },
  //     { id: 'wednesday1700', day: 'wednesday1700', kind_trainee: wednesday1700 },
  //     { id: 'thursday1700', day: 'thursday1700', kind_trainee: thursday1700 },
  //     { id: 'friday1700', day: 'friday1700', kind_trainee: friday1700 },
  //     { id: 'saturday1700', day: 'saturday1700', kind_trainee: saturday1700 },
  //     { id: 'sunday1700', day: 'sunday1700', kind_trainee: sunday1700 },
  //     { id: 'monday1800', day: 'monday1800', kind_trainee: monday1800 },
  //     { id: 'tuesday1800', day: 'tuesday1800', kind_trainee: tuesday1800 },
  //     { id: 'wednesday1800', day: 'wednesday1800', kind_trainee: wednesday1800 },
  //     { id: 'thursday1800', day: 'thursday1800', kind_trainee: thursday1800 },
  //     { id: 'friday1800', day: 'friday1800', kind_trainee: friday1800 },
  //     { id: 'saturday1800', day: 'saturday1800', kind_trainee: saturday1800 },
  //     { id: 'sunday1800', day: 'sunday1800', kind_trainee: sunday1800 },
  //     { id: 'monday1900', day: 'monday1900', kind_trainee: monday1900 },
  //     { id: 'tuesday1900', day: 'tuesday1900', kind_trainee: tuesday1900 },
  //     { id: 'wednesday1900', day: 'wednesday1900', kind_trainee: wednesday1900 },
  //     { id: 'thursday1900', day: 'thursday1900', kind_trainee: thursday1900 },
  //     { id: 'friday1900', day: 'friday1900', kind_trainee: friday1900 },
  //     { id: 'saturday1900', day: 'saturday1900', kind_trainee: saturday1900 },
  //     { id: 'sunday1900', day: 'sunday1900', kind_trainee: sunday1900 },
  //     { id: 'monday2000', day: 'monday2000', kind_trainee: monday2000 },
  //     { id: 'tuesday2000', day: 'tuesday2000', kind_trainee: tuesday2000 },
  //     { id: 'wednesday2000', day: 'wednesday2000', kind_trainee: wednesday2000 },
  //     { id: 'thursday2000', day: 'thursday2000', kind_trainee: thursday2000 },
  //     { id: 'friday2000', day: 'friday2000', kind_trainee: friday2000 },
  //     { id: 'saturday2000', day: 'saturday2000', kind_trainee: saturday2000 },
  //     { id: 'sunday2000', day: 'sunday2000', kind_trainee: sunday2000 },
  //   ];
  // const dataSendResult = (e) => {
  //   e.preventDefault();
  //   // addDataAPI(resState);
  //   // addDataAPI({ id: resState.id, day: resState.day, kind_trainee: resState.kind_trainee});
  //   // addDataAPI({id: dayTime, day: dayTime, kind_trainee: event});
  //   // console.log({id: resState[0].id, day: resState.day})
  //   // console.log( {id: resState.id}, {day: resState.day}, {kind_trainee: resState.kind_trainee})
    
    

  //   }
  return (
    <>
    <Table
      striped
      bordered
      hover
      size='xl'
    >
      <thead >
        <tr >
          <th>#</th>
          <th>Понеділок</th>
          <th>Вівторок</th>
          <th>Середа</th>
          <th>Четвер</th>
          <th>П'ятниця</th>
          <th>Субота</th>
          <th>Неділя</th>
        </tr>
      </thead>
      <tbody>
        <OptionsClick
          ClickOption={ClickOption}
        />
      </tbody>
      </Table>
      {/* <button onClick={dataSendResult}>Змінити розклад</button> */}
    </>
  );
}

export default Schedule;