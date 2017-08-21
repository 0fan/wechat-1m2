$.fn.dropPlug = function (ct) {

  var CT = $.extend({},{
    background :'#fff',
    fontSize   :14,
    data       :[],
    itemHeight :40,
    top        :0,
    time       :500,
    cb         :null
  },ct)

  var self    = $(this),
      w       = $(window).width(),
      H       = $(this).offset().top,
      h       = $(window).height(),
      fHeight = $(this).height()

  var arr        = CT.data,
      top        = CT.top,
      background = CT.background,
      itemHeight = CT.itemHeight,
      time       = CT.time,
      cb         = CT.cb,
      fontSize   = CT.fontSize

  if (!(arr instanceof Array)) {
    return
  }
  var html = '<div class="dropList"><ul class="list">'

  $.each(arr,function (i,p) {
    console.log(p)
    html+='<li data-value="'+(p.value==''?'':p.value)+'" class="list-item">'+(p.id==''?'':p.id)+'</li>'
  })

  html += '</ul></div>'
  html = $(html)

  html.css({
    
    top:H-10+'px',
    
    width:w+'px',
    
    
    fontSize:fontSize+'px',
    
    
    
  })

  if(html.height>H){
    html.css('height',H)
  }

  html.find('.list').css({
    listStyle:'none',
    margin:0,
    padding:0
  })

  html.find('.list-item').css({
    height     :itemHeight+'px',
    lineHeight :itemHeight+'px',
  })

  setTimeout(function () {
    html.appendTo(self)
    cb && cb()
  },0)

  self.on('click', function (e) {

    e.preventDefault()
    html.toggleClass('active')
    // if(self.siblings().children('.dropList').is(":visible")){
    //   self.siblings().children('.dropList').fadeOut()
    // }
    if($('#developer-drop').hasClass('active') || $('#build-drop').hasClass('active')){
      $('.content').css('overflow','hidden');
    }else {
      $('.content').css('overflow','auto');
    }


  })
}

$(document).on('click', '.drop-name', (e) => {
  $(this).removeClass('active')
})