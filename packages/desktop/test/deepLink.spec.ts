import test from 'ava'
import { parseNoteDeepLink, urlWithNote } from '../app/javascripts/Main/DeepLink'

const uuid = '0e2c9b63-8d6e-4a67-a7f3-6f1c2b7d9a10'

test('parses a valid note deep link', (t) => {
  t.is(parseNoteDeepLink(`standardnotes://note/${uuid}`, 'standardnotes'), uuid)
})

test('rejects other schemes, hosts and malformed uuids', (t) => {
  t.is(parseNoteDeepLink(`https://note/${uuid}`, 'standardnotes'), undefined)
  t.is(parseNoteDeepLink(`standardnotes://settings/${uuid}`, 'standardnotes'), undefined)
  t.is(parseNoteDeepLink('standardnotes://note/not-a-uuid', 'standardnotes'), undefined)
  t.is(parseNoteDeepLink('standardnotes://note/../../etc', 'standardnotes'), undefined)
  t.is(parseNoteDeepLink(undefined, 'standardnotes'), undefined)
})

test('appends the note param to the start url', (t) => {
  t.is(urlWithNote('file:///app/index.html', uuid), `file:///app/index.html?note=${uuid}`)
})
