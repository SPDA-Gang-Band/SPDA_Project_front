import axios from 'axios'
import { baseUrl, courseRequestUrl } from "./constants";

const createHeader = login => {
  return {
    'Authorization': `fullname ${login}`,
  }
}

export const getCourses = (login) => {
  return axios.get(`${baseUrl}/${courseRequestUrl}/`, {headers: createHeader(login)})
}

export const getCourseById = (id, login) => {
  return axios.get(`${baseUrl}/${courseRequestUrl}/${id}/`, {headers: createHeader(login)})
}

export const createCourse = (data, login) => {
  return axios.post(`${baseUrl}/${courseRequestUrl}/`, data, {headers: createHeader(login)})
}

export const editCourse = (id, data, login) => {
  return axios.put(`${baseUrl}/${courseRequestUrl}/${id}/`, data, {headers: createHeader(login)})
}

export const editStatus = (id, data, login) => {
  return axios.patch(`${baseUrl}/${courseRequestUrl}/${id}/`, data, {headers: createHeader(login)})
}

export const deleteCourse = (id, login) => {
  return axios.delete(`${baseUrl}/${courseRequestUrl}/${id}/`, {headers: createHeader(login)})
}
