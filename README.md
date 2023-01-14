# Old Swedish Dictionary Abbreviations

Map abbreviations to full length words from K.F. Söderwall's Medieval Swedish Dictionary.

The printed dictionary is full of abbreviations meant to save space in print. While working with online versions of the same source material, there is little use for these abbreviations. This library helps you map them back to their full length equilevants. In case of Söderwall's dictionary, the abbreviations are often sources cited.

Related projects:
- [Old Swedish Dictionary (Node.js library)](https://github.com/stscoundrel/old-swedish-dictionary).
- [Old Swedish Dictionary Website (Next.js)](https://github.com/stscoundrel/old-swedish-dictionary-next).

### Install

`yarn add old-swedish-dictionary-abbreviations`

### Usage

Find abbreviated works & authors:

```javascript
import { findWorksAndAuthors }  from 'old-swedish-dictionary-abbreviations'

// Find abbreviations from content -> example is from definition of 'infödha'
const content = 'L. - part. pret. infödder. 2) medfödd. " mäktogare är indföt onth än owanth got " GU C 20 (hand 2) s. 30. ib. 3) infödd. GU C 20 (hand 2) s. 30. nager jnrikes jnföder man STb 3: 331 (1497).';

// Returns map of abbreviated works to meanings.
const result = findWorksAndAuthors(content);

console.log(result);
// 'GU C 20' => 'Latinskt-Svenskt glossarium efter Cod. Ups. C 20. Utg. av E. Neuman. S 1--583. 1918--20, (hand 2) s. 1--169. 1938--42. SFSS.'
// 'GU' => 'Glossarii Latino-Svethici specimen vetustum. E cod. mscr. Bibliothecæ Reg. Acad. Upsal. Diss. Ups. præs. J. H. Schröder. 1845.'
// 'ST' => 'Själens Tröst. Utg. af G. E. Klemming. 1871--73.'

```

### About "Dictionary of Old Swedish"

_"Ordbok Öfver svenska medeltids-språket"_ dictionary was published in late 1884—1918 by K.F. Söderwall. Additional supplement to it was published in 1953—1973.

Old Swedish developed from Old East Norse, the eastern dialect of Old Norse, at the end of the Viking Age. Early Old Swedish was spoken from about 1225 until about 1375, and Late Old Swedish was spoken from about 1375 until about 1526.

The original material is licenced under [Creative Commons International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/), made available by University of Gothenburg. The source code for this library is under MIT licence.

- https://spraakbanken.gu.se/en/resources/soederwall
- https://spraakbanken.gu.se/en/resources/soederwall-supp
