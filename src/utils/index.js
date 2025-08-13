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

const strInStr = function (string, searchTerm) {
  return (
    isStr(string) && isStr(searchTerm) && string.toLowerCase().includes(searchTerm.toLowerCase())
  )
}

const strInObjVals = function (object, searchTerm) {
  if (!isStr(searchTerm)) return null
  const vals = Object.values(object)
  if (!object || !vals || vals.length === 0) return null
  return vals.some((val) => isStr(val) && val.toLowerCase().includes(searchTerm.toLowerCase()))
}

export { slugify, isStr, strInStr, strInObjVals }
