def balancedBrackets(string):

  open_bracket = ['[', '{', '(']
  close_bracket = [']', '}', ')']

  # if string is odd length, cannot be balanced --> return false
  if len(string) % 2 == 1:
    return False

  while len(string):
    first_close = None

    # finds first closing bracket (lowest index)
    for index, char in enumerate(string):
      if char in close_bracket:
        char_index = close_bracket.index(char)
        # index = location in string, char_index = character type location
        first_close = (index, char_index)
        break

    # loop from first closing index to 0
    for i in range(first_close[0] - 1, -1, -1):
      # find closest matching open bracket
      if string[i] == open_bracket[first_close[1]]:
        # make sure odd distance between (either nothing or even number of brackets)
        if (first_close[0] - i) % 2 == 1:
          # remove the matching brackets
          string_list = list(string)
          del string_list[first_close[0]]
          del string_list[i]
          string = "".join(string_list)
          break
        else:
          return False
      else:
        # no matching open bracket was found
        if i == 0:
          return False
    
  return True

print(balancedBrackets("{[()]}"))   # True
print(balancedBrackets('[[]]'))     # True
print(balancedBrackets('[]{}()'))   # True
print(balancedBrackets('[{[()]}]')) # True
print(balancedBrackets('[({}}]'))   # False
print(balancedBrackets(''))         # True
print(balancedBrackets('{(})'))     # False