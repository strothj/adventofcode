/* tslint:disable:strict-boolean-expressions curly */
interface IProgram {
  name: string;
  weight?: number;
  parent?: IProgram;
  siblings?: Map<string, IProgram>;
  children?: Map<string, IProgram>;
}

export function part1(input: string) {
  const programs = buildTree(input);

  const bottomProgram = programs.find(p => !p.parent)!;
  return bottomProgram.name;
}

export function part2(input: string) {
  const programs = buildTree(input).filter(p => p.children);

  /* tslint:disable-next-line:no-console */
  console.log(programs.length);

  return 3;
}

function buildTree(input: string) {
  const programs = new Map<string, IProgram>();

  input.split("\n").forEach(line => {
    const cols = line.split(" ");
    const program: IProgram = programs.get(cols[0]) || {
      name: cols[0],
      weight: parseInt(cols[1].substr(1, cols[1].length - 1), 10)
    };
    if (cols.length > 3) {
      program.children = new Map();
      cols
        .slice(3)
        .map(c => c.replace(",", ""))
        .forEach(c => {
          const child = programs.get(c) || { name: c };
          child.parent = program;
          program.children!.set(c, child);
          programs.set(c, child);
        });
    }
    programs.set(cols[0], program);
  });

  return [...programs.values()];
}
