exports.handler = async function(event, context) {
  // 随机选择一个 URL
  var urls = [
	'https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/large/ec89ee29ly1hbo201voemj21hc0u0h7e.jpg',
	'https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/large/ec89ee29ly1hbo202ykydj21hc0u0kjl.jpg',
	'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/ec89ee29ly1hbo2049hx1j21hc0u0e81.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo205pxtlj21hc0u01k0.jpg',
	'https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/large/ec89ee29ly1hbo206hcrqj2210154tmo.jpg',
	'https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/large/ec89ee29ly1hbo206w5ttj235r1rzait.jpg',
	'https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/large/ec89ee29ly1hbo20g6ytuj25a037zx6t.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo20hjnfjj21j60xo1cf.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo20jwviwj24h135t4qq.jpg',
	'https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/ec89ee29ly1hbo20mmccpj235v28gx6p.jpg',
	'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/ec89ee29ly1hbo20wetovj21z418gqv5.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo20xbk7oj21hc0u0tqv.jpg',
	'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/ec89ee29ly1hbo20ysnzuj21br0vmqv5.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo2111j9mj226u1cu7wi.jpg',
	'https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/large/ec89ee29ly1hbo211uufrj21hc0u0gxx.jpg',
	'https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/ec89ee29ly1hbo214ltjuj22821b81kz.jpg',
	'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/ec89ee29ly1hbo215mmkaj216p0u7npd.jpg',
	'https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/ec89ee29ly1hbo216yjnsj21v20v4qv5.jpg',
	'https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/large/ec89ee29ly1hbo219p9erj21jk13e1kz.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo21dm3ryj22yo202x6s.jpg',
	'https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/large/ec89ee29ly1hbo21fnt4xj216i0u04qq.jpg',
	'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/ec89ee29ly1hbo21i4aedj21jk0xcqv6.jpg',
	'https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/large/ec89ee29ly1hbo21ji604j21jk12wkjl.jpg',
	'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/ec89ee29ly1hbo21ky9akj22ao1mgqv5.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo21pn3naj22r81xlnpg.jpg',
	'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/ec89ee29ly1hbo21tnky1j22yo1o0hdu.jpg',
	'https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/ec89ee29ly1hbo21uqqo6j210e0oe7u8.jpg',
	'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/ec89ee29ly1hbo21x6q1vj22yo1o01ky.jpg',
	'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/ec89ee29ly1hbo21xirqaj21hc0u0td9.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo21zpp0wj21uo1b4b2a.jpg',
	'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/ec89ee29ly1hbo221g6jzj22ci1d0qv5.jpg',
	'https://image.baidu.com/search/down?url=https://tvax4.sinaimg.cn/large/ec89ee29ly1hbo222vwgej20wh0n0b29.jpg',
	'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/ec89ee29ly1hbo229ek1tj21kk1dcu0y.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo22bos3kj21f31044qq.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo22d7w4sj22291aunp2.jpg',
	'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/ec89ee29ly1hbo22g80moj22gw1es7wj.jpg',
	'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/ec89ee29ly1hbo22kj0onj232x28ee82.jpg',
	'https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/ec89ee29ly1hbo22lc2nkj21hc0u0dqg.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo22mf1hoj22381hckjl.jpg',
	'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/ec89ee29ly1hbo22n8khoj22lk1we4qp.jpg',
	'https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/ec89ee29ly1hbo22nml7bj21hc0xck2y.jpg',
	'https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/ec89ee29ly1hbo22pd7ipj226k1jk1kx.jpg',
	'https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/ec89ee29ly1hbo22qo78gj23341uotzv.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo22qygswj21z4140thd.jpg',
	'https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/ec89ee29ly1hbo22rkd2gj218g1qsno5.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo22shunyj225s1i6e81.jpg',
	'https://image.baidu.com/search/down?url=https://tvax3.sinaimg.cn/large/ec89ee29ly1hbo22tp5gwj225s1i6hdt.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo22uaroij21ei0zcar3.jpg',
	'https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/ec89ee29ly1hbo22vlps0j22yo1o01kx.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo22wj2l7j22yo1o0hdt.jpg',
	'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ec89ee29ly1hbo22wu73cj215o0q211e.jpg',
	'https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/large/ec89ee29ly1hbo22x54rij215o0sjdop.jpg',
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
