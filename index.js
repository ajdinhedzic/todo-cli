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
	.option('-l, --list', 'shows all items in the list', function(){
		console.log(list);
	})
	.option('-r, --remove <index>', 'remove item at index, 0 based', function(index){
		list.splice(index, 1);
	})
	.parse(process.argv);

fs.writeFile(file, JSON.stringify(list), 'utf8');

console.log(list);