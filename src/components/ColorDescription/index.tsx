'use client'

import { BACKGROUND_RANGE_COLORS } from '@/constants/gloabal'
import { Range } from '../Chart/types'

import { useTranslation } from 'react-i18next'

interface ColorDescriptionProps {
  range: Range
}

export default function ColorDescription({ range }: ColorDescriptionProps) {
  const { t } = useTranslation()

  function handleGetColorDescription(range: Range): JSX.Element[] {
    return Object.keys(range).map((action) => {
      return (
        <li
          key={action}
          className={`${BACKGROUND_RANGE_COLORS[action as keyof Range]} p-2 min-w-20 max-sm:m-1 flex items-center justify-center rounded-md`}
        >
          <span>{t(`actions.${action}`)}</span>
        </li>
      )
    })
  }

  return (
    <div className="mb-4">
      <h2 className="text-lg text-main-gold">{t('actions.label')}</h2>
      <ul className="max-sm:text-sm flex gap-x-4 max-sm:gap-x-0.5 flex-wrap">
        {handleGetColorDescription(range)}
      </ul>
    </div>
  )
}
