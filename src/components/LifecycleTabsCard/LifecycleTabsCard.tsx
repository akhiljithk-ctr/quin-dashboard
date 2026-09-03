import { useState } from 'react'
import traverseFullBrimImg from '../../assets/images/compliance/1.png'
import armetProImg from '../../assets/images/compliance/2.png'
import harnessImg from '../../assets/images/compliance/3.png'
import './LifecycleTabsCard.scss'

interface Row {
  name: string
  value: number
  percent: number
  image: string
}

const DECOMMISSIONED: Row[] = [
  { name: 'Traverse Full Brim', value: 120, percent: 90, image: traverseFullBrimImg },
  { name: 'Armet Pro', value: 109, percent: 82, image: armetProImg },
  { name: 'Miller H700', value: 102, percent: 76, image: harnessImg },
  { name: 'ICE Evolution Safety', value: 84, percent: 62, image: traverseFullBrimImg },
]

const EXPIRING: Row[] = [
  { name: 'V-Fit Harness', value: 64, percent: 55, image: harnessImg },
  { name: 'PIP RZRBack', value: 48, percent: 40, image: traverseFullBrimImg },
  { name: 'Traverse Full Brim', value: 33, percent: 28, image: traverseFullBrimImg },
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
            <div className="lifecycle-tabs-card__row-content">
              <div className="lifecycle-tabs-card__row-top">
                <div className="lifecycle-tabs-card__row-image-and-name">
                  <span className="lifecycle-tabs-card__row-icon">
                    <img src={row.image} alt={row.name} />
                  </span>
                  <span className="lifecycle-tabs-card__row-name">{row.name}</span>
                </div>
                <span className="lifecycle-tabs-card__row-value">{row.value}</span>
              </div>
              <div className="lifecycle-tabs-card__bar">
                <div className="lifecycle-tabs-card__bar-fill" style={{ width: `${row.percent}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LifecycleTabsCard
