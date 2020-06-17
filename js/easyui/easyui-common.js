/*Copyright (c) 2020. 唐江华 All rights reserved*/
function show(title,msg){
    $.messager.show({
        title:title,
        msg:msg,
        showType:'show'
    });
}
function slide(title,msg,timeout){
    $.messager.show({
        title:title,
        msg:msg,
        timeout:timeout,
        showType:'slide'
    });
}
function fade(title,msg,timeout){
    $.messager.show({
        title:title,
        msg:msg,
        timeout:timeout,
        showType:'fade'
    });
}
function progress(title,msg,timeout){
     $.messager.progress({
        title:title,
        msg:msg
    });
    setTimeout(function(){
        $.messager.progress('close');
    },timeout)
}