const { generateText } = require("./util");

test("should output name and age", () => {
  const text = generateText("Amanda", 80);
  expect(text).toBe("Amanda (80 years old)");
});
