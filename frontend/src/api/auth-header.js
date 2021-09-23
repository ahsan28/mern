export default function authHeader(access_token=null) {
    if (access_token){
      return { Authorization: 'Bearer ' + access_token }
    }
  
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.access_token) {
      return { Authorization: 'Bearer ' + user.access_token };
    } else {
      return {};
    }
  }