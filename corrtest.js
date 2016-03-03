var Correlation = require('node-correlation');
var request = require('request');

var testdata = 'xx Data table response google.visualization.Query.setResponse({"version":"0.6","status":"ok","sig":"1412428539","table":{"cols":[{"id":"date","label":"Date","type":"date","pattern":""},{"id":"query0","label":"keyword","type":"number","pattern":""}],"rows":[{"c":[{"v":new Date(2004,0,1),"f":"December 2003"},{"v":62.0,"f":"62"}]},{"c":[{"v":new Date(2004,1,1),"f":"January 2004"},{"v":71.0,"f":"71"}]},{"c":[{"v":new Date(2004,2,1),"f":"February 2004"},{"v":67.0,"f":"67"}]},{"c":[{"v":new Date(2004,3,1),"f":"March 2004"},{"v":60.0,"f":"60"}]},{"c":[{"v":new Date(2004,4,1),"f":"April 2004"},{"v":58.0,"f":"58"}]},{"c":[{"v":new Date(2004,5,1),"f":"May 2004"},{"v":67.0,"f":"67"}]},{"c":[{"v":new Date(2004,6,1),"f":"June 2004"},{"v":69.0,"f":"69"}]},{"c":[{"v":new Date(2004,7,1),"f":"July 2004"},{"v":66.0,"f":"66"}]},{"c":[{"v":new Date(2004,8,1),"f":"August 2004"},{"v":62.0,"f":"62"}]},{"c":[{"v":new Date(2004,9,1),"f":"September 2004"},{"v":62.0,"f":"62"}]},{"c":[{"v":new Date(2004,10,1),"f":"October 2004"},{"v":62.0,"f":"62"}]},{"c":[{"v":new Date(2004,11,1),"f":"November 2004"},{"v":62.0,"f":"62"}]},{"c":[{"v":new Date(2005,0,1),"f":"December 2004"},{"v":64.0,"f":"64"}]},{"c":[{"v":new Date(2005,1,1),"f":"January 2005"},{"v":62.0,"f":"62"}]},{"c":[{"v":new Date(2005,2,1),"f":"February 2005"},{"v":64.0,"f":"64"}]},{"c":[{"v":new Date(2005,3,1),"f":"March 2005"},{"v":64.0,"f":"64"}]},{"c":[{"v":new Date(2005,4,1),"f":"April 2005"},{"v":64.0,"f":"64"}]},{"c":[{"v":new Date(2005,5,1),"f":"May 2005"},{"v":65.0,"f":"65"}]},{"c":[{"v":new Date(2005,6,1),"f":"June 2005"},{"v":65.0,"f":"65"}]},{"c":[{"v":new Date(2005,7,1),"f":"July 2005"},{"v":62.0,"f":"62"}]},{"c":[{"v":new Date(2005,8,1),"f":"August 2005"},{"v":64.0,"f":"64"}]},{"c":[{"v":new Date(2005,9,1),"f":"September 2005"},{"v":63.0,"f":"63"}]},{"c":[{"v":new Date(2005,10,1),"f":"October 2005"},{"v":61.0,"f":"61"}]},{"c":[{"v":new Date(2005,11,1),"f":"November 2005"},{"v":57.0,"f":"57"}]},{"c":[{"v":new Date(2006,0,1),"f":"December 2005"},{"v":60.0,"f":"60"}]},{"c":[{"v":new Date(2006,1,1),"f":"January 2006"},{"v":60.0,"f":"60"}]},{"c":[{"v":new Date(2006,2,1),"f":"February 2006"},{"v":64.0,"f":"64"}]},{"c":[{"v":new Date(2006,3,1),"f":"March 2006"},{"v":58.0,"f":"58"}]},{"c":[{"v":new Date(2006,4,1),"f":"April 2006"},{"v":61.0,"f":"61"}]},{"c":[{"v":new Date(2006,5,1),"f":"May 2006"},{"v":60.0,"f":"60"}]},{"c":[{"v":new Date(2006,6,1),"f":"June 2006"},{"v":60.0,"f":"60"}]},{"c":[{"v":new Date(2006,7,1),"f":"July 2006"},{"v":62.0,"f":"62"}]},{"c":[{"v":new Date(2006,8,1),"f":"August 2006"},{"v":59.0,"f":"59"}]},{"c":[{"v":new Date(2006,9,1),"f":"September 2006"},{"v":59.0,"f":"59"}]},{"c":[{"v":new Date(2006,10,1),"f":"October 2006"},{"v":61.0,"f":"61"}]},{"c":[{"v":new Date(2006,11,1),"f":"November 2006"},{"v":53.0,"f":"53"}]},{"c":[{"v":new Date(2007,0,1),"f":"December 2006"},{"v":62.0,"f":"62"}]},{"c":[{"v":new Date(2007,1,1),"f":"January 2007"},{"v":62.0,"f":"62"}]},{"c":[{"v":new Date(2007,2,1),"f":"February 2007"},{"v":60.0,"f":"60"}]},{"c":[{"v":new Date(2007,3,1),"f":"March 2007"},{"v":60.0,"f":"60"}]},{"c":[{"v":new Date(2007,4,1),"f":"April 2007"},{"v":68.0,"f":"68"}]},{"c":[{"v":new Date(2007,5,1),"f":"May 2007"},{"v":70.0,"f":"70"}]},{"c":[{"v":new Date(2007,6,1),"f":"June 2007"},{"v":64.0,"f":"64"}]},{"c":[{"v":new Date(2007,7,1),"f":"July 2007"},{"v":63.0,"f":"63"}]},{"c":[{"v":new Date(2007,8,1),"f":"August 2007"},{"v":67.0,"f":"67"}]},{"c":[{"v":new Date(2007,9,1),"f":"September 2007"},{"v":65.0,"f":"65"}]},{"c":[{"v":new Date(2007,10,1),"f":"October 2007"},{"v":62.0,"f":"62"}]},{"c":[{"v":new Date(2007,11,1),"f":"November 2007"},{"v":61.0,"f":"61"}]},{"c":[{"v":new Date(2008,0,1),"f":"December 2007"},{"v":68.0,"f":"68"}]},{"c":[{"v":new Date(2008,1,1),"f":"January 2008"},{"v":67.0,"f":"67"}]},{"c":[{"v":new Date(2008,2,1),"f":"February 2008"},{"v":68.0,"f":"68"}]},{"c":[{"v":new Date(2008,3,1),"f":"March 2008"},{"v":67.0,"f":"67"}]},{"c":[{"v":new Date(2008,4,1),"f":"April 2008"},{"v":66.0,"f":"66"}]},{"c":[{"v":new Date(2008,5,1),"f":"May 2008"},{"v":67.0,"f":"67"}]},{"c":[{"v":new Date(2008,6,1),"f":"June 2008"},{"v":73.0,"f":"73"}]},{"c":[{"v":new Date(2008,7,1),"f":"July 2008"},{"v":71.0,"f":"71"}]},{"c":[{"v":new Date(2008,8,1),"f":"August 2008"},{"v":73.0,"f":"73"}]},{"c":[{"v":new Date(2008,9,1),"f":"September 2008"},{"v":74.0,"f":"74"}]},{"c":[{"v":new Date(2008,10,1),"f":"October 2008"},{"v":71.0,"f":"71"}]},{"c":[{"v":new Date(2008,11,1),"f":"November 2008"},{"v":74.0,"f":"74"}]},{"c":[{"v":new Date(2009,0,1),"f":"December 2008"},{"v":81.0,"f":"81"}]},{"c":[{"v":new Date(2009,1,1),"f":"January 2009"},{"v":88.0,"f":"88"}]},{"c":[{"v":new Date(2009,2,1),"f":"February 2009"},{"v":85.0,"f":"85"}]},{"c":[{"v":new Date(2009,3,1),"f":"March 2009"},{"v":87.0,"f":"87"}]},{"c":[{"v":new Date(2009,4,1),"f":"April 2009"},{"v":87.0,"f":"87"}]},{"c":[{"v":new Date(2009,5,1),"f":"May 2009"},{"v":90.0,"f":"90"}]},{"c":[{"v":new Date(2009,6,1),"f":"June 2009"},{"v":98.0,"f":"98"}]},{"c":[{"v":new Date(2009,7,1),"f":"July 2009"},{"v":92.0,"f":"92"}]},{"c":[{"v":new Date(2009,8,1),"f":"August 2009"},{"v":96.0,"f":"96"}]},{"c":[{"v":new Date(2009,9,1),"f":"September 2009"},{"v":100.0,"f":"100"}]},{"c":[{"v":new Date(2009,10,1),"f":"October 2009"},{"v":88.0,"f":"88"}]},{"c":[{"v":new Date(2009,11,1),"f":"November 2009"},{"v":81.0,"f":"81"}]},{"c":[{"v":new Date(2010,0,1),"f":"December 2009"},{"v":82.0,"f":"82"}]},{"c":[{"v":new Date(2010,1,1),"f":"January 2010"},{"v":91.0,"f":"91"}]},{"c":[{"v":new Date(2010,2,1),"f":"February 2010"},{"v":89.0,"f":"89"}]},{"c":[{"v":new Date(2010,3,1),"f":"March 2010"},{"v":89.0,"f":"89"}]},{"c":[{"v":new Date(2010,4,1),"f":"April 2010"},{"v":86.0,"f":"86"}]},{"c":[{"v":new Date(2010,5,1),"f":"May 2010"},{"v":85.0,"f":"85"}]},{"c":[{"v":new Date(2010,6,1),"f":"June 2010"},{"v":74.0,"f":"74"}]},{"c":[{"v":new Date(2010,7,1),"f":"July 2010"},{"v":75.0,"f":"75"}]},{"c":[{"v":new Date(2010,8,1),"f":"August 2010"},{"v":79.0,"f":"79"}]},{"c":[{"v":new Date(2010,9,1),"f":"September 2010"},{"v":79.0,"f":"79"}]},{"c":[{"v":new Date(2010,10,1),"f":"October 2010"},{"v":76.0,"f":"76"}]},{"c":[{"v":new Date(2010,11,1),"f":"November 2010"},{"v":69.0,"f":"69"}]},{"c":[{"v":new Date(2011,0,1),"f":"December 2010"},{"v":85.0,"f":"85"}]},{"c":[{"v":new Date(2011,1,1),"f":"January 2011"},{"v":91.0,"f":"91"}]},{"c":[{"v":new Date(2011,2,1),"f":"February 2011"},{"v":85.0,"f":"85"}]},{"c":[{"v":new Date(2011,3,1),"f":"March 2011"},{"v":84.0,"f":"84"}]},{"c":[{"v":new Date(2011,4,1),"f":"April 2011"},{"v":83.0,"f":"83"}]},{"c":[{"v":new Date(2011,5,1),"f":"May 2011"},{"v":85.0,"f":"85"}]},{"c":[{"v":new Date(2011,6,1),"f":"June 2011"},{"v":78.0,"f":"78"}]},{"c":[{"v":new Date(2011,7,1),"f":"July 2011"},{"v":80.0,"f":"80"}]},{"c":[{"v":new Date(2011,8,1),"f":"August 2011"},{"v":81.0,"f":"81"}]},{"c":[{"v":new Date(2011,9,1),"f":"September 2011"},{"v":76.0,"f":"76"}]},{"c":[{"v":new Date(2011,10,1),"f":"October 2011"},{"v":70.0,"f":"70"}]},{"c":[{"v":new Date(2011,11,1),"f":"November 2011"},{"v":65.0,"f":"65"}]},{"c":[{"v":new Date(2012,0,1),"f":"December 2011"},{"v":74.0,"f":"74"}]},{"c":[{"v":new Date(2012,1,1),"f":"January 2012"},{"v":84.0,"f":"84"}]},{"c":[{"v":new Date(2012,2,1),"f":"February 2012"},{"v":77.0,"f":"77"}]},{"c":[{"v":new Date(2012,3,1),"f":"March 2012"},{"v":76.0,"f":"76"}]},{"c":[{"v":new Date(2012,4,1),"f":"April 2012"},{"v":76.0,"f":"76"}]},{"c":[{"v":new Date(2012,5,1),"f":"May 2012"},{"v":76.0,"f":"76"}]},{"c":[{"v":new Date(2012,6,1),"f":"June 2012"},{"v":74.0,"f":"74"}]},{"c":[{"v":new Date(2012,7,1),"f":"July 2012"},{"v":71.0,"f":"71"}]},{"c":[{"v":new Date(2012,8,1),"f":"August 2012"},{"v":71.0,"f":"71"}]},{"c":[{"v":new Date(2012,9,1),"f":"September 2012"},{"v":69.0,"f":"69"}]},{"c":[{"v":new Date(2012,10,1),"f":"October 2012"},{"v":61.0,"f":"61"}]},{"c":[{"v":new Date(2012,11,1),"f":"November 2012"},{"v":51.0,"f":"51"}]},{"c":[{"v":new Date(2013,0,1),"f":"December 2012"},{"v":59.0,"f":"59"}]},{"c":[{"v":new Date(2013,1,1),"f":"January 2013"},{"v":65.0,"f":"65"}]},{"c":[{"v":new Date(2013,2,1),"f":"February 2013"},{"v":62.0,"f":"62"}]},{"c":[{"v":new Date(2013,3,1),"f":"March 2013"},{"v":63.0,"f":"63"}]},{"c":[{"v":new Date(2013,4,1),"f":"April 2013"},{"v":63.0,"f":"63"}]},{"c":[{"v":new Date(2013,5,1),"f":"May 2013"},{"v":62.0,"f":"62"}]},{"c":[{"v":new Date(2013,6,1),"f":"June 2013"},{"v":64.0,"f":"64"}]},{"c":[{"v":new Date(2013,7,1),"f":"July 2013"},{"v":63.0,"f":"63"}]},{"c":[{"v":new Date(2013,8,1),"f":"August 2013"},{"v":56.0,"f":"56"}]},{"c":[{"v":new Date(2013,9,1),"f":"September 2013"},{"v":57.0,"f":"57"}]},{"c":[{"v":new Date(2013,10,1),"f":"October 2013"},{"v":51.0,"f":"51"}]},{"c":[{"v":new Date(2013,11,1),"f":"November 2013"},{"v":45.0,"f":"45"}]},{"c":[{"v":new Date(2014,0,1),"f":"December 2013"},{"v":50.0,"f":"50"}]},{"c":[{"v":new Date(2014,1,1),"f":"January 2014"},{"v":52.0,"f":"52"}]},{"c":[{"v":new Date(2014,2,1),"f":"February 2014"},{"v":50.0,"f":"50"}]},{"c":[{"v":new Date(2014,3,1),"f":"March 2014"},{"v":51.0,"f":"51"}]},{"c":[{"v":new Date(2014,4,1),"f":"April 2014"},{"v":52.0,"f":"52"}]},{"c":[{"v":new Date(2014,5,1),"f":"May 2014"},{"v":48.0,"f":"48"}]},{"c":[{"v":new Date(2014,6,1),"f":"June 2014"},{"v":48.0,"f":"48"}]},{"c":[{"v":new Date(2014,7,1),"f":"July 2014"},{"v":45.0,"f":"45"}]},{"c":[{"v":new Date(2014,8,1),"f":"August 2014"},{"v":47.0,"f":"47"}]},{"c":[{"v":new Date(2014,9,1),"f":"September 2014"},{"v":48.0,"f":"48"}]},{"c":[{"v":new Date(2014,10,1),"f":"October 2014"},{"v":42.0,"f":"42"}]},{"c":[{"v":new Date(2014,11,1),"f":"November 2014"},{"v":38.0,"f":"38"}]},{"c":[{"v":new Date(2015,0,1),"f":"December 2014"},{"v":41.0,"f":"41"}]},{"c":[{"v":new Date(2015,1,1),"f":"January 2015"},{"v":45.0,"f":"45"}]},{"c":[{"v":new Date(2015,2,1),"f":"February 2015"},{"v":45.0,"f":"45"}]},{"c":[{"v":new Date(2015,3,1),"f":"March 2015"},{"v":45.0,"f":"45"}]},{"c":[{"v":new Date(2015,4,1),"f":"April 2015"},{"v":43.0,"f":"43"}]},{"c":[{"v":new Date(2015,5,1),"f":"May 2015"},{"v":44.0,"f":"44"}]},{"c":[{"v":new Date(2015,6,1),"f":"June 2015"},{"v":43.0,"f":"43"}]},{"c":[{"v":new Date(2015,7,1),"f":"July 2015"},{"v":42.0,"f":"42"}]},{"c":[{"v":new Date(2015,8,1),"f":"August 2015"},{"v":45.0,"f":"45"}]},{"c":[{"v":new Date(2015,9,1),"f":"September 2015"},{"v":45.0,"f":"45"}]},{"c":[{"v":new Date(2015,10,1),"f":"October 2015"},{"v":42.0,"f":"42"}]},{"c":[{"v":new Date(2015,11,1),"f":"November 2015"},{"v":38.0,"f":"38"}]},{"c":[{"v":new Date(2016,0,1),"f":"December 2015"},{"v":43.0,"f":"43"}]},{"c":[{"v":new Date(2016,1,1),"f":"January 2016"},{"v":47.0,"f":"47"}]},{"c":[{"v":new Date(2016,2,1),"f":"February 2016"},{"v":null}]}]}});'
/**var keyword = [ 100.00000000000001,
  98.9010989010989,
  98.9010989010989,
  95.6043956043956,
  87.91208791208791,
  91.20879120879121,
  83.51648351648352,
  87.91208791208791,
  83.51648351648352,
  82.41758241758242,
  75.82417582417582,
  73.62637362637363,
  81.31868131868133,
  82.41758241758242,
  80.21978021978023,
  76.92307692307693,
  79.12087912087912,
  78.02197802197803,
  71.42857142857143,
  73.62637362637363,
  70.32967032967034,
  67.03296703296704,
  64.83516483516485,
  62.63736263736264];
**/

