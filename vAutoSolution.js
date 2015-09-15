words = input.match(/([a-zA-Z])+/g)
      delimiters = input.match(/(\W|[0-9])+/g)
      for word in words
        i = 0
        frequencies = {}
        first_letter = word.charAt(0)
        last_letter = word.charAt(word.length-1)
        word = word.substring(1,word.length - 1)
        while i < word.length
          letter = word[i]
          frequencies[letter] = frequencies[letter] or 0
          frequencies[letter]++
          i++
        letter_counts = Object.keys(frequencies)
        console.log(first_letter + letter_counts.length + last_letter)
