import { fetchUserInfo } from "../js/GetUser";

test("given existed user id then get all user info when call fetchUserInfo()", async () => {
  return fetchUserInfo(0).then((data) => {
    console.log(data);
    expect(data).toBe("JACK");
  });
});
