class Player_screen{
    constructor(){
        var player_main = document.getElementById("player_main");
        player_main.style.height = screen.height + "px";
        if(screen.width < 610){
            player_main.style.width = screen.width + "px";
        };
        var content_button = document.getElementById("content_button");
        content_button.style.height = screen.height-300 + "px";
    };
}
onload = new Player_screen();

class Audio_play{
    constructor(){
        this.audio_source = document.getElementById("audio_source");
        this.header_text = document.getElementById("header_text");
        this.play_img = document.getElementById("play_img");
        this.isPlay = false;
        this.play_img.addEventListener("click",()=>{
            this.paues_play();
        });

        this.radio_names = [];
        this.radio_names[0] = "RADIO ALGERIE";
        this.radio_names[1] = "RADIO QATAR";
        this.radio_names[2] = "RADIO ALIRAQ";

        this.radio_source = [];
        this.radio_source[0] = "https://laghouat.ice.infomaniak.ch/03.aac";
        this.radio_source[1] = "http://mbn-channel-01.akacast.akamaistream.net/7/29/233450/v1/ibb.akacast.akamaistream.net/mbn_channel_01";
        this.radio_source[2] = "http://mbn-channel-05.akacast.akamaistream.net/7/25/233454/v1/ibb.akacast.akamaistream.net/mbn_channel_05";
        this.count = 0;
        this.setRadio();
        this.sound();
        this.theme();
        document.getElementById("next").addEventListener("click",()=>{
            if(this.count < this.radio_source.length-1){
                ++this.count;
                this.isPlay = false;
            }else{
                this.count = 0;
                this.isPlay = false;
            }
            this.setRadio();
            this.paues_play();
        });
        document.getElementById("back").addEventListener("click",()=>{
            if(this.count > 0){
                --this.count;
                this.isPlay = false;
            }else{
                this.count = 2;
                this.isPlay = false;
            }
            this.setRadio();
            this.paues_play();
        });
    }
    setRadio(){
        this.audio_source.src = this.radio_source[this.count];
        this.header_text.innerHTML = this.radio_names[this.count];
    }
    paues_play(){
        if(this.isPlay == false){
            this.play_img.src = "pause.png";
            this.audio_source.play();
            this.isPlay = true;
        }else{
            this.play_img.src = "play.png";
            this.audio_source.pause();
            this.isPlay = false;
        }
    }

    sound(){
        this.audio_source.volume = 50 / 100;
        this.audio_source.playbackRate = 1;
        this.range_volume = document.getElementById("range_volume");
        this.range_volume.addEventListener("change",()=>{
            this.audio_source.volume = this.range_volume.value / 100;
        });
        this.range_speed = document.getElementById("range_speed");
        this.range_speed.addEventListener("change",()=>{
            this.audio_source.playbackRate = this.range_speed.value /100;
        });
    }

    theme(){
        this.color1 = document.getElementById("color1");
        this.color2 = document.getElementById("color2");
        this.color3 = document.getElementById("color3");
        this.color4 = document.getElementById("color4");
        this.color5 = document.getElementById("color5");

        this.color1.addEventListener("click",()=>{
            localStorage.setItem("colors","linear-gradient(105deg, rgb(75 75 75) 50%, rgb(93 93 93) 28%")
            document.body.style.background = localStorage.getItem("colors");
        });
        this.color2.addEventListener("click",()=>{
            localStorage.setItem("colors","linear-gradient(to right, #ffaa80, #ff5e62)")
            document.body.style.background = localStorage.getItem("colors");;
        });
        this.color3.addEventListener("click",()=>{
            localStorage.setItem("colors","linear-gradient(180deg, #ff355e 22%, #343434 19%)")
            document.body.style.background = localStorage.getItem("colors");
        });
        this.color4.addEventListener("click",()=>{
            localStorage.setItem("colors","linear-gradient(185deg, #ffe700 22%, #547dc5 19%)")
            document.body.style.background = localStorage.getItem("colors");
        });
        this.color5.addEventListener("click",()=>{
            localStorage.setItem("colors","linear-gradient(45deg, rgb(255, 70, 70) 50%, rgb(70 70 75) 50%)")
            document.body.style.background = localStorage.getItem("colors");
        });
    }
    
};
onload = new Audio_play();

onload = document.body.style.background = localStorage.getItem("colors");