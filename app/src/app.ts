/// <reference path="./nativescript.d.ts"/>
import application = require("application");

application.mainModule = "./bin/views/main";
application.cssFile = './bin/styles/app.css';
application.start();