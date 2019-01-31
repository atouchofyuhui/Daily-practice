// var maxHeight = 400;
// $(function() {
//   $(".dropdown > li").hover(
//     function() {
//       var $container = $(this),
//         $list = $container.find("ul"),
//         $anchor = $container.find("a"),
//         height = $list.height() * 1.1,
//         multiplier = height / maxHeight;
//       $container.data("origHeight", $container.height());
//       $anchor.addClass("hover");
//       $list.show().css({ paddingTop: $container.data("origHeight") });
//       if (multiplier > 1) {
//         $container
//           .css({ height: maxHeight, overflow: "hidden" })
//           .mousemove(function(e) {
//             var offset = $container.offset();
//             var relativeY =
//               (e.pageY - offset.top) * multiplier -
//               $container.data("origHeight") * multiplier;
//             if (relativeY > $container.data("origHeight")) {
//               $list.css("top", -relativeY + $container.data("origHeight"));
//             }
//           });
//       }
//     },
//     function() {
//       var $el = $(this);
//       $el
//         .height($(this).data("origHeight"))
//         .find("ul")
//         .css({ top: 0 })
//         .hide()
//         .end()
//         .find("a")
//         .removeClass("hover");
//     }
//   );
// });
$(function() {
  $(".dropdown>li").mouseenter(function() {
    // 鼠标进入
    $(this)
      .children("ul")
      .show();
  });
  $(".dropdown>li").mouseleave(function() {
    // 鼠标离开
    $(this)
      .children("ul")
      .hide();
  });
});
