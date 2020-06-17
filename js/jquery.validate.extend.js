/* Copyright (c) 2019. 唐江华 All rights reserved. */
/**
 * 验证是否为中国的手机号
 */
jQuery.validator.addMethod("phoneCN", function (value) {
    return /^((\+?86)?1)[3456789]\d{9}$/.test(value);
},"请输入正确的手机号.");
/**
 * 验证是否为中国的固话
 */
jQuery.validator.addMethod("fixedPhoneCN", function (value) {
    return /^(\d{3,4}-)?\d{7,8}$/.test(value);
},"请输入正确的固定电话号码.");
/**
 * 4-20位数字或字母或"_"或“-”
 */
jQuery.validator.addMethod("loginIdExist", function (value) {
    return /^(\w|\-){4,20}$/.test(value);
}, "4-20位数字或字母或\"_\"或“-”");