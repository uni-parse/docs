function a(choice) {
  switch (choice) {
    case 1: console.log(1); break;
    case 'hello': console.log('hello'); break;
    case choice >= 2: console.log(`${choice}≥2`); break;
  }
};
a(1);
console.log('hi')