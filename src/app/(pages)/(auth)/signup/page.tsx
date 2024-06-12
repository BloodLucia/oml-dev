export default ({ searchParams }: { searchParams: { username: string } }) => {
  const { username } = searchParams
  if (username) {
    return <div>{username}</div>
  }
  return <div>Signup Page</div>
}
