run database server
###create database `yourName database`
open Cmd, go to directory `./server`
### `cd server`
### `npm instal`
open file 
### `server/.env.example`
write your MYSQL_DATABASE `yourName database`, MYSQL_USER nsme, MYSQL_PASSWORD =***
rename file `.env.example` into `.env` and save

use the command in directory ./server to create tables(`admin, category, post`) and fill the data in turn
look at file `./server/scrips/init-db.js` and `./server/scrips/seeds-db.js`
### `npm run init-db`
### `npm run seens-db` 
run our server backend in directory `./server`
### `npm start`

open new window in Cmd, and do to directory `./client`
### `cd client`
### `npm instal`
run
### `npm start`


server is run on port `8080`


TO DO - migration