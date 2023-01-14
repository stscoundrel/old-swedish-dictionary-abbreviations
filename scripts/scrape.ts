// Grab written entries from ancient HTML source.

const abbreviations = {};

document.querySelectorAll('ul li').forEach((sourceLine) => {
  const abbreviation = sourceLine.querySelectorAll('i')[0].innerHTML;
  const content = sourceLine.innerHTML
    .replace(abbreviation, '')
    .replace(/<[^>]*>?/gm, '')
    .replace('\n', '')
    .trim();

  abbreviations[abbreviation] = content;
});

console.log(abbreviations);
