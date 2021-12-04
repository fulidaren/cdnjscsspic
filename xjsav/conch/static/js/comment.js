function subcomment() {
     MAC.Ajax(maccms.path + '/index.php/comment/saveData','post','json',$('#win-comment').serialize() + '&comment_mid='+ $('.user_comment').attr('data-mid') + '&comment_rid=' + $('.user_comment').attr('data-id'),function(r){
        //MAC.Pop.Msg(100,20,r.msg,1000)ce24542ab211baa01f866ce4e9ab0156;
        if(r.code == 1){
            MAC.Ajax(maccms.path + '/index.php/comment/ajax.html?rid='+$('.user_comment').attr('data-id')+'&mid='+ $('.user_comment').attr('data-mid') +'&page=1','get','json','',function(r){
                $('.user_comment').html(r);
                // $('#win-comment').hide()
            })
        }
        else{
            if(MAC.Comment.Verify==1){
                ShowDialog('验证码错误');
                MAC.Verify.Refresh();
            }
        }
    });
}
function Show($page) {
    MAC.Ajax(maccms.path + '/index.php/comment/ajax.html?rid='+$('.user_comment').attr('data-id')+'&mid='+ $('.user_comment').attr('data-mid') +'&page='+$page,'get','json','',function(r){
        $('.user_comment').html(r);
    },function(){
        $('.user_comment').html('<a href="javascript:void(0)" onclick="Show('+$page+')">评论加载失败，点击我刷新...</a>');
    });
}