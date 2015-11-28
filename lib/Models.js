// import Register from './ModelRegister'
// export default Register.models

function model(name) {
  return '../api/models/' + name
}

export { User } from '../api/models/User'
export { HomePost } from '../api/models/HomePost'