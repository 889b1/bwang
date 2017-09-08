import Api from '@/services/Api'

export default {
  register: (credentials) {
    return Api().post('register', credentials)
  }
}

//AuthenticationService.register({
//  email: 'blah@blah.com',
//  password: '1234',
//})
