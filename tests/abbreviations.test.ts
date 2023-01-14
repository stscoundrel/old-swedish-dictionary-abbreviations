import abbreviations, { findWorksAndAuthors } from '../src';

describe('Works & authors abbr mapping tests', () => {
  test('Abbreviations in map have expected content', () => {
    const resultMap = abbreviations.getWorksAndAuthorsMapping();

    // There is little point in testing key => value pairs.
    // Just snapshot it.
    expect(resultMap).toMatchSnapshot();
  });

  test('Finds works & authors in content', () => {
    // From definition of 'perlament'
    const content1 = 'eg. talande; ordväxling, träta, kif. vare thz saka ath drengen giorde nakat perlament i gillet thaa skal husbonden swara fore drengen SO 205 . Jfr parlamente';
    const expected1 = new Map([
      ['SO', 'Skrå-Ordningar. Utg. af G. E. Klemming. 1856.'],
    ]);

    // From definition of 'portpika'
    const content2 = 'flicka som tjänstgör som portvakt. VKU 24 ( 1541) .';
    const expected2 = new Map([
      ['VKU', 'Vadstena klosters Uppbörds- och Utgiftsbok 1539--1570. Utg. af C. Silfverstolpe. 1895.'],
    ]);

    // From definition of 'infödha'
    const content3 = 'L. - part. pret. infödder. 2) medfödd. " mäktogare är indföt onth än owanth got " GU C 20 (hand 2) s. 30. ib. 3) infödd. GU C 20 (hand 2) s. 30. nager jnrikes jnföder man STb 3: 331 (1497).';
    const expected3 = new Map(
      [
        ['GU C 20', 'Latinskt-Svenskt glossarium efter Cod. Ups. C 20. Utg. av E. Neuman. S 1--583. 1918--20, (hand 2) s. 1--169. 1938--42. SFSS.'],
        ['GU', 'Glossarii Latino-Svethici specimen vetustum. E cod. mscr. Bibliothecæ Reg. Acad. Upsal. Diss. Ups. præs. J. H. Schröder. 1845.'],
        ['ST', 'Själens Tröst. Utg. af G. E. Klemming. 1871--73.'],
      ],
    );

    const result1 = findWorksAndAuthors(content1);
    const result2 = findWorksAndAuthors(content2);
    const result3 = findWorksAndAuthors(content3);

    expect(result1).toEqual(expected1);
    expect(result2).toEqual(expected2);
    expect(result3).toEqual(expected3);
  });
});
