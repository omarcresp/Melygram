import yo from 'yo-yo'
import layout from '../layout'
import picture from '../picture-card'

export default function (picturesAPI) {
  var el = yo`<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2 xl6 offset-xl3">
        ${picturesAPI.map(function (image) {
          return picture(image)
        })}
      </div>
    </div>
  </div>`

  return layout(el)
}
