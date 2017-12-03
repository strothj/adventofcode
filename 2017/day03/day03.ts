/* tslint:disable:no-console prefer-array-literal curly */

type Direction = "left" | "right" | "up" | "down";
interface ICell {
  x: number;
  y: number;
  value: number;
}

export function day03_part1(input: number) {
  return day03(input).distance;
}

export function day03_part2(input: number) {
  return day03(input).larger;
}

function day03(input: number) {
  if (input === 1) {
    return { distance: 0, larger: 1 };
  }

  let width = 1;
  while (input > width ** 2) {
    width += 2;
  }
  const grid = new Array<ICell[]>(width);
  for (let j = 0; j < grid.length; j += 1) {
    grid[j] = new Array<ICell>(width);
  }

  const half = Math.floor(width / 2);
  let x = half;
  let y = half;
  let i = 1;
  let dir: Direction = "right";
  let last: ICell;
  let larger = 0;
  while (i <= input) {
    let value = 0;
    if (larger === 0) {
      ignoreError(() => (value += grid[y - 1][x - 1].value));
      ignoreError(() => (value += grid[y - 1][x].value));
      ignoreError(() => (value += grid[y - 1][x + 1].value));
      ignoreError(() => (value += grid[y][x - 1].value));
      ignoreError(() => (value += grid[y][x + 1].value));
      ignoreError(() => (value += grid[y + 1][x - 1].value));
      ignoreError(() => (value += grid[y + 1][x].value));
      ignoreError(() => (value += grid[y + 1][x + 1].value));
      if (larger === 0 && value > input) larger = value;
    }
    if (value === 0) value = 1;

    last = { x, y, value };
    grid[y][x] = last;
    switch (dir) {
      case "right":
        x += 1;
        if (grid[y - 1][x] === undefined) dir = "up";
        break;
      case "up":
        y -= 1;
        if (grid[y][x - 1] === undefined) dir = "left";
        break;
      case "left":
        x -= 1;
        if (grid[y + 1][x] === undefined) dir = "down";
        break;
      case "down":
        y += 1;
        if (grid[y][x + 1] === undefined) dir = "right";
        break;
    }
    i += 1;
  }

  const distance = Math.abs(last!.x - half) + Math.abs(last!.y - half);
  return { distance, larger };
}

function ignoreError(expression: () => any) {
  try {
    expression();
  } catch (e) {
    //
  }
}
