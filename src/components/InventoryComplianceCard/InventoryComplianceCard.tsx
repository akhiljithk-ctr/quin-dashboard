import InfoIcon from '../InfoIcon/InfoIcon'
import { useState } from 'react'
import traverseFullBrimImg from '../../assets/images/1.png'
import armetProImg from '../../assets/images/2.png'
import harnessImg from '../../assets/images/3.png'
import './InventoryComplianceCard.scss'

interface ComplianceRow {
  name: string
  compliance: number
  image: string
}

const SKU_COMPLIANCE: ComplianceRow[] = [
  { name: 'Traverse Full Brim', compliance: 100, image: traverseFullBrimImg },
  { name: 'PIP RZRBack', compliance: 99, image: traverseFullBrimImg },
  { name: 'Armet Pro', compliance: 95, image: armetProImg },
  { name: 'ICE Evolution Safety..', compliance: 91, image: traverseFullBrimImg },
  { name: 'Miller H700 Safety..', compliance: 91, image: harnessImg },
  { name: 'ICE Evolution Safety..', compliance: 89, image: traverseFullBrimImg },
]

function SortIcon() {
  return (
    <svg className="inventory-compliance-card__sort-icon" viewBox="0 0 7 10" fill="currentColor">
      <path d="M3.5 0.5L6.5 4H0.5L3.5 0.5Z M3.5 9.5L0.5 6H6.5L3.5 9.5Z" />
    </svg>
  )
}

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
        <div>
          <span className="inventory-compliance-card__delta inventory-compliance-card__delta--down">-1% L30D</span>
          <div className="inventory-compliance-card__stat-label">Compliance Rate</div>
        </div>
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
        <span>
          SKUs <SortIcon />
        </span>
        <span>
          Compliance <SortIcon />
        </span>
      </div>

      <div className="inventory-compliance-card__list">
        {SKU_COMPLIANCE.map((row, i) => (
          <div className="inventory-compliance-card__row" key={`${row.name}-${i}`}>
            <div className="inventory-compliance-card__row-content">
              <div className="inventory-compliance-card__row-top">
                <div className='invt-image-and-name'>
                  <span className="inventory-compliance-card__row-icon">
                  <img src={row.image} alt={row.name} />
                </span>
                <span className="inventory-compliance-card__row-name">{row.name}</span>
                </div>
                <span className="inventory-compliance-card__row-value">{row.compliance}%</span>
              </div>
              <div className="inventory-compliance-card__bar">
                <div className="inventory-compliance-card__bar-fill" style={{ width: `${row.compliance}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InventoryComplianceCard
