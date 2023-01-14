import { getWorksAndAuthorsMapping } from './mappings/works-and-authors';

const findFromMapping = (
  content: string,
  abbreviations: Map<string, string>,
) : Map<string, string> => {
  const result: Map<string, string> = new Map();

  abbreviations.forEach((value, key) => {
    if (content.includes(key)) {
      result.set(key, value);
    }
  });

  return result;
};

export const findWorksAndAuthors = (content: string) : Map<string, string> => {
  const abbrMap = getWorksAndAuthorsMapping();
  return findFromMapping(content, abbrMap);
};

export default {
  findWorksAndAuthors,
  getWorksAndAuthorsMapping,
};
