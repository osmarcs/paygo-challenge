import { http } from './api';

export function getAllMessages() {
  return http('messages?_expand=user').then(response => response.json());
}
