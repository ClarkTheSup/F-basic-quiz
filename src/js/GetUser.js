const getEducationList = async (userId) => {
  const response = await fetch(
    `http://localhost:8080/users/${userId}/educations`,
    {
      method: "GET",
    }
  );
  const educationList = await response.json();
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

const getUser = async () => {
  const response = await fetch("http://localhost:8080/users/0", {
    method: "GET",
  });
  const userInfo = await response.json();
  $("#user-name").text(userInfo.name);
  $("#user-age").text(userInfo.age);
  $("#profile-photo").attr("src", userInfo.avatar);
  $("#user-description").text(userInfo.description);

  getEducationList(userInfo.id);
};

getUser();
