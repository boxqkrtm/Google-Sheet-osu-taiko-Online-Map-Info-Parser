// 주의 키 넣어야 작동 token 변수에
// https://osu.ppy.sh/p/api/ 키 넣으세요
/**
 * get osu taiko map info
 *
 * @param {mapid} input map id
 * @return mapset info
 * @customfunction
 */
function OsuTaikoMap(mapid){
  const token = "add your token";
  var url = "https://osu.ppy.sh/api/get_beatmaps?k="+token+"&b="+mapid;
  var fetch  =UrlFetchApp.fetch(url);
  var response = JSON.parse(fetch);
  var beatmaps = response;
  var str = [];
  for(var i = 0; i < beatmaps.length; i++){
    if(beatmaps[i]["mode"] == "1"){
      var tmp = [];
      var keys = Object.keys(beatmaps[i]);
      var usekeys = ["title", "artist", "creator", "version", "beatmapset_id", "beatmap_id", "difficultyrating", "diff_size","diff_overall","diff_approach","diff_drain","bpm", "total_length"];
      for(var j = 0; j < usekeys.length; j++){
        tmp.push(usekeys[j])
      }
      str.push(tmp);
      tmp = [];
      for(var j = 0; j < usekeys.length; j++){
        tmp.push(JSON.stringify(beatmaps[i][usekeys[j]]).replaceAll("\"", ""));
      }
      str.push(tmp);
    }
  }
  Logger.log(fetch);
  return str;
}
