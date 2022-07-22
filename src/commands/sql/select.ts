import c from "picocolors";
import print from "../../utils/print";

export function selectHelp() {
  const example = `${c.yellow('select')} * from table`
  print.general(example)
}
