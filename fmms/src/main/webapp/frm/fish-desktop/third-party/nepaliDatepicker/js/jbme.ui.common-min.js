function isDate(i){i=i.replace(/(^\s*)|(\s*$)/g,"");var g=/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;var e=/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2})$/;var b=/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;var f=i.match(g);var c=i.match(e);var a=i.match(b);if(f){r=f}else{if(c){r=c;r[7]="00"}else{if(a){r=a;r[5]=r[6]=r[7]="00"}else{return false}}}var h=new Date(r[1],r[3]-1,r[4],r[5],r[6],r[7]);return(h.getFullYear()==r[1]&&(h.getMonth()+1)==r[3]&&h.getDate()==r[4]&&h.getHours()==r[5]&&h.getMinutes()==r[6]&&h.getSeconds()==r[7])}function btnAct(){var a=arguments;var d=a[0];if(d.className.indexOf("_disable")>0){return false}if(a[1]){var e=a[1];if(a.length>2){var c=new Array();for(var b=2;b<a.length;b++){c.push(a[b])}e.apply(this,c)}else{e()}}}function btnOver(a){a.className=a.className.replace("_normal","_over")}function btnOut(a){a.className=a.className.replace("_over","_normal")}function btnDown(a){a.className=a.className.replace("_over","_on")}function btnUp(a){a.className=a.className.replace("_on","_over")}function btnDisable(b){var a=document.getElementById(b);a.className=a.className.replace("_normal","_disabled")}function btnEnable(b){var a=document.getElementById(b);a.className=a.className.replace("_disabled","_normal")}function forwardUrl(a){location.href=a}function formItemFocus(a){a.className=a.className.replace("_normal","_focus")}function formItemBlur(a){a.className=a.className.replace("_focus","_normal")}function searchInpFocus(b){var a=$(b).closest(".search_div");a.addClass("search_div_focus")}function searchInpBlur(b){var a=$(b).closest(".search_div");a.removeClass("search_div_focus")}function startCheckForm(b){var a;if(b){a=$("#"+b).find("span.vlist_validate_info")}else{a=$("span.vlist_validate_info")}a.each(function(c){$(this).removeClass("vlist_validate_ok");$(this).removeClass("vlist_validate_error");$(this).html("&nbsp;")})}function showFormError(d,e){var b=$("[name="+d+"]");var a=b.closest(".vlist_form");var c=a.find("span.vlist_validate_info");c.removeClass("vlist_validate_ok");c.addClass("vlist_validate_error");c.html(e)}function showFormSuccess(d){var b=$("[name="+d+"]");var a=b.closest(".vlist_form");var c=a.find("span.vlist_validate_info");c.removeClass("vlist_validate_error");c.addClass("vlist_validate_ok");c.html("&nbsp;")}function createErrorForm(a){var b="<form method='post' name='errFm' id='errFm' action='"+a+"'>";b+="<input type='hidden' name='errorInfo' id='errorInfo' value='' />";b+="<input type='hidden' name='errorReason' id='errorReason' value='' />";b+="<input type='hidden' name='errorRepairAdvice' id='errorRepairAdvice' value='' />";b+="<input type='hidden' name='errorDetail' id='errorDetail' value='' />";b+="</form>";document.write(b)}function saveErrorMessage(f,e,b,c){if(document.getElementById("errorInfo")&&f){var h=document.getElementById("errorInfo");h.value=f}if(document.getElementById("errorReason")&&e){var a=document.getElementById("errorReason");a.value=e}if(document.getElementById("errorRepairAdvice")&&b){var g=document.getElementById("errorRepairAdvice");g.value=b}if(document.getElementById("errorDetail")&&c){var d=document.getElementById("errorDetail");d.value=c}}function submitError(){var a=document.getElementById("errFm");a.submit()}function editableSelect(a){var c=$(a);var b=c.parent().next().find("input:eq(0)");b.val(c.val())}function browseBtnOver(c){var b=$(c);var d=b.next();var a=d.attr("class");a=a.replace("_normal","_over");d.attr("class",a)}function browseBtnOut(c){var b=$(c);var d=b.next();var a=d.attr("class");a=a.replace("_over","_normal");d.attr("class",a)}function checkIP(e,c){if(""==e.value){return}var a=/^(([\d]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([\d]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([\d]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([\d]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))$/;var b=e.value;var d=a.test(b);if(d){showFormSuccess(e.name)}else{showFormError(e.name,c)}}function checkNum(c,g,h){if(""==c.value){return}var d=parseInt(c.value);var b=/^-?[0-9]*/;var f=/-?[0-9]*$/;var a=g.match(b);var e=g.match(f);var i=true;if(a&&""!=a&&d<a){i=false}if(e&&""!=e&&d>e){i=false}if(i){showFormSuccess(c.name)}else{showFormError(c.name,h)}}function checkInput(b){var a=$.browser.mozilla?b.which:b.keyCode;if((a<48||a>57)&&a!=46&&a!=45&&a!=8&&a!=0){return false}}function _successCallBack(a,c,b){$("#extendCache").html("");$("#extendCache").html(a);if($("#isAjaxError").val()!=undefined){$.popwin.modelessDom("ERRORINFO","extendCache",400,300);return}}function _beforeSubmitCallBack(a,b){}function _completeCallBack(a,c,b){}function _beforeSendCallBack(a,b){a.setRequestHeader("isAjax","true")}function _dataFilterCallBack(b,a,c){return b}function _errorCallBack(a,d,c,b){}function showDetails(c,a){var b=$("#"+c);if(a){b.css("display","block")}else{b.css("display","none")}}function readData(d,b,a){var f=$("#"+d);var c=$("#"+b);var e=0;if(a){clearTimeout(e);c.css("display","none");f.css("display","block");e=setTimeout(function(){c.css("display","block");f.css("display","none")},500)}else{f.css("display","none")}}function showDebugInfo(b){var a=top.document.getElementById("loginInfo");if(a){if(top.document.getElementById("debugContainer")){top.document.getElementById("debugContainer").innerHTML=b}else{a.innerHTML+="<span id='debugContainer' style='padding: 0px 0px 0px 200px; line-height: 20px; color: #ff0000;'>"+b+"</span>"}}}function hideDebugInfo(){if(top.document.getElementById("debugContainer")){top.document.getElementById("debugContainer").innerHTML=""}}function toggle(a){$("#"+a).toggle()}function tof(b){var a;switch(b){case null:a="null";break;case undefined:a="undefined";break;default:a=b.nodeName||Object.prototype.toString.call(b).match(/object\s(\w+)/)[1];if(!!b.constructor&&a.toLowerCase()==="object"){a=b.constructor.toString().match(/^\s*function\s(\w+)/)[1]}break}return a.toLowerCase()}function mouseX(a){return a.pageX||(a.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft))}function mouseY(a){return a.pageY||(a.clientY+(document.documentElement.scrollTop||document.body.scrollTop))};