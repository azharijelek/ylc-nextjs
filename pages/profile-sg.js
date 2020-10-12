import useUser from '@/lib/useUser'

const SgProfile = () => {
  const { user } = useUser({ redirectTo: '/login' })

  if (!user || user.isLoggedIn === false) {
    return <>loading...</>
  }

  return (
    <>
      <h1>Your YLC profile</h1>
      <pre>{JSON.stringify(user, undefined, 2)}</pre>
    </>
  )
}

export default SgProfile