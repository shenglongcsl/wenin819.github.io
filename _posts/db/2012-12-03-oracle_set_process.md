---
layout: blog
title: 修改oracle数据库的连接数
category: program
description: 修改oracle数据库的连接数
tags: oracle, sql
keywords: oracle, sql, 连接数
---

查看数据库连接数:

```sql
select count (*) from v$process -- 当前的连接数
select value from v$parameter where name = 'processes'-- 数据库允许的最大连接数
```


修改最大连接数:

```sql
alter system set processes = 300 scope = spfile;
```


重启数据库后生效:

```sh
$ sqlplus "/as sysdba"
shutdown immediate;
startup;
```


查看当前有哪些用户正在使用数据库:

```sql
SELECT osuser, a.username,cpu_time / executions / 1000000 || 's',
sql_fulltext,machine from v$session a, v$sqlarea b
where a.sql_address = b.address order by cpu_time / executions desc ;
```
