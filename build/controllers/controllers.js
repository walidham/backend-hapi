"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNoteById = exports.deleteNote = exports.updateNote = exports.addNote = exports.notesList = exports.home = void 0;
let notesData = [];
const home = (request, h) => {
    return h.response('Backend Application');
};
exports.home = home;
const notesList = (request, h) => {
    console.log("11111111111");
    return h.response(notesData);
};
exports.notesList = notesList;
const addNote = (request, h) => {
    const note = request.payload;
    notesData.push(note);
    return h.response(notesData);
};
exports.addNote = addNote;
const updateNote = (request, h) => {
    const id = request.params.id;
    const note = request.payload;
    let noteF = notesData.find((value) => {
        value.id === id;
    });
    if (noteF) {
        noteF = note;
    }
    return h.response(notesData);
};
exports.updateNote = updateNote;
const deleteNote = (request, h) => {
    const id = request.params.id;
    notesData = notesData.filter((value) => {
        if (value.id !== id)
            return value;
    });
    return h.response(notesData);
};
exports.deleteNote = deleteNote;
const getNoteById = (request, h) => {
    const id = request.params.id;
    console.log(id);
    let noteF = notesData.find((value) => {
        if (value.id === id)
            return value;
    });
    return h.response(noteF);
};
exports.getNoteById = getNoteById;
//# sourceMappingURL=controllers.js.map