import  * as Hapi  from "@hapi/hapi";
import {Note} from "../models/note";

let notesData:Note[]=[];

export const home = (request:Hapi.Request,h:Hapi.ResponseToolkit) =>{
    return h.response('Backend Application');
};


export const notesList = (request:Hapi.Request,h:Hapi.ResponseToolkit) =>{
    console.log("11111111111");
    return h.response(notesData);
}

export const addNote = (request:Hapi.Request,h:Hapi.ResponseToolkit) =>{
    const note = <Note>request.payload;

    notesData.push(note);

    return h.response(notesData);
}


export const updateNote = (request:Hapi.Request,h:Hapi.ResponseToolkit) =>{
    const id:number = request.params.id;

    const note = <Note>request.payload;
    let noteF = notesData.find((value:Note)=>{
        value.id===id;
    });
    if(noteF){
        noteF=note
    }

    return h.response(notesData);
}

export const deleteNote = (request:Hapi.Request,h:Hapi.ResponseToolkit) =>{
    const id:number = request.params.id;
    notesData = notesData.filter((value:Note)=>{
        if(value.id!==id) return value;
    });

    return h.response(notesData);
}

export const getNoteById = (request:Hapi.Request,h:Hapi.ResponseToolkit) =>{
    const id:number = request.params.id;
    console.log(id);
    let noteF = notesData.find((value:Note)=>{
        if(value.id===id) return value;
    });
   

    return h.response(noteF);
}
