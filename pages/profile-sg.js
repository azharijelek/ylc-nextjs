import useUser from '@/lib/useUser'

const SgProfile = () => {
  const { user } = useUser({ redirectTo: '/member/login' })

  if (!user || user.isLoggedIn === false) {
    return (
        <>
        <div style={{padding: 15,textAlign:'center'}}>loading...</div>
        </>
    )
  }

  return (
    <>
      <h1>Your YLC profile</h1>
      <pre>{JSON.stringify(user, undefined, 2)}</pre>
    </>
  )
}

export default SgProfile