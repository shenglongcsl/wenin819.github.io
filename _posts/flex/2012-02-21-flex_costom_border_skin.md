---
layout: blog
title: Flex borderSkin绘自定义宽度边框
description: Flex borderSkin绘自定义宽度边框的实例
category: program
tags: flex
keywords: flex, borderSkin, 自定义宽度
---

项目打印需要，要有边框，而且要设置边框的宽度。我们项目是用Twaver flex做的，经过查资料和尝试，采用在Network的rootCanvas上绘制边框。但Canvas的样式有限，不能直接修改边框宽度。经过一番尝试，通过borderSkin样式能达到我要的效果。由于在网上没有找到类似的文章，所以自己记录下，方便自己查阅，以及和大家分享讨论下这个方法的好坏。

这是我自定义的BorderSkin样式类CanvasBorderSkin.as，通过改写`updateDisplayList`方法绘制自定义宽度的边框。

```flex
package com.starit.util
{
     import flash.display.Graphics;
     import mx.skins.halo.HaloBorder;
     public class CanvasBorderSkin extends HaloBorder
     {
          public function CanvasBorderSkin()
          {
               super();
          }
          override protected function updateDisplayList(w:Number, h:Number):void
          {   
               super.updateDisplayList(w, h);
               var g:Graphics = graphics;
               g.clear();
               var borderThickness:Number = ViewController.CANVAS_BORDER_SIZE;
               //这个就是边框的宽度，可以自己定义
               var borderColor:uint = this.getStyle("borderColor");
               g.beginFill(borderColor);
               g.drawRect(0, 0, w, h);
               g.drawRect(borderThickness, borderThickness,
               w - 2 * borderThickness,
               h - 2 * borderThickness);
               g.endFill();
          }
     }
}
```

再在相应的视图里设置下network的样式：

```flex
network.rootCanvas.setStyle("borderStyle", "solid");
network.rootCanvas.setStyle("borderColor", 0x000000);
network.rootCanvas.setStyle("borderSkin", CanvasBorderSkin);
```

就能达到我要的效果了。
![](/images/flex/flex_custom_border_skin.png)
