$(document).ready(function () {

	//add first_item and last_item at ULs
	$(function(){
		$("li:first-child").addClass("first_item");
		$("li:last-child").addClass("last_item");
	});
	
   
	//Accordion
	function accordionMobile(){
	    // This will fire each time the window is resized:
        if($(window).width() >= 767) {
            // if larger or equal
		   $( ".events h3" ).off( "click" );
		   $( ".news h3" ).off( "click" );
		   $( ".media h3" ).off( "click" );
		   $('.events .upcomingEvents').show();
			$('.news .latestNews').show();
			$('.media .recentMediaList').show();
        } else {
		
			$('.events .upcomingEvents').hide();
			$('.news .latestNews').hide();
			$('.media .recentMediaList').hide();
            // if smaller
		   $(".events h3").off( "click" ).on("click", function(){
				$('.events .upcomingEvents').stop().toggle('fast');
				$(this).toggleClass("active");
				$(".events").toggleClass("active");
			});
			$(".news h3").off( "click" ).on("click", function(){
				$('.news .latestNews').stop().toggle('fast');
				$(this).toggleClass("active");
				$(".news").toggleClass("active");
			});
			$(".media h3").off( "click" ).on("click", function(){
				$('.media .recentMediaList').stop().toggle('fast');
				$(this).toggleClass("active");
				$(".media").toggleClass("active");
			});
        }	
	}
	accordionMobile();
	
	$(window).on("debouncedresize", accordionMobile);
	
	//SlickNav Menu
	$(function(){
		$('#nav .root_menu').slicknav({
			prependTo: '#mobile_nav',
			allowParentLinks: true,
			label: "Menu",
			'init': function(){
				if ($('body').hasClass('guest_user')) {
				  $('<li class="sign_in_nav"><div class="statusbar"><a href="/user/login.aspx" title="Login to access more features" >• Login</a><a href="/User/Registration.aspx" title="Apply for web site username and password" class="register_link">• Register</a></div></li>').insertBefore('.slicknav_nav > .first_item').fadeIn("slow");
				}else{
					$('<li class="log_out_nav"><div class="statusbar"><div class="greeting_div"></div><a href="/User/Logout.aspx" title="Sign out of the web site" class="logout_link">• Logout</a><a href="/Admin/Default.aspx" title="Access site administration pages" class="weboffice_link">• Web Office</a></div></li>').insertBefore('.slicknav_nav > .first_item').fadeIn("slow");
				}
			}
		});
	});
  
     /* remove sub menus from Home  */

 $("ul.root_menu > li.has_sub_menu:first-child > ul.sub_menu").remove(); 
       
  /* system page table spacing */

  /* cellpadding no longer valid in HTML5 */
$(".articlerow").css({'border-collapse':'separate','border-spacing':'3px'});
$(".systemPageContent .calbox table[cellpadding=1]").css({'border-collapse':'separate','border-spacing':'1px'});
$(".systemPageContent .calbox table[cellpadding=2]").css({'border-collapse':'separate','border-spacing':'2px'});
$(".systemPageContent .calbox table[cellpadding=4]").css({'border-collapse':'separate','border-spacing':'4px'});
$(".systemPageContent .calbox table[cellpadding=4] table").css({'border-collapse':'separate','border-spacing':'4px'});
$(".systemPageContent .calbox table[cellpadding=5]").css({'border-collapse':'separate','border-spacing':'5px'});
$(".systemPageContent div.individualLabel table[cellpadding=5], .systemPageContent div.familyLabel table[cellpadding=5]").css({'border-collapse':'separate','border-spacing':'5px'})
$(".systemPageContent .shadedBox table[cellpadding=2]").css({'border-collapse':'separate','border-spacing':'2px'})

$("body.eventpopupwindow table").css({'border-collapse':'separate','border-spacing':'5px'});

/* search results top shadedbox with filters */

$(".systemPageContent .shadedbox table:first[cellpadding=2]").css({'border-collapse':'separate','border-spacing':'6px'})

/* for media search results */

$(".systemPageContent  table.bottomseparator[cellpadding=2]").css({'border-collapse':'separate','border-spacing':'4px'});
$(".systemPageContent  table.topseparator[cellpadding=2]").css({'border-collapse':'separate','border-spacing':'4px'});
  
/* tidy up forums */
if(location.pathname.toLowerCase().indexOf('/forums/threads.aspx') != -1 || location.pathname.toLowerCase().indexOf('/forums/messages.aspx') != -1) $('.systemPageLeft').css({'display':'none'});
	
});