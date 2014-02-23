---
layout: blog
title: Tortoisesvn has stopped working 的解决办法
category: efficient
description: Tortoisesvn停止工作的解决办法
tags: svn
keywords: svn, Tortoisesvn, 解决办法
---

## 问题现象

每次开机进入系统，或在桌面和资源管理器中右击，都会弹出窗口，提示“Tortoisesvn has stopped working”，并“Sending crash data...”。
之后会弹出新的窗口，提示”SendRpt:Error“，”SOAP 1.2 fault:SOAP-ENV:Sender[no subcode]”，“Detail："cant't connect with server"的错误。

有时只是提示第二个错误，真有些莫名其妙。

这导致资源管理器经常出问题，需要强制结束进程，很是麻烦。

## 问题原因

第一个错误很容易定位是Tortoisesvn的问题，第二个错误在网上一查，结合着SendRpt进程文件的信息，也会查出是Tortoisesvn的问题。再进一步查解决办法，网上有如下几种可行的解决办法。

1. 卸载重装。
2. 卸载重装，在安装过程中，将Crash Reporter安装选项去掉。
3. 和其他程序冲突，卸载金山词霸。

第一种方法，造成的原因可能是程序文件被损坏，或其注册表内容被意外破坏等。我用卸载工具把Tortoisesvn相关的软件（Tortoisegit和Slik SVN）都彻底卸载了，清理过注册表，再重装Tortoisesvn，来来回回，重启了好几次电脑，但问题依旧。

第二种方法，分析原因可能是那个插件造成的这个问题。但这个处理方法后果很严重，虽重装后没问题，但重启后，资源管理器就无限重启，导致电脑不能用。通过快捷键Ctrl+Shift+ESC打开任务管理器，再通过文件->新建任务（运行）卸载软件，把Tortoisesvn卸载掉才解决问题。

第三种方法，试了，还是不行。既然是和其他程序冲突，那所有程序都有可能。我回忆当时开始出现这问题的时间，我把那之前的一小段时间内安装的程序都卸载了，问题依然存在。

备注：我的电脑是Win7 64位 SP1。

虽重装系统看起来一定行，但做为一名软件爱好者，那样做代价太大。无赖，可行的方法都不行。就这样，被这折磨一两周，实在受不了资源管理器经常无响应，被迫重启，反过来又来查原因。
不过这次非常幸运，错误在“Sending crash data...”之后，自动打开一个网页[Issue 615: Crash in explorer because of winguard.dll](https://code.google.com/p/tortoisesvn/issues/detail?id=615)，里面说明了原因，如下。

> Project Member Reported by tortoisesvn, Feb 11

> This crash happens because of a bug in a dll named "winguard.dll" which is part of 魔方守护 (Cube Guardian) by 青岛软媒网络科技有限公司 (Network Technology Co., Ltd. Qingdao soft media)

> An update of this software might help to fix these issues.

> Nothing we can do in TSVN to fix this, since the problem is in another product.

官方解决原因为：和魔方守护进程有冲突。

## 解决办法

问题原因查到了，就好办了。分析解决方法如下：

1. 禁止该进程自启动，或禁用该进程对应的服务。
2. 卸载魔方电脑大师。

第二个方法简单快捷，但魔方电脑大师里的有些功能还是很实用的，不忍心，此方案就做为万不得已时的方案。先找该进程的开机启动项，或对应服务，发现都没有。正准备卸载时，想到可以程序里有设置项。一找，果然不错，在软件的“功能大全”的“魔方守护”设置里有设置，点击取消就可以了，见下图。

![]({{ site.img_url }}/images/svn/tortoisesvn-has-stopped-working.png)

## 总结

此次问题主要是由于Tortoisesvn与魔方守护进程冲突导致的，解决问题也很简单，只要不让魔方守护进程运行就可以了。不过，这都依赖官方及时给出了答案，从些看出TortoiseSVN团队还是相当给力的。同作为一个开发者，我知道面对大众用户，及千奇百怪的用户环境，要找出这种原因，实在不易。

当面对网上没有好的解决办法，我们也要靠自己，分析发生那问题之前做了哪些可能影响的操作，如安装或更新了某款软件，或修改某软件的比较重要的某个设置等等。如果“退回去”不是很麻烦的时候，我们可以用“退回去”的方式，自己尝试去解决这些问题。
