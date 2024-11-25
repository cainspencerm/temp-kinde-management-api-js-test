const { getUserData } = require("./index")

describe("index", () => {
  test("should resolve and close", async () => {
    const data = await getUserData()
    expect(data).toBeDefined()
  })
})
