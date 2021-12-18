const notesCtrl = {}

const Note = require('../models/Note')

notesCtrl.renderNoteForm = (req, res) => {
  res.render('notes/new-note')
}

notesCtrl.createNewNote = async (req, res) => {
  const { title, description } = req.body
  const newNote = new Note({ title: title, description: description })
  await newNote.save()
  req.flash('success_msg', "Note added Successfully")
  res.redirect('/notes')
}

notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find().lean()
  res.render('notes/all-notes', { notes })
}

notesCtrl.editNotes = (req, res) => {

  res.send('edit notes')
}

notesCtrl.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean()
  res.render('notes/edit-note', { note })
}

notesCtrl.updateNote = async (req, res) => {  
  const { title, description } = req.body
  await Note.findByIdAndUpdate(req.params.id, {
    title: title,
    description: description,
  })
  req.flash('success_msg', "Note updated Successfully")
  res.redirect('/notes')
}

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
   req.flash('success_msg', "Note deleted Successfully")
  res.redirect('/notes')
}

module.exports = notesCtrl
