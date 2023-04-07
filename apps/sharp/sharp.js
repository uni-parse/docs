const sharp = require('sharp')
const fs = require('node:fs')

const
  src = './src/',
  dist = './dist/'

fs.mkdir(dist, () => { })

const imgs = fs.readdirSync(src).filter(label =>
  label.endsWith('.png')
  || label.endsWith('.jpg')
  || label.endsWith('.jpeg')
)

let imgsCount = 0

const promises = imgs.reduce((p, img) => p.add(sharp(src + img)
  .png({
    quality: 50, //0~100d
    colors: 256, //256d
    compressionLevel: 9, //0fastLarg~9slowSmall 6d
    palette: true, //falseⒹ alpha
    progressive: false, //falseⒹ
    adaptiveFiltering: false, //falseⒹ
    effort: 1, //1~10 7d
    dither: 1.0, //1.0d
    force: false, //trueⒹ
  })
  .jpeg({
    quality: 50, //80d 0~100
    progressive: false, //falseⒹ
    chromaSubsampling: '4:2:0',//'4:4:4' '4:2:0'
    optimizeCoding: true, //trueⒹ
    trellisQuantisation: false,
    overshootDeringing: false,
    optimizeScans: false,
    quantizationTable: 0, //integer 0d~8
    mozjpeg: true, //falseⒹ {trellisQuantisation: true, overshootDeringing: true, optimiseScans: true, quantisationTable: 3}
    force: false //trueⒹ format
  })
  .toFile(dist + img)
  .then(({ size }) => {
    console.log(
      img + ' ' + getOrgSizeStr(img) + ' → ' + size2str(size)
    )
    imgsCount++
    return size
  })
), new Set())

//log total size opt
const orgSize = imgs.reduce((prev, img) =>
  prev + fs.statSync(src + img).size, 0)

Promise.all(promises).then(sizes => {
  newSize = sizes.reduce((prev, size) => prev + size, 0)
  console.log(
    '______________done___________________' + '\n'
    + 'total: '
    + '(' + imgsCount + ' img' + (imgsCount < 10 ? 's' : '') + ') '
    + size2str(orgSize) + ' → ' + size2str(newSize)
  )
})



//helpers
function getOrgSizeStr(img) {
  return size2str(fs.statSync(src + img).size)
}
function size2str(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes'

  const
    k = 1024,
    dm = decimals < 0 ? 0 : decimals,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
