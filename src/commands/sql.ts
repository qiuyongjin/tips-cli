import {selectHelp} from "./sql/select";
import {CommandSqlActionOptions} from "../types";
import print from "../utils/print";

export function sqlAction(options: CommandSqlActionOptions) {
  const {login, create, insert, del, update, select} = options
  print.title('增删改查')
  login && print.text('mysql -uroot -p')
  create && print.text('create database user')
  insert && print.text('插入')
  del && print.text('删除')
  update && print.text('更新')
  select && selectHelp()
}
