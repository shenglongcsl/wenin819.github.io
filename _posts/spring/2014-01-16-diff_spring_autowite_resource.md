---
layout: blog
title: Spring中@Autowired注解和@Resource注解的区别
category: program
description: Spring中@Autowired注解和@Resource注解的区别
tags: java, spring
keywords: spring, java, @Autowired, @Resource, 区别
---

### @Autowired注解

@Autowired可以对成员变量、方法和构造函数进行标注，在Spring在初始化这个bean时来完成自动装配的工作。

要使@Autowired能够工作，还需要在配置文件中加入以下代码。

```xml
<bean class="org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor" />
```

### @Resource注解

JSR-250标准注解，作用相当于@Autowired。

@Resource有两个属性是比较重要的，分别是name和type，Spring将@Resource注解的name属性解析为bean的名字，而type属性则解析为bean的类型。

@Resource装配顺序：

1. 如果同时指定了name和type，则从Spring上下文中找到唯一匹配的bean进行装配，找不到则抛出异常。
1. 如果指定了name，则从上下文中查找名称(id)匹配的bean进行装配，找不到则抛出异常。
1. 如果指定了type，则从上下文中找到类型匹配的唯一bean进行装配，找不到或者找到多个，都会抛出异常。
1. 如果既没有指定name，又没有指定type，则自动按照byName方式进行装配（见2）；如果没有匹配，则回退为一个原始类型进行匹配，如果匹配则自动装配，否则不装载。

要使@Resource能够工作，还需要在配置文件中加入以下代码。

```xml
<bean class="org.springframework.context.annotation.CommonAnnotationBeanPostProcessor" />
```

### 共同点

@Autowired与@Resource的共同点如下列表。

1. 用来装配bean。
1. 可以写在字段、setter方法和构建器上。
1. 可以通过bean的name指定。
1. 可以通过bean的类型指定。

### 区别

@Autowired与@Resource的区别如下表格。

@Autowired|@Resource
:---|:---
Spring专有注解|JSR-250标准注解
默认按类型装配|默认安装名称进行装配
通过@Qualifier注解配合按名称装配|通过注解name属性指定名称
默认按类型装配|通过注解type属性指定类型
可以通过注解required属性指定依赖对象是否必须存在|不指定name和type注解属性时，可以不是必须存在  

` `

### 结束语

推荐使用@Resource注解在字段上。这样就不用写setter方法了，并且这个注解是属于J2EE标准的，减少了与spring的耦合。

### 参考资源

- [@Autowired注解](http://book.51cto.com/art/201004/193380.htm)
- [Spring 3.0 注解注入详解](http://developer.51cto.com/art/201104/255395.htm)
- [Spring中@Autowired注解、@Resource注解的区别](http://www.chinasb.org/archives/2011/06/2443.shtml)
