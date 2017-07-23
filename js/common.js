;(function(win,doc){
    function change(){
        return doc.documentElement.style.fontSize = 20 * doc.documentElement.clientWidth / 320 + 'px';
    };
    win.addEventListener('resize',change,false);
    change();
})(window,document);
