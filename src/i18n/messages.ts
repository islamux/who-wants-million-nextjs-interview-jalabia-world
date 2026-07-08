import type { GameMessage } from '../types/game'
import type { Locale } from './LocaleContext'
import { getQuestionsData } from '../data/questions'

export function formatMessage(
  msg: GameMessage,
  locale: Locale,
  ctx: { chapterId: number; currentQuestionIndex: number }
): string {
  const { chapterQuestions, moneyLevels } = getQuestionsData(locale)
  const prizeIdx = msg.prizeIndex ?? -1
  const correctIdx = msg.correctIndex ?? -1
  switch (msg.key) {
    case 'correct': {
      const prize = moneyLevels[prizeIdx]?.amount ?? ''
      return locale === 'ar'
        ? `إجابة صحيحة! الجائزة الحالية: ${prize}`
        : `Correct! Current prize: ${prize}`
    }
    case 'wrong': {
      const text = chapterQuestions[ctx.chapterId]?.[ctx.currentQuestionIndex]?.options[correctIdx]?.text ?? ''
      return locale === 'ar'
        ? `إجابة خاطئة! الإجابة الصحيحة كانت: ${text}`
        : `Wrong! The correct answer was: ${text}`
    }
    case 'timeout': {
      const text = chapterQuestions[ctx.chapterId]?.[ctx.currentQuestionIndex]?.options[correctIdx]?.text ?? ''
      return locale === 'ar'
        ? `انتهى الوقت! الإجابة الصحيحة كانت: ${text}`
        : `Time's up! The correct answer was: ${text}`
    }
    case 'walkAway': {
      const prize = moneyLevels[prizeIdx]?.amount ?? ''
      return locale === 'ar'
        ? `لقد اخترت الانسحاب بالجائزة الحالية: ${prize}`
        : `You chose to walk away with: ${prize}`
    }
    case 'audience':
      return locale === 'ar'
        ? 'تم استطلاع رأي الجمهور. انظر النتائج أدناه.'
        : 'Audience poll complete. See results below.'
  }
}
