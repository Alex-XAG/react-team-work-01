import { formatDistanceToNow } from 'date-fns';

export const getDistanceToNow = date =>
  formatDistanceToNow(new Date(date), { addSuffix: true });
