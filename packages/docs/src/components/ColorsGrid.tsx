import { colors } from '@quasar-ui/tokens'
import { getContrast } from 'polished'

const getContrastColor = (color: string) =>
  getContrast(color, colors.white) < 3.5 ? colors.black : colors.white

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => (
    <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrastColor(color),
        }}
      >
        <strong>${key}</strong>
        <span>{color}</span>
      </div>
    </div>
  ))
}
