const sharp = require('sharp')
sharp('src/test.png')
  // .resize(
  //   200,//width
  //   200,//height
  //   {
  //     fit: 'contain',
  //     position: 'left',
  //     background: `red`,
  //     //withoutReduction: true
  //   }
  // )
  // .extend({
  //   top: 10,
  //   bottom: 20,
  //   left: 10,
  //   right: 10,
  //   background: { r: 0, g: 0, b: 0, alpha: .5 }
  // })

  /* .extract({ //crop
    left: 40,//push from right
    top: 40,// push from bottom
    width: 1200 - 80,
    height: 1200 -105
  }) */

  //.trim(30) //crop img by border?margin width10Ⓓ

  .jpeg({
    quality: 50, //80d 0~100
    progressive: true, //falseⒹ
    chromaSubsampling: '4:2:0',//'4:4:4' '4:2:0'
    optimizeCoding: true, //trueⒹ
    trellisQuantisation: false,
    overshootDeringing: false,
    optimizeScans: false,
    quantizationTable: 0, //integer 0d~8
    mozjpeg: true, //falseⒹ {trellisQuantisation: true, overshootDeringing: true, optimiseScans: true, quantisationTable: 3}
    force: true //trueⒹ format
  })
  .avif({
    quality: 50, //80d
    lossless: false, //falseⒹ
    effort: 0, //0fastest~6slowest 4d cpu's
    chromaSubsampling: '4:2:0'//'4:4:4' '4:2:0'
  })
  .png({
    quality: 50, //0~100d
    colors: 256, //256d
    compressionLevel: 9, //0fastLarg~9slowSmall 6d
    palette: true, //falseⒹ alpha
    progressive: false, //falseⒹ
    adaptiveFiltering: false, //falseⒹ
    effort: 1, //1~10 7d
    dither: 1.0, //1.0d
    force: true, //trueⒹ
  })
  .webp({
    quality: 50, //80d
    alphaQuality: 80, //0~100d
    lossless: false, //falseⒹ
    nearLossless: false, //falseⒹ
    smartSubsample: false, //falseⒹ high quality chroma
    effort: 0, //0fastest~6slowest 4d cpu's
    loop: 0, //0d infinity # times animation frames
    delay: 0, //animation ms between frames
    force: true //trueⒹ format
  })

  //  .extend({ left: 553, right: 553, top: 816, bottom: 816 , background: {r:0,g:0,b:0,alpha:0}})
  //   .composite([ //sprite
  //     {
  //       input: 'src/assets/_red.png',
  //       gravity: 'east' //position side(north|east|south|west|centreⒹ) corner(northwest|...)
  //     }, {
  //       input: 'src/assets/_magenta.png',
  //       gravity: 'west'
  //     }, {
  //       input: 'src/assets/_green.png',
  //       gravity: 'northwest'
  //     }, {
  //       input: 'src/assets/_cyan.png',
  //       gravity: 'south'
  //     },
  //   ])


  //.rotate(180)
  //.flip()//flip→y-axis
  //.flop()//flip→x-axis
  //.blur(15)
  //.flatten({background:'#333'})// ramove alpha channel
  //.gamma()//1~3 2.2Ⓓ blackness
  //.negate()//??
  //.normalise()
  //.clahe({ width: 40, height: 40 })// brighten dark detailes
  //.linear()//?
  
  /* .modulate({
     brightness: .8,
     //saturation: 2,
     //hue: 270,
     lightness: 1
  }) */

  //.grayscale()

  //.toFormat('webp')
  //.toBuffer()//same formate
  .toFile('dist/')


  .then(() => console.log('Hi😎UniParse😄 I\'m done.'))