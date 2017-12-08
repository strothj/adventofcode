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

  const childWeightAdjustments = programs
    .map(p => {
      const children = Array.from(p.children!.values());

      const modeWeight = Array.from(
        children
          .reduce((acc, child) => {
            const childWeight = getChildWeight(child);
            acc.set(childWeight, (acc.get(childWeight) || 0) + 1);
            return acc;
          }, new Map<number, number>())
          .entries()
      ).find(mw => mw[1] > 1)![0];

      const imbalancedChild = children.find(
        c => getChildWeight(c) !== modeWeight
      );
      if (!imbalancedChild) return 0;

      return (
        imbalancedChild.weight! - (getChildWeight(imbalancedChild) - modeWeight)
      );
    })
    .filter(c => c > 0);

  return childWeightAdjustments[childWeightAdjustments.length - 1];
}

function buildTree(input: string) {
  const programs = new Map<string, IProgram>();

  input.split("\n").forEach(line => {
    const cols = line.split(" ");
    const program: IProgram = programs.get(cols[0]) || {
      name: cols[0]
    };
    program.weight = parseInt(cols[1].substr(1, cols[1].length - 1), 10);

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

function getChildWeight(child: IProgram) {
  let weight = child.weight!;
  if (child.children) weight += sumChildren(child.children!);
  return weight;
}

function sumChildren(input: Map<string, IProgram>) {
  let sum = 0;
  for (const child of input.values()) {
    sum += child.weight || 0;
    if (child.children) sum += sumChildren(child.children);
  }
  return sum;
}
