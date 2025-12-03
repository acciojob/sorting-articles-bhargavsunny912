//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
        
        let s=[];
        
        for(let i of bands){
            if(i.split(" ").includes("The")){
                s.push(i.replace("The",""));
            }
            else if(i.split(" ").includes("An")){
                s.push(i.replace("An",""));
            }
            else if(i.split(" ").includes("A")){
                s.push(i.replace("A",""));
            }
            else{
                s.push(i);
            }
        }
        s.sort((a,b)=>(a.trim()).localeCompare(b.trim()));
        
       for(let j of s){
        for(let k of bands){
            if(k.includes(j)){
                let li=document.createElement("li");
                let hr=document.createElement("hr");
                li.textContent=k;
                document.getElementById("bands").append(li,hr);
            }
        }
       } 