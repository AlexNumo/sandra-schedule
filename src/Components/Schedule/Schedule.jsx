// import React from "react";
// import {
//   SchedulePosition,
//   ScheduleStyle,
//   NameDay
// } from './Schedule.styled';
// const Schedule = () => {
//   return (
//     <SchedulePosition>
//       <h2>Calendar</h2>
//       <ScheduleStyle>
//         <NameDay>Понеділок</NameDay>
//         <NameDay>Вівторок</NameDay>
//         <NameDay>Середа</NameDay>
//         <NameDay>Четвер</NameDay>
//         <NameDay>П'ятниця</NameDay>
//         <NameDay>Субота</NameDay>
//         <NameDay>Неділя</NameDay>
//       </ScheduleStyle>
//     </SchedulePosition>
//   );
// }

// export default Schedule;
import { useRef, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import OptionsClick from '../OptionsClick/OptionsClick';

function Schedule() {
  const ref = useRef(null);
  // const WeekDay = () => {
  //   const Monday = document.getElementById('monday');
  //   return (console.log("Monday: ", Monday))
  // }
  // useEffect(() => {
  //   const el2 = ref.current;
  //   console.log(el2);
  // });

  const ClickOption = () => {
    console.log("e.target.value: ")
  }

  

  return (
    <Table
      striped
      bordered
      hover
      size='xl'
    >
      <thead>
        <tr>
          <th>#</th>
          <th onClick={()=>{}}>Понеділок</th>
          <th>Вівторок</th>
          <th>Середа</th>
          <th>Четвер</th>
          <th>П'ятниця</th>
          <th>Субота</th>
          <th>Неділя</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9:00</td>
          <td id='monday' ref={ref}>
            <OptionsClick ClickOption={ClickOption} />
          </td>
          <td id='tuesday'>
            <OptionsClick/>
          </td>
          <td id='wednesday'>
            <OptionsClick />
          </td>
          <td id='thursday'>
            <OptionsClick />
          </td>
          <td id='friday'>
            <OptionsClick />
          </td>
          <td id='saturday'>
            <OptionsClick />
          </td>
          <td id='sunday'>
            <OptionsClick />
          </td>
        </tr>
        <tr>
          <td>10:00</td>
          <td id='monday2' ref={ref}>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
        </tr>
        <tr>
          <td>11:00</td>
          <td id='monday3' ref={ref}>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
        </tr>
        <tr>
          <td>12:00</td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
        </tr>
        <tr>
          <td>13:00</td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
        </tr>
        <tr>
          <td>14:00</td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
        </tr>
        <tr>
          <td>15:00</td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
        </tr>
        <tr>
          <td>16:00</td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
        </tr>
        <tr>
          <td>17:00</td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
        </tr>
        <tr>
          <td>18:00</td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
        </tr>
        <tr>
          <td>19:00</td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
        </tr>
        <tr>
          <td>20:00</td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick/>
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
          <td>
            <OptionsClick />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Schedule;