import es from './es'
import en from './en-US'

if (!window.Intl) {
  window.Intl = require('intl')

  require('intl/locale-data/jsonp/en-US')
  require('intl/locale-data/jsonp/es')
}

// Relative

var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat')

require('intl-relativeformat/dist/locale-data/en')
require('intl-relativeformat/dist/locale-data/es')

// Messages

var IntlMessageFormat = window.IntlMessageFormat = require('intl-messageformat')

var MESSAGES = {}

MESSAGES.es = es
MESSAGES['en-US'] = en

var locale = 'en-US'

export default {
  message: function (text, opts = {}) {
    var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null)

    return msg.format(opts)
  },
  date: new IntlRelativeFormat(locale)
}
