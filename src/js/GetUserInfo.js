import { fetchUserInfo } from "./FetchUserInfo";
import { getEducationList } from "./GetEducationList";

export const getUserInfo = async () => {
  const userInfo = await fetchUserInfo(0);
  $("#user-name").text(userInfo.name);
  $("#user-age").text(userInfo.age);
  $("#profile-photo").attr("src", userInfo.avatar);
  $("#user-description").text(userInfo.description);

  await getEducationList(userInfo.id);
};

getUserInfo();
