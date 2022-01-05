import config from '../../config/config.json';

export default function SetQueryString(endPoint, condition) {
  let targetUrl = config.BASE_URL + endPoint;

  condition.forEach(item => {
    const { category, value } = item;
    const replaceValueByType =
      typeof value === 'object' ? '[' + value + ']' : value;
    targetUrl += '&' + category + '=' + replaceValueByType;
  });

  return targetUrl;
}
