const fs = require('fs');

// export function as variable
exports.writeHtml5Boilerplate = createHtml5Boilerplate;

function createHtml5Boilerplate() {

    const html5 = fs.readFileSync(`${__dirname}/index.html`);
    const css = fs.readFileSync(`${__dirname}/styles.scss`);
    const js = fs.readFileSync(`${__dirname}/main.js`);

    // filename is the name of the [2] argument to be passed in by user
    const htmlFileName = process.argv[2];
    const cssFileName = process.argv[3];
    const jsFilename = process.argv[4];
    fs.writeFileSync(`${process.cwd()}/${htmlFileName}`, html5);
    fs.writeFileSync(`${process.cwd()}/${cssFileName}`, css);
    fs.writeFileSync(`${process.cwd()}/${jsFilename}`, js);

}

createHtml5Boilerplate();
