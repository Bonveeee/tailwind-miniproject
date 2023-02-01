
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

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

