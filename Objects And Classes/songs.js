function songs(array) {
    class Song {
        constructor(type,name,time) {
        this.type=type;
        this.name=name;
        this.time=time;
        }
    }
    let numberOfSongs=array.shift();
    let typeSong=array.pop();
    for (i=0;i<numberOfSongs;i++) {
        let [type,name,time]=array[i].split(`_`);
        let song=new Song(type,name,time);
        if (typeSong==`all`) {
            console.log(song.name);
        } else if (song.type==typeSong) {
            console.log(song.name);
        }
    }
}

// songs([3,

//     'favourite_DownTown_3:14',
    
//     'favourite_Kiss_4:16',
    
//     'favourite_Smooth Criminal_4:01',
    
//     'favourite'])
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])