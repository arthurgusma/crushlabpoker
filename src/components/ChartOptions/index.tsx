'use client'

import { useEffect, useState } from 'react'
import { Chart } from '../Chart'
import { handleSelection, handleSelectRange } from './helpers'
import ChartOptionsButton from './ChartOptionsButton'
import { Range } from '../Chart/types'
import ColorDescription from '../ColorDescription'
import { useTranslation } from 'react-i18next'
import { GetTablePositions } from '@/app/_actions'
import Link from 'next/link'
import LoadingSpinner from '../UI/LoadingSpinner'

export default function ChartOptions() {
  const [selectedPosition, setSelectedPosition] = useState<string>('UTG')
  const [selectedAction, setSelectedAction] = useState<string>('RFI')
  const [range, setRange] = useState<Range>({} as Range)
  const [tablePositions, setTablePositions] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { t } = useTranslation()

  async function handleTablePositions() {
    const positions = await GetTablePositions()
    setTablePositions(positions)
    setLoading(false)
  }

  useEffect(() => {
    setRange(handleSelectRange(selectedPosition, selectedAction))
  }, [selectedPosition, selectedAction])

  useEffect(() => {
    setLoading(true)
    handleTablePositions()
  }, [])

  if (loading) return <LoadingSpinner />

  return (
    <section>
      <div>
        <h1 className="mb-2 text-main-gold w-fit">
          {t('chart-options.select-position')}
        </h1>
        <section className="flex justify-between mb-4 max-sm:grid grid-cols-3 gap-1 max-sm:w-fit">
          {tablePositions.map((position) => (
            <ChartOptionsButton
              key={position}
              position={position}
              selectedPosition={selectedPosition}
              setSelectedPosition={setSelectedPosition}
              handleBB={setSelectedAction}
            />
          ))}
          {tablePositions.length === 1 && (
            <i className="mt-1 max-sm:-mt-2 max-sm:w-60 max-sm:-ml-4">
              <Link href="/billing" className="underline-offset-1">
                <span className="underline text-blue-300">
                  {t('no-subscriber.subscribe')}
                </span>
              </Link>{' '}
              {t('no-subscriber.description')}
            </i>
          )}
        </section>
        <h1 className="mb-2 text-main-gold w-fit">
          {t('chart-options.select-action')}
        </h1>
        <section className="flex justify-between mb-4 max-sm:w-fit max-sm:grid grid-cols-3 gap-1 ">
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
