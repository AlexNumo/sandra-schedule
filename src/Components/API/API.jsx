const axios = require('axios');

const addDataAPI = (
        // id, day, kind_trainee
        // data
        {id, day, kind_trainee}
    
) => {
    console.log("data: ", id, day, kind_trainee)
    axios.post('https://schedule-bsck.herokuapp.com/api', {
        id, day, kind_trainee
        // id: id,
        // day: day,
        // kind_trainee,
    })
        
        .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export {
    addDataAPI,
};