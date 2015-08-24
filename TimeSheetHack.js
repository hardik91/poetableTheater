var iframes = $('.main_content').children()[1]; //target iFrame
var iBody = $($(iframes).contents());
var buttonsIds = [];
//days index 2,3,4,5,6
for(var i = 2;i < 7 ; i++){
  var widget = iBody.find('.widgetwrapper')[i];
  var dayId = $(widget).attr('id').split("_").pop();
  var matchRateId = "widget_day_"+dayId+"_ddlmatchrate";
  iBody.find("input#"+matchRateId).attr('value','Regular Pay');
  iBody.find("div#wrapper_widget_day_"+dayId).find('tr#trStartEnd').show();
  iBody.find("div#wrapper_widget_day_"+dayId).find('tr#trBreak').show();
  
  setTimeout(function(){
    $(iBody.find("input#widget_day_"+dayId+"_starttime")[0]).trigger('focus');
    iBody.find('div#ui-timepicker-div').show();
    iBody.find('table tr [data-hour="17"] a').removeClass('ui-state-active');
    iBody.find('table tr [data-minute="30"] a').removeClass('ui-state-active');
    iBody.find('table tr [data-hour="9"] a').addClass('ui-state-active');
    iBody.find('table tr [data-minute="00"] a').addClass('ui-state-active');
    iBody.find('div#ui-timepicker-div').show();
  },100);

  // $(iBody.find("input#widget_day_"+dayId+"_endtime")[0]).trigger('focus');
  // iBody.find('div#ui-timepicker-div').show();
  // iBody.find('table tr [data-hour="9"] a').removeClass('ui-state-active');
  // iBody.find('table tr [data-minute="00"] a').removeClass('ui-state-active');
  // iBody.find('table tr [data-hour="17"] a').addClass('ui-state-active');
  // iBody.find('table tr [data-minute="30"] a').addClass('ui-state-active');

  //iBody.find("input#widget_day_"+dayId+"_endtime").val('5:30 PM');
  buttonsIds.push("button#widget_day_"+dayId+"_btnsaveadd");
}

setTimeout(function(){
  for(var index in buttonsIds){
    if(typeof index != undefined){
      var id = buttonsIds[index];
      iBody.find(id)[0].click();
    }
  }
},500)
