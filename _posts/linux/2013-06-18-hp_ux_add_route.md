---
layout: blog
title: 在HP-UX B.11.31添加路由的方法
category: program
description: 在HP-UX B.11.31添加路由的方法
tags: linux, HP-UX
keywords: linux, HP-UX, 路由配置
---

### 查看现有路由表

```sh
# netstat -rn
Routing tables
Destination           Gateway            Flags Refs Interface  Pmtu
127.0.0.1             127.0.0.1          UH    0    lo0       32808
134.0.0.0             134.98.157.225     UG    0    lan2       1500
127.0.0.0             127.0.0.1          U     0    lo0       32808
```

### 添加临时静态路由

```sh
# route add net 132.0.0.0 netmask 255.0.0.0 134.98.157.225 1(count)
add net 132.0.0.0 gateway 134.98.157.225
```

count为一个整数，表示网关是远程主机还是本地主机。如果路由通过一个远程网关到达目标，则count 应为一个大于0 的数字。如果路由通向destination 并且网关是本地主机，则count 应该为0。count 的缺省值为零。如果count为负，则结果未定义。

也可以通过shm/sam图形化工具增加临时路由，在此不做说明。

### 测试路由添加是否成功

```sh
# ping 132.35.102.158
PING 132.35.102.158: 64 byte packets
64 bytes from 132.35.102.158: icmp_seq=0. time=40. ms
64 bytes from 132.35.102.158: icmp_seq=1. time=39. ms
64 bytes from 132.35.102.158: icmp_seq=2. time=39. ms

----132.35.102.158 PING Statistics----
3 packets transmitted, 3 packets received, 0% packet loss
round-trip (ms)  min/avg/max = 39/39/40
```

### 删除路由表

```sh
#route -f
```

### 添加永久路由

```sh
#vi /etc/rc.config.d/netconf
```

添加或修改以下内容：

```
ROUTE_DESTINATION[0]=default
ROUTE_MASK[0]=""
ROUTE_GATEWAY[0]="10.200.6.201"
ROUTE_COUNT[0]="1"
ROUTE_ARGS[0]=""
ROUTE_SOURCE[0]=""
 
ROUTE_DESTINATION[5]="net 132.0.0.0"
ROUTE_MASK[5]="255.0.0.0"
ROUTE_GATEWAY[5]="134.98.157.225"
ROUTE_COUNT[5]="1"
ROUTE_ARGS[5]="-p 1500"
 
ROUTE_DESTINATION[1]="130.0.0.0"
ROUTE_MASK[1]="255.0.0.0"
ROUTE_GATEWAY[1]="134.98.157.225"
ROUTE_COUNT[1]="1"
ROUTE_ARGS[1]=""
```
 
让修改后的配置生效

```sh
USAGE: /sbin/init.d/net {start_msg | stop_msg | start | stop}
# /sbin/init.d/net start
```
