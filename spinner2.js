const spinnerChars = ['|', '/', '-', '\\','|', '/', '-', '\\', '|'];

const delay = 200; // Delay between each spinner character

// Loop through characters in spinnerChar array
for (let i = 0; i <spinnerChars.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerChars[i]}   `); // Write out spinner character with trailing spaces so cursor doesn't block it
  }, delay * i);  // set timeout progressively based on the index (i) to ensure each character appears at the correct time, staggering the animation
}