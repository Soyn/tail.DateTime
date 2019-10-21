/*
 |  tail.datetime - The vanilla way to select dates and times!
 |  @file       ./langs/tail.datetime-de.js
 |  @author     SamBrishes <sam@pytes.net>
 |  @version    0.4.14 - Beta
 |
 |  @website    https://github.com/pytesNET/tail.DateTime
 |  @license    X11 / MIT License
 |  @copyright  Copyright © 2018 - 2019 SamBrishes, pytesNET <info@pytes.net>
 */
/*
 |  Translator:     Hom
 |  GitHub:         https://github.com/pytesNET/tail.DateTime/pull/85
 */
;(function(factory){
   if(typeof(define) == "function" && define.amd){
       define(function(){
           return function(datetime){ factory(datetime); };
       });
   } else {
       if(typeof(window.tail) != "undefined" && window.tail.DateTime){
           factory(window.tail.DateTime);
       }
   }
}(function(datetime){
    datetime.strings.register("zh_Hans", {
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        days:   ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        shorts: ["日", "一", "二", "三", "四", "五", "六"],
        time:   ["时", "分", "秒"],
        header: ["选取月份", "选取年份", "选取年代", "选取时间"]
    });
    return datetime;
}));
