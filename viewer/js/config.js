// NOTES: 
// 1. paths are with respect to the location of 'streaming-tsv-parser.js 
// 2. roi is the image size in pixels. Leave x0 and y0 at zero and set x1 to the width and y1 to the height 
// 3. tiles should point to the folder that keeps your pyramid of tiles. If you do not have that just 
//    change the link to a blind one (change the jpg extension for example). The viewer should work 
//    without the dapi background though 
// 4. size is the tsv size in bytes. I use os.path.getsize() to get it. Not crucial if you 
//    dont get it right, ie the full tsv will still be parsed despite this being wrong. It 
//    is used by the loading page piecharts to calc how far we are 
// 5. Leave zoomLevels to 10 
function config() {

    return {

       "cellData": {"mediaLink": "../../data/cellData.tsv", "size": "3185788"},

       "geneData": {"mediaLink": "../../data/geneData.tsv", "size": "40045323"},

       "cellBoundaries": {"mediaLink": "../../data/cellBoundaries.tsv", "size": "2089647"},

       "roi": {"x0": 0, "x1": 7658, "y0": 0, "y1": 5886},

       "zoomLevels": 10,

       layers: {  'tdtom': '../../data/tiles_tom/{z}/{y}/{x}.jpg',

                           'dapi': '../../data/tiles/{z}/{y}/{x}.jpg',

                          'empty': '',

 

},

        }

}
   
