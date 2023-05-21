import { formatDistanceToNow, format } from 'date-fns';

export const getDistanceToNow = date =>
  formatDistanceToNow(new Date(date), { addSuffix: true });

export const getFormatDate = date =>
  format(new Date(date), 'Pp', { addSuffix: true });
