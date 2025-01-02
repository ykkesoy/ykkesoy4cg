function check_pc() {
    var ua = navigator.userAgent.toLowerCase();
    if ((ua.match(/(iphone|android|mobile|ipad|ios|ipod|mqqbrowser|midp|ucweb|micromessenger)/i))) {
        return false;
    } else {
        return true;
    }
}
function baidu_cm_code(pc_cmid,mo_cmid){
    pc_cmid = typeof(pc_cmid) == 'undefined' ? '' : pc_cmid;
    mo_cmid = typeof(mo_cmid) == 'undefined' ? '' : mo_cmid;
    if(!check_pc()){
        cmid = mo_cmid;
    }else{
        cmid = pc_cmid;
    }
    if(cmid != ''){
        var s = "_" + Math.random().toString(36).slice(2);
        document.write('<div class="' + s + '"></div>');
        (window.slotbydup = window.slotbydup || []).push({
            id: cmid,
            container: s,
            async: true
        });
    }
}