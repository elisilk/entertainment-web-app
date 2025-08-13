const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

const isStr = function (value) {
  return typeof value === 'string' || value instanceof String
}

const isNonEmptyStr = function (value) {
  return isStr(value) && value.trim() !== ''
}

const prepStrForSearch = function (value) {
  // replace all single quotes with an escaped single quote
  // TODO: replace other characters?
  return value.trim().toLowerCase().replace(/['’]/g, "\\'")
}

const strInStr = function (string, searchTerm) {
  const preppedString = prepStrForSearch(string)
  const preppedSearchTerm = prepStrForSearch(searchTerm)
  // console.log(`search for '${preppedSearchTerm}' in '${preppedString}'`)
  return (
    isStr(preppedString) && isStr(preppedSearchTerm) && preppedString.includes(preppedSearchTerm)
  )
}

const strInObjVals = function (object, searchTerm) {
  if (!isStr(searchTerm)) return null
  const vals = Object.values(object)
  if (!object || !vals || vals.length === 0) return null
  return vals.some((val) => isStr(val) && val.toLowerCase().includes(searchTerm.toLowerCase()))
}

export { slugify, isStr, isNonEmptyStr, prepStrForSearch, strInStr, strInObjVals }
