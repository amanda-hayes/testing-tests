const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Amanda", 80);
  expect(text).toBe("Amanda (80 years old)");
});

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Amanda", 80);
  expect(text).toBe("Amanda (80 years old)");
});
