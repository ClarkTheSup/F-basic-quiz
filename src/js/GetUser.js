export const fetchEducationList = async (userId) => {
  const response = await fetch(
    `http://localhost:8080/users/${userId}/educations`,
    {
      method: "GET",
    }
  );
  const educationList = await response.json();
  return educationList;
};

export const fetchUserInfo = async (userId) => {
  const response = await fetch(`http://localhost:8080/users/${userId}`, {
    method: "GET",
  });
  const userInfo = await response.json();
  return userInfo;
};

export const getEducationList = async (userId) => {
  const educationList = await fetchEducationList(userId);
  educationList.forEach((education) =>
    $("#education").append(
      '<div class="education-content-row">\n' +
        `          <div class="education-content-row-year">${education.year}</div>\n` +
        '          <div class="education-content-row-content">\n' +
        `            <span class="education-content-row-content-introduction">${education.title}</span>\n` +
        `            <span>${education.description}</span>\n` +
        "          </div>\n" +
        "        </div>"
    )
  );
};

export const getUser = async () => {
  const userInfo = await fetchUserInfo(0);
  $("#user-name").text(userInfo.name);
  $("#user-age").text(userInfo.age);
  $("#profile-photo").attr("src", userInfo.avatar);
  $("#user-description").text(userInfo.description);

  await getEducationList(userInfo.id);
};

getUser();
