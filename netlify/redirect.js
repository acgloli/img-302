exports.handler = async function(event, context) {
  // 随机选择一个 URL
  var urls = [
	'https://p0.meituan.net/csc/e4e4bc56af8ec77bd7e3525fcb48ca951305707.jpg',
	'https://p1.meituan.net/csc/b22a909c31bb4f02418f25c800094c57493612.jpg',
	'https://p0.meituan.net/csc/c7044d1786dfc6e8add2ce94fa4cf8d3394831.jpg',
	'https://p0.meituan.net/csc/e5f3b5df4f2b3b082d8cf09f5478e83c1551695.jpg',
	'https://p0.meituan.net/csc/a986ebd3fe01d4005be50d0e1eeb10f63731423.jpg',
	'https://p0.meituan.net/csc/e09bb28ad1503035d841350c8d8a5c5a3778966.jpg',
	'https://p0.meituan.net/csc/145cf467e5426c776c1b4803230517cf468390.jpg',
	'https://p0.meituan.net/csc/c14e25263529479a7636179bfbcf51251099132.jpg',
	'https://p0.meituan.net/csc/b365d109ec8b194c786a2edaed3a4860541484.jpg',
	'https://p0.meituan.net/csc/1209960712acc031fad44976bdca0a12733945.jpg',
	'https://p0.meituan.net/csc/a97f40deeab0651410fa393ec57d54e31163050.jpg',
	'https://p0.meituan.net/csc/9f362f4bff627a7d51eb9b788225ca26893513.jpg',
	'https://p0.meituan.net/csc/7118972789a2329ca675eee52270cb61557279.jpg',
	'https://p1.meituan.net/csc/ed3b27bb9db422886de937d261211651584835.jpg',
	'https://p0.meituan.net/csc/15cfe9d53f572c271c507c60a1acce3d761599.jpg',
	'https://p0.meituan.net/csc/609e309a21d1ebdf16782b1bdc2131351436024.jpg',
	'https://p1.meituan.net/csc/a850e99162947186552f579a624ba389639515.jpg',
	'https://p0.meituan.net/csc/b41ee5326ec31715fe497fad46bb58a2797316.jpg',
	'https://p0.meituan.net/csc/90cc0fb7cd3e76f61e941e27d04ccc72538624.jpg',
	'https://p1.meituan.net/csc/0d4d90fe3d11b2035e53b86a7e5733cd1039409.jpg',
	'https://p1.meituan.net/csc/e31c0921e91369f48ec1a3225541aa07692402.jpg',
	'https://p0.meituan.net/csc/1e2ccf9f6dd6d07340d10eb90a457915188571.jpg',
	'https://p1.meituan.net/csc/dd5b61cdbbe43d90d392a58f587aeff2581759.jpg',
	'https://p1.meituan.net/csc/dd04d08cf393e48dd0776b79a9dd5adf454613.jpg',
	'https://p1.meituan.net/csc/2f990735d46906af10fb8bd65834e669309503.jpg',
	'https://p0.meituan.net/csc/97830431dedd73823395eee409eab4ae840120.jpg',
	'https://p0.meituan.net/csc/36c5c329d9e03899f3fbc576d24a010d2421355.jpg',
	'https://p0.meituan.net/csc/06353e57610ba5aed9e69a5a8e4920c7963789.jpg',
	'https://p0.meituan.net/csc/570e1be09a40cbd8379f4a32f249b60f658627.jpg',
	'https://p0.meituan.net/csc/8bcc56c110c456fab3126af0b3e93ff81203888.jpg',
	'https://p0.meituan.net/csc/3d769eb433219587f0aafe5f1b1976fc412882.jpg',
	'https://p1.meituan.net/csc/ca0db45b5a29406e949103bd57a58ec51750022.jpg',
	'https://p0.meituan.net/csc/228e668cb2ef1096324b030a7a5cb0d4930834.jpg',
	'https://p0.meituan.net/csc/0a2a94059c9b062cd1a6d3c69e3ec27c641298.jpg',
	'https://p0.meituan.net/csc/05ec4bf02b68c729e75a0d96f93c127c328983.jpg',
	'https://p0.meituan.net/csc/349d59b855c81ba16820921adf551dd01950633.jpg',
	'https://p0.meituan.net/csc/0e62242b84604de0778f15569de84afa537199.jpg',
	'https://p0.meituan.net/csc/c797666d6d5f7a4d4f331c82247fb0f41647358.jpg',
	'https://p1.meituan.net/csc/b810b700b185d79b6c351116cf5ea6a6382368.jpg',
	'https://p0.meituan.net/csc/b8c80c4862d298b9d44bc2fac2e3fef51881078.jpg',
	'https://p0.meituan.net/csc/34ca387d0eb1aefa4d0d4a47cbde8d4a1636971.jpg',
	'https://p0.meituan.net/csc/ac9f5741cccad13e534179dc407bb23c6219873.jpg',
	'https://p0.meituan.net/csc/de694031c95e8ca164ba9d04198a16c0215903.jpg',
	'https://p0.meituan.net/csc/24e23fe0276a2837940845015df874a1678481.jpg',
	'https://p1.meituan.net/csc/637938c5a983cf651a14eec8c44213037161478.jpg',
	'https://p0.meituan.net/csc/851df2485d26011ba63284f6c3a199562776700.jpg',
	'https://p0.meituan.net/csc/cf01e3a659af106537bee9b3099f10ca1460483.jpg',
	'https://p0.meituan.net/csc/b90d0b7ce76335fec64d8fd544eaae36329581.jpg',
	'https://p0.meituan.net/csc/97e2e56bfacfe7f1a1ad621eb61292231354553.jpg',
	'https://p0.meituan.net/csc/cc06d578b5f60531d18e0f4b4412cb452064589.jpg',
	'https://p0.meituan.net/csc/768d2ff5058388a1bf9049d5a84c542c323924.jpg',
	'https://p1.meituan.net/csc/bdb16e48648f6b66b4efb1be9a7a526a1357694.jpg',
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
