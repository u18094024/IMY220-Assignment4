$(function(){
    $('.details:nth-child(1) button').on('click',function(){
        
            var upVar= $('<button class="btn btn-dark pull-right" id="first">Update</button>');
            var getName = $('.details:nth-child(1) span').text();
            var inBox = $('<input type="text" class="col-8"/>');
            $(inBox).val(getName);
            $('.details:nth-child(1)').append(upVar);
            $(this).replaceWith(inBox);
            $('.details:nth-child(1) b').hide();
            $('.details:nth-child(1) span').hide();
      
    });

    $('.details:nth-child(2) button').on('click',function(){
        
      var upVar= $('<button class="btn btn-dark pull-right" id="second">Update</button>');
      var getName = $('.details:nth-child(2) span').text();
      var inBox = $('<input type="text" class="col-8"/>');
      $(inBox).val(getName);
      $('.details:nth-child(2)').append(upVar);
      $(this).replaceWith(inBox);
      $('.details:nth-child(2) b').hide();
      $('.details:nth-child(2) span').hide();
  });

  $('.details:nth-child(3) button').on('click',function(){
        
    var upVar= $('<button class="btn btn-dark pull-right" id="third">Update</button>');
    var getName = $('.details:nth-child(3) span').text();
    var inBox = $('<input type="email" class="col-8"/>');
    $(inBox).val(getName);
    $('.details:nth-child(3)').append(upVar);
    $(this).replaceWith(inBox);
    $('.details:nth-child(3) b').hide();
    $('.details:nth-child(3) span').hide();
});

$('.details:nth-child(4) button').on('click',function(){
        
  var upVar= $('<button class="btn btn-dark pull-right" id="fourth">Update</button>');
  var getName = $('.details:nth-child(4) span').text();
  var inBox = $('<input type="date" class="col-8"/>');
  $(inBox).val(getName);
  $('.details:nth-child(4)').append(upVar);
  $(this).replaceWith(inBox);
  $('.details:nth-child(4) b').hide();
  $('.details:nth-child(4) span').hide();
});

var existCondition = setInterval(function() {
  if ($('#first').length){
     clearInterval(existCondition);
     myFunction();
  }
 }, 100);

 var existCondition = setInterval(function() {
  if ($('#second').length) {
     clearInterval(existCondition);
     myFunction();
  }
 }, 100);

 var existCondition = setInterval(function() {
  if ($('#third').length) {
     clearInterval(existCondition);
     myFunction();
  }
 }, 100);

 var existCondition = setInterval(function() {
  if ($('#fourth').length) {
     clearInterval(existCondition);
     myFunction();
  }
 }, 100);

function myFunction(){

  $('.details:nth-child(1) #first').on('click',function(){
      var e= $('<button class="btn btn-dark pull-right">Edit</button>');
      $(this).replaceWith(e);
      $('.details:nth-child(1) b').show();
      $('.details:nth-child(1) span').text($('.details:nth-child(1) input').val());
      $('.details:nth-child(1) span').show();
      $('.details:nth-child(1) input').hide();
  });

  $('.details:nth-child(2) #second').on('click',function(){
    var e= $('<button class="btn btn-dark pull-right">Edit</button>');
    $(this).replaceWith(e);
    $('.details:nth-child(2) b').show();
    $('.details:nth-child(2) span').text($('.details:nth-child(2) input').val());
    $('.details:nth-child(2) span').show();
    $('.details:nth-child(2) input').hide();
});

    $('.details:nth-child(3) #third').on('click',function(){
      var e= $('<button class="btn btn-dark pull-right">Edit</button>');
      $(this).replaceWith(e);
      $('.details:nth-child(3) b').show();
      $('.details:nth-child(3) span').text($('.details:nth-child(3) input').val());
      $('.details:nth-child(3) span').show();
      $('.details:nth-child(3) input').hide();
    });

    $('.details:nth-child(4) #fourth').on('click',function(){
      var e= $('<button class="btn btn-dark pull-right">Edit</button>');
      $(this).replaceWith(e);
      $('.details:nth-child(4) b').show();
      $('.details:nth-child(4) span').text($('.details:nth-child(4) input').val());
      $('.details:nth-child(4) span').show();
      $('.details:nth-child(4) input').hide();
    });
}
});