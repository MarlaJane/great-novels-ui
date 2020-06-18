import fetchNovels from '../actions/novels'

export const filterNovels = (list, term, setter) => {
  const filtered = list.filter(novel => novel.title.toLowerCase().includes(term.toLowercase()))

  setter(filtered)
}

export const retrieveNovels = async (listsSetter, filteredListSetter) => {
  const novels = await fetchNovels()

  listsSetter(novels)
  filteredListSetter(novels)
}
