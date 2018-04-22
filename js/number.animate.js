// 數字動畫
function callAnimation() {
  // num 1
  let $num1 = $('.num1');
  startValue = parseInt($num1.text(), 10),
    endValue = parseInt($num1.data('end-value'), 10);
  $({ int: startValue })
    .animate({
      int: endValue
    }, {
        duration: 2 * 1000,
        step: function () {
          $num1.text(Math.ceil(this.int));
        }
      });

  // num2
  let $num2 = $('.num2');
  startValue = parseInt($num2.text(), 10),
    endValue = parseInt($num2.data('end-value'), 10);
  $({ int: startValue })
    .animate({
      int: endValue
    }, {
        duration: 2 * 1000,
        step: function () {
          $num2.text(Math.ceil(this.int));
        }
      });

  // num3
  let $num3 = $('.num3');
  startValue = parseInt($num3.text(), 10),
    endValue = parseInt($num3.data('end-value'), 10);
  $({ int: startValue })
    .animate({
      int: endValue
    }, {
        duration: 2 * 1000,
        step: function () {
          $num3.text(Math.ceil(this.int));
        }
      });
}

// 計算位置
$(window).scroll(function () {
  // Returns height of browser viewport
  var window_height = $(window).height();

  var window_scrollTop = $(window).scrollTop();

  // Returns height of HTML document
  var document_height = $(document).height();

  // console.log(window_height);
  // console.log(window_scrollTop);
  // console.log(document_height);
  if (window.innerHeight > window.innerWidth && window_scrollTop > 60) {
    callAnimation();
  } else if (window_scrollTop > 427) {
    callAnimation();
  }
});
