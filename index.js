#! /usr/bin/env node
// Good to start: https://www.sitepoint.com/google-zx-write-node-shell-scripts/
import { $, chalk } from "zx";

$.verbose = false;

const output = (await $`ls`).stdout.trim();

console.log(chalk.blue(output));
