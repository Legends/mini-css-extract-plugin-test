//  import * as $ from "jquery"
import * as myapp from "./myapp"
 
 var $ = require("jquery");

 
var $body = $("body");
var $p = $("<p>hi</p>");

$body.append($p);

//  try {
//      debugger;
//     let a = new myapp(11,"Johan");
//     a.say();
//     var p =  a.test();
//     p.then(()=>{$p.text("success");}).catch(()=>{$p.text("fail");});
//  } catch (e) {
//      console.error(e);
//  }
