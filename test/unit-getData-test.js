import 'babel-polyfill';
import { getData, saveFile } from '../Libs/getData';
const assert = require('assert');

describe('getData libs', function () {
  it('getData url', function () {
    const url = 'https://www.google.com.tw/';
    const wrongUrl = 'https://www.sakgjsakgjkla.com.tw/safsajfkljaf/';
    getData(url).then((html) => {
      const hasHtmlTag = html.indexOf('<html');
      assert.notEqual(hasHtmlTag, -1);
    });

    getData(wrongUrl).catch((err) => {
      assert.notEqual(err, undefined);
    });
  });

  it('getData local file', function () {
    const path = './example/test.html';
    const wrongPath = './example/xxx.html';
    getData(path).then((html) => {
      const hasHtmlTag = html.indexOf('<html');
      assert.notEqual(hasHtmlTag, -1);
    });

    getData(path).catch((err) => {
      assert.notEqual(err, undefined);
    });
  });

  it('saveFile', function () {
    const path = 'asf:/asf/adf/index.html';
    const content = 'content';

    saveFile(path, content).catch((err) => {
      assert.notEqual(err, undefined);
    });
  });
});