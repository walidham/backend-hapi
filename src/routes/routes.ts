import  * as Hapi  from "@hapi/hapi";

import {home,notesList,addNote,updateNote,deleteNote,getNoteById} from "../controllers/controllers";
import { noteValidator } from "../validators/validators";

export const homeRoute = {
    method : "GET",
    path : "/",
    handler : home
};

export const notesRoute = {
    method : "GET",
    path : "/notes",
    handler : notesList
}

export const addNoteRoute = {
    method : "POST",
    path : "/notes",
    options: noteValidator,
    handler : addNote
}

export const getNoteByIdRoute = {
    method : "GET",
    path : "/notes/{id}",
    handler : getNoteById
}

export const updateNoteRoute = {
    method : "PUT",
    path : "/notes/{id}",
    options: noteValidator,
    handler : updateNote
}

export const deleteNoteRoute = {
    method : "DELETE",
    path : "/notes/{id}",
    handler : deleteNote
}

export const Routes:Hapi.ServerRoute<Hapi.ReqRef>[] = [addNoteRoute,updateNoteRoute,getNoteByIdRoute,deleteNoteRoute,notesRoute];
