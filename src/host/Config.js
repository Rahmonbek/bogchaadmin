import { httpRequest, idBogcha, url } from "./Host";

export const getRahbariyat = () => {
  var config = {
    url: `${url}/rahbariyat/`,
    method: "get",
  };
  return httpRequest(config);
};

export const deleteTeacher = (id) => {
  var config = {
    url: `${url}/rahbariyat/${id}/`,
    method: "delete",
  };
  return httpRequest(config);
};

export const pushTeacher = (teacher) => {
  var config = {
    url: `${url}/rahbariyat/`,
    method: "post",
    data: teacher,
  };
  return httpRequest(config);
};

export const editTeachers = (teacher, id) => {
  var config = {
    url: `${url}/rahbariyat/${id}/`,
    method: "patch",
    data: teacher,
  };
  return httpRequest(config);
};

export const getXodim = () => {
  var config = {
    url: `${url}/xodim/`,
    method: "get",
  };
  return httpRequest(config);
};
export const createXodim = (dataS) => {
  var config = {
    url: `${url}/xodim/`,
    method: "post",
    data: dataS,
  };
  return httpRequest(config);
};
export const deleteXodim = (id) => {
  var config = {
    url: `${url}/xodim/${id}/`,
    method: "delete",
  };
  return httpRequest(config);
};
export const editXodim = (dataS, id) => {
  var config = {
    url: `${url}/xodim/${id}/`,
    method: "patch",
    data: dataS,
  };
  return httpRequest(config);
};

export const getKg = () => {
  var config = {
    url: `${url}/kg-info/${idBogcha}/`,
    method: "get",
  };
  return httpRequest(config);
};

export const editKg = (data) => {
  var config = {
    url: `${url}/kg/${idBogcha}/`,
    method: "patch",
    data: data,
  };
  return httpRequest(config);
};
export const getNews = () => {
  var config = {
    url: `${url}/yangilik/`,
    method: "get",
  };
  return httpRequest(config);
};
export const createNews = (dataS) => {
  var config = {
    url: `${url}/yangilik/`,
    method: "post",
    data: dataS,
  };
  return httpRequest(config);
};
export const deleteNews = (id) => {
  var config = {
    url: `${url}/yangilik/${id}/`,
    method: "delete",
  };
  return httpRequest(config);
};
export const editNews = (dataS, id) => {
  var config = {
    url: `${url}/yangilik/${id}/`,
    method: "patch",
    data: dataS,
  };
  return httpRequest(config);
};
export const getTadbir = () => {
  var config = {
    url: `${url}/tadbirlar/`,
    method: "get",
  };
  return httpRequest(config);
};
export const createTadbir = (dataS) => {
  var config = {
    url: `${url}/tadbirlar/`,
    method: "post",
    data: dataS,
  };
  return httpRequest(config);
};
export const deleteTadbir = (id) => {
  var config = {
    url: `${url}/tadbirlar/${id}/`,
    method: "delete",
  };
  return httpRequest(config);
};
export const editTadbir = (dataS, id) => {
  var config = {
    url: `${url}/tadbirlar/${id}/`,
    method: "patch",
    data: dataS,
  };
  return httpRequest(config);
};

export const changePassword = (data, token) => {
  var config = {
    headers: {
      Authorization: `token ${token}`,
    },
    url: `${url}/dj-rest-auth/password/change/`,
    method: "post",
    data: data,
  };
  return httpRequest(config);
};
