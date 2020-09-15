import { fetchEducationList } from "./FetchEducationList";

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
