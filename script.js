
const command = process.argv[2] || "build";
const args = [
  "tailwindcss",
  "-i",
  "./input.css",
  "-o",
  "./css/main.css",
  ...(command === "watch" ? ["--watch"] : [])
];

console.log(`Running command: ${command}`);
console.log(`With arguments: ${args.join(" ")}`);


