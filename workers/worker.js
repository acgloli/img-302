export default {
  async fetch(request, env) {
    return await handleRequest(request)
  }
}

async function handleRequest(request) {
  // 随机选择一个 URL
  var urls = [
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/9c03a20b4521b2f31cb2543996b5945d.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/685ca17c714cf432e203562359f23212.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/a27f42563f7532ab7f2de33e9c648097.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/81a943654320d4ea5ede78b49125606c.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/66f572869d432c2411efa1bbc0785496.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/2b749960251bd25ac28263683e8e73a6.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/ab19f9d4d2ec00dd177fa92d9024e384.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/2bc200475f30ba0ab10dbc90ab4f65e5.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/9e018680858241172645f1487c616110.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/df07d80900f6ea0effe9bd4a5e44d5e4.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/3aa56ff8e0bb89398e6e15b9b375b8a5.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/d6b735619031c6c1aabbd9670cce06d9.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/752f08499b06fa12502e714e5ae362ce.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/57fe4eef1aae0a4d8498f405e5123d1d.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/72007c14bb5a58f592e4cbe1ba4ebb7f.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/29a2f16d178bf16781d930809c115fca.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/db05e6838509b71872af278995c9a3c2.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/b34732744fdaee38a8bb68b3eaaefd25.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/df39b5d4841b45b34170b82a7101f6f0.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/769dc8c94e03009cbbd67a5b842515c6.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/ba76c7acd4088a16bc89cdb4a194a5c8.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/dcb125c0b973e560b19c4428f1938d93.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/449408e53da10d5196e7d18b362030a1.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/0a36182e2187bc23cbab463853eb7426.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/831ea7ad63fe014c0369a5248dc3164b.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/e6fdd435a799cfc4f754a69e6ef34baf.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/1cc0d8cd9cf307122a67b0eeaa6a56b6.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/e8a8fb2861360e7d81042e754de8aac3.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/623c3bc4c60122de7264f26f7c3c441b.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/a13889d5e592faffe5f425b5ce374302.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/c595e1c5066c72ac4cc14bd6a7e16cc7.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/1b30c21ddb26b44217180d5467125679.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/4d55519cb3880d4c06a5fbd5a111ea54.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/f5f250633dbaacc77040f9e6da7bf23e.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/a867b25daccb3688c080569c51a32764.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/109b89803991cc5e3ab000ef36bad6a6.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/cca9b22800e2adbee91d0dbc2cf7b766.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/a01ce850c2928ac37ed5be940a5a6752.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/09f89b026953f5761dca97ba0bc52ea0.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/187f5559a89ee092322e838bd08ea0b0.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/897a4fa083d0fbfaaacedd59b6f53c95.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/6361be70ead70b67f655cdab38c09979.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/18254fefe42d5e256937c11933d51cca.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/89b06e0414f047a9fec1aa29e4bc3f44.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/4ce5ddcf96eb73bb6d4c842ade6bc4d4.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/6c8f0d0aa457e3ecd3729cd0b678915b.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/932c9e49fe94305292ee801ae7477f09.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/e9868b4990af0237fa6b22ec91baf978.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/fcfcc68a2ed24133028f47a59a4a0235.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/fd9e23d7b8db73d5094dcb209eac8017.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/979552495f022daf50db4b0b54d6327d.jpg',
'https://store.heytapimage.com/cdo-portal/feedback/202312/07/9847ea0999bd5a4c8a7fc929127b0809.jpg',
];
  var index = Math.floor(Math.random() * urls.length);
  var url = urls[index];
  // 返回302重定向的响应对象
  return Response.redirect(url, 302)
}