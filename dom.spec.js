import { showMessage, add, clickHandler } from "./dom.js";

describe("dom.js", () => {
  test("showMessage returns correct message", () => {
    expect(showMessage()).toBe("Hello, this is a test PR.");
  });

  test("add returns the sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test("clickHandler returns correct message", () => {
    expect(clickHandler()).toBe("PR Test Clicked!");
  });
});
