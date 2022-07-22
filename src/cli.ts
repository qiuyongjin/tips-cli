import {program} from 'commander'
import {version} from '../package.json'
import {sqlAction} from "./commands/sql";
import {guide} from "./commands/guide";
import print from "./utils/print";

program
  .version(version)
  .action(guide)

/**
 * sql 相关操作
 */
program
  .command('sql')
  .option('-l,--login', '登录')
  .option('-c,--create', '创建')
  .option('-i,--insert', '插入')
  .option('-d,--del', '删除')
  .option('-u,--update', '更新')
  .option('-s,--select', '查询')
  .description('sql 相关操作')
  .action((options) => sqlAction(options))

program
  .command('git')
  .description('git 相关操作')
  .action(() => {
    print.title('git 相关操作')
    console.log(`    git push --delete origin <tagname>`)
    const t = `
    echo "# text-show" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M "main"
    git remote add origin git@github.com:qiuyongjin/text-show.git
    git push -u origin "main"
    
    git push --set-upstream origin master
`
    console.log(t)
  })

program.parse(process.argv)
