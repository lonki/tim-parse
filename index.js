#!/usr/bin/env node

/**
 * Module dependencies.
 */

import program from 'commander';
import Core from './Libs/core';

program
  .version('1.0.0')
  .command('parse <url> [path]')
  .action((url, path) => {
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
  });

program.parse(process.argv);