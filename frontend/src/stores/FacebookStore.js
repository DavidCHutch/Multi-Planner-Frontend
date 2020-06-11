// import { extendObservable } from 'mobx'; 

// /**
//  * FacebookStore
//  */

// class FacebookStore{
//     constructor(){
//         extendObservable(this, {
//             auth: false,
//             userID: '',
//             accessToken: '',
//             expiresIn: 0,
//             name: '',
//             picture: ''
//         })
//     }
// }

// export default new FacebookStore();


class FacebookStore{
    auth;
    userId;
    name;
    picture;
}