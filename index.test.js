import { showMessage, add, minutes, clickHandler } from "./index";

test("showMessage returns correct string", () => {
  expect(showMessage()).toBe("Hello, this is a test PR.");
});

test("add returns sum", () => {
  expect(add(2, 3)).toBe(5);
});

test("minutes returns difference", () => {
  expect(minutes(5, 3)).toBe(2);
});

test("clickHandler returns correct string", () => {
  expect(clickHandler()).toBe("PR Test Clicked!");
});
