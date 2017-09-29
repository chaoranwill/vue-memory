import map from 'lodash/map'

const imgList = [{
    id: 1,
    title: '向左走，向右走',
    info: '他们彼此深信，是瞬间迸发的热情让他们相遇。这样的确定是美丽的，但变幻无常更为美丽。',
    date: '',
    file: require('@/assets/memory/1.jpg')
  },
  {
    id: 2,
    title: '孤独的映像馆',
    info: '看了一场看不懂的电影，四处张望，发现别人专注而陶醉，才忽然明白　孤独是什么。',
    date: '',
    file: require('@/assets/memory/2.jpg')
  },
  {
    id: 3,
    title: '懒人的愿望',
    info: '你一定要走吗？可不可以休息一下。像我一样，偶尔睡个懒觉，偶尔发呆，偶尔出错',
    date: '',
    file: require('@/assets/memory/3.jpg')
  },
  {
    id: 4,
    title: '地下铁',
    info: '你固定在哪一站上车? 在哪一站下车?车站中的人群总是这么来去匆匆。有人会在地下铁的出口等你吗?',
    date: '',
    file: require('@/assets/memory/4.jpg')
  },
  {
    id: 5,

    title: '我的心中每天开出一朵花',
    info: '总在快乐的时候，感到微微的惶恐.在开怀大笑时，留下感动的泪水.我无法相信单纯的幸福.对人生的起伏悲喜，既坦然又不安',
    date: '',
    file: require('@/assets/memory/5.jpg')
  },
  {
    id: 6,
    title: '照相本子',
    info: '后来，我们甚至不再说话了，不再睁开眼睛，不再在乎对方在做什么，想什么',
    date: '',
    file: require('@/assets/memory/6.jpg')
  },
  {
    id: 7,
    title: '我梦游你梦游',
    info: '我喜欢四十五度的靠着你，不论在世界的任何角落。在即将九十度坠落前，请用一百八十度温柔地抱抱我',
    date: '',
    file: require('@/assets/memory/7.jpg')
  },
  {
    id: 8,
    title: '',
    info: '我只能为你画一张小卡片',
    date: '',
    file: require('@/assets/memory/8.jpg')
  },
  {
    id: 9,
    title: '',
    info: '月亮忘记了',
    date: '',
    file: require('@/assets/memory/9.jpg')
  },
  {
    id: 10,
    title: '',
    info: '和你一起的记忆，玩呀玩',
    date: '2016/01/01',
    file: require('@/assets/memory/10.jpg')
  },
  {
    id: 11,
    title: '',
    info: '和你一起的记忆，玩呀玩',
    date: '2016/01/01',
    file: require('@/assets/memory/11.jpg')
  }
]

function getImgList() {
  return map(imgList, (img, index) => {
    var { id, title, info, date, file } = img
    return {
      id,
      title,
      info,
      date,
      file
    }
  })
}

export {
  getImgList
}
