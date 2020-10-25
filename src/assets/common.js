/* *
 *  @Description 复制文本
 *  @Author 284668461@qq.com
 *  @Date
 * */
module.exports.copyText = (function (id) {

    let input = document.getElementById(id);

    input.focus();
    if (input.setSelectionRange)
        input.setSelectionRange(0, input.value.length);//获取光标起始位置到结束位置
    else
        input.select();
    try {
        var flag = document.execCommand("copy");//执行复制
    } catch (eo) {
        var flag = false;
    }

    return flag;
});


