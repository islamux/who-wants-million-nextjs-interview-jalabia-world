import type { Question, MoneyLevel } from '../types/game'
import type { Locale } from '../i18n/LocaleContext'
import {
  chapterQuestionsAr, moneyLevelsAr, chapterListAr, chapterNamesAr,
} from './questions.ar'
import {
  chapterQuestionsEn, moneyLevelsEn, chapterListEn, chapterNamesEn,
} from './questions.en'

export interface QuestionsData {
  chapterQuestions: Record<number, Question[]>
  moneyLevels: MoneyLevel[]
  chapterList: { id: number; title: string }[]
  chapterNames: Record<number, string>
}

export function getQuestionsData(locale: Locale): QuestionsData {
  if (locale === 'ar') {
    return {
      chapterQuestions: chapterQuestionsAr,
      moneyLevels: moneyLevelsAr,
      chapterList: chapterListAr,
      chapterNames: chapterNamesAr,
    }
  }
  return {
    chapterQuestions: chapterQuestionsEn,
    moneyLevels: moneyLevelsEn,
    chapterList: chapterListEn,
    chapterNames: chapterNamesEn,
  }
}

export function getSafeHavenIndex(currentIndex: number, moneyLevels: MoneyLevel[]): number {
  for (let i = currentIndex - 1; i >= 0; i--) {
    if (moneyLevels[i]?.isSafeHaven) return i
  }
  return -1
}
