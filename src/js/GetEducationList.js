import { fetchEducationList } from "./FetchEducationList";

export const getEducationList = async (userId) => {
  const educationList = await fetchEducationList(userId);
  educationList.forEach((education) =>
    // TODO feedback: education-content-row li更符合语义
    // TODO feedback: 在for循环中，每次都要操作DOM，影响性能，不推荐这样做
    $("#education").append(
      '<div class="education-content-row">\n' +
        // TODO feedback: class命名过于复杂
        `          <div class="education-content-row-year">${education.year}</div>\n` +
        '          <div class="education-content-row-content">\n' +
        `            <span class="education-content-row-content-introduction">${education.title}</span>\n` +
        `            <span>${education.description}</span>\n` +
        "          </div>\n" +
        "        </div>"
    )
  );
};
