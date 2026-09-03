import InfoIcon from '../InfoIcon/InfoIcon'
import traverseFullBrimImg from '../../assets/images/1.png'
import armetProImg from '../../assets/images/2.png'
import vFitHarnessImg from '../../assets/images/3.png'
import './WorkspaceOverviewCard.scss'

interface SkuRow {
  name: string
  category: string
  total: number
  change: number
  image: string
}

const TOP_SKUS: SkuRow[] = [
  { name: 'Traverse Full Brim', category: 'Head Protection', total: 563, change: 5, image: traverseFullBrimImg },
  { name: 'Armet Pro', category: 'Head Protection', total: 534, change: -2, image: armetProImg },
  { name: 'V-Fit Harness', category: 'Harness', total: 489, change: 5, image: vFitHarnessImg },
  { name: 'Traverse Full Brim', category: 'Head Protection', total: 412, change: 5, image: traverseFullBrimImg },
]

function SortIcon() {
  return (
    <svg className="workspace-overview-card__sort-icon" viewBox="0 0 7 10" fill="currentColor">
      <path d="M3.5 0.5L6.5 4H0.5L3.5 0.5Z M3.5 9.5L0.5 6H6.5L3.5 9.5Z" />
    </svg>
  )
}

function WorkspaceOverviewCard() {
  return (
    <section className="workspace-overview-card">
      <div className="workspace-overview-card__header">
        <h2 className="workspace-overview-card__title">
          Workspace Overview
          <InfoIcon />
        </h2>
      </div>

      <div className="workspace-overview-card__stats">
        <div className="workspace-overview-card__stat">
          <span className="workspace-overview-card__stat-value">123</span>
          <div className="workspace-overview-card__stat-top">
            <span className="workspace-overview-card__delta workspace-overview-card__delta--down">-5% L30D</span>
            <span className="workspace-overview-card__stat-label">Total SKUs</span>
          </div>
        </div>

        <div className="workspace-overview-card__stat">
          <span className="workspace-overview-card__stat-value">12</span>
          <div className="workspace-overview-card__stat-top">
            <span className="workspace-overview-card__delta workspace-overview-card__delta--down" style={{color: '#00C8DC'}}>-5% L30D</span>
            <span className="workspace-overview-card__stat-label">Total Brands</span>
          </div>
        </div>
      </div>

      <div className="workspace-overview-card__table">
        <div className="workspace-overview-card__table-head">
          <span>
            Top SKUs <SortIcon />
          </span>
          <span>
            Total <SortIcon />
          </span>
          <span>
            Change % <SortIcon />
          </span>
        </div>
        <div className="workspace-overview-card__table-body">
          {TOP_SKUS.map((sku, idx) => (
            <div className="workspace-overview-card__row" key={`${sku.name}-${idx}`}>
              <div className="workspace-overview-card__row-sku">
                <span className="workspace-overview-card__row-icon">
                  <img src={sku.image} alt={sku.name} />
                </span>
                <div className="workspace-overview-card__row-text">
                  <div className="workspace-overview-card__row-name">{sku.name}</div>
                  <div className="workspace-overview-card__row-category">{sku.category}</div>
                </div>
              </div>
              <div className="workspace-overview-card__row-total">{sku.total}</div>
              <div className={`workspace-overview-card__row-change workspace-overview-card__row-change--${sku.change >= 0 ? 'up' : 'down'}`}>
                {sku.change >= 0 ? '+' : ''}
                {sku.change}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkspaceOverviewCard

