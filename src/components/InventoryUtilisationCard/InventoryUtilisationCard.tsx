import InfoIcon from '../InfoIcon/InfoIcon'
import InventoryUtilisationChart from './InventoryUtilisationChart'
import './InventoryUtilisationChart.scss'
import './InventoryUtilisationCard.scss'

function InventoryUtilisationCard() {
  return (
    <section className="inventory-utilisation-card">
      <div className="inventory-utilisation-card__header">
        <h2 className="inventory-utilisation-card__title">
          Inventory Utilisation
          <InfoIcon />
        </h2>
      </div>

      <div className="inventory-utilisation-card__stats">
        <div className="inventory-utilisation-card__stat">
          <div className="inventory-utilisation-card__stat-value">5231</div>
          <div className="inventory-utilisation-card__stat-meta">
            <span className="inventory-utilisation-card__delta inventory-utilisation-card__delta--down">-1% L30D</span>
          </div>
          <div className="inventory-utilisation-card__stat-label">Total Assigned</div>
        </div>
        <div className="inventory-utilisation-card__stat">
          <div className="inventory-utilisation-card__stat-value">62%</div>
          <div className="inventory-utilisation-card__stat-meta">
            <span className="inventory-utilisation-card__delta inventory-utilisation-card__delta--up">+6% L30D</span>
          </div>
          <div className="inventory-utilisation-card__stat-label">Utilization</div>
        </div>
      </div>

      <div className="inventory-utilisation-card__chart">
        <InventoryUtilisationChart />
      </div>

      <div className="inventory-utilisation-card__legend">
        <span className="inventory-utilisation-card__legend-item">
          <span className="inventory-utilisation-card__dot inventory-utilisation-card__dot--tag" /> Quin Tag
        </span>
        <span className="inventory-utilisation-card__legend-item">
          <span className="inventory-utilisation-card__dot inventory-utilisation-card__dot--pod" /> Quin Tag + Pod
        </span>
        <span className="inventory-utilisation-card__legend-item">
          <span className="inventory-utilisation-card__dot inventory-utilisation-card__dot--unassigned" /> Unassigned
        </span>
      </div>
    </section>
  )
}

export default InventoryUtilisationCard
