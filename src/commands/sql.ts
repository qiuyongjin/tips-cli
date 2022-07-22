import {selectHelp} from "./sql/select";
import {CommandSqlActionOptions} from "../types";
import print from "../utils/print";

export function sqlAction(options: CommandSqlActionOptions) {
  const {login, create, insert, del, update, select} = options
  login && print.general('mysql -uroot -p')
  create && print.general('create database user')
  insert && print.general('插入')
  del && print.general('删除')
  update && print.general('更新')
  select && selectHelp()
}
