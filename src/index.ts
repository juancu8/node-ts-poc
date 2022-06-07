import express from 'express'
import diaryRouter from '../src/routes/diaries'

const app = express()
app.use(express.json()) // midelware for transform req.body to json format

const PORT = 3000

app.get('/ping', (_, res) => {
  console.log('someone call to ping')
  res.send('call ping')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`)
})
