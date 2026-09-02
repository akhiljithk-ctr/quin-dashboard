import { useState } from 'react'
import SkuIcon from '../SkuIcon/SkuIcon'
import './LifecycleTabsCard.scss'

interface Row {
  name: string
  value: number
  percent: number
}

const DECOMMISSIONED: Row[] = [
  { name: 'Traverse Full Brim', value: 120, percent: 90 },
  { name: 'Armet Pro', value: 109, percent: 82 },
  { name: 'Miller H700', value: 102, percent: 76 },
  { name: 'ICE Evolution Safety', value: 84, percent: 62 },
]

const EXPIRING: Row[] = [
  { name: 'V-Fit Harness', value: 64, percent: 55 },
  { name: 'PIP RZRBack', value: 48, percent: 40 },
  { name: 'Traverse Full Brim', value: 33, percent: 28 },
]

function LifecycleTabsCard() {
  const [tab, setTab] = useState<'decommissioned' | 'expiring'>('decommissioned')
  const rows = tab === 'decommissioned' ? DECOMMISSIONED : EXPIRING

  return (
    <section className="lifecycle-tabs-card">
      <div className="lifecycle-tabs-card__tabs">
        <button
          className={`lifecycle-tabs-card__tab${tab === 'decommissioned' ? ' lifecycle-tabs-card__tab--active' : ''}`}
          onClick={() => setTab('decommissioned')}
        >
          Decommissioned
        </button>
        <button
          className={`lifecycle-tabs-card__tab${tab === 'expiring' ? ' lifecycle-tabs-card__tab--active' : ''}`}
          onClick={() => setTab('expiring')}
        >
          Expiring
        </button>
      </div>

      <div className="lifecycle-tabs-card__list">
        {rows.map((row) => (
          <div className="lifecycle-tabs-card__row" key={row.name}>
            <SkuIcon size={20} />
            <div className="lifecycle-tabs-card__row-main">
              <div className="lifecycle-tabs-card__row-name">{row.name}</div>
              <div className="lifecycle-tabs-card__bar">
                <div className="lifecycle-tabs-card__bar-fill" style={{ width: `${row.percent}%` }} />
              </div>
            </div>
            <div className="lifecycle-tabs-card__row-value">{row.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LifecycleTabsCard
