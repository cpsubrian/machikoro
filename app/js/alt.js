import Alt from 'alt'

const alt = new Alt()

alt.dispatcher.register(console.log.bind(console))

export default alt