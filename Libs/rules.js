export default [{
  selector: 'img:not([alt])',
  checker: (selector) => [selector.length > 0, selector.length],
  output: 'There are {0} <img> tag without alt attribute',
},{
  selector: 'a:not([rel])',
  checker: (selector) => [selector.length > 0, selector.length],
  output: 'There are {0} <a> tag without rel attribute',
},{
  selector: 'head title',
  checker: (selector) => [selector.length === 0, ''],
  output: 'This HTML without <title> tag',
},{
  selector: 'meta:not([name=descriptions])',
  checker: (selector) => [selector.length === 0, ''],
  output: 'The <meta> tag without name attribute of descriptions',
},{
  selector: 'meta:not([name=keywords])',
  checker: (selector) => [selector.length === 0, ''],
  output: 'The <meta> tag without name attribute of keywords',
},{
  selector: 'strong',
  checker: (selector) => [selector.length < 15, 15],
  output: 'Less than {0} <strong> tag',
},,{
  selector: 'h1',
  checker: (selector) => [selector.length > 1, ''],
  output: 'Too much <h1> tag',
},
];
