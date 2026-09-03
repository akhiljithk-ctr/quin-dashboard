import InfoIcon from '../InfoIcon/InfoIcon'
import { useState } from 'react'
import traverseFullBrimImg from '../../assets/images/1.png'
import armetProImg from '../../assets/images/2.png'
import millerH700Img from '../../assets/images/3.png'
import './InventoryFailuresCard.scss'

interface FailureRow {
  name: string
  failRate: number
  reason: string
  image: string
}

const ROWS: FailureRow[] = [
  { name: 'Traverse Full Brim', failRate: 2, reason: 'Functional', image: traverseFullBrimImg },
  { name: 'Armet Pro', failRate: 1, reason: 'Wear', image: armetProImg },
  { name: 'Miller H700 Safety..', failRate: 1, reason: 'Impact', image: millerH700Img },
]

function SortIcon() {
  return (
    <svg className="inventory-failures-card__sort-icon" viewBox="0 0 7 10" fill="currentColor">
      <path d="M3.5 0.5L6.5 4H0.5L3.5 0.5Z M3.5 9.5L0.5 6H6.5L3.5 9.5Z" />
    </svg>
  )
}

function InventoryFailuresCard() {
  const [tab, setTab] = useState<'sku' | 'reason'>('sku')

  return (
    <section className="inventory-failures-card">
      <div className="inventory-failures-card__header">
        <h2 className="inventory-failures-card__title">
          Inventory Failures
          <InfoIcon />
        </h2>
        <div className="inventory-failures-card__tabs">
          <button
            className={`inventory-failures-card__tab${tab === 'sku' ? ' inventory-failures-card__tab--active' : ''}`}
            onClick={() => setTab('sku')}
          >
            Top SKU
          </button>
          <button
            className={`inventory-failures-card__tab${tab === 'reason' ? ' inventory-failures-card__tab--active' : ''}`}
            onClick={() => setTab('reason')}
          >
            Top Reason
          </button>
        </div>
      </div>

      <div className="inventory-failures-card__table-head">
        <span>
          SKU <SortIcon />
        </span>
        <span>
          Fail Rate <SortIcon />
        </span>
        <span>
          Top Fail Reason
        </span>
      </div>

      <div className="inventory-failures-card__list">
        {ROWS.map((row) => (
          <div className="inventory-failures-card__row" key={row.name}>
            <div className="inventory-failures-card__row-sku">
              <span className="inventory-failures-card__row-icon">
                <img src={row.image} alt={row.name} />
              </span>
              <span className="inventory-failures-card__row-name">{row.name}</span>
            </div>
            <div className="inventory-failures-card__row-rate">{row.failRate}%</div>
            <div className="inventory-failures-card__row-reason">{row.reason}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InventoryFailuresCard
