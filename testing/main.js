var ez = require('../index')

console.log(ez('#meme'));
ez('#meme').css('height', '100%')
ez('#meme').css('background', 'red')
ez('#meme').on('click', () => {
  console.log('clik lel')
})
