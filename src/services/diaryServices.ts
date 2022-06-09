import diaryData from './mock/diary.json'
import { DiaryEntry, NonSensitiveInfoDiaryEntry, newDiaryEntry } from '../types'
import { v4 as uuidv4 } from 'uuid'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ comment, ...data }) => {
    return { ...data }
  })
}

export const findDiaryById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((diary) => diary.id === id)
  if (entry != null) {
    const { comment, ...data } = entry
    return data
  }
  return undefined
}

export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: uuidv4(),
    ...newDiaryEntry,
  }

  diaries.push(newDiary)
  return newDiary
}
