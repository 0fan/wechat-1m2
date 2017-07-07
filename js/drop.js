;(function () {
  $.fn.extend({
    dropPlug: function (ct) {
      var CT=$.extend({},{
        background:'#fff',
        fontSize:14,
        data:[],
        itemHeight:40,
        top:0,
        time:500,
        cb:null
      },ct);
      var self=$(this);
      var w=$(window).width();
      var H=$(this).offset().top;
      var h=$(window).height();
      var fHeight=$(this).height();
      var arr=CT.data,
        top=CT.top,
        background=CT.background,
        itemHeight=CT.itemHeight,
        time=CT.time,
        cb=CT.cb,
        fontSize=CT.fontSize;
      if (!(arr instanceof Array)) {
        return;
      }
      var html = '<div class="dropList"><ul class="list">';
      $.each(arr,function (i,p) {
        console.log(p);
        html+='<li data-value="'+(p.value==''?'':p.value)+'" class="list-item">'+(p.id==''?'':p.id)+'</li>'
      })
      html+='</ul></div>';
      html=$(html);
      html.css({
        position:'absolute',
        top:H-10+'px',
        left:0,
        bottom:0,
        right:0,
        width:w+'px',
        height:'auto',
        background:'rgba(0,0,0,.6)',
        fontSize:fontSize+'px',
        display:'none',
        zIndex:'100',
        overflowX:'hidden', overflowY:'scroll'
      });
      if(html.height>H){
        html.css('height',H);
      }
      html.find('.list').css({
        listStyle:'none',
        margin:0,
        padding:0
      });
      html.find('.list-item').css({
        height:itemHeight+'px',
        lineHeight:itemHeight+'px',
        textAlign:'center',
        borderTop:'1px solid #ddd',
        margin:0,
        padding:0,
        color:'#000',
        background:'#fff'
      });
      setTimeout(function () {
        html.appendTo(self);
        cb&&cb();
      },0)
      self.on('click',function (e) {
        e.preventDefault();
        html.slideToggle(time).css('overflow','auto');
        if(self.siblings().children('.dropList').is(":visible")){
          self.siblings().children('.dropList').fadeOut();
        }
      })
    }
  })
})();
