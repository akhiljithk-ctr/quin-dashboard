import InfoIcon from '../InfoIcon/InfoIcon'
import './InventoryStatusCard.scss'

interface StatusRow {
  count: number
  name: string
  inService: number
  outOfService: number
  decommissioned: number
}

const ROWS: StatusRow[] = [
  { count: 563, name: 'Traverse Full..', inService: 70, outOfService: 20, decommissioned: 10 },
  { count: 534, name: 'Armet Pro', inService: 55, outOfService: 30, decommissioned: 15 },
  { count: 489, name: 'Miller H700', inService: 75, outOfService: 15, decommissioned: 10 },
  { count: 400, name: 'PIP RZRBack', inService: 65, outOfService: 25, decommissioned: 10 },
  { count: 400, name: 'ICE Evolutio..', inService: 60, outOfService: 25, decommissioned: 15 },
]

function InventoryStatusCard() {
  return (
    <section className="inventory-status-card">
      <div className="inventory-status-card__header">
        <h2 className="inventory-status-card__title">
          Inventory Status by SKU
          <InfoIcon />
        </h2>
      </div>

      <div className="inventory-status-card__list">
        {ROWS.map((row, i) => (
          <div className="inventory-status-card__row" key={`${row.name}-${i}`}>
            <div className="inventory-status-card__row-count">{row.count}</div>
            <div className="inventory-status-card__row-main">
              <div className="inventory-status-card__row-name">{row.name}</div>
              <div className="inventory-status-card__bar">
                <span className="inventory-status-card__bar-seg inventory-status-card__bar-seg--service" style={{ width: `${row.inService}%` }} />
                <span className="inventory-status-card__bar-seg inventory-status-card__bar-seg--out" style={{ width: `${row.outOfService}%` }} />
                <span
                  className="inventory-status-card__bar-seg inventory-status-card__bar-seg--decommissioned"
                  style={{ width: `${row.decommissioned}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="inventory-status-card__legend">
        <span className="inventory-status-card__legend-item">
          <span className="inventory-status-card__dot inventory-status-card__dot--service" /> In-Service
        </span>
        <span className="inventory-status-card__legend-item">
          <span className="inventory-status-card__dot inventory-status-card__dot--out" /> Out of Service
        </span>
        <span className="inventory-status-card__legend-item">
          <span className="inventory-status-card__dot inventory-status-card__dot--decommissioned" /> Decommissioned
        </span>
      </div>
    </section>
  )
}

export default InventoryStatusCard
