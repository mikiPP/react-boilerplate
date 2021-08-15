import axios from 'axios';
import { generateUUID } from '../../utils/functions';

const BASE_PATH = 'https://u474p6cdp8.execute-api.eu-west-3.amazonaws.com/dev';

export const getTodos = (queryParams) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${BASE_PATH}/todos${queryParams}`)
      .then((response) => {
          resolve(response.data.body);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const createTodo = (todo) =>
  new Promise((resolve, reject) => {
    const _id = generateUUID();
    const todoFormatted = { ...todo, watched: todo.watched || false, _id };

    axios
    .post(`${BASE_PATH}/todo`, todoFormatted)
    .then((response) => {
      resolve(response.data.body);
    })
    .catch((err) => {
      reject(err);
    });
  });

export const updateTodo = (todo) =>
  new Promise((resolve, reject) => {
    axios
    .put(`${BASE_PATH}/todo`, todo)
    .then((response) => {
      resolve(response.data.body);
    })
    .catch((err) => {
      reject(err);
    });
  });
