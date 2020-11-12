// ==UserScript==
// @name         vidNameExtractor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://online.yildiz.edu.tr/?transaction=LMS.EDU.LessonProgram.ViewOnlineLessonProgramForStudent/*
// @grant        none
// ==/UserScript==

setTimeout(function() {
    let links = [];
    let i = 0;
    let clicked = false;
    function getTable(){
        let table =document.getElementsByClassName("table table-hover table-striped table-list dataTable table-mobile");
        table = table[table.length-1];
        return table.children[1].children
    }
    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
    let myInterval = setInterval(()=>{
        if(!clicked){
            let rows = getTable();
            let but = rows[i].children[4].firstElementChild;
            if(but.tagName == "A" && but.innerText == "Kayıttan İzle / Dinle"){
                but.click()
                clicked = true;
            } else {
                i++;
            }
        } else {
            try{
                let link = document.getElementsByClassName("modal-content")[0].children[1].firstElementChild.children[1].firstElementChild.children[4].firstElementChild.href;
                if(link && links.indexOf(link) == -1){
                    links.push(link);
                    clicked = false;
                    i++
                    if(i == getTable().length){
                        links = links.reverse();
                        let data = {
                            name: document.getElementsByClassName("col-sm-8 grid8")[1].innerText.replaceAll(" ", "_"),
                            video_links: links
                        }
                        console.log(data);
                        download("data.json", JSON.stringify(data));
                        clearInterval(myInterval);
                    }
                }
            }catch(e){
                clicked = false;
                i++
            }
        }
    },1500)
}, 4e3);