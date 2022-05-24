// var dataset = {
//   "channel": {
//     "id": 1705035,
//     "name": "Corrosion detection",
//     "latitude": "0.0",
//     "longitude": "0.0",
//     "field1": "Corrosion %",
//     "created_at": "2022-04-15T07:01:30Z",
//     "updated_at": "2022-04-15T07:01:31Z",
//     "last_entry_id": 48
//   },
//   "feeds": [
//     { "created_at": "2022-04-15T07:56:02Z", "entry_id": 1, "field1": "0.00" },
//     { "created_at": "2022-04-15T08:01:17Z", "entry_id": 2, "field1": "0.00" },
//     { "created_at": "2022-04-15T08:01:41Z", "entry_id": 3, "field1": "0.00" },
//     { "created_at": "2022-04-15T08:02:05Z", "entry_id": 4, "field1": "32.23" },
//     { "created_at": "2022-04-15T08:02:52Z", "entry_id": 5, "field1": "28.47" },
//     { "created_at": "2022-04-15T08:03:16Z", "entry_id": 6, "field1": "0.00" },
//     { "created_at": "2022-04-15T08:03:40Z", "entry_id": 7, "field1": "0.00" },
//     { "created_at": "2022-04-15T08:04:04Z", "entry_id": 8, "field1": "29.41" },
//     { "created_at": "2022-04-15T08:04:52Z", "entry_id": 9, "field1": "0.00" },
//     { "created_at": "2022-04-15T08:05:40Z", "entry_id": 10, "field1": "30.98" },
//     { "created_at": "2022-04-15T08:06:04Z", "entry_id": 11, "field1": "31.60" },
//     { "created_at": "2022-04-15T08:06:52Z", "entry_id": 12, "field1": "31.29" },
//     { "created_at": "2022-04-15T08:07:16Z", "entry_id": 13, "field1": "0.00" },
//     { "created_at": "2022-04-15T08:08:04Z", "entry_id": 14, "field1": "0.00" },
//     { "created_at": "2022-04-15T08:08:51Z", "entry_id": 15, "field1": "0.00" },
//     { "created_at": "2022-04-15T08:09:39Z", "entry_id": 16, "field1": "0.00" },
//     { "created_at": "2022-04-15T08:10:03Z", "entry_id": 17, "field1": "0.00" },
//     { "created_at": "2022-04-15T08:10:27Z", "entry_id": 18, "field1": "35.37" },
//     { "created_at": "2022-04-15T08:10:51Z", "entry_id": 19, "field1": "32.86" },
//     { "created_at": "2022-04-15T08:11:39Z", "entry_id": 20, "field1": "34.58" },
//     { "created_at": "2022-04-15T08:12:03Z", "entry_id": 21, "field1": "34.58" },
//     { "created_at": "2022-04-15T08:12:27Z", "entry_id": 22, "field1": "35.37" },
//     { "created_at": "2022-04-19T15:34:58Z", "entry_id": 23, "field1": "28.62" },
//     { "created_at": "2022-04-19T15:35:22Z", "entry_id": 24, "field1": "0.00" },
//     { "created_at": "2022-04-19T15:36:10Z", "entry_id": 25, "field1": "0.00" },
//     { "created_at": "2022-04-19T15:36:58Z", "entry_id": 26, "field1": "34.74" },
//     { "created_at": "2022-04-19T15:37:21Z", "entry_id": 27, "field1": "34.58" },
//     { "created_at": "2022-04-19T15:38:09Z", "entry_id": 28, "field1": "40.39" },
//     { "created_at": "2022-04-19T15:38:33Z", "entry_id": 29, "field1": "0.00" },
//     { "created_at": "2022-04-19T15:39:21Z", "entry_id": 30, "field1": "36.15" },
//     { "created_at": "2022-04-19T15:39:45Z", "entry_id": 31, "field1": "35.52" },
//     { "created_at": "2022-04-20T06:59:02Z", "entry_id": 32, "field1": "54.03" },
//     { "created_at": "2022-04-20T06:59:26Z", "entry_id": 33, "field1": "52.31" },
//     { "created_at": "2022-04-20T06:59:50Z", "entry_id": 34, "field1": "51.05" },
//     { "created_at": "2022-04-21T08:24:05Z", "entry_id": 35, "field1": "0" },
//     { "created_at": "2022-05-03T14:30:19Z", "entry_id": 36, "field1": "56.07" },
//     { "created_at": "2022-05-03T14:30:43Z", "entry_id": 37, "field1": "51.21" },
//     { "created_at": "2022-05-03T14:33:56Z", "entry_id": 38, "field1": "68.00" },
//     { "created_at": "2022-05-03T14:34:20Z", "entry_id": 39, "field1": "67.84" },
//     { "created_at": "2022-05-03T14:37:55Z", "entry_id": 40, "field1": "51.37" },
//     { "created_at": "2022-05-03T14:38:19Z", "entry_id": 41, "field1": "48.70" },
//     { "created_at": "2022-05-03T14:38:43Z", "entry_id": 42, "field1": "41.80" },
//     { "created_at": "2022-05-03T14:39:07Z", "entry_id": 43, "field1": "47.29" },
//     { "created_at": "2022-05-05T08:27:37Z", "entry_id": 44, "field1": "30.19" },
//     { "created_at": "2022-05-05T08:28:01Z", "entry_id": 45, "field1": "44.62" },
//     { "created_at": "2022-05-05T08:28:49Z", "entry_id": 46, "field1": "40.23" },
//     { "created_at": "2022-05-05T08:29:13Z", "entry_id": 47, "field1": "47.60" },
//     { "created_at": "2022-05-05T08:30:01Z", "entry_id": 48, "field1": "45.25" }
//   ]
// }
// const field = [""];
// const date = [""];
// const time = [""];
// for(var i in dataset.feeds){
//   // console.log(dataset.feeds[i].field1);
//   if(dataset.feeds[i].field1 > 0){
//     field.push(dataset.feeds[i].field1);
//     let temp = dataset.feeds[i].created_at;    
//     var place=0;
//     //date
//     var x = "";
//     for(let i = 0;i< temp.length;i++){
//       if(temp[i] == "T") {
//         place = i+1;
//         break;
//       }
//       x+=temp[i];
//     }
//     date.push(x);
//    //time
//    var y = "";
//    for(let i = place;i< temp.length;i++){
//     if(temp[i] == "Z") break;
//     y+=temp[i];
//    }
//    time.push(y);
//   }
// }
// console.log(date);
// // console.log(time);
// // console.log(field);
// // 
"use strict";