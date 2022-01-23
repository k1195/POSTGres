const express = require('express')
const app = express()
const port = 3000
app.use(express.json());




require('./seq')
require('./middleware/redi')
app.use(require('./routes/user'))
app.use(require('./routes/order'))
app.use(require('./routes/contact'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

