"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = exports.deleteNoteRoute = exports.updateNoteRoute = exports.getNoteByIdRoute = exports.addNoteRoute = exports.notesRoute = exports.homeRoute = void 0;
const controllers_1 = require("../controllers/controllers");
exports.homeRoute = {
    method: "GET",
    path: "/",
    handler: controllers_1.home
};
exports.notesRoute = {
    method: "GET",
    path: "/notes",
    handler: controllers_1.notesList
};
exports.addNoteRoute = {
    method: "POST",
    path: "/notes",
    handler: controllers_1.addNote
};
exports.getNoteByIdRoute = {
    method: "GET",
    path: "/notes/{id}",
    handler: controllers_1.getNoteById
};
exports.updateNoteRoute = {
    method: "PUT",
    path: "/notes/{id}",
    handler: controllers_1.updateNote
};
exports.deleteNoteRoute = {
    method: "DELETE",
    path: "/notes/{id}",
    handler: controllers_1.deleteNote
};
exports.Routes = [exports.addNoteRoute, exports.updateNoteRoute, exports.getNoteByIdRoute, exports.deleteNoteRoute, exports.notesRoute];
//# sourceMappingURL=routes.js.map