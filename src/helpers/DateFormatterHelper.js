// Date-FNS imports
import { formatRelative, subDays, differenceInDays } from 'date-fns';
const ptBrLocale = require('date-fns/locale/pt-BR/index');

export const GetPostDay = postDate => {
  const date = formatRelative(new Date(postDate), new Date(), {
    locale: ptBrLocale
  });

  return date.replace(date[0], date[0].toUpperCase());
};
