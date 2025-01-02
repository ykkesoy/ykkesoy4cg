$(function(){
    
    $("#book-search").on('submit', function(event) {
        event.preventDefault();
        skip_tz();
    });
    
    // 百度网站提交
    (function(){
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
        }
        else {
            bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();
    //头条自动提交


    // 收藏
    $("#bookmark").click(function() {
        if (window.sidebar && window.sidebar.addPanel) { // Firefox <23
            window.sidebar.addPanel(document.title,window.location.href,'');
        } else if(window.external && ('AddFavorite' in window.external)) { // Internet Explorer
            window.external.AddFavorite(location.href,document.title); 
        } else if(window.opera && window.print || window.sidebar && ! (window.sidebar instanceof Node)) { // Opera <15 and Firefox >23
            triggerBookmark.attr('rel', 'sidebar').attr('title', document.title);
            return true;
        } else { 
            alert('按 ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D 收藏');
        }
        return false;
    });

    // doc table
    $(".doc table").addClass("table").addClass("table-striped");

    // Function called if AdBlock is not detected
    function adBlockNotDetected() {
    }
    // Function called if AdBlock is detected
    var alert_once = 1;
    function adBlockDetected() {
    }

    // Recommended audit because AdBlock lock the file 'fuckadblock.js' 
    // If the file is not called, the variable does not exist 'fuckAdBlock'
    // This means that AdBlock is present
   /* if(typeof fuckAdBlock === 'undefined') {
        adBlockDetected();
    } else {
        fuckAdBlock.onDetected(adBlockDetected);
        fuckAdBlock.onNotDetected(adBlockNotDetected);
        fuckAdBlock.on(true, adBlockDetected);
        fuckAdBlock.on(false, adBlockNotDetected);
        fuckAdBlock.on(true, adBlockDetected).onNotDetected(adBlockNotDetected);
    }*/
    $(".choose-search a").click(function(){
        $(".choose-search a").removeClass("hover");
        $(this).addClass("hover");
        $('input[name="type"]').val($(this).text());
        $('#keywords').attr("placeholder", $(this).attr("data-note"));
    });
    
    
});



// :set ft=javascript
function alert_info(){
    str = "下载信息说明：本站的书籍信息来自互联网自动化抓取,\n 涉及版权的书籍，未提供下载链接，\n[这点请注意，不要上来就恐吓式的要求删除]\n\n本站仅提供信息展示和电商引导， 如果您是版权方，不想在本站展示您的书籍或者出版信息，请通过邮件 2815347247#qq.com 联系我，进行屏蔽和删除，邮件内容包含链接和要求即可。3个工作日内完成处理。 "
    alert(str);
}

function data_down(booktype,book_id){
    location.href = '/go_'+book_id+'_'+booktype+'.html';
}

function show_email(){
    var msg = "本站作为书籍导购站点，非电子书内容下载站点，\n 涉及版权内容均未提供实际内容下载地址，\n 如有问题，请核对后再联系本站删除，（请认真检查，谢谢）。\n 如需删除书籍索引联系Email:（2815347247#qq.com）,\n 提供需删除的链接即可，3个工作日内处理完毕。";
    alert(msg);
}


function skip_tz() {
	//跳转页面
	location.href="http://www.sdzhjzz.com/to.html";
}

function skip_ss() {
	var second=3;
	var time = document.getElementById("time");
	function show() {
		second--;
		console.log(second);
		if(second==0){
			//跳转页面
			skip_tz();
		}
		//用来动态设置里面的内容
		time.innerHTML=second+"";
	}
	//用来实现这个一秒实现一次这个方法
	setInterval(show,1000);
}

//页面处理
function ajax_page_data(book_id) {
    $.get("/book_ajax/?act=book_page_data&book_id=" + book_id,function(data,status){
        // console.log("数据: " + data + "\n状态: " + status);
        // if(rst.state == 1){ // }else{ // }
        rst = JSON.parse(data);
        // console.log(rst.a)
        var new_RIGHT_Html = Right_JD_Html
        new_RIGHT_Html = new_RIGHT_Html.replace("##title##", rst.item_title)
        new_RIGHT_Html = new_RIGHT_Html.replace("##jd_link##", rst.jd_url)
        new_RIGHT_Html = new_RIGHT_Html.replace("##bookimg##", rst.item_img)
        $('#right_pm_1').append(new_RIGHT_Html);

    });
}

function gzh_max(){
    // console.log("gzh_max");
    $("#down_gzh_search").on("click",".wx_min_img",function(){
        $(".wx_min_img").css("display","none");
        $(".wx_max_img").css("display","inline-block");
        // $("div").addClass("important");
        // console.log("gzh_max2");
    });
    // console.log("gzh_max4");
}