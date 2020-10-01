import axios from 'axios'


export const Login = data => {
    return axios
      .post('/login', data)
      .then(response => {
          if(response.data.token){
            localStorage.setItem('usertoken', response.data.token)
          }
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
}

export const Register = data => {
    return axios
     .post('/register',data)
     .then(response => {
       console.log(response.data);
      if(response.data.token){
        localStorage.setItem('usertoken', response.data.token)
      }
       return response.data
     })
     .catch(err => {
       console.log(err)
     })
 }


 export const AllUser = data => {
  return axios
   .get('/all',data)
   .then(response => {
     return response.data
   })
   .catch(err => {
     console.log(err)
   })
}


export const FindUser = data => {
  return axios
   .post('/user',data)
   .then(response => {
     return response.data
   })
   .catch(err => {
     console.log(err)
   })
}
