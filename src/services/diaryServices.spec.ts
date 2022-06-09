import * as diaryServices from '../services/diaryServices'
import diaryData from './mock/diary.json'

describe('Get all entries and all entries without sensitive info', () => {
  test('should retrun all entries', () => {
    const entries = diaryServices.getEntries()
    expect(entries).toEqual(diaryData)
  })

  test('should retrun all entries but without comment prop', () => {
    const entries = diaryServices.getEntriesWithoutSensitiveInfo()
    expect(entries[0]).not.toHaveProperty('comment')
  })
})

describe('Find entry by Id', () => {
  // test('should retrun all entries', async () => {
  //   const entries = diaryServices.getEntries()
  //   expect(entries).toEqual(diaryData)
  // })
})
