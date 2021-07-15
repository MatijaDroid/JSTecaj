const sum = require('../components/sum'); //NPM nezna koji je root folder i ./ neće raditi nego moramo ../ da dođemo u root folder (ovo je Node.js i koristimo require)

test('sum test', () => { // smisleno ime u ime testa stavljati
    expect(sum(1,2)).toBe(3);
});
