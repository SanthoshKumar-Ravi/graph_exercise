const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
input: fs.createReadStream('crimedata.csv')
});

var data_3=[];
var data_1=[];
var i=0;
var yr_theft=[];
var bar_graph_result=[];
var date_index,theft_index;
var theft_over_2001=0,theft_under_2001=0,
    theft_over_2002=0,theft_under_2002=0,theft_over_2003=0,theft_under_2003=0,
    theft_over_2004=0,theft_under_2004=0,theft_over_2005=0,theft_under_2005=0,
    theft_over_2006=0,theft_under_2006=0,theft_over_2008=0,theft_under_2008=0,
    theft_over_2007=0,theft_under_2007=0,theft_over_2009=0,theft_under_2009=0,
    theft_over_2010=0,theft_under_2010=0,theft_over_2011=0,theft_under_2011=0,
    theft_over_2012=0,theft_under_2012=0,
    theft_over_2013=0,theft_under_2013=0,theft_over_2014=0,theft_under_2014=0,
    theft_over_2015=0,theft_under_2015=0,theft_over_2016=0,theft_under_2016=0;

 rl.on('line', function (data) {
  if(i==0){
    data_1=data.split(',');
    date_index=data_1.indexOf('Date');
    theft_index=data_1.indexOf('Description');
    i++;
  }
  
   var result = [];
   //console.log(data);
   //console.log(data);
   data_1=data.split(',');
var j1=data_1[date_index].substring(6,10);
yr_theft.push({year:j1,desc:data_1[theft_index]});
});


 function hi(yr_theft)
{
  //console.log(yr_theft);
  for(i=0;i<yr_theft.length;i++)
  {
  if(yr_theft[i].year=='2001')
   {
    
    if(yr_theft[i].desc=='OVER $500')
   {
        theft_over_2001++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2001++;
   }
 }


   if(yr_theft[i].year=='2002')
   {
   if(yr_theft[i].desc=='OVER $500')
   {
        theft_over_2002++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2002++;
   }}
   
   if(yr_theft[i].year=='2003')
   {
   if(yr_theft[i].desc=='OVER $500')
   {
    
    theft_over_2003++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2003++;
   }}

   if(yr_theft[i].year=='2004')
   {
   if(yr_theft[i].desc=='OVER $500')
   {
    
    theft_over_2004++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2004++;
   }}

   if(yr_theft[i].year=='2005')
   {
   if(yr_theft[i].desc=='OVER $500')
   {
    
    theft_over_2005++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2005++;
   }}

   if(yr_theft[i].year=='2006')
   {
   if(yr_theft[i].desc=='OVER $500')
   {
    
    theft_over_2006++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2006++;
   }}


   if(yr_theft[i].year=='2007')
   {
   if(yr_theft[i].desc=='OVER $500')
   {
    
    theft_over_2007++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2007++;
   }}

   if(yr_theft[i].year=='2008')
   {
   if(yr_theft[i].desc=='OVER $500')
   {
    
    theft_over_2008++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2008++;
   }}

   if(yr_theft[i].year=='2009')
   {
   if(yr_theft[i].desc=='OVER $500')
   {
    
    theft_over_2009++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2009++;
   }}

   if(yr_theft[i].year=='2010')
   {
   if(yr_theft[i].desc=='OVER $500')
   {
    
    theft_over_2010++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2010++;
   }}

   if(yr_theft[i].year=='2011')
   {
   if(yr_theft[i].desc=='OVER $500')
   {
    
    theft_over_2011++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2011++;
   }}

   if(yr_theft[i].year=='2012')
   {
   if(yr_theft[i].desc=='OVER $500')
   {
    
    theft_over_2012++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2012++;
   }}

   if(yr_theft[i].year=='2013')
   {
   if(yr_theft[i].desc=='OVER $500')
   {
    
    theft_over_2013++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2013++;
   }}

   if(yr_theft[i].year=='2014')
   {
   if(yr_theft[i].desc=='OVER $500')
   {
    
    theft_over_2014++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2014++;
   }}

   if(yr_theft[i].year=='2015')
   {
   if(yr_theft[i].desc=='OVER $500')
   {
    
    theft_over_2015++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2015++;
   }}

   if(yr_theft[i].year=='2016')
   {
   if(yr_theft[i].desc=='OVER $500')
   {
    
    theft_over_2016++;
   }
   if(yr_theft[i].desc=='$500 AND UNDER'){
    theft_under_2016++;
   }}
 }

 console.log("in 2001 "+theft_under_2001+" "+theft_over_2001);
 console.log("in 2002 "+theft_under_2002+" "+theft_over_2002);
 console.log("in 2003 "+theft_under_2003+" "+theft_over_2003);
 console.log("in 2004 "+theft_under_2004+" "+theft_over_2004);
 console.log("in 2005 "+theft_under_2005+" "+theft_over_2005);
 console.log("in 2006 "+theft_under_2006+" "+theft_over_2006);
 console.log("in 2007 "+theft_under_2007+" "+theft_over_2007);
 console.log("in 2008"+theft_under_2008+" "+theft_over_2008);
 console.log("in 2009 "+theft_under_2009+" "+theft_over_2009);
 console.log("in 2010 "+theft_under_2010+" "+theft_over_2010);
 console.log("in 2011 "+theft_under_2011+" "+theft_over_2011);
 console.log("in 2012 "+theft_under_2012+" "+theft_over_2012);
 console.log("in 2013 "+theft_under_2013+" "+theft_over_2013);
 console.log("in 2014 "+theft_under_2014+" "+theft_over_2014);
 console.log("in 2015 "+theft_under_2015+" "+theft_over_2015);
 console.log("in 2016 "+theft_under_2016+" "+theft_over_2016);

/*
 for(i=1;i<=16;i++)
 {
 	if(i<=9){
 	var a="theft_under_200"+i;
 	var b="theft_above_200"+i;
 	bar_graph_result.push({year:200+i,theft_under_500:"theft_under_200"+i;,theft_above_500:"theft_above_200"+i);
	}
 	if(i>=10){
	var a="theft_under_20"+i;
 	var b="theft_above_20"+i;
 	bar_graph_result.push({year:200+i,theft_under_500:"theft_under_20"+i,theft_above_500:"theft_above_20"+i});

 	}
 }*/

bar_graph_result.push({year:'2001',theft_under_500:theft_under_2001,theft_above_500:theft_over_2001});
bar_graph_result.push({year:'2002',theft_under_500:theft_under_2002,theft_above_500:theft_over_2002});
bar_graph_result.push({year:'2003',theft_under_500:theft_under_2003,theft_above_500:theft_over_2003});
bar_graph_result.push({year:'2004',theft_under_500:theft_under_2004,theft_above_500:theft_over_2004});
bar_graph_result.push({year:'2005',theft_under_500:theft_under_2005,theft_above_500:theft_over_2005});
bar_graph_result.push({year:'2006',theft_under_500:theft_under_2006,theft_above_500:theft_over_2006});
bar_graph_result.push({year:'2007',theft_under_500:theft_under_2007,theft_above_500:theft_over_2007});
bar_graph_result.push({year:'2008',theft_under_500:theft_under_2008,theft_above_500:theft_over_2008});
bar_graph_result.push({year:'2009',theft_under_500:theft_under_2009,theft_above_500:theft_over_2009});
bar_graph_result.push({year:'2009',theft_under_500:theft_under_2010,theft_above_500:theft_over_2010});
bar_graph_result.push({year:'2010',theft_under_500:theft_under_2011,theft_above_500:theft_over_2011});
bar_graph_result.push({year:'2012',theft_under_500:theft_under_2012,theft_above_500:theft_over_2012});
bar_graph_result.push({year:'2013',theft_under_500:theft_under_2013,theft_above_500:theft_over_2013});
bar_graph_result.push({year:'2014',theft_under_500:theft_under_2014,theft_above_500:theft_over_2014});
bar_graph_result.push({year:'2015',theft_under_500:theft_under_2015,theft_above_500:theft_over_2015});
bar_graph_result.push({year:'2016',theft_under_500:theft_under_2016,theft_above_500:theft_over_2016});

return bar_graph_result;
}

 rl.on('close', function() {
var result=hi(yr_theft);
fs.writeFile('part1.json', JSON.stringify(result));
 });

 