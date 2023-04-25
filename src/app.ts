import { createInterface } from 'readline';
import { evaluateRPN } from './utils/util';

process.stdin.setRawMode(true); // Enable "raw" mode to receive individual keypress events
process.stdin.setEncoding('utf8'); // Set encoding to UTF-8 to receive characters instead of buffers

const rl = createInterface({ input: process.stdin, output: process.stdout });

console.clear();

rl.prompt();

rl.on('line', (line: string) => {
  console.log(evaluateRPN(line));
  rl.prompt();
});

process.stdin.on('keypress', (key: string) => {
  if (key === 'q') {
    process.exit();
  }
});