// var stats = [ 66.83006535947713,
  // 66.83006535947713,
  // 66.83006535947713,
  // 66.83006535947713,
  // 54.738562091503276,
  // 54.738562091503276,
  // 54.738562091503276,
  // 54.738562091503276,
  // 66.83006535947713,
  // 66.83006535947713,
  // 66.83006535947713,
  // 66.83006535947713,
  // 81.69934640522877,
  // 66.83006535947713,
  // 66.83006535947713,
  // 66.83006535947713,
  // 66.83006535947713,
  // 66.83006535947713,
  // 81.69934640522877,
  // 100.00000000000001,
  // 81.69934640522877,
  // 100.00000000000001,
  // 100.00000000000001,
  // 100.00000000000001];

  var stats2 = [ 0.13293172690763053,
  0.8072289156626506,
  1.8072289156626504,
  0.2971887550200803,
  0.6626506024096386,
  6.024096385542169,
  20.080321285140563,
  11.004016064257028,
  100,
  11.004016064257028,
  4.899598393574297,
  2.70281124497992,
  1.8072289156626504,
  1.4779116465863453,
  0.9879518072289156,
  0.9879518072289156,
  0.6626506024096386,
  0.5421686746987951,
  0.5421686746987951,
  0.5421686746987951,
  0.6626506024096386,
  0.6626506024096386,
  0.5421686746987951,
  0.5421686746987951];

  var statsG = [ 100,
  100,
  100,
  100,
  81.62162162162161,
  81.62162162162161,
  100,
  100,
  100,
  100,
  100,
  100,
  81.62162162162161,
  100,
  81.62162162162161,
  81.62162162162161,
  81.62162162162161,
  81.62162162162161,
  81.62162162162161,
  81.62162162162161,
  81.62162162162161,
  81.62162162162161,
  81.62162162162161,
  81.62162162162161 ];


var keyword = 'tekmira';

var url = 'http://www.google.com/trends/fetchComponent?hl=en-US&geo=US&q='+keyword+'&cid=TIMESERIES_GRAPH_0&export=3';

  request.get(url, function(err,response,body) {
    if (err) {
      console.log('error');
    }
    else{
      var info = eval(body.slice(61));
      console.log(typeof info);



var arr = [];
for(var i = 26; i > 2; i--)
{
console.log(info.table.rows[info.table.rows.length-i].c[0].v);
arr.push(info.table.rows[info.table.rows.length-i].c[1].v);
console.log(info.table.rows[info.table.rows.length-i].c[1].v);
}


var max = 100/Math.max.apply(Math,arr);
var newArr = arr.map(function(x){
    return x*max;
});

console.log(arr);
console.log(newArr);

console.log(stats2.length);
console.log(newArr.length);

 console.log(Correlation.calc(stats2,newArr));
 }
 });

 // bob();

