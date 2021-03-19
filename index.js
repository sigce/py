   
   $(document).ready(function()
   {
      $('#wb_Heading6').addClass('visibility-hidden');
      $('#wb_Text7').addClass('visibility-hidden');
      $('#wb_Image1').addClass('visibility-hidden');
      $('#wb_Image2').addClass('visibility-hidden');
      $('#wb_Image3').addClass('visibility-hidden');
      $('#wb_Image4').addClass('visibility-hidden');
      $('#wb_Text2').addClass('visibility-hidden');
      $('#wb_Text3').addClass('visibility-hidden');
      $('#wb_Text4').addClass('visibility-hidden');
      $('#wb_t1').addClass('visibility-hidden');
      $('#t2').addClass('visibility-hidden');
      $('#wb_t3').addClass('visibility-hidden');
      $('#TableA1').addClass('visibility-hidden');
      $('#TableA2').addClass('visibility-hidden');
      $('#TableA3').addClass('visibility-hidden');
      $("#SlideShow1").slideshow(
      {
         interval: 6000,
         type: 'sequence',
         effect: 'zoominout',
         direction: '',
         pagination: false,
         fullscreen: 4,
         maxWidth: 1280,
         effectlength: 2000
      });
      function onScrollHeading6()
      {
         var $obj = $("#wb_Heading6");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Heading6', 'transform-tada', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Heading6', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Heading6').inViewPort(true))
      {
         $('#wb_Heading6').addClass("in-viewport");
      }
      onScrollHeading6();
      $(window).scroll(function(event)
      {
         onScrollHeading6();
      });
      $("a[href*='#welcome']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_welcome').offset().top-88 }, 600, 'easeOutCirc');
      });
      $('#wb_welcome').parallax();
      $("a[href*='#flowerBookmark']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_flowerBookmark').offset().top }, 600, 'linear');
      });
      function onScrollflowerBookmark()
      {
         var $obj = $("#wb_flowerBookmark");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Text7', 'puff-in', 0, 500);
         }
      }
      onScrollflowerBookmark();
      $(window).scroll(function(event)
      {
         onScrollflowerBookmark();
      });
      function onScrollBookmark1()
      {
         var $obj = $("#wb_Bookmark1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Image1', 'animate-fade-in-up', 0, 1000);
            AnimateCss('wb_Image2', 'animate-fade-in-up', 500, 1000);
            AnimateCss('wb_Image3', 'animate-fade-in-up', 1000, 1000);
            AnimateCss('wb_Image4', 'animate-fade-in-up', 1500, 1000);
         }
      }
      onScrollBookmark1();
      $(window).scroll(function(event)
      {
         onScrollBookmark1();
      });
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      function onScrollText2()
      {
         var $obj = $("#wb_Text2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Text2', 'animate-fade-in-up', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Text2', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Text2').inViewPort(true))
      {
         $('#wb_Text2').addClass("in-viewport");
      }
      onScrollText2();
      $(window).scroll(function(event)
      {
         onScrollText2();
      });
      $("a[href*='#LayoutGrid5']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid5').offset().top }, 600, 'easeOutCirc');
      });
      function onScrollText3()
      {
         var $obj = $("#wb_Text3");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Text3', 'animate-fade-in-up', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Text3', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Text3').inViewPort(true))
      {
         $('#wb_Text3').addClass("in-viewport");
      }
      onScrollText3();
      $(window).scroll(function(event)
      {
         onScrollText3();
      });
      $("a[href*='#LayoutGrid4']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid4').offset().top }, 600, 'linear');
      });
      $("a[href*='#LayoutGrid6']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid6').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#LayoutGrid2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid2').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#features']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_features').offset().top-88 }, 600, 'easeOutCirc');
      });
      function onScrollBookmark2()
      {
         var $obj = $("#wb_Bookmark2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Text4', 'fall', 500, 500);
         }
      }
      onScrollBookmark2();
      $(window).scroll(function(event)
      {
         onScrollBookmark2();
      });
      function onScrollBookmark3()
      {
         var $obj = $("#wb_Bookmark3");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_t1', 'pop', 500, 500);
            AnimateCss('t2', 'pop', 500, 500);
            AnimateCss('wb_t3', 'pop', 500, 500);
         }
      }
      onScrollBookmark3();
      $(window).scroll(function(event)
      {
         onScrollBookmark3();
      });
      $('#ThemeableMenu1 .dropdown-toggle').dropdown({popperConfig:{placement:'bottom-start',modifiers:{computeStyle:{gpuAcceleration:false}}}});
      $(document).on('click','.ThemeableMenu1-navbar-collapse.show',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      function onScrollTableA1()
      {
         var $obj = $("#TableA1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('TableA1', 'animate-fade-in-up', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('TableA1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#TableA1').inViewPort(true))
      {
         $('#TableA1').addClass("in-viewport");
      }
      onScrollTableA1();
      $(window).scroll(function(event)
      {
         onScrollTableA1();
      });
      function onScrollTableA2()
      {
         var $obj = $("#TableA2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('TableA2', 'animate-fade-in-up', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('TableA2', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#TableA2').inViewPort(true))
      {
         $('#TableA2').addClass("in-viewport");
      }
      onScrollTableA2();
      $(window).scroll(function(event)
      {
         onScrollTableA2();
      });
      function onScrollTableA3()
      {
         var $obj = $("#TableA3");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            AnimateCss('TableA3', 'animate-fade-in-up', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('TableA3', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#TableA3').inViewPort(true))
      {
         $('#TableA3').addClass("in-viewport");
      }
      onScrollTableA3();
      $(window).scroll(function(event)
      {
         onScrollTableA3();
      });
      $("a[href*='#products']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_products').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("#ThemeableButton1").checkboxradio({ icon:false });
      $("#ThemeableButton2").checkboxradio({ icon:false });
      $("#ThemeableButton3").checkboxradio({ icon:false });
      $("#ThemeableButton4").checkboxradio({ icon:false });
      $("a[href*='#LayoutGrid7']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid7').offset().top-90 }, 600, 'easeOutCirc');
      });
      $("a[href*='#LayoutGrid9']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid9').offset().top }, 600, 'linear');
      });
      $("a[href*='#banner1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_banner1').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#banner2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_banner2').offset().top-60 }, 600, 'easeOutCirc');
      });
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_welcome').css('background-attachment', 'scroll');
      }
      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {$('#preloader').remove();}
   });
   $(window).on('load', function()
   {
      $('#preloader').remove();
   });
   
   $(document).ready(function()
   {
      $('#welcome').prepend('<div id="particles1"></div>');
      particlesJS('particles1', {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "19239F"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#19239F"
            },
            "polygon": {
              "nb_sides": 3
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          }, 
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 90,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "19239F",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 50,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
   });
   
   $(document).ready(function()
   {
      // NOTE: each image in the gallery has a class 'filter' with 'lollipops', 'candy' or 'cakes' as the category in Object HTML->Inside Tag
      $( "input[name=filter]:radio" ).click(function()
      {
         var value = $(this).attr('value');
         value = value.toLowerCase();
         if (value == "todas")
         {
           $('.filter').parent().show('1000');
         }
         else
         {
            $(".filter").not('.'+value).parent().hide('3000');
            $('.filter').filter('.'+value).parent().show('3000');
         }
         $("input[name=filter]:radio").checkboxradio("refresh");
      });
   });
      
      var wb_indexTimer1;
      function TimerStartindexTimer1()
      {
         wb_indexTimer1 = setTimeout(function()
         {
            var event = null;
            ShowObjectWithEffect('loader', 0, 'fade', 500);
            AnimateCss('Picture2', 'animate-fade-in-left', 400, 500);
            AnimateCss('wb_t1', 'animate-fade-in-right', 450, 500);
         }, 0);
      }
      function TimerStopindexTimer1()
      {
         clearTimeout(wb_indexTimer1);
      }
      TimerStartindexTimer1();
            
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1117864105255944');
        fbq('track', 'PageView');
            
              window.fbAsyncInit = function() {
                FB.init({
                  xfbml            : true,
                  version          : 'v5.0'
                });
              };
      
              (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/es_ES/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
      