# tim-parse
A simple plugin system for parse xml

**Environment setup:**

 - Install node.js
 - Install yarn

 
----------

## App


**Common commands:**

Not yet posted to npmjs.org!

- Local testing command

- Parse 
```
node index.start parse ./example/test.html
node index.start parse http://www.dingo.tw/
```

- Parse and Write file
```
node index.start parse http://www.dingo.tw/ ./example/test.txt
```

- Custom Rules
```
import Core from './Libs/core';
new Core({
  url,
  hideRules: [3],
  customRules: [
  {
    selector: 'strong',
    checker: (selector) => [selector.length < 20, 20],
    output: 'Less than {0} <strong> tag',
  }
  ],
  saveFilePath: path,
  onParseEnd: (result) => {
    result.forEach((row) => {
        console.log(row);
    });
  },
  onParseErr: (err) => {
    console.log(err);
  }
});
```

- Unit Test
```
yarn run test
```