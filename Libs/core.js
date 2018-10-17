import { getData, saveFile } from './getData';
import rules from './rules';
const cheerio = require('cheerio');

const defaultOption = {
  url: '',
  hideRules: [],
  customRules: [],
  saveFilePath: '',
  onParseEnd: () => {},
  onParseErr: () => {},
}

export default class Core {
  constructor(option) {
    this.option = { ...defaultOption, ...option };

    this.instance = {
      cheerio: null,
    };

    this.init();
  }

  init = () => {
    const { url, saveFilePath, onParseEnd, onParseErr } = this.option;
    
    getData(url).then((html) => {
      this.instance.cheerio = cheerio.load(html);

      const result = this.parse();
      onParseEnd(result);

      if (saveFilePath) {
        saveFile(saveFilePath, result.toString()).catch((err) => {
          onParseErr(err);
        });
      }
    }).catch((err) => {
      onParseErr(err);
    });
  }

  parse = () => {
    const { cheerio } = this.instance;
    const { hideRules, customRules } = this.option;
    const allRules = rules.concat(customRules);
    const result = [];

    allRules.forEach((rule, index) => {
      if (hideRules.some(hideIndex => hideIndex === index)) {
        return;
      }

      const { selector, checker, output } = rule;
      const query = cheerio(selector);
      const checkResult = checker(query);

      if (checkResult[0]) {
        result.push(output.replace('{0}', checkResult[1]));
      };
    });

    return result;
  }
}