import { colors } from '@ignite-ui/tokens';
import { ColorPalette, ColorItem } from '@storybook/blocks';

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <ColorPalette>
        <ColorItem
          key={key}
          title={key}
          colors={[color]}
          subtitle=''
        />
      </ColorPalette>

      // <div
      //   key={key}
      //   style={{ backgroundColor: color, padding: '2rem' }}
      // >
      //   <div
      //     style={{
      //       display: 'flex',
      //       justifyContent: 'space-between',
      //       fontFamily: 'monospace',
      //       color: '#FFF',
      //     }}
      //   >
      //     <strong>${key}</strong>
      //     <span>{color}</span>
      //   </div>
      // </div>
    );
  });
}
