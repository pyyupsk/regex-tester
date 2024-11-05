type Cheatsheet = Record<string, { pattern: string; description: string }[]>;

export const cheatsheet: Cheatsheet = {
  "Basic Characters": [
    { pattern: ".", description: "Any character except newline" },
    { pattern: "\\w", description: "Word character [A-Za-z0-9_]" },
    { pattern: "\\d", description: "Digit [0-9]" },
    { pattern: "\\s", description: "Whitespace character" },
    { pattern: "\\W", description: "Non-word character" },
    { pattern: "\\D", description: "Non-digit" },
    { pattern: "\\S", description: "Non-whitespace character" },
  ],
  Anchors: [
    { pattern: "^", description: "Start of string" },
    { pattern: "$", description: "End of string" },
    { pattern: "\\b", description: "Word boundary" },
    { pattern: "\\B", description: "Non-word boundary" },
  ],
  "Character Classes": [
    { pattern: "[abc]", description: "A single character of: a, b, or c" },
    {
      pattern: "[^abc]",
      description: "Any single character except: a, b, or c",
    },
    { pattern: "[a-z]", description: "Any single character in the range a-z" },
    { pattern: "[A-Z]", description: "Any single character in the range A-Z" },
    { pattern: "[0-9]", description: "Any single digit 0-9" },
  ],
  Quantifiers: [
    { pattern: "*", description: "0 or more occurrences" },
    { pattern: "+", description: "1 or more occurrences" },
    { pattern: "?", description: "0 or 1 occurrence" },
    { pattern: "{3}", description: "Exactly 3 occurrences" },
    { pattern: "{3,}", description: "3 or more occurrences" },
    { pattern: "{3,5}", description: "Between 3 and 5 occurrences" },
  ],
  "Groups and Lookaround": [
    { pattern: "(abc)", description: "Capture group" },
    { pattern: "(?:abc)", description: "Non-capturing group" },
    { pattern: "(?=abc)", description: "Positive lookahead" },
    { pattern: "(?!abc)", description: "Negative lookahead" },
    { pattern: "(?<=abc)", description: "Positive lookbehind" },
    { pattern: "(?<!abc)", description: "Negative lookbehind" },
  ],
};
