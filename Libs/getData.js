const request = require('request');
const fs = require("fs");

const getDataFromUrl = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (!err) {
        resolve(body);
      } else {
        reject(err);
      }
    })
  });
};

const getDataFromLocalFile = (url) => {
  return new Promise((resolve, reject) => {
    fs.readFile(url, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const writeFile = (path, content) => {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFileSync(path, content, {encoding:'utf8',flag:'w'});
    } catch (err) {
      reject(err);
    }
  });
}

const isURL = (str) => {
  return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(str); 
}

export async function getData(url) {
  let data = '';
  if (isURL(url)) {
    data = await getDataFromUrl(url);
  } else {
    data = await getDataFromLocalFile(url);
  }
  return data;
}

export async function saveFile(path, content) {
  const data = await writeFile(path, content);
  return data;
}