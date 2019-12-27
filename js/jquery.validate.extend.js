/* Copyright (c) 2019. 唐江华 All rights reserved. */

/**
 * 验证是否为中国的手机号
 */
jQuery.validator.addMethod("phoneCN", function (value) {
    return /^1[3456789]\d{9}$/.test(value);
}, "请输入正确的手机号.");

/**
 * 序列化form表单的参数为json格式
 */
(function (window, $) {
    $.fn.serializeJson = function () {
        var serializeObj = {};
        var array = this.serializeArray();
        $(array).each(
            function () {
                if (serializeObj[this.name]) {
                    if ($.isArray(serializeObj[this.name])) {
                        serializeObj[this.name].push(this.value);
                    } else {
                        serializeObj[this.name] = [
                            serializeObj[this.name], this.value];
                    }
                } else {
                    serializeObj[this.name] = this.value;
                }
            });
        return serializeObj;
    };
})(window, jQuery);