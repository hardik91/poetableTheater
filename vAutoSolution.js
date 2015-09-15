function processString(input) {
  var delimiters, first_letter, formatted_words, frequencies, i, j, last_letter, len, letter, letter_counts, word, word_count, words;
  formatted_words = [];
  words = input.match(/([a-zA-Z])+/g);
  delimiters = input.match(/(\W|[0-9])+/g);
  word_count = 0;
  for (j = 0, len = words.length; j < len; j++) {
    word = words[j];
    i = 0;
    frequencies = {};
    if (word.length > 2) {
      first_letter = word.charAt(0);
      last_letter = word.charAt(word.length - 1);
      word = word.substring(1, word.length - 1);
      while (i < word.length) {
        letter = word[i];
        frequencies[letter] = frequencies[letter] || 0;
        frequencies[letter]++;
        i++;
      }
      letter_counts = Object.keys(frequencies);
      formatted_words.push(first_letter + letter_counts.length + last_letter);
      if (word_count < delimiters.length) {
        formatted_words.push(delimiters[word_count]);
      }
      word_count++;
    } else {
      formatted_words.push(word);
      if (word_count < delimiters.length) {
        formatted_words.push(delimiters[word_count]);
      }
      word_count++;
    }
  }
  console.log(formatted_words.join(''));
};
