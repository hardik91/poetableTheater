var iframes = $('.main_content').children()[1]; //target iFrame
var iBody = $($(iframes).contents());
var buttonIds = [];
//days index 2,3,4,5,6
for(var i = 2;i < 7 ; i++){
  var widget = iBody.find('.widgetwrapper')[i];
  var dayId = $(widget).attr('id').split("_").pop();
  var matchRateId = "widget_day_"+dayId+"_ddlmatchrate";
  iBody.find("input#"+matchRateId).attr('value','Regular Pay');
  iBody.find("div#wrapper_widget_day_"+dayId).find('tr#trStartEnd').show();
  iBody.find("div#wrapper_widget_day_"+dayId).find('tr#trBreak').show();
  iBody.find("input#widget_day_"+dayId+"_starttime").val('09:00');
  iBody.find("input#widget_day_"+dayId+"_endtime").val('17:30');
  iBody.find("button#widget_day_"+dayId+"_btnsaveadd")[0].trigger('click');
}
