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
    <section className="flex">
      <div>
        <h1 className="mb-2 text-main-gold">
          {t('chart-options.select-position')}
        </h1>
        <section className="flex justify-between mb-4">
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
        <h1 className="mb-2 text-main-gold">
          {t('chart-options.select-action')}
        </h1>
        <section className="flex justify-between mb-4">
          {handleSelection(selectedPosition).map((action) => (
            <ChartOptionsButton
              key={action}
              position={action}
              selectedPosition={selectedAction}
              setSelectedPosition={setSelectedAction}
            />
          ))}
        </section>
        <Chart range={range} />
      </div>
      <aside>
        <ColorDescription range={range} />
      </aside>
    </section>
  )
}
