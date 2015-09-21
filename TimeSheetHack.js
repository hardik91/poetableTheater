var iframes = $('.main_content').children()[1]; //target iFrame
var iBody = $($(iframes).contents());
var buttonIds = [];
//days index 2,3,4,5,6
for(var i = 2;i < 7 ; i++){
  var widget = iBody.find('.widgetwrapper')[i];
  var dayId = $(widget).attr('id').split("_").pop();
  var matchRateId = "widget_day_"+dayId+"_ddlmatchrate";
  iBody.find("input#"+matchRateId).addClass('valid');
    iBody.find("input#"+matchRateId).val('Regular Pay');

  $(iBody.find('input#'+matchRateId).siblings()[1]).html('4346950');
  iBody.find("div#wrapper_widget_day_"+dayId).find('tr#trStartEnd').show();
  iBody.find("div#wrapper_widget_day_"+dayId).find('tr#trBreak').show();
  iBody.find("input#widget_day_"+dayId+"_starttime").timepicker('setTime','9:00 AM')
  iBody.find("input#widget_day_"+dayId+"_starttime").val('9:00 AM');
  iBody.find("input#widget_day_"+dayId+"endtime").timepicker('setTime','5:30 PM')
  iBody.find("input#widget_day_"+dayId+"_endtime").val('5:30 PM');
}

setTimeout(function(){
  for(var index in buttonsIds){
    if(typeof index != undefined){
      var id = buttonsIds[index];
      iBody.find(id)[0].click();
    }
  }
},500)
