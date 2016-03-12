#!/usr/bin/env node
var program = require ('commander');
var fs = require('fs');

var file = 'todo.json';
var list = JSON.parse(fs.readFileSync(file, 'utf8'));

program
	.command('add <item>')
	.description('Add a todo item to the existing list')
	.action(function(item){
		console.log("adding item: %s", item);
		list.push(item);
	})

program
	.command('remove <index>')
	.description('remove item at index, 0 based')
	.action(function(index){
		list.splice(index, 1);
	})

program.parse(process.argv);

fs.writeFile(file, JSON.stringify(list), 'utf8');

console.log(list);