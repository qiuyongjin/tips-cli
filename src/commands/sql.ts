import {selectHelp} from "./sql/select";
import {CommandSqlActionOptions} from "../types";

export function sqlAction(options: CommandSqlActionOptions) {
  const {login, create, insert, del, update, select} = options
  login && console.log('mysql -uroot -p')
  create && console.log('create database user')
  insert && console.log('插入')
  del && console.log('删除')
  update && console.log('更新')
  select && selectHelp()
}
