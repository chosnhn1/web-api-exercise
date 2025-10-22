function getCounts(text) {
  const characters = new Intl.Segmenter(
    navigator.language,
    {
      granularity: 'grapheme'
    }
  );
  const words = new Intl.Segmenter(
    navigator.language,
    {
      granularity: 'word'
    }
  );
  const sentences = new Intl.Segmenter(
    navigator.language,
    {
      granularity: 'sentence'
    }
  );

  return {
    characters: [...characters.segment(text)].length,
    words: [...words.segment(text)].length,
    sentences: [...sentences.segment(text)].length
  };
}