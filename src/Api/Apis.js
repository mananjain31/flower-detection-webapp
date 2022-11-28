const { BASE_URL } = require("Constants/urls");

export const getApi = (url) => {
  return fetch(BASE_URL + url)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

export const postApi = (url, data) => {
  return fetch(BASE_URL + url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .catch((error) => {
      console.error(error);
    });
};

export const postFileApi = (url, data) => {
  return fetch(BASE_URL + url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
    body: data,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};
