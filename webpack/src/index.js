import css from './css/main.css';
import sass from "./css/index.scss";
import $ from 'jquery';
let a = 10;
let json = require('../author.json');
var oBox = document.querySelector('#box');
oBox.innerHTML = "姓名:"+json.name;
$(".div1").html("jquery");