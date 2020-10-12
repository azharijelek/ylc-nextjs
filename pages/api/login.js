import withSession from '@/lib/session'
import UserServices from '@/services/UserServices'

export default withSession(async (req, res) => {
  const { username, password } = await req.body
  //const url = `https://api.github.com/users/${username}`
  
  const payload = {
    username: username,
    password: password
  }

  try {
    const res = await UserServices.login(payload);

    if( res.status == 200 ) {
        const data = await res.data
    
        req.session.set('user', data)
        await req.session.save()
        res.json(user)
    }
  } catch (error) {
    const { response: fetchResponse } = error
    res.status(fetchResponse?.status || 500).json(error.data)
  }
})