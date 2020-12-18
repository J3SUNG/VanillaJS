console.log("Hello, Console!");

console.error("Error!!");

console.warn("Warn!");

console.clear();

let i = 0;
console.time("test");
while (i < 20000) {
  ++i;
}
console.timeEnd("test");

console.table({ a: "apple", b: "banana" });

console.count("Hey");
for (let i = 0; i < 4; ++i) {
  console.count("Bye");
}
console.count("Hey");

console.group();
console.log("Hi");
console.warn("Umm..");
console.error("Oh!");
console.log("Bye");
console.groupEnd();
console.log("Test");

let size = "12px";
let styles = `padding: 10px; background-color: peru; border: 1px solid black; font-size: ${size}; color: white`;
console.log("%cHello, Console!", styles);
