import { colors } from '@joca-ui/tokens';
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
    );
  });
}
