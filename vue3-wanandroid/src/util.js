function showMessage(t, m) {}

function isEmpty(obj) {
  if (typeof obj == 'undefined' || obj == null || obj == '') {
    return true
  } else {
    return false
  }
}

export { isEmpty, showMessage }
