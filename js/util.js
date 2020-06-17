/* Copyright (c) 2019. 唐江华 All rights reserved. */

function isEmpty(str) {
    return str==null || str == '';
}

function isNotEmpty(str) {
    return !isEmpty(str);
}



/**
 * 判断两个日期间隔是否超过一个月
 * @param a
 * @param b
 * @returns {boolean}
 */
function overMonth(a, b) {
    var dateA = parseDate(a);
    var dateB = parseDate(b);
    if (dateA == null || dateB == null) {
        return false;
    }
    // 进行日期比较
    if (Math.abs(dateA.getTime() - dateB.getTime()) > 1000 * 60 * 60 * 24 * 31) {
        return true;
    } else {
        return false;
    }
}

/**
 * 将日期字符解析为日期
 * @param str
 * @returns {Date}
 */
function parseDate(str) {
    var regex = /^\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}:\d{1,2}$/;
    var regex2 = /^\d{4}-\d{1,2}-\d{1,2}}$/;
    if (regex.test(str)) {
        var arr = str.split(" ");
        var arr0 = arr[0].split("-");
        var arr1 = arr[1].split(":");
        return new Date(Number(arr0[0]), Number(arr0[1]), Number(arr0[2]), Number(arr1[0]), Number(arr1[1]), Number(arr1[2]));
    } else if (regex2.test(str)) {
        var arr = str.split("-");
        return new Date(Number(arr0[0]), Number(arr0[1]), Number(arr0[2]), 0, 0, 0);
    }
    return null;
}