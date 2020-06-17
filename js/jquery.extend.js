/*
 * Copyright (c) 2020. 唐江华 All rights reserved.
 */

(function (window, $) {
    /**
     * 序列化form表单的参数为json格式
     */
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
    /**
     * 序列化form表单的参数为getParam格式
     */
    $.fn.serializeGetParam = function () {
        var serializeObj = "";
        var array = this.serializeArray();
        $(array).each(
            function () {
                    serializeObj += "&" + this.name + "=" + this.value.trim();
            });
        return serializeObj;
    };
})(window, jQuery);