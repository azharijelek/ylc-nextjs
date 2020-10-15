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
    const response = await UserServices.login(payload)
    const data = await response.data

    req.session.set('user', data)
    await req.session.save()
    res.json(data)
  } catch (error) {
    const { response: fetchResponse } = error
    res.status(fetchResponse?.status || 500).json(error)
    //res.json(error)
  }
})
