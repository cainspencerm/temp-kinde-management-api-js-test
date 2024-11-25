const { init, Users } = require("@kinde/management-api-js")

const getUserData = async () => {
  init()

  const id = process.env.KINDE_TEST_USER_ID

  let data
  try {
    data = await Users.getUserData({ id })
  } catch (error) {
    console.error(error)
  }

  return data
}

module.exports = {
  getUserData,
}
