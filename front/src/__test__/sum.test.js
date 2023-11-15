// sum.test.js
import { expect, test, describe } from "vitest";
import { sum } from "../sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

describe("hello world", () => {
  // test suite : 테스트 유닛들의 모음 - 함수를 테스트할 때
  test("true is true", () => {
    // test unit : 테스트 단위 - 함수 기능의 spec 문자열과 테스트 코드 구현할 수 있는 함수를 인자로 넘겨줌
    expect(true).toBe(true);
    // matcher : 검증자 - 기대하는 값
  });
});
