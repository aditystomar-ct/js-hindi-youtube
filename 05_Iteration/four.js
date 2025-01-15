const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for(const key in myObj) {
//     // console.log(key, myObj[key]);
// }

// const programming = { "js", "rb", "py", "java", "c++"};
// for (const key in programming) {
//     console.log(programming[key]);
// }

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('UK', "United Kingdom");
// for (const key in map)
// {
//     console.log(key, map[key]);
// }
//does not support above

// Using for...of to iterate over map entries
for (const [key, value] of map) {
    console.log(key, value);
}
