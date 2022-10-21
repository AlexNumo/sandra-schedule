import styled from 'styled-components';

const SchedulePosition = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-color: #72bcbc; */
`;

const ScheduleStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #72bcbc; */
    width: 100vw;
    padding: 15px 15px 15px 15px;
`;

const NameDay = styled.h3`
    padding: 15px 15px 15px 15px;
`;

export {
    SchedulePosition,
    ScheduleStyle,
    NameDay,
};