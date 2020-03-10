const Base64 = {
  //加密
  encode(str) {
    return window.btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode('0x' + p1)
      }))
  },
  //解密
  decode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(window.atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  }
}

function setQuery(query) {
  return Base64.encode(JSON.stringify(query))
}

function getQuery(query) {
  return JSON.parse(Base64.decode(query))
}

export default {
  setQuery,
  getQuery
}
