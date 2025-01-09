'use client'

import { useEffect, useState } from 'react'
import { Chart } from '../Chart'
import { TABLE_POSITIONS } from '@/constants/gloabal'
import { handleSelection, handleSelectRange } from './helpers'
import ChartOptionsButton from './ChartOptionsButton'
import { Range } from '../Chart/types'
import ColorDescription from '../ColorDescription'
import { useTranslation } from 'react-i18next'

export default function ChartOptions() {
  const [selectedPosition, setSelectedPosition] = useState<string>('UTG')
  const [selectedAction, setSelectedAction] = useState<string>('RFI')
  const [range, setRange] = useState<Range>({} as Range)
  const { t } = useTranslation()

  useEffect(() => {
    setRange(handleSelectRange(selectedPosition, selectedAction))
  }, [selectedPosition, selectedAction])

  return (
    <section>
      <div>
        <h1 className="mb-2 text-main-gold w-fit">
          {t('chart-options.select-position')}
        </h1>
        <section className="flex justify-between mb-4 max-sm:grid grid-cols-3 gap-1 max-sm:gap-x-10 max-sm:w-fit">
          {TABLE_POSITIONS.map((position) => (
            <ChartOptionsButton
              key={position}
              position={position}
              selectedPosition={selectedPosition}
              setSelectedPosition={setSelectedPosition}
              handleBB={setSelectedAction}
            />
          ))}
        </section>
        <h1 className="mb-2 text-main-gold w-fit">
          {t('chart-options.select-action')}
        </h1>
        <section className="flex justify-between mb-4 max-sm:w-fit max-sm:grid grid-cols-3 gap-1 max-sm:gap-x-10">
          {handleSelection(selectedPosition).map((action) => (
            <ChartOptionsButton
              key={action}
              position={action}
              selectedPosition={selectedAction}
              setSelectedPosition={setSelectedAction}
            />
          ))}
        </section>
        <ColorDescription range={range} />
        <Chart range={range} />
      </div>
    </section>
  )
}
