import InfoIcon from '../InfoIcon/InfoIcon'
import { useState } from 'react'
import SkuIcon from '../SkuIcon/SkuIcon'
import './InventoryFailuresCard.scss'

interface FailureRow {
  name: string
  failRate: number
  reason: string
}

const ROWS: FailureRow[] = [
  { name: 'Traverse Full Brim', failRate: 2, reason: 'Functional' },
  { name: 'Armet Pro', failRate: 1, reason: 'Wear' },
  { name: 'Miller H700 Safety..', failRate: 1, reason: 'Impact' },
]

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
        <span>SKU</span>
        <span>Fail Rate</span>
        <span>Top Fail Reason</span>
      </div>

      <div className="inventory-failures-card__list">
        {ROWS.map((row) => (
          <div className="inventory-failures-card__row" key={row.name}>
            <div className="inventory-failures-card__row-sku">
              <SkuIcon size={18} />
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
