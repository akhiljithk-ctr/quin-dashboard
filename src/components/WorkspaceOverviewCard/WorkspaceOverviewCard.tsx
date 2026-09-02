import InfoIcon from '../InfoIcon/InfoIcon'
import SkuIcon from '../SkuIcon/SkuIcon'
import './WorkspaceOverviewCard.scss'

interface SkuRow {
  name: string
  category: string
  total: number
  change: number
}

const TOP_SKUS: SkuRow[] = [
  { name: 'Traverse Full Brim', category: 'Head Protection', total: 563, change: 5 },
  { name: 'Armet Pro', category: 'Head Protection', total: 534, change: -2 },
  { name: 'V-Fit Harness', category: 'Harness', total: 489, change: 5 },
]

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
          <div className="workspace-overview-card__stat-value">123</div>
          <div className="workspace-overview-card__stat-meta">
            <span className="workspace-overview-card__delta workspace-overview-card__delta--down">-5% L30D</span>
          </div>
          <div className="workspace-overview-card__stat-label">Total SKUs</div>
        </div>
        <div className="workspace-overview-card__stat">
          <div className="workspace-overview-card__stat-value">12</div>
          <div className="workspace-overview-card__stat-meta">
            <span className="workspace-overview-card__delta workspace-overview-card__delta--down">-5% L30D</span>
          </div>
          <div className="workspace-overview-card__stat-label">Total Brands</div>
        </div>
      </div>

      <div className="workspace-overview-card__table">
        <div className="workspace-overview-card__table-head">
          <span>Top SKUs</span>
          <span>Total</span>
          <span>Change %</span>
        </div>
        <div className="workspace-overview-card__table-body">
          {TOP_SKUS.map((sku) => (
            <div className="workspace-overview-card__row" key={sku.name}>
              <div className="workspace-overview-card__row-sku">
                <SkuIcon size={22} />
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
