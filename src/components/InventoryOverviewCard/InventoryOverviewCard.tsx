import InfoIcon from '../InfoIcon/InfoIcon'
import './InventoryOverviewCard.scss'

function InventoryOverviewCard() {
  return (
    <section className="inventory-overview-card">
      <div className="inventory-overview-card__header">
        <h2 className="inventory-overview-card__title">
          Inventory Overview
          <InfoIcon />
        </h2>
      </div>

      <div className="inventory-overview-card__stats">
        <div className="inventory-overview-card__stat">
          <div className="inventory-overview-card__stat-value">8437</div>
          <div className="inventory-overview-card__stat-meta">
            <span className="inventory-overview-card__delta inventory-overview-card__delta--up">+3% L30D</span>
          </div>
          <div className="inventory-overview-card__stat-label">Total Inventory</div>
        </div>
        <div className="inventory-overview-card__stat">
          <div className="inventory-overview-card__stat-value">2062</div>
          <div className="inventory-overview-card__stat-meta">
            <span className="inventory-overview-card__delta inventory-overview-card__delta--down">-10% L30D</span>
          </div>
          <div className="inventory-overview-card__stat-label">Total ...</div>
        </div>
      </div>

      <div className="inventory-overview-card__chart-placeholder">Chart: In Service / Out of Service / Decommissioned trend</div>

      <div className="inventory-overview-card__legend">
        <span className="inventory-overview-card__legend-item">
          <span className="inventory-overview-card__dot inventory-overview-card__dot--service" /> In Service
        </span>
        <span className="inventory-overview-card__legend-item">
          <span className="inventory-overview-card__dot inventory-overview-card__dot--out" /> Out of Service
        </span>
        <span className="inventory-overview-card__legend-item">
          <span className="inventory-overview-card__dot inventory-overview-card__dot--decommissioned" /> Decommissioned
        </span>
      </div>
    </section>
  )
}

export default InventoryOverviewCard
