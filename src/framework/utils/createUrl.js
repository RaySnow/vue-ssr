import qs from 'qs';

/**
 * 创建一个地址附带查询参数
 * @param  {String} baseUrl 基础地址
 * @param  {Object} params  key-value 对象,选填
 * @return {void}
 */
export default function createUrl(baseUrl, params) {
    const paramsStr = qs.stringify(params || {});
    if (!paramsStr) {
        return baseUrl;
    }

    let subStr = '';
    // 没有问号
    if (baseUrl.lastIndexOf('?') === -1) {
        subStr = '?';
    } else {
        // 最后一个字符
        const lastChar = baseUrl.slice(-1);
        // 如果最后接在最后一个字符不是是?并且是&加上一个&
        if (lastChar !== '&' && lastChar !== '?') {
            subStr = '&';
        }
    }

    return baseUrl + subStr + paramsStr;
}
