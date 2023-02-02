const command = process.argv[2] || "build";
const args = [
  "tailwindcss",
  command === "build" ? "build" : "watch",
  "--output",
  "public",
  ...(command === "watch" ? ["--watch"] : [])
];

console.log(`Running command: ${command}`);
console.log(`With arguments: ${args.join(" ")}`);


