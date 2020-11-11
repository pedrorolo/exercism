
enum Color {
  black = 0,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white
}

type ColorName = keyof typeof Color

const colorFromName = (n: ColorName): Color => Color[n]

export class ResistorColor {
  constructor(private colors: ColorName[]) {
    if (colors.length < 2)
      throw "At least two colors need to be present";

  }
  value = (): Color => {
    return 10 * colorFromName(this.colors[0]) + colorFromName(this.colors[1]);
  };
}
