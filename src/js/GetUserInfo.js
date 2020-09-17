import { fetchUserInfo } from "./FetchUserInfo";
import { getEducationList } from "./GetEducationList";

// TODO feedback: 可以考虑按照功能拆分函数，当前不符合单一职责原则
export const getUserInfo = async () => {
  const userInfo = await fetchUserInfo(0);
  $("#user-name").text(userInfo.name);
  $("#user-age").text(userInfo.age);
  $("#profile-photo").attr("src", userInfo.avatar);
  $("#user-description").text(userInfo.description);

  await getEducationList(userInfo.id);
};

getUserInfo();
