import axios from "axios";

export const baseUrl = `http://localhost:8080/api/v1`;

export default function apiClient(url, method, data, param, header) {
  let token = localStorage.getItem("access_token");
  return axios({
    url: baseUrl + url,
    method: method,
    data: data,
    headers: {
      Authorization: token,
      ...(header ? { "Content-Type": "multipart/form-data" } : {}),
    },
    params: param,
  })
    .then((res) => {
      if (res.data) {
        return {
          error: false,
          data: res.data,
        };
      }
    })
    .catch((err) => {
      if (err.response.status === 401) {
        if (localStorage.getItem("refresh_token") === null) {
          return {
            error: true,
            data: err.response.status,
          };
        }
        return axios({
          url:
            baseUrl +
            `/auth/refresh?refreshToken=${localStorage.getItem(
              "refresh_token"
            )}`,
          method: "POST",
        })
          .then((res) => {
            localStorage.setItem("access_token", res.data);
            return axios({
              url: baseUrl + url,
              method: method,
              data: data,
              headers: {
                Authorization: localStorage.getItem("access_token"),
              },
            })
              .then((res) => {
                return {
                  error: false,
                  data: res.data,
                };
              })
              .catch((err) => {
                return {
                  error: true,
                  data: err.response.data,
                };
              });
          })
          .catch((err) => {
            return {
              error: true,
              data: err.response.data,
            };
          });
      } else {
        return {
          error: true,
          data: err.response.data,
        };
      }
    });
}
