const NOTE_UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

/**
 * Parses a `standardnotes://note/<uuid>` deep link and returns the note uuid,
 * or undefined if the url is not a valid note link.
 */
export function parseNoteDeepLink(url: string | undefined, scheme: string): string | undefined {
  if (!url) {
    return undefined
  }

  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return undefined
  }

  if (parsed.protocol !== `${scheme}:` || parsed.hostname !== 'note') {
    return undefined
  }

  const uuid = parsed.pathname.replace(/^\/+|\/+$/g, '')

  return NOTE_UUID_REGEX.test(uuid) ? uuid : undefined
}

export function urlWithNote(startUrl: string, uuid: string): string {
  const url = new URL(startUrl)
  url.searchParams.set('note', uuid)
  return url.toString()
}
