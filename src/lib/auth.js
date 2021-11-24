import axios from "axios";

export const checkAuth = () => {
    // const respAuth = await axios({
    //     url: 'http://localhost:3001/authenticated',
    //     method: 'POST',
    //     withCredentials: true
    // })
    // console.log('respAuth --> ', respAuth);
    // if (respAuth.data.body?.errorMessage) return false;
    // return true;
    axios({
        url: 'http://localhost:3001/authenticated',
        method: 'POST',
        withCredentials: true
    }).then(res => {
        console.log(res);
        if (res.data.body?.errorMessage) return false
        return true
    })
}