import fetch from 'isomorphic-fetch';
import { API } from '../config';

// create tag
export const create = (tag, token) => {
  return fetch(`${API}/tag`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(tag),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// get all tags
export const getTags = () => {
  return fetch(`${API}/tags`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// get a single tag
export const singleTag = (slug) => {
  return fetch(`${API}/tag/${slug}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// delete the tag
export const removeTag = (slug, token) => {
  return fetch(`${API}/tag/${slug}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application-json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
