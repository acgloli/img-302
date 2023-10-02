exports.handler = async function(event, context) {
  // 随机选择一个 URL
  var urls = [
    'https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/large/ec89ee29ly1hbo201voemj21hc0u0h7e.jpg',
    'https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/large/ec89ee29ly1hbo202ykydj21hc0u0kjl.jpg',
  ];
  var index = Math.floor(Math.random() * urls.length);
  var url = urls[index];

  // 返回302重定向
  return {
    statusCode: 302,
    headers: {
      Location: url,
    }
  };
};
