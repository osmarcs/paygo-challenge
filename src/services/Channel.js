import { http } from './api';

export function getAllChannels() {
  return http('channels').then(response => response.json());
}
