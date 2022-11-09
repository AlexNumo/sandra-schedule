import {TableSize, TimeSize} from './ScheduleTable.styled';

const ScheduleTable = ({ 
  data0900, data1000, data1100, data1200, data1300, data1400, data1500, data1600, data1700, data1800, data1900, data2000
}) => {
  return (
    <>
      <tr><TimeSize>9:00</TimeSize>
      {data0900.map(item => (
        <TableSize key={item.id}>{item.kind_trainee}</TableSize>
        ))}
      </tr>
      <tr>10:00
      {data1000.map(item => (
        <TableSize key={item.id}>{item.kind_trainee}</TableSize>
        ))}
      </tr>
      <tr>11:00
      {data1100.map(item => (
        <TableSize key={item.id}>{item.kind_trainee}</TableSize>
        ))}
      </tr>
      <tr>12:00
      {data1200.map(item => (
        <TableSize key={item.id}>{item.kind_trainee}</TableSize>
        ))}
      </tr>
      <tr>13:00
      {data1300.map(item => (
        <TableSize key={item.id}>{item.kind_trainee}</TableSize>
        ))}
      </tr>
      <tr>14:00
      {data1400.map(item => (
        <TableSize key={item.id}>{item.kind_trainee}</TableSize>
        ))}
      </tr>
      <tr>15:00
      {data1500.map(item => (
        <TableSize key={item.id}>{item.kind_trainee}</TableSize>
        ))}
      </tr>
      <tr>16:00
      {data1600.map(item => (
        <TableSize key={item.id}>{item.kind_trainee}</TableSize>
        ))}
      </tr>
      <tr>17:00
      {data1700.map(item => (
        <TableSize key={item.id}>{item.kind_trainee}</TableSize>
        ))}
      </tr>
      <tr>18:00
      {data1800.map(item => (
        <TableSize key={item.id}>{item.kind_trainee}</TableSize>
        ))}
      </tr>
      <tr>19:00
      {data1900.map(item => (
        <TableSize key={item.id}>{item.kind_trainee}</TableSize>
        ))}
      </tr>
      <tr>20:00
      {data2000.map(item => (
        <TableSize key={item.id}>{item.kind_trainee}</TableSize>
        ))}
      </tr>
    </>
  )
}

export default ScheduleTable;