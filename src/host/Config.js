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
    url: `${url}/kg/${idBogcha}/`,
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
