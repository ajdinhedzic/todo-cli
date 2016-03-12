#!/usr/bin/env node
var program = require ('commander');
var fs = require('fs');

var file = 'todo.json';
var list = JSON.parse(fs.readFileSync(file, 'utf8'));

program
	.version('0.0.1')
	.option('-a, --add <item>', 'add item to list', function(item){
		list.push(item);
	})
	.parse(process.argv);

fs.writeFile(file, JSON.stringify(list), 'utf8');