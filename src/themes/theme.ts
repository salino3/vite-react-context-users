const BASE_SPACING = 4;

export const theme = {
  background: {
    primary: "#ade8f4",
    secundary: "#48cae4",
  },
  colors: {
    blues: {
      cream: "#E7F4B8",
      mindarolighter: "#E1F1A7",
      mindaro: "#D9ED92",
      lightGreen: "#B5E48C",
      lightGreenDarker: "#99D98C",
      emerald: "#76C893",
      keppel: "#52B69A",
      verdiGris: "#34A0A4",
      bondiBlue: "#168AAD",
      cerulean: "#1A759F",
      lapisLazuli: "#1E6091",
      indigoDye: "#184E77",
    },
    yellows: {
  canary: '#FFF202ff',
  citrine: '#E6CF00ff',
  jonquil: '#E6C300ff',
  saffron: '#E6B800ff',
  harvestGold: '#E6AC00ff',
  harvestGoldDarker: '#E6A100ff',
  gamboge: '#E69500ff',
  fulvous: '#E68A00ff',
  fulvousDarker: '#E67E00ff',
  cocoaBrown: '#DC6E00ff',
    },
    reds: {
chocolateCosmos: '#641220ff',
burgundy: '#6e1423ff',
burgundy2: '#85182aff',
madder: '#a11d33ff',
madder2: '#a71e34ff',
redNcs: '#b21e35ff',
redNcs2: '#bd1f36ff',
cardinal: '#c71f37ff',
crimson: '#da1e37ff',
poppy: '#e01e37ff'
    }
  },
  paddings: {
    paddingApp: "10px",
  },

  spacing: (multiplier: number = 1) => `${multiplier * BASE_SPACING}px`,
};