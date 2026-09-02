import InfoIcon from '../InfoIcon/InfoIcon'
import { useState } from 'react'
import SkuIcon from '../SkuIcon/SkuIcon'
import './InventoryComplianceCard.scss'

interface ComplianceRow {
  name: string
  compliance: number
}

const SKU_COMPLIANCE: ComplianceRow[] = [
  { name: 'Traverse Full Brim', compliance: 100 },
  { name: 'PIP RZRBack', compliance: 99 },
  { name: 'Armet Pro', compliance: 95 },
  { name: 'ICE Evolution Safety..', compliance: 91 },
  { name: 'Miller H700 Safety..', compliance: 91 },
  { name: 'ICE Evolution Safety..', compliance: 89 },
]

function InventoryComplianceCard() {
  const [tab, setTab] = useState<'skus' | 'users'>('skus')

  return (
    <section className="inventory-compliance-card">
      <div className="inventory-compliance-card__header">
        <h2 className="inventory-compliance-card__title">
          Inventory Compliance
          <InfoIcon />
        </h2>
      </div>

      <div className="inventory-compliance-card__stat">
        <div className="inventory-compliance-card__stat-value">95%</div>
        <span className="inventory-compliance-card__delta inventory-compliance-card__delta--down">-1% L30D</span>
        <div className="inventory-compliance-card__stat-label">Compliance Rate</div>
      </div>

      <div className="inventory-compliance-card__tabs">
        <button
          className={`inventory-compliance-card__tab${tab === 'skus' ? ' inventory-compliance-card__tab--active' : ''}`}
          onClick={() => setTab('skus')}
        >
          SKUs
        </button>
        <button
          className={`inventory-compliance-card__tab${tab === 'users' ? ' inventory-compliance-card__tab--active' : ''}`}
          onClick={() => setTab('users')}
        >
          Users
        </button>
      </div>

      <div className="inventory-compliance-card__list-head">
        <span>SKUs</span>
        <span>Compliance</span>
      </div>

      <div className="inventory-compliance-card__list">
        {SKU_COMPLIANCE.map((row, i) => (
          <div className="inventory-compliance-card__row" key={`${row.name}-${i}`}>
            <SkuIcon size={18} />
            <span className="inventory-compliance-card__row-name">{row.name}</span>
            <div className="inventory-compliance-card__bar">
              <div className="inventory-compliance-card__bar-fill" style={{ width: `${row.compliance}%` }} />
            </div>
            <span className="inventory-compliance-card__row-value">{row.compliance}%</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InventoryComplianceCard
