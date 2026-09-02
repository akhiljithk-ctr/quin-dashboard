import InfoIcon from '../InfoIcon/InfoIcon'
import './InventoryLifecycleCard.scss'

function InventoryLifecycleCard() {
  return (
    <section className="inventory-lifecycle-card">
      <div className="inventory-lifecycle-card__header">
        <h2 className="inventory-lifecycle-card__title">
          Inventory Lifecycle
          <InfoIcon />
        </h2>
      </div>

      <div className="inventory-lifecycle-card__stat">
        <div className="inventory-lifecycle-card__stat-value">554</div>
        <span className="inventory-lifecycle-card__delta inventory-lifecycle-card__delta--up">+15% L30D</span>
        <div className="inventory-lifecycle-card__stat-label">Decommissioned Inventory</div>
      </div>

      <div className="inventory-lifecycle-card__chart-placeholder">Chart: Decommissioned inventory trend (Mar – Nov, forecast)</div>
    </section>
  )
}

export default InventoryLifecycleCard
