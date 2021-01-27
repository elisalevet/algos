var isValid = function (s) {
  const open = '({[';
  const close = ')}]';
  const matching = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const stack = [];

  for (let element of s) {
    if (open.includes(element)) {
      console.log(element, 'first element');
      stack.push(element);
      console.log(stack, 'the stack');
    } else if (close.includes(element)) {
      console.log(element, 'element');
      if (stack.length === 0) {
        return false;
      }
      if (stack[stack.length - 1] === matching[element]) {
        console.log(stack[stack.length - 1], 'comparando');
        console.log(matching[element], 'this is me');
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid('([])'));
