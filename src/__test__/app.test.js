import { fetchEducationList } from "../js/FetchEducationList";
import { fetchUserInfo } from "../js/FetchUserInfo";

// TODO feedback: 不应该直接测试请求调用，建议mock API请求
test("given existed user id then get all user info when call fetchUserInfo()", async () => {
  const result = await fetchUserInfo(0);
  expect(result.name).toBe("JACK");
});

test("given existed user id then get all user educations when call fetchEducationList()", async () => {
  const result = await fetchEducationList(0);
  expect(result.length).toBe(4);
});

test("given non-existed user id then throw 404 when call fetchUserInfo()", async () => {
  try {
    await fetchUserInfo(9999);
  } catch (e) {
    // eslint-disable-next-line jest/no-try-expect
    expect(e.message).toBe("Request failed with status code 404");
  }
});

test("given non-existed user id then throw 404 when call fetchEducationList()", async () => {
  try {
    await fetchEducationList(9999);
  } catch (e) {
    // eslint-disable-next-line jest/no-try-expect
    expect(e.message).toBe("Request failed with status code 404");
  }
});
